#!/usr/bin/env node

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
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;

// src/utils/daemon-manager.ts
import { readFileSync } from "node:fs";
import { dirname as dirname2, join as join3 } from "node:path";
import { fileURLToPath } from "node:url";

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

// src/utils/file-lock.ts
var activeLockFiles = new Set;

// src/utils/daemon-manager.ts
var DAEMON_RESTART_LOCK = join3(CLAUDE_ZEST_DIR, "daemon-restart.lock");
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
function isDaemonRunning() {
  try {
    const pidData = readFileSync(DAEMON_PID_FILE, "utf-8");
    const pidStr = pidData.trim();
    if (!pidStr) {
      return false;
    }
    const pid = Number.parseInt(pidStr, 10);
    if (Number.isNaN(pid) || pid <= 0) {
      return false;
    }
    return isProcessRunning(pid);
  } catch {
    return false;
  }
}

// src/utils/status-cache-manager.ts
import { readFileSync as readFileSync2, writeFileSync } from "node:fs";
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

// src/statusline/statusline-cli.ts
function main() {
  try {
    const cache = readStatusCache();
    const hasSyncError = cache.syncStatus.hasError;
    const daemonRunning = isDaemonRunning();
    const showDaemonError = !hasSyncError && !daemonRunning;
    const isUpdateCheckRecent = Date.now() - cache.versionCheck.checkedAt < UPDATE_CHECK_CACHE_TTL_MS;
    const hasUpdateAvailable = cache.versionCheck.updateAvailable && isUpdateCheckRecent;
    const messages = [];
    if (hasSyncError && cache.syncStatus.errorMessage) {
      messages.push(`\x1B[1;31m\uD83D\uDD34 Chat history not saving: ${cache.syncStatus.errorMessage}\x1B[0m`);
    } else if (showDaemonError) {
      messages.push("\x1B[1;31m\uD83D\uDD34 Chat history not saving: Background process not running.\x1B[0m");
    }
    if (hasUpdateAvailable) {
      messages.push(`\x1B[1;33m\uD83C\uDF4B v${cache.versionCheck.currentVersion} → v${cache.versionCheck.latestVersion} update available\x1B[0m`);
    }
    if (messages.length > 0) {
      console.log(messages.join(" | "));
    } else {
      process.exit(0);
    }
  } catch (error) {
    process.exit(0);
  }
}
main();
