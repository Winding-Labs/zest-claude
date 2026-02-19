var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// src/config/constants.ts
var exports_constants = {};
__export(exports_constants, {
  ZEST_SESSION_NAMESPACE: () => ZEST_SESSION_NAMESPACE,
  WEB_APP_URL: () => WEB_APP_URL,
  VERSION_CHECK_TIMEOUT_MS: () => VERSION_CHECK_TIMEOUT_MS,
  UPDATE_CHECK_CACHE_TTL_MS: () => UPDATE_CHECK_CACHE_TTL_MS,
  SYNC_METRICS_RETENTION_MS: () => SYNC_METRICS_RETENTION_MS,
  SYNC_METRICS_FILE: () => SYNC_METRICS_FILE,
  SYNC_INTERVAL_MS: () => SYNC_INTERVAL_MS,
  SUPABASE_URL: () => SUPABASE_URL,
  SUPABASE_ANON_KEY: () => SUPABASE_ANON_KEY,
  STATUS_CACHE_FILE: () => STATUS_CACHE_FILE,
  STATUSLINE_SCRIPT_PATH: () => STATUSLINE_SCRIPT_PATH,
  STATE_DIR: () => STATE_DIR,
  STANDUP_NOTIFICATION_THROTTLE_MS: () => STANDUP_NOTIFICATION_THROTTLE_MS,
  STALE_SESSION_AGE_MS: () => STALE_SESSION_AGE_MS,
  SOURCE: () => SOURCE,
  SETTINGS_FILE: () => SETTINGS_FILE,
  SESSION_FILE: () => SESSION_FILE,
  SESSIONS_QUEUE_FILE: () => SESSIONS_QUEUE_FILE,
  RETRY_BACKOFF_MS: () => RETRY_BACKOFF_MS,
  QUEUE_DIR: () => QUEUE_DIR,
  PROACTIVE_REFRESH_THRESHOLD_MS: () => PROACTIVE_REFRESH_THRESHOLD_MS,
  POSTHOG_API_KEY: () => POSTHOG_API_KEY,
  PLATFORM: () => PLATFORM,
  NOTIFICATION_DURATION_MS: () => NOTIFICATION_DURATION_MS,
  MIN_SESSION_TITLE_LENGTH: () => MIN_SESSION_TITLE_LENGTH,
  MIN_MESSAGES_PER_SESSION: () => MIN_MESSAGES_PER_SESSION,
  MESSAGES_QUEUE_FILE: () => MESSAGES_QUEUE_FILE,
  MAX_SESSION_TITLE_LENGTH: () => MAX_SESSION_TITLE_LENGTH,
  MAX_RETRY_ATTEMPTS: () => MAX_RETRY_ATTEMPTS,
  MAX_DIFF_SIZE_BYTES: () => MAX_DIFF_SIZE_BYTES,
  MAX_CONTENT_PREVIEW_LENGTH: () => MAX_CONTENT_PREVIEW_LENGTH,
  MARKETPLACE_PLUGIN_JSON_URL: () => MARKETPLACE_PLUGIN_JSON_URL,
  LOG_RETENTION_DAYS: () => LOG_RETENTION_DAYS,
  LOGS_DIR: () => LOGS_DIR,
  LOCK_RETRY_MS: () => LOCK_RETRY_MS,
  LOCK_MAX_RETRIES: () => LOCK_MAX_RETRIES,
  FIRST_DATA_THRESHOLD_MESSAGES: () => FIRST_DATA_THRESHOLD_MESSAGES,
  EXCLUDED_COMMAND_PATTERNS: () => EXCLUDED_COMMAND_PATTERNS,
  EVENTS_QUEUE_FILE: () => EVENTS_QUEUE_FILE,
  DELETION_CACHE_TTL_MS: () => DELETION_CACHE_TTL_MS,
  DELETION_CACHE_DIR: () => DELETION_CACHE_DIR,
  DELAYED_EXTRACTION_MAX_WAIT_MS: () => DELAYED_EXTRACTION_MAX_WAIT_MS,
  DELAYED_EXTRACTION_INITIAL_DELAY_MS: () => DELAYED_EXTRACTION_INITIAL_DELAY_MS,
  DELAYED_EXTRACTION_CHECK_INTERVAL_MS: () => DELAYED_EXTRACTION_CHECK_INTERVAL_MS,
  DEFAULT_STANDUP_MODEL: () => DEFAULT_STANDUP_MODEL,
  DEBOUNCE_WINDOW_MS: () => DEBOUNCE_WINDOW_MS,
  DEBOUNCE_TRAILING_MS: () => DEBOUNCE_TRAILING_MS,
  DEBOUNCE_DIR: () => DEBOUNCE_DIR,
  DAEMON_PID_FILE: () => DAEMON_PID_FILE,
  DAEMON_INACTIVITY_TIMEOUT_MS: () => DAEMON_INACTIVITY_TIMEOUT_MS,
  DAEMON_FRESH_PID_THRESHOLD_MS: () => DAEMON_FRESH_PID_THRESHOLD_MS,
  CLIENT_ID: () => CLIENT_ID,
  CLAUDE_ZEST_DIR: () => CLAUDE_ZEST_DIR,
  CLAUDE_SETTINGS_FILE: () => CLAUDE_SETTINGS_FILE,
  CLAUDE_PROJECTS_DIR: () => CLAUDE_PROJECTS_DIR,
  CLAUDE_INSTANCES_FILE: () => CLAUDE_INSTANCES_FILE,
  CLAUDE_INSTALL_DIR: () => CLAUDE_INSTALL_DIR,
  CLAUDE_DIR_SEPARATOR_PATTERN: () => CLAUDE_DIR_SEPARATOR_PATTERN
});
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR, CLAUDE_DIR_SEPARATOR_PATTERN, CLAUDE_PROJECTS_DIR, CLAUDE_SETTINGS_FILE, CLAUDE_ZEST_DIR, QUEUE_DIR, LOGS_DIR, STATE_DIR, DELETION_CACHE_DIR, SESSION_FILE, SETTINGS_FILE, DAEMON_PID_FILE, CLAUDE_INSTANCES_FILE, STATUSLINE_SCRIPT_PATH, STATUS_CACHE_FILE, SYNC_METRICS_FILE, EVENTS_QUEUE_FILE, SESSIONS_QUEUE_FILE, MESSAGES_QUEUE_FILE, PLATFORM = "terminal", SOURCE = "claude-code", CLIENT_ID = "claude-cli", SYNC_INTERVAL_MS = 60000, MAX_RETRY_ATTEMPTS = 3, RETRY_BACKOFF_MS = 5000, LOCK_RETRY_MS = 50, LOCK_MAX_RETRIES = 300, DEBOUNCE_DIR, DEBOUNCE_WINDOW_MS = 500, DEBOUNCE_TRAILING_MS = 300, DELAYED_EXTRACTION_INITIAL_DELAY_MS = 500, DELAYED_EXTRACTION_MAX_WAIT_MS = 1e4, DELAYED_EXTRACTION_CHECK_INTERVAL_MS = 300, DELETION_CACHE_TTL_MS, LOG_RETENTION_DAYS = 7, PROACTIVE_REFRESH_THRESHOLD_MS, MAX_DIFF_SIZE_BYTES, MAX_CONTENT_PREVIEW_LENGTH = 1000, MAX_SESSION_TITLE_LENGTH = 100, MIN_SESSION_TITLE_LENGTH = 3, MIN_MESSAGES_PER_SESSION = 3, STALE_SESSION_AGE_MS, WEB_APP_URL = "https://app.meetzest.com", SUPABASE_URL = "https://fnnlebrtmlxxjwdvngck.supabase.co", SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubmxlYnJ0bWx4eGp3ZHZuZ2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzA3MjYsImV4cCI6MjA3MjMwNjcyNn0.0IE3HCY_DiyyALdewbRn1vkedwzDW27NQMQ28V6j4Dk", POSTHOG_API_KEY = "phc_cSYAEzsJX9gr0sgCp4tfnr7QJ71PwGD04eUQSglw4iQ", EXCLUDED_COMMAND_PATTERNS, ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341", MARKETPLACE_PLUGIN_JSON_URL = "https://raw.githubusercontent.com/Winding-Labs/zest-claude/refs/heads/main/zest/.claude-plugin/plugin.json", VERSION_CHECK_TIMEOUT_MS = 5000, UPDATE_CHECK_CACHE_TTL_MS, DAEMON_FRESH_PID_THRESHOLD_MS = 2000, DAEMON_INACTIVITY_TIMEOUT_MS, NOTIFICATION_DURATION_MS, FIRST_DATA_THRESHOLD_MESSAGES = 5, STANDUP_NOTIFICATION_THROTTLE_MS, SYNC_METRICS_RETENTION_MS, DEFAULT_STANDUP_MODEL = "anthropic/claude-opus-4-5";
var init_constants = __esm(() => {
  CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
  CLAUDE_DIR_SEPARATOR_PATTERN = /[\\/:.\s_]/g;
  CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
  CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
  CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
  QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
  LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
  STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
  DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
  SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
  SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
  DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
  CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
  STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
  STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
  SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
  EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
  SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
  MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
  DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
  DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
  PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
  MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
  STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
  EXCLUDED_COMMAND_PATTERNS = [
    /^\/(add-dir|agents|bashes|bug|clear|compact|config|context|cost|doctor|exit|export|help|hooks|ide|init|install-github-app|login|logout|mcp|memory|model|output-style|permissions|plugin|pr-comments|privacy-settings|release-notes|resume|review|rewind|sandbox|security-review|stats|status|statusline|terminal-setup|todos|usage|vim)\b/i,
    /^\/zest[^:\s]*:/i,
    /<command-name>\/zest[^<]*<\/command-name>/i,
    /node\s+.*\/dist\/commands\/.*-cli\.js/i
  ];
  UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
  DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
  NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
  STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
  SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;
});

// src/auth/statusline-setup.ts
init_constants();

// src/utils/claude-settings-manager.ts
init_constants();
import { readFile, writeFile } from "node:fs/promises";

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
init_constants();
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

// src/utils/claude-settings-manager.ts
async function readClaudeSettings() {
  try {
    const content = await readFile(CLAUDE_SETTINGS_FILE, "utf-8");
    const settings = JSON.parse(content);
    logger.debug("Claude settings read successfully", { path: CLAUDE_SETTINGS_FILE });
    return settings;
  } catch (error) {
    if (error.code === "ENOENT") {
      logger.debug("Claude settings file does not exist", { path: CLAUDE_SETTINGS_FILE });
      return null;
    }
    logger.error("Failed to read Claude settings", {
      path: CLAUDE_SETTINGS_FILE,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}
async function writeClaudeSettings(settings) {
  try {
    await ensureDirectory(CLAUDE_INSTALL_DIR);
    const existingSettings = await readClaudeSettings() || {};
    const mergedSettings = { ...existingSettings, ...settings };
    await writeFile(CLAUDE_SETTINGS_FILE, JSON.stringify(mergedSettings, null, 2), "utf-8");
    logger.info("Claude settings updated successfully", {
      path: CLAUDE_SETTINGS_FILE,
      updatedKeys: Object.keys(settings)
    });
  } catch (error) {
    logger.error("Failed to write Claude settings", {
      path: CLAUDE_SETTINGS_FILE,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}
async function hasStatusLineConfigured() {
  try {
    const settings = await readClaudeSettings();
    const hasStatusLine = settings?.statusLine !== undefined;
    logger.debug("Status line configuration check", { hasStatusLine });
    return hasStatusLine;
  } catch (error) {
    logger.warn("Error checking status line configuration", error);
    return false;
  }
}
async function getStatusLineConfig() {
  try {
    const settings = await readClaudeSettings();
    const statusLineConfig = settings?.statusLine || null;
    logger.debug("Status line config retrieved", { config: statusLineConfig });
    return statusLineConfig;
  } catch (error) {
    logger.warn("Error getting status line configuration", error);
    return null;
  }
}
async function setZestStatusLine() {
  const { STATUSLINE_SCRIPT_PATH: STATUSLINE_SCRIPT_PATH2 } = await Promise.resolve().then(() => (init_constants(), exports_constants));
  const zestStatusLineConfig = {
    statusLine: {
      type: "command",
      command: STATUSLINE_SCRIPT_PATH2
    }
  };
  try {
    await writeClaudeSettings(zestStatusLineConfig);
    logger.info("Zest status line configured successfully", {
      scriptPath: STATUSLINE_SCRIPT_PATH2
    });
  } catch (error) {
    logger.error("Failed to set Zest status line", error);
    throw error;
  }
}

// src/auth/statusline-setup.ts
async function setupStatusLineAfterAuth() {
  try {
    logger.info("Starting status line setup after authentication");
    const hasStatusLine = await hasStatusLineConfigured();
    const currentConfig = await getStatusLineConfig();
    if (!hasStatusLine) {
      logger.info("No status line configured, setting up Zest status line");
      await setZestStatusLine();
      console.log("✅ Status line configured - shows sync errors, plugin updates & dev mode at the bottom of Claude Code");
      return;
    }
    const isZestStatusLine = currentConfig?.command === STATUSLINE_SCRIPT_PATH;
    if (!isZestStatusLine) {
      logger.info("Different status line already configured", {
        currentCommand: currentConfig?.command
      });
      console.log(`
\uD83D\uDCCA Status Line Feature Available`);
      console.log("   Zest can show sync errors, plugin updates & dev mode in your status line");
      console.log("   Current status line: " + currentConfig?.command);
      console.log("");
      console.log("   To enable Zest status line, run: /zest:enable-statusline");
      console.log(`   (Note: This will replace your current status line)
`);
      return;
    }
    logger.debug("Zest status line already configured, no action needed");
  } catch (error) {
    logger.error("Failed to setup status line", error);
    logger.debug("Authentication continues despite status line setup failure");
    console.log(`
⚠️  Note: Could not configure status line automatically`);
    console.log(`   You can enable it later with: /zest:enable-statusline
`);
  }
}
export {
  setupStatusLineAfterAuth
};
