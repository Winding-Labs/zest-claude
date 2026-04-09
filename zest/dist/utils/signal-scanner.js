// src/utils/signal-scanner.ts
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
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
// ../../packages/utils/src/signal-helpers.ts
function incrementMap(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}
var CMD_TAG_START = "<command-name>/";
var CMD_TAG_END = "</command-name>";
function extractCommandName(text) {
  const start = text.indexOf(CMD_TAG_START);
  if (start === -1)
    return;
  const nameStart = start + CMD_TAG_START.length;
  const end = text.indexOf(CMD_TAG_END, nameStart);
  if (end === -1)
    return;
  const name = text.slice(nameStart, end);
  return name.length > 0 ? name : undefined;
}
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
var SESSION_FILE = process.env.ZEST_SESSION_FILE ?? join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
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

// src/utils/signal-scanner.ts
var EMPTY_SIGNALS = {
  mcp_usage: {},
  skill_usage: {},
  agent_usage: {},
  builtin_usage: {},
  unknown_usage: {},
  image_count: 0
};
function newDelta() {
  return {
    mcp_usage: new Map,
    skill_usage: new Map,
    agent_usage: new Map,
    builtin_usage: new Map,
    unknown_usage: new Map,
    unrecognizedToolNames: new Set,
    imageCount: 0,
    mcpToolDescriptions: new Map
  };
}
var KNOWN_BUILTIN_NAMES = new Set([
  "Bash",
  "Read",
  "Edit",
  "Write",
  "Glob",
  "Grep",
  "WebFetch",
  "WebSearch",
  "LSP",
  "NotebookEdit"
]);
var KNOWN_TOOL_NAMES = new Set([...KNOWN_BUILTIN_NAMES, "Task", "Agent", "Skill"]);
function categorizeTool(name, input) {
  if (name.startsWith("mcp__"))
    return "mcp";
  if (name === "Task" || name === "Agent")
    return "agent";
  if (name === "Skill")
    return "skill";
  if (KNOWN_BUILTIN_NAMES.has(name))
    return "builtin";
  if (input) {
    if ("subagent_type" in input)
      return "agent";
    if ("skill" in input)
      return "skill";
    if ("command" in input)
      return "builtin";
    if ("url" in input)
      return "builtin";
  }
  return "unknown";
}
var SKILL_DIR_REGEX = /\/skills\/([^\s/]+)/;
function isBlacklistedSkill(name) {
  return CLAUDE_BUILTIN_COMMANDS.has(name) || name.startsWith("zest:");
}
var FUNCTION_TAG_REGEX = /<function>\s*(\{[^]*?\})\s*<\/function>/g;
function extractMcpToolDescriptionsFromText(text, target) {
  for (const match of text.matchAll(FUNCTION_TAG_REGEX)) {
    try {
      const parsed = JSON.parse(match[1]);
      if (typeof parsed.name === "string" && parsed.name.startsWith("mcp__") && typeof parsed.description === "string" && parsed.description.length > 0) {
        target.set(parsed.name, parsed.description);
      }
    } catch {}
  }
}
function processTextBlock(block, delta) {
  const text = block.text;
  if (typeof text !== "string")
    return;
  if (text.includes("<function>") && text.includes("mcp__")) {
    extractMcpToolDescriptionsFromText(text, delta.mcpToolDescriptions);
  }
  if (!text.includes("Base directory for this skill:"))
    return;
  const match = text.match(SKILL_DIR_REGEX);
  if (match && !isBlacklistedSkill(match[1])) {
    incrementMap(delta.skill_usage, match[1]);
  }
}
function processToolUse(block, delta) {
  const name = block.name;
  if (!name)
    return;
  const input = block.input;
  const category = categorizeTool(name, input);
  if (!KNOWN_TOOL_NAMES.has(name) && !name.startsWith("mcp__")) {
    delta.unrecognizedToolNames.add(name);
  }
  switch (category) {
    case "mcp":
      incrementMap(delta.mcp_usage, name);
      break;
    case "agent": {
      const subagentType = typeof input?.subagent_type === "string" ? input.subagent_type : name;
      incrementMap(delta.agent_usage, subagentType);
      break;
    }
    case "skill": {
      const skillName = typeof input?.skill === "string" ? input.skill : undefined;
      if (skillName && !isBlacklistedSkill(skillName)) {
        incrementMap(delta.skill_usage, skillName);
      }
      break;
    }
    case "builtin":
      incrementMap(delta.builtin_usage, name);
      break;
    case "unknown":
      incrementMap(delta.unknown_usage, name);
      break;
  }
}
function processToolResult(block, delta) {
  if (!Array.isArray(block.content))
    return;
  for (const nested of block.content) {
    if (nested && typeof nested === "object") {
      processBlock(nested, delta);
    }
  }
}
function processBlock(block, delta) {
  switch (block.type) {
    case "tool_use":
      return processToolUse(block, delta);
    case "text":
      return processTextBlock(block, delta);
    case "image":
      delta.imageCount++;
      break;
    case "tool_result":
      return processToolResult(block, delta);
  }
}
async function scanSignalsDelta(filePath, fromLine) {
  const delta = newDelta();
  let lineNumber = 0;
  let lastSuccessfulLine = fromLine - 1;
  try {
    const stream = createReadStream(filePath, { encoding: "utf-8" });
    const rl = createInterface({ input: stream, crlfDelay: Number.POSITIVE_INFINITY });
    for await (const line of rl) {
      if (lineNumber < fromLine) {
        lineNumber++;
        continue;
      }
      const trimmed = line.trim();
      if (!trimmed) {
        lineNumber++;
        continue;
      }
      try {
        const entry = JSON.parse(trimmed);
        const message = entry.message;
        if (message) {
          const content = message.content;
          if (Array.isArray(content)) {
            for (const block of content) {
              if (block && typeof block === "object") {
                processBlock(block, delta);
              }
            }
          } else if (typeof content === "string") {
            const cmdName = extractCommandName(content);
            if (cmdName && !isBlacklistedSkill(cmdName)) {
              incrementMap(delta.skill_usage, cmdName);
            }
          }
        }
        lastSuccessfulLine = lineNumber;
      } catch {}
      lineNumber++;
    }
  } catch {}
  return { delta, newLastReadLine: lastSuccessfulLine + 1 };
}
function mergeUsageMap(prev, delta) {
  const merged = { ...prev };
  for (const [name, count] of delta) {
    merged[name] = (merged[name] ?? 0) + count;
  }
  return merged;
}
function mergeSignals(previous, delta) {
  return {
    mcp_usage: mergeUsageMap(previous.mcp_usage, delta.mcp_usage),
    skill_usage: mergeUsageMap(previous.skill_usage, delta.skill_usage),
    agent_usage: mergeUsageMap(previous.agent_usage, delta.agent_usage),
    builtin_usage: mergeUsageMap(previous.builtin_usage, delta.builtin_usage),
    unknown_usage: mergeUsageMap(previous.unknown_usage, delta.unknown_usage),
    image_count: previous.image_count + delta.imageCount
  };
}
export {
  scanSignalsDelta,
  processBlock,
  newDelta,
  mergeSignals,
  extractMcpToolDescriptionsFromText,
  categorizeTool,
  EMPTY_SIGNALS
};
