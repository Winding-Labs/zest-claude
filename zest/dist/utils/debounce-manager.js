// src/utils/debounce-manager.ts
import { mkdir as mkdir2, readdir as readdir2, readFile as readFile2, stat, unlink as unlink2, writeFile as writeFile2 } from "node:fs/promises";
import { join as join3 } from "node:path";

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_ZEST_DIR = join(homedir(), `.claude-zest${""}`);
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
var LOCK_RETRY_MS = 50;
var LOCK_MAX_RETRIES = 300;
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DEBOUNCE_WINDOW_MS = 500;
var DEBOUNCE_TRAILING_MS = 300;
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");

// src/utils/file-lock.ts
import { readdir, readFile, unlink, writeFile } from "node:fs/promises";

// src/utils/daemon-manager.ts
import { dirname as dirname2, join as join2 } from "node:path";
import { fileURLToPath } from "node:url";

// src/utils/logger.ts
import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
class Logger {
  minLevel = "info";
  logFilePath;
  levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  constructor(logFilePath = LOG_FILE) {
    this.logFilePath = logFilePath;
  }
  setLevel(level) {
    this.minLevel = level;
  }
  async writeToFile(message) {
    try {
      await mkdir(dirname(this.logFilePath), { recursive: true });
      const timestamp = new Date().toISOString();
      await appendFile(this.logFilePath, `[${timestamp}] ${message}
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

// src/utils/daemon-manager.ts
var DAEMON_RESTART_LOCK = join2(CLAUDE_ZEST_DIR, "daemon-restart.lock");
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
    await writeFile(lockFile, JSON.stringify(lockInfo), { flag: "wx" });
    activeLockFiles.add(lockFile);
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") {
      throw error;
    }
    try {
      const content = await readFile(lockFile, "utf8");
      const existingLock = JSON.parse(content);
      if (isLockStale(existingLock)) {
        logger.debug(`Removing stale lock for ${filePath} (PID ${existingLock.pid} is dead)`);
        await unlink(lockFile).catch(() => {});
        return acquireFileLock(filePath);
      }
    } catch {
      logger.debug(`Lock file for ${filePath} is corrupted or unreadable, removing`);
      await unlink(lockFile).catch(() => {});
      return acquireFileLock(filePath);
    }
    return false;
  }
}
async function releaseFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  activeLockFiles.delete(lockFile);
  await unlink(lockFile).catch(() => {});
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

// src/utils/debounce-manager.ts
async function shouldSkipDuplicate(hookType, sessionId) {
  const debounceFile = join3(DEBOUNCE_DIR, `${hookType}-${sessionId}.json`);
  try {
    await mkdir2(DEBOUNCE_DIR, { recursive: true });
    return await withFileLock(debounceFile, async () => {
      const now = Date.now();
      try {
        const content = await readFile2(debounceFile, "utf-8");
        const info = JSON.parse(content);
        if (now - info.timestamp < DEBOUNCE_WINDOW_MS) {
          logger.info(`Skipping duplicate ${hookType} (within ${DEBOUNCE_WINDOW_MS}ms window, PID ${info.pid} was first)`);
          return true;
        }
      } catch {}
      const newInfo = {
        timestamp: now,
        pid: process.pid
      };
      await writeFile2(debounceFile, JSON.stringify(newInfo), "utf-8");
      return false;
    });
  } catch (error) {
    logger.debug(`Debounce check failed for ${hookType}:`, error);
    return false;
  }
}
async function registerHookFired(hookType, sessionId) {
  const debounceFile = join3(DEBOUNCE_DIR, `trailing-${hookType}-${sessionId}.json`);
  try {
    await mkdir2(DEBOUNCE_DIR, { recursive: true });
    return await withFileLock(debounceFile, async () => {
      const now = Date.now();
      let count = 1;
      try {
        const content = await readFile2(debounceFile, "utf-8");
        const info = JSON.parse(content);
        if (now - info.timestamp < 5000) {
          count = (info.count || 1) + 1;
        }
      } catch {}
      const newInfo = {
        timestamp: now,
        pid: process.pid,
        count
      };
      await writeFile2(debounceFile, JSON.stringify(newInfo), "utf-8");
      logger.debug(`Registered ${hookType} #${count} for session ${sessionId}`);
      return count;
    });
  } catch (error) {
    logger.debug("Failed to register hook:", error);
    return 1;
  }
}
async function shouldProcessNow(hookType, sessionId) {
  const debounceFile = join3(DEBOUNCE_DIR, `trailing-${hookType}-${sessionId}.json`);
  const now = Date.now();
  try {
    const content = await readFile2(debounceFile, "utf-8");
    const info = JSON.parse(content);
    const msSinceLastHook = now - info.timestamp;
    const shouldProcess = msSinceLastHook >= DEBOUNCE_TRAILING_MS;
    if (!shouldProcess) {
      logger.debug(`Not ready to process ${hookType} - only ${msSinceLastHook}ms since last hook (need ${DEBOUNCE_TRAILING_MS}ms)`);
    }
    return { shouldProcess, msSinceLastHook };
  } catch {
    return { shouldProcess: true, msSinceLastHook: Number.POSITIVE_INFINITY };
  }
}
async function cleanupDebounceFiles() {
  try {
    const files = await readdir2(DEBOUNCE_DIR).catch(() => []);
    const now = Date.now();
    const maxAgeMs = 5 * 60 * 1000;
    let cleaned = 0;
    for (const file of files) {
      const filePath = join3(DEBOUNCE_DIR, file);
      try {
        const stats = await stat(filePath);
        if (now - stats.mtimeMs > maxAgeMs) {
          await unlink2(filePath);
          cleaned++;
        }
      } catch {}
    }
    if (cleaned > 0) {
      logger.debug(`Cleaned up ${cleaned} old debounce files`);
    }
  } catch {}
}
export {
  shouldSkipDuplicate,
  shouldProcessNow,
  registerHookFired,
  cleanupDebounceFiles
};

//# debugId=30ABE7940FE0BDF664756E2164756E21
