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
var PLATFORM = "terminal";
var SOURCE = "claude-code";
var CLIENT_ID = "claude-cli";
var SYNC_INTERVAL_MS = 60000;
var MAX_RETRY_ATTEMPTS = 3;
var RETRY_BACKOFF_MS = 5000;
var LOCK_RETRY_MS = 50;
var LOCK_MAX_RETRIES = 300;
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DEBOUNCE_WINDOW_MS = 500;
var DEBOUNCE_TRAILING_MS = 300;
var DELAYED_EXTRACTION_INITIAL_DELAY_MS = 500;
var DELAYED_EXTRACTION_MAX_WAIT_MS = 1e4;
var DELAYED_EXTRACTION_CHECK_INTERVAL_MS = 300;
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var MAX_CONTENT_PREVIEW_LENGTH = 1000;
var MAX_SESSION_TITLE_LENGTH = 100;
var MIN_SESSION_TITLE_LENGTH = 3;
var MIN_MESSAGES_PER_SESSION = 3;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var WEB_APP_URL = "https://app.meetzest.com";
var SUPABASE_URL = "https://fnnlebrtmlxxjwdvngck.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubmxlYnJ0bWx4eGp3ZHZuZ2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzA3MjYsImV4cCI6MjA3MjMwNjcyNn0.0IE3HCY_DiyyALdewbRn1vkedwzDW27NQMQ28V6j4Dk";
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");
var EXCLUDED_COMMAND_PATTERNS = [
  /^\/(add-dir|agents|bashes|bug|clear|compact|config|context|cost|doctor|exit|export|help|hooks|ide|init|install-github-app|login|logout|mcp|memory|model|output-style|permissions|plugin|pr-comments|privacy-settings|release-notes|resume|review|rewind|sandbox|security-review|stats|status|statusline|terminal-setup|todos|usage|vim)\b/i,
  /^\/zest[^:\s]*:/i,
  /<command-name>\/zest[^<]*<\/command-name>/i,
  /node\s+.*\/dist\/commands\/.*-cli\.js/i
];
var ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
export {
  ZEST_SESSION_NAMESPACE,
  WEB_APP_URL,
  SYNC_LOG_FILE,
  SYNC_INTERVAL_MS,
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  STATE_DIR,
  STALE_SESSION_AGE_MS,
  SOURCE,
  SETTINGS_FILE,
  SESSION_FILE,
  SESSIONS_QUEUE_FILE,
  RETRY_BACKOFF_MS,
  QUEUE_DIR,
  PROACTIVE_REFRESH_THRESHOLD_MS,
  PLATFORM,
  MIN_SESSION_TITLE_LENGTH,
  MIN_MESSAGES_PER_SESSION,
  MESSAGES_QUEUE_FILE,
  MAX_SESSION_TITLE_LENGTH,
  MAX_RETRY_ATTEMPTS,
  MAX_DIFF_SIZE_BYTES,
  MAX_CONTENT_PREVIEW_LENGTH,
  LOG_FILE,
  LOGS_DIR,
  LOCK_RETRY_MS,
  LOCK_MAX_RETRIES,
  EXCLUDED_COMMAND_PATTERNS,
  EVENTS_QUEUE_FILE,
  DELETION_CACHE_TTL_MS,
  DELETION_CACHE_DIR,
  DELAYED_EXTRACTION_MAX_WAIT_MS,
  DELAYED_EXTRACTION_INITIAL_DELAY_MS,
  DELAYED_EXTRACTION_CHECK_INTERVAL_MS,
  DEBOUNCE_WINDOW_MS,
  DEBOUNCE_TRAILING_MS,
  DEBOUNCE_DIR,
  DAEMON_PID_FILE,
  CLIENT_ID,
  CLAUDE_ZEST_DIR,
  CLAUDE_PROJECTS_DIR
};

//# debugId=EB5CB0A12E4A991364756E2164756E21
