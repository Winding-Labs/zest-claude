// src/utils/deletion-cache.ts
import { readdir as readdir2, readFile, rm, stat as stat2, writeFile } from "node:fs/promises";
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

// src/utils/deletion-cache.ts
function getCacheKey(filePath, sessionId) {
  const hash = Buffer.from(filePath).toString("base64").replace(/[/+=]/g, "_");
  return `${sessionId}_${hash}.json`;
}
async function cacheFileForDeletion(filePath, content, sessionId) {
  try {
    await ensureDirectory(DELETION_CACHE_DIR);
    const cached = {
      filePath,
      content,
      timestamp: Date.now(),
      sessionId
    };
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join3(DELETION_CACHE_DIR, cacheKey);
    await writeFile(cachePath, JSON.stringify(cached, null, 2), "utf-8");
    logger.debug(`Cached file content: ${filePath} (${content.length} chars)`);
  } catch (error) {
    logger.error(`Failed to cache file for deletion: ${filePath}`, error);
  }
}
async function getCachedFileContent(filePath, sessionId) {
  try {
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join3(DELETION_CACHE_DIR, cacheKey);
    try {
      const content = await readFile(cachePath, "utf-8");
      const cached = JSON.parse(content);
      const age = Date.now() - cached.timestamp;
      if (age > DELETION_CACHE_TTL_MS) {
        logger.debug(`Cache expired for ${filePath} (${age}ms old)`);
        await rm(cachePath).catch(() => {});
        return null;
      }
      await rm(cachePath).catch(() => {});
      logger.debug(`Retrieved cached content for ${filePath} (${cached.content.length} chars)`);
      return cached.content;
    } catch (readError) {
      logger.debug(`Cache not found for ${filePath}`);
      return null;
    }
  } catch (error) {
    logger.error(`Failed to retrieve cached content: ${filePath}`, error);
    return null;
  }
}
async function cleanupOldCache() {
  try {
    await ensureDirectory(DELETION_CACHE_DIR);
    const files = await readdir2(DELETION_CACHE_DIR);
    const now = Date.now();
    for (const file of files) {
      try {
        const filePath = join3(DELETION_CACHE_DIR, file);
        const stats = await stat2(filePath);
        const age = now - stats.mtimeMs;
        if (age > DELETION_CACHE_TTL_MS) {
          await rm(filePath);
          logger.debug(`Cleaned up old cache entry: ${file} (${age}ms old)`);
        }
      } catch (error) {
        logger.debug(`Failed to clean up cache file ${file}:`, error);
      }
    }
  } catch (error) {
    logger.error("Failed to cleanup old cache:", error);
  }
}
export {
  getCachedFileContent,
  cleanupOldCache,
  cacheFileForDeletion
};
