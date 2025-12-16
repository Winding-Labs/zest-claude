// src/utils/deletion-cache.ts
import { mkdir as mkdir2, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join as join2 } from "node:path";

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_ZEST_DIR = join(homedir(), `.claude-zest${"-dev"}`);
var QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
var LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
var STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
var DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
var SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var LOG_FILE = join(LOGS_DIR, "plugin.log");
var SYNC_LOG_FILE = join(LOGS_DIR, "sync.log");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");

// src/utils/logger.ts
import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
class Logger {
  minLevel = "info";
  levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  setLevel(level) {
    this.minLevel = level;
  }
  async writeToFile(message) {
    try {
      await mkdir(dirname(LOG_FILE), { recursive: true });
      const timestamp = new Date().toISOString();
      await appendFile(LOG_FILE, `[${timestamp}] ${message}
`, "utf-8");
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
async function ensureCacheDir() {
  try {
    await mkdir2(DELETION_CACHE_DIR, { recursive: true });
  } catch (error) {
    logger.error("Failed to create cache directory:", error);
  }
}
function getCacheKey(filePath, sessionId) {
  const hash = Buffer.from(filePath).toString("base64").replace(/[/+=]/g, "_");
  return `${sessionId}_${hash}.json`;
}
async function cacheFileForDeletion(filePath, content, sessionId) {
  try {
    await ensureCacheDir();
    const cached = {
      filePath,
      content,
      timestamp: Date.now(),
      sessionId
    };
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join2(DELETION_CACHE_DIR, cacheKey);
    await writeFile(cachePath, JSON.stringify(cached, null, 2), "utf-8");
    logger.debug(`Cached file content: ${filePath} (${content.length} chars)`);
  } catch (error) {
    logger.error(`Failed to cache file for deletion: ${filePath}`, error);
  }
}
async function getCachedFileContent(filePath, sessionId) {
  try {
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join2(DELETION_CACHE_DIR, cacheKey);
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
    await ensureCacheDir();
    const files = await readdir(DELETION_CACHE_DIR);
    const now = Date.now();
    for (const file of files) {
      try {
        const filePath = join2(DELETION_CACHE_DIR, file);
        const stats = await stat(filePath);
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

//# debugId=7C0C91B600153D1764756E2164756E21
