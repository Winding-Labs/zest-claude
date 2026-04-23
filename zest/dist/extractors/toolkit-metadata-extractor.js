// src/extractors/toolkit-metadata-extractor.ts
import { join as join3 } from "node:path";
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
function parseYamlLine(line) {
  const cleaned = line.trim();
  const colonIdx = cleaned.indexOf(":");
  if (colonIdx === -1)
    return null;
  const key = cleaned.slice(0, colonIdx).trim();
  if (!FRONTMATTER_KEYS.has(key))
    return null;
  let value = cleaned.slice(colonIdx + 1).trim();
  if (!value)
    return null;
  if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
    value = value.slice(1, -1);
  } else {
    const commentIdx = value.indexOf(" #");
    if (commentIdx !== -1) {
      value = value.slice(0, commentIdx).trimEnd();
    }
  }
  return value ? [key, value] : null;
}
function extractHeadingDescription(content) {
  const lines = content.split(`
`);
  for (let i = 0;i < lines.length && i < 10; i++) {
    const rawLine = lines[i];
    if (rawLine === undefined)
      continue;
    const line = rawLine.trim();
    if (!line.startsWith("#"))
      continue;
    const heading = line.replace(/^#+\s*/, "");
    const separatorMatch = heading.match(/\s[—–-]\s(.+)/);
    if (separatorMatch?.[1])
      return separatorMatch[1].trim();
    if (heading.length > 3)
      return heading;
  }
  return null;
}
function parseFrontmatter(content) {
  const result = { name: null, description: null, body: null };
  const trimmed = content.trimStart();
  if (!trimmed.startsWith("---"))
    return result;
  const endIdx = trimmed.indexOf(`
---`, 3);
  if (endIdx === -1)
    return result;
  const yamlBlock = trimmed.slice(3, endIdx);
  const lines = yamlBlock.split(`
`);
  for (let i = 0;i < lines.length; i++) {
    const line = lines[i];
    if (line === undefined)
      continue;
    const parsed = parseYamlLine(line);
    if (!parsed)
      continue;
    const [key, value] = parsed;
    if (value === ">" || value === "|") {
      const continuationLines = [];
      while (i + 1 < lines.length) {
        const next = lines[i + 1];
        if (next === undefined)
          break;
        if (next.length > 0 && !next.startsWith(" ") && !next.startsWith("\t"))
          break;
        continuationLines.push(next.trim());
        i++;
      }
      const joined = value === ">" ? continuationLines.join(" ") : continuationLines.join(`
`);
      result[key] = joined.trim() || null;
    } else {
      result[key] = value;
    }
  }
  const bodyStart = endIdx + 4;
  const rawBody = trimmed.slice(bodyStart).trim();
  result.body = rawBody || null;
  return result;
}
// ../../packages/utils/src/mcp-registry.ts
var REGISTRY_URL = "https://registry.modelcontextprotocol.io/v0.1/servers";
var REMOTE_TIMEOUT_MS = 5000;
var CACHE_TTL_MS = 30 * 60 * 1000;
var CACHE_MAX_SIZE = 100;
function isSafeRemoteUrl(urlStr) {
  try {
    const url = new URL(urlStr);
    if (url.protocol !== "https:")
      return false;
    const host = url.hostname.toLowerCase();
    if (host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.startsWith("10.") || host.startsWith("192.168.") || host.startsWith("172.") || host.startsWith("169.254.") || host.endsWith(".local") || host.endsWith(".internal")) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

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
function extractMeaningfulSegments(name) {
  return name.split(/[-._/]/).filter((s) => s.length >= 3 && !GENERIC_SEGMENTS.has(s.toLowerCase()));
}
function parseMcpKey(key) {
  if (key.includes("/")) {
    const slashIndex = key.indexOf("/");
    return { server: key.slice(0, slashIndex) || key, tool: key.slice(slashIndex + 1) };
  }
  if (key.startsWith("mcp__")) {
    const parts = key.split("__");
    return {
      server: parts[1] ?? key,
      tool: parts.length >= 3 ? parts.slice(2).join("__") : key
    };
  }
  if (key.startsWith("mcp-")) {
    const withoutPrefix = key.slice(4);
    const firstHyphen = withoutPrefix.indexOf("-");
    if (firstHyphen > 0) {
      return { server: withoutPrefix.slice(0, firstHyphen), tool: key };
    }
    return { server: withoutPrefix, tool: key };
  }
  return { server: key, tool: key };
}
function extractMcpServerName(toolName) {
  return parseMcpKey(toolName).server;
}
function buildSearchQueries(name) {
  const queries = [name];
  const parts = name.split("-");
  for (let i = parts.length - 1;i >= 1; i--) {
    queries.push(parts.slice(0, i).join("-"));
  }
  return queries;
}
function isPlausibleMatch(registryName, searchTerm) {
  const lower = registryName.toLowerCase();
  if (lower.includes(searchTerm.toLowerCase()))
    return true;
  for (const segment of extractMeaningfulSegments(searchTerm)) {
    if (lower.includes(segment.toLowerCase()))
      return true;
  }
  return false;
}
async function searchRegistry(searchName) {
  const cached = serverCache.get(searchName);
  if (cached.hit)
    return cached.value;
  const queries = buildSearchQueries(searchName);
  for (const query of queries) {
    const url = `${REGISTRY_URL}?search=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      signal: AbortSignal.timeout(REMOTE_TIMEOUT_MS)
    });
    if (!response.ok)
      continue;
    const data = await response.json();
    if (!Array.isArray(data?.servers))
      continue;
    const servers = data.servers;
    if (servers.length === 0)
      continue;
    const match = servers.find((s) => isPlausibleMatch(s.server.name, searchName));
    if (match) {
      serverCache.set(searchName, match.server);
      return match.server;
    }
  }
  serverCache.set(searchName, null);
  return null;
}
async function fetchToolDescriptions(remoteUrl) {
  if (!isSafeRemoteUrl(remoteUrl))
    return null;
  try {
    const response = await fetch(remoteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream"
      },
      body: JSON.stringify({ jsonrpc: "2.0", method: "tools/list", id: 1 }),
      signal: AbortSignal.timeout(REMOTE_TIMEOUT_MS)
    });
    if (!response.ok)
      return null;
    const contentType = response.headers.get("content-type") ?? "";
    let body;
    if (contentType.includes("text/event-stream")) {
      const text = await response.text();
      const dataLines = text.split(`
`).filter((l) => l.startsWith("data: "));
      body = {};
      for (const line of dataLines) {
        try {
          const parsed = JSON.parse(line.slice(6).trim());
          if (parsed?.result?.tools) {
            body = parsed;
            break;
          }
        } catch {}
      }
    } else {
      body = await response.json();
    }
    const tools = body?.result?.tools;
    if (!Array.isArray(tools))
      return null;
    const map = new Map;
    for (const t of tools) {
      if (typeof t.name === "string" && typeof t.description === "string") {
        map.set(t.name, t.description);
      }
    }
    return map.size > 0 ? map : null;
  } catch {
    return null;
  }
}
async function lookupToolDescriptions(serverName) {
  const cached = toolCache.get(serverName);
  if (cached.hit)
    return cached.value;
  try {
    const server = await searchRegistry(serverName);
    if (!server) {
      toolCache.set(serverName, null);
      return null;
    }
    if (server.description) {
      cache.set(serverName, server.description);
    }
    const hasRemotes = (server.remotes?.length ?? 0) > 0;
    const hasPackages = (server.packages?.length ?? 0) > 0;
    if (hasRemotes) {
      for (const remote of server.remotes) {
        const tools = await fetchToolDescriptions(remote.url);
        if (tools) {
          toolCache.set(serverName, tools);
          return tools;
        }
      }
    }
    if (hasPackages) {
      const npmPkg = server.packages.find((p) => !p.registryType || p.registryType === "npm");
      if (npmPkg) {
        const tools = await fetchToolsFromNpmCdn(npmPkg.identifier, npmPkg.version);
        if (tools) {
          toolCache.set(serverName, tools);
          return tools;
        }
      }
    }
    if (!hasRemotes && !hasPackages) {
      toolCache.set(serverName, null);
    }
    return null;
  } catch {
    return null;
  }
}
var JSDELIVR_DATA_URL = "https://data.jsdelivr.com/v1/packages/npm";
var JSDELIVR_CDN_URL = "https://cdn.jsdelivr.net/npm";
function findJsFiles(node, prefix = "") {
  const results = [];
  if (!node?.files)
    return results;
  for (const file of node.files) {
    const path = `${prefix}/${file.name}`;
    if (file.files) {
      results.push(...findJsFiles(file, path));
    } else if (file.name.endsWith(".js") && !file.name.endsWith(".d.ts") && !file.name.includes("test")) {
      results.push({ path, size: file.size ?? 0 });
    }
  }
  return results;
}
function isToolName(name) {
  return /^[a-z][a-z0-9_-]*$/.test(name) && name.length <= 60;
}
function extractToolsFromSource(source) {
  const tools = new Map;
  for (const m of source.matchAll(/\{name:\s*"([^"]{2,60})"[^}]{0,200}?description:\s*"([^"]+)"/g)) {
    const [, name, description] = m;
    if (!name || !description)
      continue;
    if (isToolName(name)) {
      tools.set(name, cleanDescription(description));
    }
  }
  for (const m of source.matchAll(/(?:registerTool|addTool|createTool)\(\s*"([^"]+)"/g)) {
    const [, name] = m;
    if (!name || tools.has(name))
      continue;
    const idx = m.index ?? 0;
    const after = source.slice(idx + m[0].length, idx + m[0].length + 500);
    const descMatch = after.match(/description:\s*(?:"([^"]+)"|`([^\n]+))/);
    const desc = descMatch?.[1] ?? descMatch?.[2];
    if (desc)
      tools.set(name, cleanDescription(desc));
  }
  for (const m of source.matchAll(/\.tool\(\s*"([^"]+)"\s*,\s*"([^"]+)"/g)) {
    const [, name, description] = m;
    if (!name || !description)
      continue;
    if (!tools.has(name)) {
      tools.set(name, cleanDescription(description));
    }
  }
  if (source.includes("annotations:")) {
    for (const m of source.matchAll(/name:\s*"([^"]{2,60})"[\s\S]{0,500}?annotations:\s*\{[^}]{0,200}?description:\s*"([^"]+)"/g)) {
      const [, name, description] = m;
      if (!name || !description)
        continue;
      if (!tools.has(name) && isToolName(name)) {
        tools.set(name, cleanDescription(description));
      }
    }
  }
  return tools;
}
function cleanDescription(desc) {
  return (desc.split(/\\n|\n/)[0] ?? desc).trim();
}
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
function stripVerbPrefix(name) {
  const [first, ...rest] = name.split(/[-_]/);
  if (first && rest.length > 0 && VERB_PREFIXES.has(first.toLowerCase())) {
    return rest.join("-").toLowerCase();
  }
  return name.toLowerCase();
}
function fuzzyMatchTools(requestedTools, available) {
  const matched = new Map;
  const claimed = new Set;
  for (const req of requestedTools) {
    const desc = available.get(req);
    if (desc !== undefined) {
      matched.set(req, desc);
      claimed.add(req);
    }
  }
  const unmatched = requestedTools.filter((r) => !matched.has(r));
  if (unmatched.length === 0)
    return matched;
  const unclaimed = [...available.entries()].filter(([k]) => !claimed.has(k));
  if (unclaimed.length === 0)
    return matched;
  for (const req of unmatched) {
    if (matched.has(req))
      continue;
    const strippedReq = stripVerbPrefix(req);
    for (const [candidate, desc] of unclaimed) {
      if (claimed.has(candidate))
        continue;
      const strippedCand = stripVerbPrefix(candidate);
      if (strippedCand === strippedReq || strippedCand.endsWith(`-${strippedReq}`)) {
        matched.set(req, desc);
        claimed.add(candidate);
        break;
      }
    }
  }
  const stillUnmatched = requestedTools.filter((r) => !matched.has(r));
  for (const req of stillUnmatched) {
    const reqWords = req.toLowerCase().split(/[-_]/).filter((w) => w.length >= 2);
    let bestCandidate = null;
    let bestDesc = "";
    let bestScore = 0;
    for (const [candidate, desc] of unclaimed) {
      if (claimed.has(candidate))
        continue;
      const candStr = candidate.toLowerCase();
      const matchingWords = reqWords.filter((w) => candStr.includes(w));
      const score = matchingWords.length / reqWords.length;
      if (score > bestScore && score >= 0.75) {
        bestScore = score;
        bestCandidate = candidate;
        bestDesc = desc;
      }
    }
    if (bestCandidate) {
      matched.set(req, bestDesc);
      claimed.add(bestCandidate);
    }
  }
  return matched;
}
async function fetchToolsFromNpmCdn(packageName, version) {
  try {
    const versionSuffix = version ? `@${version}` : "@latest";
    const listUrl = `${JSDELIVR_DATA_URL}/${packageName}${versionSuffix}`;
    const listResponse = await fetch(listUrl, { signal: AbortSignal.timeout(REMOTE_TIMEOUT_MS) });
    if (!listResponse.ok)
      return null;
    const pkgData = await listResponse.json();
    const jsFiles = findJsFiles(pkgData).sort((a, b) => b.size - a.size);
    if (jsFiles.length === 0)
      return null;
    for (const file of jsFiles.slice(0, 3)) {
      if (file.size > 500000)
        continue;
      const contentUrl = `${JSDELIVR_CDN_URL}/${packageName}${versionSuffix}${file.path}`;
      const contentResponse = await fetch(contentUrl, {
        signal: AbortSignal.timeout(REMOTE_TIMEOUT_MS)
      });
      if (!contentResponse.ok)
        continue;
      const source = await contentResponse.text();
      const tools = extractToolsFromSource(source);
      if (tools.size > 0)
        return tools;
    }
    return null;
  } catch {
    return null;
  }
}
async function lookupMcpDescription(serverName) {
  const searchName = extractMcpServerName(serverName);
  const cached = cache.get(searchName);
  if (cached.hit)
    return cached.value;
  try {
    const server = await searchRegistry(searchName);
    const description = server?.description ?? null;
    cache.set(searchName, description);
    return description;
  } catch {
    return null;
  }
}
async function resolveToolDescriptionsForServers(entries, getToolName) {
  const allResolved = [];
  for (let i = 0;i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5);
    const results = await Promise.all(batch.map(async ([serverName, tools]) => {
      const toolDescriptions = await lookupToolDescriptions(serverName);
      const serverDescription = toolDescriptions ? null : await lookupMcpDescription(serverName);
      return { tools, toolDescriptions, serverDescription };
    }));
    for (const group of results) {
      if (group.toolDescriptions) {
        const requestedNames = group.tools.map(getToolName);
        const fuzzyMatched = fuzzyMatchTools(requestedNames, group.toolDescriptions);
        allResolved.push({ ...group, toolDescriptions: fuzzyMatched });
      } else {
        allResolved.push(group);
      }
    }
  }
  return allResolved;
}
async function lookupMcpDescriptions(toolNames) {
  const result = {};
  const serverGroups = new Map;
  for (const toolName of toolNames) {
    const { server, tool } = parseMcpKey(toolName);
    const group = serverGroups.get(server) ?? [];
    group.push({ original: toolName, tool });
    serverGroups.set(server, group);
  }
  const resolved = await resolveToolDescriptionsForServers(Array.from(serverGroups.entries()), (t) => t.tool);
  for (const { tools, toolDescriptions, serverDescription } of resolved) {
    for (const { original, tool } of tools) {
      result[original] = toolDescriptions?.get(tool) ?? serverDescription;
    }
  }
  return result;
}
// ../../packages/utils/src/toolkit-signals.ts
function extractToolNamesFromSignals(signals) {
  return {
    skills: Object.keys(signals.skill_usage ?? {}),
    agents: Object.keys(signals.agent_usage ?? {}),
    mcpServers: Object.keys(signals.mcp_usage ?? {})
  };
}
// ../../packages/utils/src/git-utils.ts
import { exec, execSync } from "node:child_process";
import { promisify } from "node:util";
var execAsync = promisify(exec);
// ../../packages/utils/src/safe-fs.ts
import { readdir, readFile } from "node:fs/promises";
async function safeReadFile(filePath) {
  try {
    return await readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}
async function safeReadDir(dirPath) {
  try {
    return await readdir(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }
}
function isDirEntry(entry) {
  return entry.isDirectory() || entry.isSymbolicLink();
}
function isFileEntry(entry, ext) {
  return (entry.isFile() || entry.isSymbolicLink()) && entry.name.endsWith(ext);
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
var LOG_RETENTION_DAYS = 7;
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

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// ../../packages/plugin-common/src/log-rotation/log-rotation.ts
import { readdir as readdir2, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";

// ../../packages/plugin-common/src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// ../../packages/plugin-common/src/log-rotation/log-rotation.ts
var CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
function getDateString() {
  return new Date().toISOString().split("T")[0];
}
function getDatedLogPath(logsDir, logPrefix) {
  const dateStr = getDateString();
  return join2(logsDir, `${logPrefix}-${dateStr}.log`);
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
function createLogRotation(config) {
  const { logsDir, retentionDays, logger } = config;
  const lastCleanupTime = {};
  async function cleanupStaleLogs(logPrefix) {
    const now = Date.now();
    const lastCleanup = lastCleanupTime[logPrefix] || 0;
    if (now - lastCleanup < CLEANUP_THROTTLE_MS) {
      return;
    }
    lastCleanupTime[logPrefix] = now;
    try {
      await ensureDirectory(logsDir);
      const files = await readdir2(logsDir);
      const cutoffDate = new Date(now - retentionDays * 24 * 60 * 60 * 1000);
      for (const file of files) {
        const fileDate = parseDateFromFilename(file, logPrefix);
        if (fileDate && fileDate < cutoffDate) {
          const filePath = join2(logsDir, file);
          try {
            await unlink(filePath);
          } catch (error) {
            logger?.error(`Failed to delete old log file ${file}`, error);
          }
        }
      }
    } catch (error) {
      logger?.error("Failed to cleanup old logs", error);
    }
  }
  async function forceCleanupStaleLogs(logPrefix) {
    lastCleanupTime[logPrefix] = 0;
    await cleanupStaleLogs(logPrefix);
  }
  return { cleanupStaleLogs, forceCleanupStaleLogs };
}

// src/log-rotation/log-rotation.ts
function getDatedLogPath2(logPrefix) {
  return getDatedLogPath(LOGS_DIR, logPrefix);
}
var logRotation = createLogRotation({
  logsDir: LOGS_DIR,
  retentionDays: LOG_RETENTION_DAYS
});
var { cleanupStaleLogs, forceCleanupStaleLogs } = logRotation;

// src/utils/fs-utils.ts
import { mkdir as mkdir2, stat as stat2 } from "node:fs/promises";
async function ensureDirectory2(dirPath) {
  try {
    await stat2(dirPath);
  } catch {
    await mkdir2(dirPath, { recursive: true, mode: 448 });
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
      const logFilePath = getDatedLogPath2(this.logPrefix);
      await ensureDirectory2(dirname(logFilePath));
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
      console.error(`[Zest:Error] ${message}`);
      this.writeToFile(`ERROR: ${message} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    }
  }
}
var logger = new Logger;

// src/extractors/toolkit-metadata-extractor.ts
var SKILLS_DIR = join3(CLAUDE_INSTALL_DIR, "skills");
var AGENTS_DIR = join3(CLAUDE_INSTALL_DIR, "agents");
var INSTALLED_PLUGINS_FILE = join3(CLAUDE_INSTALL_DIR, "plugins", "installed_plugins.json");
var MAX_SCAN_DEPTH = 10;
async function scanSkillsDir(dir, index, pluginPrefix, relativeDir = "", depth = 0) {
  if (depth >= MAX_SCAN_DEPTH)
    return;
  const entries = await safeReadDir(dir);
  for (const entry of entries) {
    if (!isDirEntry(entry))
      continue;
    const childRelative = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
    const id = pluginPrefix ? `${pluginPrefix}:${childRelative}` : childRelative;
    const skillFile = join3(dir, entry.name, "SKILL.md");
    const content = await safeReadFile(skillFile);
    if (content) {
      if (!index.has(id)) {
        const fm = parseFrontmatter(content);
        const description = fm.description ?? extractHeadingDescription(content);
        if (description) {
          index.set(id, { description, category: "skill" });
        }
      }
      continue;
    }
    await scanSkillsDir(join3(dir, entry.name), index, pluginPrefix, childRelative, depth + 1);
  }
}
async function scanCommandsDir(dir, index, pluginPrefix, relativeDir = "", depth = 0) {
  if (depth >= MAX_SCAN_DEPTH)
    return;
  const entries = await safeReadDir(dir);
  for (const entry of entries) {
    if (isDirEntry(entry) && !entry.isFile()) {
      const childRelative = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
      await scanCommandsDir(join3(dir, entry.name), index, pluginPrefix, childRelative, depth + 1);
      continue;
    }
    if (!isFileEntry(entry, ".md"))
      continue;
    const baseName = entry.name.replace(/\.md$/, "");
    const relativeName = relativeDir ? `${relativeDir}/${baseName}` : baseName;
    const id = pluginPrefix ? `${pluginPrefix}:${relativeName}` : relativeName;
    if (index.has(id))
      continue;
    const content = await safeReadFile(join3(dir, entry.name));
    if (!content)
      continue;
    const fm = parseFrontmatter(content);
    const description = fm.description ?? extractHeadingDescription(content);
    index.set(id, { description, category: "skill" });
  }
}
async function buildSkillIndex(projectDir) {
  const index = new Map;
  if (projectDir) {
    await scanSkillsDir(join3(projectDir, ".claude", "skills"), index);
  }
  await scanSkillsDir(SKILLS_DIR, index);
  const pluginsContent = await safeReadFile(INSTALLED_PLUGINS_FILE);
  if (pluginsContent) {
    try {
      const registry = JSON.parse(pluginsContent);
      if (registry.plugins) {
        for (const [registryKey, installations] of Object.entries(registry.plugins)) {
          if (!installations?.length)
            continue;
          const install = installations[0];
          const pluginName = registryKey.split("@")[0];
          await scanSkillsDir(join3(install.installPath, "skills"), index, pluginName);
          await scanCommandsDir(join3(install.installPath, "commands"), index, pluginName);
        }
      }
    } catch (error) {
      logger.debug("Failed to parse installed_plugins.json for skill lookup", error);
    }
  }
  return index;
}
async function buildAgentIndex(projectDir) {
  const index = new Map;
  if (projectDir) {
    await scanAgentsDir(join3(projectDir, ".claude", "agents"), index);
  }
  await scanAgentsDir(AGENTS_DIR, index);
  const pluginsContent = await safeReadFile(INSTALLED_PLUGINS_FILE);
  if (pluginsContent) {
    try {
      const registry = JSON.parse(pluginsContent);
      if (registry.plugins) {
        for (const [registryKey, installations] of Object.entries(registry.plugins)) {
          if (!installations?.length)
            continue;
          const install = installations[0];
          const pluginName = registryKey.split("@")[0];
          await scanAgentsDir(join3(install.installPath, "agents"), index, pluginName);
        }
      }
    } catch (error) {
      logger.debug("Failed to parse installed_plugins.json for agent lookup", error);
    }
  }
  return index;
}
async function scanAgentsDir(dir, index, pluginPrefix, relativeDir = "", depth = 0) {
  if (depth >= MAX_SCAN_DEPTH)
    return;
  const entries = await safeReadDir(dir);
  for (const entry of entries) {
    if (isDirEntry(entry) && !entry.isFile()) {
      const childRelative = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
      await scanAgentsDir(join3(dir, entry.name), index, pluginPrefix, childRelative, depth + 1);
      continue;
    }
    if (!isFileEntry(entry, ".md"))
      continue;
    const baseName = entry.name.replace(/\.md$/, "");
    const relativeName = relativeDir ? `${relativeDir}/${baseName}` : baseName;
    const id = pluginPrefix ? `${pluginPrefix}:${relativeName}` : relativeName;
    const agentFile = join3(dir, entry.name);
    const content = await safeReadFile(agentFile);
    if (!content)
      continue;
    const fm = parseFrontmatter(content);
    const description = fm.description ?? extractHeadingDescription(content);
    if (!description)
      continue;
    const entry_data = { description, category: "agent" };
    const displayName = typeof fm.name === "string" ? fm.name : undefined;
    if (displayName && !index.has(displayName)) {
      index.set(displayName, entry_data);
    }
    if (!index.has(id)) {
      index.set(id, entry_data);
    }
  }
}
async function lookupToolMetadata(toolNames, projectDir) {
  const result = {};
  const totalNames = toolNames.skills.length + toolNames.agents.length + toolNames.mcpServers.length;
  if (totalNames === 0)
    return result;
  try {
    const [skillIndex, agentIndex] = await Promise.all([
      toolNames.skills.length > 0 ? buildSkillIndex(projectDir) : new Map,
      toolNames.agents.length > 0 ? buildAgentIndex(projectDir) : new Map
    ]);
    for (const name of toolNames.skills) {
      const entry = skillIndex.get(name);
      if (entry)
        result[name] = entry;
    }
    for (const name of toolNames.agents) {
      const entry = agentIndex.get(name);
      if (entry)
        result[name] = entry;
    }
    if (toolNames.mcpServers.length > 0) {
      const mcpDescriptions = await lookupMcpDescriptions(toolNames.mcpServers);
      for (const name of toolNames.mcpServers) {
        result[name] = {
          description: mcpDescriptions[name] ?? null,
          category: "mcp_server"
        };
      }
    }
  } catch (error) {
    logger.warn("Failed to look up tool metadata:", error);
  }
  return result;
}
export {
  parseFrontmatter,
  lookupToolMetadata,
  extractToolNamesFromSignals
};
