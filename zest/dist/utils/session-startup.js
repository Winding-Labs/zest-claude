// src/utils/session-startup.ts
import { createHash } from "node:crypto";
import { copyFile, readFile as readFile2, stat as stat2 } from "node:fs/promises";
import { dirname as dirname4, join as join5 } from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
var CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
var CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
var CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
var QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
var LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
var STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
var DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
var SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
var STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var LOCK_RETRY_MS = 50;
var LOCK_MAX_RETRIES = 300;
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var MARKETPLACE_PLUGIN_JSON_URL = "https://raw.githubusercontent.com/Winding-Labs/zest-claude/refs/heads/main/zest/.claude-plugin/plugin.json";
var VERSION_CHECK_TIMEOUT_MS = 5000;
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// src/utils/log-rotation.ts
import { readdir, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";
var CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
var lastCleanupTime = {};
function getDateString() {
  return new Date().toISOString().split("T")[0];
}
function getDatedLogPath(logPrefix) {
  const dateStr = getDateString();
  return join2(LOGS_DIR, `${logPrefix}-${dateStr}.log`);
}
function parseDateFromFilename(filename, logPrefix) {
  const pattern = new RegExp(`^${logPrefix}-(\\d{4}-\\d{2}-\\d{2})\\.log$`);
  const match = filename.match(pattern);
  if (!match) {
    return null;
  }
  const date = new Date(match[1] + "T00:00:00Z");
  return Number.isNaN(date.getTime()) ? null : date;
}
async function cleanupStaleLogs(logPrefix) {
  const now = Date.now();
  const lastCleanup = lastCleanupTime[logPrefix] || 0;
  if (now - lastCleanup < CLEANUP_THROTTLE_MS) {
    return;
  }
  lastCleanupTime[logPrefix] = now;
  try {
    await ensureDirectory(LOGS_DIR);
    const files = await readdir(LOGS_DIR);
    const cutoffDate = new Date(now - LOG_RETENTION_DAYS * 24 * 60 * 60 * 1000);
    for (const file of files) {
      const fileDate = parseDateFromFilename(file, logPrefix);
      if (fileDate && fileDate < cutoffDate) {
        const filePath = join2(LOGS_DIR, file);
        try {
          await unlink(filePath);
        } catch (error) {
          logger.error(`Failed to delete old log file ${file}`, error);
        }
      }
    }
  } catch (error) {
    logger.error("Failed to cleanup old logs", error);
  }
}

// src/utils/logger.ts
class Logger {
  minLevel = "info";
  logPrefix;
  levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  constructor(logPrefix = "plugin") {
    this.logPrefix = logPrefix;
  }
  setLevel(level) {
    this.minLevel = level;
  }
  async writeToFile(message) {
    try {
      const logFilePath = getDatedLogPath(this.logPrefix);
      await ensureDirectory(dirname(logFilePath));
      const timestamp = new Date().toISOString();
      await appendFile(logFilePath, `[${timestamp}] ${message}
`, "utf-8");
      cleanupStaleLogs(this.logPrefix);
    } catch (error) {
      console.error("Failed to write to log file:", error);
    }
  }
  shouldLog(level) {
    return this.levels[level] >= this.levels[this.minLevel];
  }
  debug(message, ...args) {
    if (this.shouldLog("debug")) {
      this.writeToFile(`DEBUG: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  info(message, ...args) {
    if (this.shouldLog("info")) {
      this.writeToFile(`INFO: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  warn(message, ...args) {
    if (this.shouldLog("warn")) {
      console.warn(`[Zest:Warn] ${message}`, ...args);
      this.writeToFile(`WARN: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  error(message, error) {
    if (this.shouldLog("error")) {
      console.error(`[Zest:Error] ${message}`, error);
      this.writeToFile(`ERROR: ${message} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    }
  }
}
var logger = new Logger;

// src/utils/plugin-version.ts
import { readFileSync } from "node:fs";
import { join as join3 } from "node:path";
function getPluginVersion() {
  try {
    const marketplacePluginPath = join3(CLAUDE_INSTALL_DIR, "plugins", "marketplaces", "zest-marketplace", "zest", ".claude-plugin", "plugin.json");
    const pluginJson = JSON.parse(readFileSync(marketplacePluginPath, "utf-8"));
    if (pluginJson.version && typeof pluginJson.version === "string") {
      logger.debug("Read plugin version from marketplace plugin.json", {
        version: pluginJson.version
      });
      return pluginJson.version;
    }
    logger.warn("Version field not found in marketplace plugin.json");
    return "unknown";
  } catch (error) {
    logger.warn("Failed to read plugin version from marketplace plugin.json", error);
    return "unknown";
  }
}
async function fetchMarketplaceVersion() {
  logger.info("Fetching latest plugin version from marketplace", {
    url: MARKETPLACE_PLUGIN_JSON_URL
  });
  const controller = new AbortController;
  const timeoutId = setTimeout(() => {
    controller.abort();
    logger.warn("Marketplace version fetch timed out", {
      timeout_ms: VERSION_CHECK_TIMEOUT_MS
    });
  }, VERSION_CHECK_TIMEOUT_MS);
  try {
    const response = await fetch(MARKETPLACE_PLUGIN_JSON_URL, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "zest-claude-plugin"
      }
    });
    if (!response.ok) {
      const error = new Error(`Marketplace request failed: HTTP ${response.status} ${response.statusText}`);
      logger.error("Failed to fetch marketplace version - HTTP error", {
        status: response.status,
        statusText: response.statusText,
        url: MARKETPLACE_PLUGIN_JSON_URL
      });
      throw error;
    }
    const data = await response.json();
    if (!data.version || typeof data.version !== "string") {
      const error = new Error("Marketplace plugin.json missing or invalid version field");
      logger.error("Invalid marketplace plugin.json structure", {
        hasVersion: !!data.version,
        versionType: typeof data.version
      });
      throw error;
    }
    logger.info("Successfully fetched marketplace version", {
      version: data.version
    });
    return data.version;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error(`Marketplace version check timed out after ${VERSION_CHECK_TIMEOUT_MS}ms`);
      }
      throw error;
    }
    throw new Error(`Unexpected error fetching marketplace version: ${error}`);
  } finally {
    clearTimeout(timeoutId);
  }
}
function parseVersion(version) {
  const cleanVersion = version.startsWith("v") ? version.slice(1) : version;
  const baseVersion = cleanVersion.split("-")[0];
  const parts = baseVersion.split(".");
  if (parts.length < 1 || parts.length > 3) {
    return null;
  }
  const major = Number.parseInt(parts[0], 10);
  const minor = parts.length >= 2 ? Number.parseInt(parts[1], 10) : 0;
  const patch = parts.length >= 3 ? Number.parseInt(parts[2], 10) : 0;
  if (Number.isNaN(major) || Number.isNaN(minor) || Number.isNaN(patch)) {
    return null;
  }
  if (major < 0 || minor < 0 || patch < 0) {
    return null;
  }
  if (major > 9999 || minor > 9999 || patch > 9999) {
    return null;
  }
  return { major, minor, patch };
}
function compareVersions(currentVersion, latestVersion) {
  logger.debug("Comparing versions", {
    current: currentVersion,
    latest: latestVersion
  });
  const current = parseVersion(currentVersion);
  const latest = parseVersion(latestVersion);
  if (!current || !latest) {
    logger.warn("Unable to compare versions - malformed version string", {
      current: currentVersion,
      latest: latestVersion,
      currentParsed: current,
      latestParsed: latest
    });
    return "same";
  }
  if (latest.major > current.major) {
    return "newer";
  }
  if (latest.major < current.major) {
    return "older";
  }
  if (latest.minor > current.minor) {
    return "newer";
  }
  if (latest.minor < current.minor) {
    return "older";
  }
  if (latest.patch > current.patch) {
    return "newer";
  }
  if (latest.patch < current.patch) {
    return "older";
  }
  return "same";
}
async function checkForUpdates() {
  logger.info("Starting plugin update check");
  try {
    const currentVersion = getPluginVersion();
    if (currentVersion === "unknown") {
      const error = "Unable to determine current plugin version";
      logger.warn(error);
      return {
        updateAvailable: false,
        currentVersion: "unknown",
        latestVersion: "unknown",
        error
      };
    }
    logger.info("Current plugin version", { version: currentVersion });
    let latestVersion;
    try {
      latestVersion = await fetchMarketplaceVersion();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.warn("Failed to fetch marketplace version", { error: errorMessage });
      return {
        updateAvailable: false,
        currentVersion,
        latestVersion: "unknown",
        error: errorMessage
      };
    }
    const comparison = compareVersions(currentVersion, latestVersion);
    const updateAvailable = comparison === "newer";
    logger.info("Version check complete", {
      currentVersion,
      latestVersion,
      comparison,
      updateAvailable
    });
    return {
      updateAvailable,
      currentVersion,
      latestVersion
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error("Unexpected error during version check", { error: errorMessage });
    return {
      updateAvailable: false,
      currentVersion: "unknown",
      latestVersion: "unknown",
      error: `Version check failed: ${errorMessage}`
    };
  }
}

// src/utils/status-cache-manager.ts
import { readFileSync as readFileSync2, writeFileSync } from "node:fs";

// src/utils/file-lock.ts
import { readdir as readdir2, readFile, unlink as unlink2, writeFile } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";

// src/utils/daemon-manager.ts
import { dirname as dirname2, join as join4 } from "node:path";
import { fileURLToPath } from "node:url";
var DAEMON_RESTART_LOCK = join4(CLAUDE_ZEST_DIR, "daemon-restart.lock");
var __filename2 = fileURLToPath(import.meta.url);
var __dirname2 = dirname2(__filename2);
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

// src/utils/file-lock.ts
var activeLockFiles = new Set;
function isLockStale(lockInfo) {
  return !isProcessRunning(lockInfo.pid);
}
async function acquireFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  const lockInfo = {
    pid: process.pid,
    timestamp: Date.now()
  };
  try {
    await ensureDirectory(dirname3(lockFile));
    await writeFile(lockFile, JSON.stringify(lockInfo), { flag: "wx" });
    activeLockFiles.add(lockFile);
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") {
      const errCode = error.code;
      if (errCode === "ENOENT" || errCode === "EACCES") {
        logger.error(`Failed to create lock file ${lockFile}:`, error);
      }
      throw error;
    }
    try {
      const content = await readFile(lockFile, "utf8");
      const existingLock = JSON.parse(content);
      if (isLockStale(existingLock)) {
        logger.debug(`Removing stale lock for ${filePath} (PID ${existingLock.pid} is dead)`);
        await unlink2(lockFile).catch(() => {});
        return acquireFileLock(filePath);
      }
    } catch {
      logger.debug(`Lock file for ${filePath} is corrupted or unreadable, removing`);
      await unlink2(lockFile).catch(() => {});
      return acquireFileLock(filePath);
    }
    return false;
  }
}
async function releaseFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  activeLockFiles.delete(lockFile);
  await unlink2(lockFile).catch(() => {});
}
async function withFileLock(filePath, fn) {
  let retries = 0;
  while (!await acquireFileLock(filePath)) {
    if (++retries >= LOCK_MAX_RETRIES) {
      throw new Error(`Failed to acquire lock for ${filePath} after ${retries} retries`);
    }
    await new Promise((resolve) => setTimeout(resolve, LOCK_RETRY_MS));
  }
  try {
    return await fn();
  } finally {
    await releaseFileLock(filePath);
  }
}

// src/utils/status-cache-manager.ts
var DEFAULT_VERSION_CHECK = {
  updateAvailable: false,
  currentVersion: "unknown",
  latestVersion: "unknown",
  checkedAt: 0
};
var DEFAULT_SYNC_STATUS = {
  hasError: false,
  errorType: null,
  errorMessage: null,
  lastErrorAt: null,
  lastSuccessAt: null
};
var DEFAULT_STATUS_CACHE = {
  versionCheck: DEFAULT_VERSION_CHECK,
  syncStatus: DEFAULT_SYNC_STATUS
};
function readStatusCache() {
  try {
    const data = readFileSync2(STATUS_CACHE_FILE, "utf-8");
    const parsed = JSON.parse(data);
    if (parsed.updateAvailable !== undefined && !parsed.versionCheck) {
      logger.info("Migrating old update-check.json format to new status-cache.json format");
      const migrated = {
        versionCheck: {
          updateAvailable: parsed.updateAvailable ?? false,
          currentVersion: parsed.currentVersion ?? "unknown",
          latestVersion: parsed.latestVersion ?? "unknown",
          checkedAt: parsed.checkedAt ?? 0
        },
        syncStatus: DEFAULT_SYNC_STATUS
      };
      return migrated;
    }
    return {
      versionCheck: {
        ...DEFAULT_VERSION_CHECK,
        ...parsed.versionCheck
      },
      syncStatus: {
        ...DEFAULT_SYNC_STATUS,
        ...parsed.syncStatus
      }
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      logger.debug("Status cache file does not exist, using defaults");
    } else {
      logger.warn("Failed to read status cache file, using defaults", error);
    }
    return DEFAULT_STATUS_CACHE;
  }
}
async function writeVersionCheck(check) {
  try {
    await withFileLock(STATUS_CACHE_FILE, async () => {
      const currentCache = readStatusCache();
      const updatedCache = {
        ...currentCache,
        versionCheck: check
      };
      writeFileSync(STATUS_CACHE_FILE, JSON.stringify(updatedCache, null, 2), "utf-8");
      logger.debug("Wrote version check to status cache", {
        updateAvailable: check.updateAvailable,
        currentVersion: check.currentVersion,
        latestVersion: check.latestVersion
      });
    });
  } catch (error) {
    logger.error("Failed to write version check to status cache", error);
  }
}

// src/utils/session-startup.ts
async function getFileHash(filePath) {
  try {
    const content = await readFile2(filePath);
    return createHash("sha256").update(content).digest("hex");
  } catch {
    return null;
  }
}
async function ensureStatuslineScript() {
  try {
    const __dirname3 = dirname4(fileURLToPath2(import.meta.url));
    const sourceStatusline = join5(__dirname3, "..", "statusline", "statusline-cli.js");
    const targetStatusline = STATUSLINE_SCRIPT_PATH;
    await ensureDirectory(CLAUDE_ZEST_DIR);
    try {
      await stat2(sourceStatusline);
    } catch (error) {
      logger.error("Statusline source script not found", {
        expectedPath: sourceStatusline,
        error
      });
      throw new Error(`Statusline script not found at ${sourceStatusline}`);
    }
    const sourceHash = await getFileHash(sourceStatusline);
    const targetHash = await getFileHash(targetStatusline);
    const shouldCopy = sourceHash !== targetHash;
    if (shouldCopy) {
      await copyFile(sourceStatusline, targetStatusline);
      logger.debug("Statusline script copied", {
        source: sourceStatusline,
        target: STATUSLINE_SCRIPT_PATH,
        sourceHash,
        targetHash: targetHash || "not-found"
      });
    } else {
      logger.debug("Statusline script up to date, skipping copy");
    }
  } catch (error) {
    logger.warn("Failed to copy statusline script", error);
  }
}
async function checkAndCachePluginUpdates() {
  try {
    await ensureDirectory(CLAUDE_ZEST_DIR);
    const updateCheckResult = await checkForUpdates();
    await writeVersionCheck({
      updateAvailable: updateCheckResult.updateAvailable,
      currentVersion: updateCheckResult.currentVersion,
      latestVersion: updateCheckResult.latestVersion,
      checkedAt: Date.now()
    });
    if (updateCheckResult.error) {
      if (updateCheckResult.error.includes("not configured")) {
        logger.debug("Version checking disabled - marketplace URL not configured");
      } else {
        logger.warn("Version check failed", {
          error: updateCheckResult.error,
          currentVersion: updateCheckResult.currentVersion
        });
      }
    } else if (updateCheckResult.updateAvailable) {
      logger.info("Plugin update available - will show in statusline", {
        currentVersion: updateCheckResult.currentVersion,
        latestVersion: updateCheckResult.latestVersion
      });
    } else {
      logger.info("Plugin is up-to-date", {
        version: updateCheckResult.currentVersion
      });
    }
  } catch (error) {
    logger.error("Unexpected error during version check", error);
  }
}
export {
  ensureStatuslineScript,
  checkAndCachePluginUpdates
};
