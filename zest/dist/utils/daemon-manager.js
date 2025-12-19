// src/utils/daemon-manager.ts
import { exec, spawn } from "node:child_process";
import { readFile as readFile2, stat, unlink as unlink2, writeFile as writeFile2 } from "node:fs/promises";
import { dirname as dirname2, join as join2 } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

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
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");

// src/utils/file-lock.ts
import { readdir, readFile, unlink, writeFile } from "node:fs/promises";

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
async function cleanupStaleLocks() {
  try {
    const files = await readdir(QUEUE_DIR).catch(() => []);
    const lockFiles = files.filter((f) => f.endsWith(".lock"));
    for (const lockFileName of lockFiles) {
      const lockFile = `${QUEUE_DIR}/${lockFileName}`;
      try {
        const content = await readFile(lockFile, "utf8");
        const lockInfo = JSON.parse(content);
        if (!isProcessRunning(lockInfo.pid)) {
          await unlink(lockFile);
          logger.info(`Cleaned up stale lock file: ${lockFileName} (PID ${lockInfo.pid} is dead)`);
        }
      } catch {
        await unlink(lockFile).catch(() => {});
        logger.info(`Removed corrupted lock file: ${lockFileName}`);
      }
    }
  } catch (error) {
    logger.debug("Failed to clean up stale locks:", error);
  }
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
async function startDaemon() {
  try {
    const daemonScript = join2(__dirname2, "..", "sync-daemon.js");
    const daemon = spawn(process.execPath, [daemonScript], {
      detached: true,
      stdio: "ignore",
      windowsHide: true
    });
    daemon.unref();
    await new Promise((resolve) => setTimeout(resolve, 100));
    return true;
  } catch (error) {
    logger.error("Failed to start daemon:", error);
    return false;
  }
}
async function killAllDaemons() {
  try {
    const pid = await getDaemonPid();
    if (pid) {
      try {
        process.kill(pid, "SIGTERM");
      } catch {}
    }
    const execAsync = promisify(exec);
    try {
      await execAsync(`pkill -f 'sync-daemon.js' 2>/dev/null || true`);
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
    await cleanupPidFile();
  } catch (error) {
    logger.warn("Error during daemon cleanup:", error);
  }
}
async function restartDaemon() {
  try {
    return await withFileLock(DAEMON_RESTART_LOCK, async () => {
      const existingPid = await getDaemonPid();
      if (existingPid) {
        try {
          const pidFileStat = await stat(DAEMON_PID_FILE);
          const ageMs = Date.now() - pidFileStat.mtimeMs;
          if (ageMs < 2000) {
            return true;
          }
        } catch {}
      }
      await killAllDaemons();
      await cleanupStaleLocks();
      return await startDaemon();
    });
  } catch (error) {
    logger.error("Failed to restart daemon:", error);
    return false;
  }
}
async function cleanupPidFile() {
  try {
    await unlink2(DAEMON_PID_FILE);
  } catch {}
}
async function writePidFile(pid) {
  try {
    await writeFile2(DAEMON_PID_FILE, pid.toString(), "utf-8");
    logger.debug(`Wrote PID ${pid} to daemon.pid`);
  } catch (error) {
    logger.error("Failed to write PID file:", error);
  }
}
async function getDaemonPid() {
  try {
    const pidData = await readFile2(DAEMON_PID_FILE, "utf-8");
    const pid = Number.parseInt(pidData.trim(), 10);
    if (Number.isNaN(pid)) {
      return null;
    }
    return isProcessRunning(pid) ? pid : null;
  } catch {
    return null;
  }
}
export {
  writePidFile,
  startDaemon,
  restartDaemon,
  isProcessRunning,
  getDaemonPid
};

//# debugId=AE6FEE455AC26C0E64756E2164756E21
