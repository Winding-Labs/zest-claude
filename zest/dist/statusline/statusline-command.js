// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";

// ../../packages/utils/src/command-xml.ts
var CLAUDE_BUILTIN_COMMANDS = new Set([
  "add-dir",
  "agents",
  "allowed-tools",
  "android",
  "app",
  "autofix-pr",
  "bashes",
  "branch",
  "btw",
  "bug",
  "checkpoint",
  "chrome",
  "clear",
  "color",
  "compact",
  "config",
  "context",
  "continue",
  "copy",
  "cost",
  "desktop",
  "diff",
  "doctor",
  "effort",
  "exit",
  "export",
  "extra-usage",
  "fast",
  "feedback",
  "fork",
  "help",
  "hooks",
  "ide",
  "init",
  "insights",
  "install-github-app",
  "install-slack-app",
  "ios",
  "keybindings",
  "login",
  "logout",
  "mcp",
  "memory",
  "mobile",
  "model",
  "new",
  "output-style",
  "passes",
  "permissions",
  "plan",
  "plugin",
  "powerup",
  "pr-comments",
  "privacy-settings",
  "quit",
  "rc",
  "release-notes",
  "reload-plugins",
  "remote-control",
  "remote-env",
  "rename",
  "reset",
  "resume",
  "review",
  "rewind",
  "sandbox",
  "schedule",
  "security-review",
  "settings",
  "setup-bedrock",
  "skills",
  "stats",
  "status",
  "statusline",
  "stickers",
  "tasks",
  "teleport",
  "terminal-setup",
  "theme",
  "todos",
  "tp",
  "ultraplan",
  "upgrade",
  "usage",
  "vim",
  "voice",
  "web-setup"
]);
// ../../packages/utils/src/date-range.ts
var PERIOD_TYPE_LABELS = {
  ["today" /* Today */]: "Today",
  ["this_week" /* ThisWeek */]: "This Week",
  ["this_month" /* ThisMonth */]: "This Month"
};
var PERIOD_SUMMARY_LABELS = {
  ["today" /* Today */]: "Daily Summary",
  ["this_week" /* ThisWeek */]: "Weekly Summary",
  ["this_month" /* ThisMonth */]: "Monthly Summary",
  custom: "Custom Period"
};
// ../../packages/utils/src/frontmatter.ts
var FRONTMATTER_KEYS = new Set(["name", "description"]);
// ../../packages/utils/src/mcp-registry.ts
var CACHE_TTL_MS = 30 * 60 * 1000;
var CACHE_MAX_SIZE = 100;
class TtlCache {
  map = new Map;
  get(key) {
    const entry = this.map.get(key);
    if (!entry)
      return { hit: false };
    if (Date.now() > entry.expiry) {
      this.map.delete(key);
      return { hit: false };
    }
    return { hit: true, value: entry.value };
  }
  set(key, value) {
    if (this.map.size >= CACHE_MAX_SIZE && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value;
      if (firstKey !== undefined)
        this.map.delete(firstKey);
    }
    this.map.set(key, { value, expiry: Date.now() + CACHE_TTL_MS });
  }
  clear() {
    this.map.clear();
  }
}
var cache = new TtlCache;
var toolCache = new TtlCache;
var serverCache = new TtlCache;
var GENERIC_SEGMENTS = new Set(["mcp", "com", "org", "io", "dev", "server", "api"]);
var VERB_PREFIXES = new Set([
  "get",
  "list",
  "create",
  "delete",
  "update",
  "search",
  "query",
  "fetch",
  "run",
  "execute",
  "resolve",
  "find",
  "read",
  "write",
  "set",
  "send",
  "check",
  "add",
  "remove"
]);
// src/config/constants.ts
var CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
var CLAUDE_CONFIG_FILE = process.env.CLAUDE_CONFIG_FILE || join(homedir(), ".claude.json");
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
var STATUSLINE_PROXY_CONFIG_FILE = join(CLAUDE_ZEST_DIR, "statusline-proxy.json");
var STATUSLINE_SNAPSHOTS_FILE = process.env.ZEST_STATUSLINE_SNAPSHOTS_FILE ?? join(CLAUDE_ZEST_DIR, "statusline-snapshots.json");
var STATUS_CACHE_FILE = process.env.ZEST_STATUS_CACHE_FILE ?? join(CLAUDE_ZEST_DIR, "status-cache.json");
var SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var EXCLUDED_COMMAND_PATTERNS = [
  new RegExp(`^\\/(${[...CLAUDE_BUILTIN_COMMANDS].join("|")})\\b`, "i"),
  /^\/zest[^:\s]*:/i,
  /<command-name>\/zest[^<]*<\/command-name>/i,
  /node\s+.*\/dist\/commands\/.*-cli\.js/i
];
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var DAEMON_WARMUP_GRACE_MS = 3 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

// src/statusline/statusline-command.ts
function normalizeCommand(value) {
  return value.replace(/\\/g, "/").replace(/['"]/g, "");
}
function isZestStatusLineCommand(command) {
  if (!command)
    return false;
  const normalizedCommand = normalizeCommand(command);
  const normalizedPath = normalizeCommand(STATUSLINE_SCRIPT_PATH);
  return normalizedCommand === normalizedPath || normalizedCommand.includes(normalizedPath) || normalizedCommand.includes(".claude-zest/statusline.mjs");
}
export {
  isZestStatusLineCommand
};
