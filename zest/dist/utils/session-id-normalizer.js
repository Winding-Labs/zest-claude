// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/sha1.js
import { createHash } from "node:crypto";
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return createHash("sha1").update(bytes).digest();
}
var sha1_default = sha1;

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  return Uint8Array.of((v = parseInt(uuid.slice(0, 8), 16)) >>> 24, v >>> 16 & 255, v >>> 8 & 255, v & 255, (v = parseInt(uuid.slice(9, 13), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(14, 18), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(19, 23), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255, v / 4294967296 & 255, v >>> 24 & 255, v >>> 16 & 255, v >>> 8 & 255, v & 255);
}
var parse_default = parse;

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/stringify.js
var byteToHex = [];
for (let i = 0;i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = new Uint8Array(str.length);
  for (let i = 0;i < str.length; ++i) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(version, hash, value, namespace, buf, offset) {
  const valueBytes = typeof value === "string" ? stringToBytes(value) : value;
  const namespaceBytes = typeof namespace === "string" ? parse_default(namespace) : namespace;
  if (typeof namespace === "string") {
    namespace = parse_default(namespace);
  }
  if (namespace?.length !== 16) {
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  }
  let bytes = new Uint8Array(16 + valueBytes.length);
  bytes.set(namespaceBytes);
  bytes.set(valueBytes, namespaceBytes.length);
  bytes = hash(bytes);
  bytes[6] = bytes[6] & 15 | version;
  bytes[8] = bytes[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0;i < 16; ++i) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return unsafeStringify(bytes);
}

// ../../node_modules/.bun/uuid@13.0.2/node_modules/uuid/dist-node/v5.js
function v5(value, namespace, buf, offset) {
  return v35(80, sha1_default, value, namespace, buf, offset);
}
v5.DNS = DNS;
v5.URL = URL2;
var v5_default = v5;
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
var ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var DAEMON_WARMUP_GRACE_MS = 3 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

// src/utils/session-id-normalizer.ts
function isValidSessionId(sessionId) {
  return validate_default(sessionId);
}
function normalizeSessionId(sessionId) {
  if (validate_default(sessionId)) {
    return sessionId;
  }
  return v5_default(sessionId, ZEST_SESSION_NAMESPACE);
}
export {
  normalizeSessionId,
  isValidSessionId
};
