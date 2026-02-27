// src/utils/plugin-version.ts
import { readFileSync } from "node:fs";
import { join as join3 } from "node:path";

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
var SESSION_FILE = process.env.ZEST_SESSION_FILE ?? join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
var STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
var SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var MARKETPLACE_PLUGIN_JSON_URL = "https://raw.githubusercontent.com/Winding-Labs/zest-claude/refs/heads/main/zest/.claude-plugin/plugin.json";
var VERSION_CHECK_TIMEOUT_MS = 5000;
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

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
export {
  getPluginVersion,
  fetchMarketplaceVersion,
  compareVersions,
  checkForUpdates
};
