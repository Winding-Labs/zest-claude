// src/utils/queue-manager.ts
import { appendFile as appendFile2, readFile as readFile2, unlink as unlink3, writeFile as writeFile2 } from "node:fs/promises";
import { dirname as dirname4 } from "node:path";

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
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;

// src/utils/file-lock.ts
import { readdir as readdir2, readFile, unlink as unlink2, writeFile } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";

// src/utils/daemon-manager.ts
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

// src/utils/queue-manager.ts
async function readJsonl(filePath) {
  try {
    const content = await readFile2(filePath, "utf8");
    const lines = content.trim().split(`
`).filter(Boolean);
    const results = [];
    for (let i = 0;i < lines.length; i++) {
      try {
        results.push(JSON.parse(lines[i]));
      } catch (error) {
        logger.warn(`Failed to parse line ${i + 1} in ${filePath}:`, error);
      }
    }
    return results;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}
async function countLines(filePath) {
  try {
    const content = await readFile2(filePath, "utf8");
    const lines = content.trim().split(`
`).filter(Boolean);
    return lines.length;
  } catch (error) {
    if (error.code === "ENOENT") {
      return 0;
    }
    throw error;
  }
}
async function deleteFile(filePath) {
  try {
    await unlink3(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }
}
async function enqueueEvent(event) {
  try {
    await withFileLock(EVENTS_QUEUE_FILE, async () => {
      const existingEvents = await readJsonl(EVENTS_QUEUE_FILE);
      const isDuplicate = existingEvents.some((evt) => evt.id === event.id);
      if (isDuplicate) {
        logger.debug("Skipping duplicate event", {
          eventId: event.id,
          documentUri: event.document_uri
        });
        return;
      }
      await ensureDirectory(dirname4(EVENTS_QUEUE_FILE));
      const line = JSON.stringify(event) + `
`;
      await appendFile2(EVENTS_QUEUE_FILE, line, "utf8");
      logger.debug("Enqueued event", { eventId: event.id, documentUri: event.document_uri });
    });
  } catch (error) {
    logger.error("Failed to enqueue event:", error);
    throw error;
  }
}
async function enqueueChatSession(session) {
  try {
    await withFileLock(SESSIONS_QUEUE_FILE, async () => {
      const existingSessions = await readJsonl(SESSIONS_QUEUE_FILE);
      const isDuplicate = existingSessions.some((sess) => sess.id === session.id);
      if (isDuplicate) {
        logger.debug("Skipping duplicate session", { sessionId: session.id });
        return;
      }
      await ensureDirectory(dirname4(SESSIONS_QUEUE_FILE));
      const line = JSON.stringify(session) + `
`;
      await appendFile2(SESSIONS_QUEUE_FILE, line, "utf8");
      logger.debug("Enqueued session", { sessionId: session.id });
    });
  } catch (error) {
    logger.error("Failed to enqueue session:", error);
    throw error;
  }
}
async function enqueueChatMessage(message) {
  try {
    await withFileLock(MESSAGES_QUEUE_FILE, async () => {
      const existingMessages = await readJsonl(MESSAGES_QUEUE_FILE);
      const isDuplicate = existingMessages.some((msg) => msg.id === message.id);
      if (isDuplicate) {
        logger.debug("Skipping duplicate message", {
          messageId: message.id,
          sessionId: message.session_id,
          messageIndex: message.message_index
        });
        return;
      }
      await ensureDirectory(dirname4(MESSAGES_QUEUE_FILE));
      const line = JSON.stringify(message) + `
`;
      await appendFile2(MESSAGES_QUEUE_FILE, line, "utf8");
      logger.debug("Enqueued message", {
        sessionId: message.session_id,
        messageIndex: message.message_index
      });
    });
  } catch (error) {
    logger.error("Failed to enqueue message:", error);
    throw error;
  }
}
async function readQueue(queueFile) {
  try {
    return await readJsonl(queueFile);
  } catch (error) {
    logger.error(`Failed to read queue file ${queueFile}:`, error);
    throw error;
  }
}
async function writeQueue(queueFile, items) {
  try {
    await withFileLock(queueFile, async () => {
      await ensureDirectory(dirname4(queueFile));
      const content = items.map((item) => JSON.stringify(item)).join(`
`) + (items.length > 0 ? `
` : "");
      await writeFile2(queueFile, content, "utf8");
      logger.debug(`Wrote ${items.length} items to queue file: ${queueFile}`);
    });
  } catch (error) {
    logger.error(`Failed to write queue file ${queueFile}:`, error);
    throw error;
  }
}
async function atomicUpdateQueue(queueFile, transform) {
  try {
    await withFileLock(queueFile, async () => {
      const currentItems = await readJsonl(queueFile);
      const newItems = transform(currentItems);
      await ensureDirectory(dirname4(queueFile));
      const content = newItems.map((item) => JSON.stringify(item)).join(`
`) + (newItems.length > 0 ? `
` : "");
      await writeFile2(queueFile, content, "utf8");
      logger.debug(`Atomically updated queue file: ${queueFile} (${currentItems.length} → ${newItems.length} items)`);
    });
  } catch (error) {
    logger.error(`Failed to atomically update queue file ${queueFile}:`, error);
    throw error;
  }
}
async function clearQueue(queueFile) {
  try {
    await withFileLock(queueFile, async () => {
      await deleteFile(queueFile);
      logger.debug(`Cleared queue file: ${queueFile}`);
    });
  } catch (error) {
    logger.error(`Failed to clear queue file ${queueFile}:`, error);
    throw error;
  }
}
async function getQueueStats() {
  try {
    await ensureDirectory(QUEUE_DIR);
    const [events, sessions, messages] = await Promise.all([
      countLines(EVENTS_QUEUE_FILE),
      countLines(SESSIONS_QUEUE_FILE),
      countLines(MESSAGES_QUEUE_FILE)
    ]);
    return { events, sessions, messages };
  } catch (error) {
    logger.error("Failed to get queue stats:", error);
    return { events: 0, sessions: 0, messages: 0 };
  }
}
async function initializeQueue() {
  try {
    await ensureDirectory(QUEUE_DIR);
    logger.debug("Queue directory initialized");
  } catch (error) {
    logger.error("Failed to initialize queue directory:", error);
    throw error;
  }
}
export {
  writeQueue,
  readQueue,
  initializeQueue,
  getQueueStats,
  enqueueEvent,
  enqueueChatSession,
  enqueueChatMessage,
  clearQueue,
  atomicUpdateQueue
};
