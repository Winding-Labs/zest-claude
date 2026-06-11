// src/statusline/statusline-snapshot.ts
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

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

// src/statusline/statusline-snapshot.ts
var MAX_SNAPSHOTS = 200;
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function finiteNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : undefined;
}
function percent(value) {
  const n = finiteNumber(value);
  return n == null ? undefined : Math.min(n, 100);
}
function stringValue(value) {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}
function epochValue(value) {
  if (typeof value === "number" && Number.isFinite(value) && value > 0)
    return value;
  return stringValue(value);
}
function nestedObject(parent, key) {
  if (!parent)
    return;
  const value = parent[key];
  return isRecord(value) ? value : undefined;
}
function compactObject(value) {
  for (const [key, child] of Object.entries(value)) {
    if (child === undefined) {
      delete value[key];
    } else if (isRecord(child)) {
      const compacted = compactObject(child);
      if (!compacted)
        delete value[key];
    }
  }
  return Object.keys(value).length > 0 ? value : undefined;
}
function parseStatuslineSnapshot(rawInput, capturedAt = new Date().toISOString()) {
  if (!rawInput.trim())
    return null;
  let parsed;
  try {
    parsed = JSON.parse(rawInput);
  } catch {
    return null;
  }
  if (!isRecord(parsed))
    return null;
  const sessionId = stringValue(parsed.session_id);
  if (!sessionId)
    return null;
  const model = nestedObject(parsed, "model");
  const cost = nestedObject(parsed, "cost");
  const usage = nestedObject(parsed, "usage");
  const contextWindow = nestedObject(parsed, "context_window");
  const currentUsage = nestedObject(contextWindow, "current_usage");
  const rateLimits = nestedObject(parsed, "rate_limits");
  const fiveHour = nestedObject(rateLimits, "five_hour");
  const sevenDay = nestedObject(rateLimits, "seven_day");
  const snapshot = compactObject({
    session_id: sessionId,
    transcript_path: stringValue(parsed.transcript_path),
    captured_at: capturedAt,
    model: compactObject({
      id: stringValue(model?.id),
      display_name: stringValue(model?.display_name)
    }),
    cost: compactObject({
      total_cost_usd: finiteNumber(cost?.total_cost_usd)
    }),
    usage: compactObject({
      input_tokens: finiteNumber(usage?.input_tokens),
      output_tokens: finiteNumber(usage?.output_tokens),
      cache_creation_input_tokens: finiteNumber(usage?.cache_creation_input_tokens),
      cache_read_input_tokens: finiteNumber(usage?.cache_read_input_tokens)
    }),
    context_window: compactObject({
      used_percentage: percent(contextWindow?.used_percentage),
      remaining_percentage: percent(contextWindow?.remaining_percentage),
      total_input_tokens: finiteNumber(contextWindow?.total_input_tokens),
      total_output_tokens: finiteNumber(contextWindow?.total_output_tokens),
      context_window_size: finiteNumber(contextWindow?.context_window_size),
      current_usage: compactObject({
        input_tokens: finiteNumber(currentUsage?.input_tokens),
        output_tokens: finiteNumber(currentUsage?.output_tokens),
        cache_creation_input_tokens: finiteNumber(currentUsage?.cache_creation_input_tokens),
        cache_read_input_tokens: finiteNumber(currentUsage?.cache_read_input_tokens)
      })
    }),
    rate_limits: compactObject({
      five_hour: compactObject({
        used_percentage: percent(fiveHour?.used_percentage),
        resets_at: epochValue(fiveHour?.resets_at)
      }),
      seven_day: compactObject({
        used_percentage: percent(sevenDay?.used_percentage),
        resets_at: epochValue(sevenDay?.resets_at)
      })
    })
  });
  return snapshot ?? null;
}
function readSnapshotFile(filePath) {
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf-8"));
    if (isRecord(parsed) && parsed.version === 1 && isRecord(parsed.snapshots)) {
      return parsed;
    }
  } catch {}
  return { version: 1, updated_at: new Date(0).toISOString(), snapshots: {} };
}
function writeStatuslineSnapshot(snapshot, filePath = STATUSLINE_SNAPSHOTS_FILE) {
  const file = readSnapshotFile(filePath);
  file.snapshots[snapshot.session_id] = snapshot;
  const entries = Object.entries(file.snapshots).sort(([, a], [, b]) => Date.parse(b.captured_at) - Date.parse(a.captured_at));
  file.snapshots = Object.fromEntries(entries.slice(0, MAX_SNAPSHOTS));
  file.updated_at = new Date().toISOString();
  mkdirSync(dirname(filePath), { recursive: true, mode: 448 });
  const tmpPath = `${filePath}.${process.pid}.tmp`;
  writeFileSync(tmpPath, JSON.stringify(file, null, 2), "utf-8");
  renameSync(tmpPath, filePath);
}
function captureStatuslineSnapshot(rawInput) {
  const snapshot = parseStatuslineSnapshot(rawInput);
  if (!snapshot)
    return null;
  writeStatuslineSnapshot(snapshot);
  return snapshot;
}
async function readStatuslineSnapshotForSession(sessionId, filePath = STATUSLINE_SNAPSHOTS_FILE) {
  const file = readSnapshotFile(filePath);
  return file.snapshots[sessionId] ?? null;
}
function epochSeconds(value) {
  if (!value)
    return;
  if (typeof value === "number" && Number.isFinite(value))
    return Math.floor(value);
  if (typeof value !== "string")
    return;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? Math.floor(ms / 1000) : undefined;
}
function statuslineSnapshotToSessionMetadata(snapshot) {
  if (!snapshot)
    return {};
  const { transcript_path: _transcriptPath, ...dbSafeSnapshot } = snapshot;
  const metadata = {
    claude_statusline: dbSafeSnapshot,
    token_data_source: "claude_code_statusline"
  };
  if (snapshot.model?.id)
    metadata.model = snapshot.model.id;
  if (snapshot.context_window?.used_percentage != null) {
    metadata.context_used = snapshot.context_window.used_percentage;
  }
  if (snapshot.context_window?.context_window_size != null) {
    metadata.model_context_window = snapshot.context_window.context_window_size;
  }
  if (snapshot.context_window?.total_input_tokens != null) {
    metadata.context_tokens_used = snapshot.context_window.total_input_tokens;
    metadata.used_tokens = snapshot.context_window.total_input_tokens;
  }
  if (snapshot.rate_limits?.five_hour?.used_percentage != null) {
    metadata.five_hour_limit = snapshot.rate_limits.five_hour.used_percentage;
  }
  if (snapshot.rate_limits?.seven_day?.used_percentage != null) {
    metadata.weekly_limit = snapshot.rate_limits.seven_day.used_percentage;
  }
  const primaryReset = epochSeconds(snapshot.rate_limits?.five_hour?.resets_at);
  const secondaryReset = epochSeconds(snapshot.rate_limits?.seven_day?.resets_at);
  if (primaryReset != null || secondaryReset != null) {
    metadata.rate_limits_latest = {
      limit_id: "claude_code_statusline",
      ...primaryReset != null ? { primary: { resets_at: primaryReset } } : {},
      ...secondaryReset != null ? { secondary: { resets_at: secondaryReset } } : {}
    };
  }
  return metadata;
}
export {
  writeStatuslineSnapshot,
  statuslineSnapshotToSessionMetadata,
  readStatuslineSnapshotForSession,
  parseStatuslineSnapshot,
  captureStatuslineSnapshot
};
