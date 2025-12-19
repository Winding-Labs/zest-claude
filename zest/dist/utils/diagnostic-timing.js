// src/utils/diagnostic-timing.ts
import { stat } from "node:fs/promises";

// src/utils/logger.ts
import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

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

// src/utils/diagnostic-timing.ts
async function captureFileSnapshot(filePath) {
  const stats = await stat(filePath);
  return {
    path: filePath,
    mtime: stats.mtime,
    size: stats.size,
    timestamp: Date.now()
  };
}
function logFileChanges(before, after, context) {
  const elapsed = after.timestamp - before.timestamp;
  const sizeChange = after.size - before.size;
  const mtimeChanged = after.mtime.getTime() !== before.mtime.getTime();
  logger.info(`[TIMING] ${context} - Elapsed: ${elapsed}ms`);
  logger.info(`[TIMING] ${context} - File size: ${before.size} → ${after.size} (${sizeChange >= 0 ? "+" : ""}${sizeChange} bytes)`);
  logger.info(`[TIMING] ${context} - mtime changed: ${mtimeChanged ? "YES" : "NO"}`);
  if (mtimeChanged) {
    logger.info(`[TIMING] ${context} - mtime: ${before.mtime.toISOString()} → ${after.mtime.toISOString()}`);
  }
  if (sizeChange > 0) {
    logger.warn(`[TIMING] ${context} - ⚠️ File grew by ${sizeChange} bytes during wait!`);
  }
}
function logMissedContent(messages, toolUses, context) {
  if (messages.length === 0 && toolUses.length === 0) {
    return;
  }
  logger.warn(`[TIMING] ${context} - Found ${messages.length} missed messages, ${toolUses.length} missed tools`);
  for (const msg of messages) {
    const preview = msg.content.substring(0, 100).replace(/\n/g, " ");
    logger.warn(`[TIMING] ${context} - Missed message[${msg.message_index}]: role=${msg.role}, content="${preview}..."`);
  }
  for (const tool of toolUses) {
    logger.warn(`[TIMING] ${context} - Missed tool: ${tool.tool_name} on ${tool.file_path || "unknown"}`);
  }
}
async function waitWithLogging(ms, context) {
  logger.debug(`[TIMING] ${context} - Waiting ${ms}ms for JSONL write to complete...`);
  const start = Date.now();
  await new Promise((resolve) => setTimeout(resolve, ms));
  const elapsed = Date.now() - start;
  logger.debug(`[TIMING] ${context} - Wait complete (actual: ${elapsed}ms)`);
}
export {
  waitWithLogging,
  logMissedContent,
  logFileChanges,
  captureFileSnapshot
};

//# debugId=C5B92D760E97754F64756E2164756E21
