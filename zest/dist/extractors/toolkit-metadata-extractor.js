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
  for (const line of yamlBlock.split(`
`)) {
    const parsed = parseYamlLine(line);
    if (parsed) {
      result[parsed[0]] = parsed[1];
    }
  }
  const bodyStart = endIdx + 4;
  const rawBody = trimmed.slice(bodyStart).trim();
  result.body = rawBody || null;
  return result;
}
// ../../packages/utils/src/mcp-registry.ts
var REGISTRY_URL = "https://registry.modelcontextprotocol.io/v0.1/servers";
var cache = new Map;
function extractMcpServerName(toolName) {
  if (toolName.startsWith("mcp__")) {
    const parts = toolName.split("__");
    return parts[1] ?? toolName;
  }
  if (toolName.startsWith("mcp-")) {
    const withoutPrefix = toolName.slice(4);
    const firstHyphen = withoutPrefix.indexOf("-");
    if (firstHyphen > 0) {
      return withoutPrefix.slice(0, firstHyphen);
    }
    return withoutPrefix;
  }
  return toolName;
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
  for (const segment of searchTerm.split("-")) {
    if (segment.length >= 3 && lower.includes(segment.toLowerCase()))
      return true;
  }
  return false;
}
async function searchRegistry(searchName) {
  const queries = buildSearchQueries(searchName);
  for (const query of queries) {
    const url = `${REGISTRY_URL}?search=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      signal: AbortSignal.timeout(5000)
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
    if (match?.server.description) {
      return match.server.description;
    }
  }
  return null;
}
async function lookupMcpDescription(serverName) {
  const searchName = extractMcpServerName(serverName);
  if (cache.has(searchName)) {
    return cache.get(searchName) ?? null;
  }
  try {
    const description = await searchRegistry(searchName);
    cache.set(searchName, description);
    return description;
  } catch {
    return null;
  }
}
async function lookupMcpDescriptions(toolNames) {
  const result = {};
  const serverGroups = new Map;
  for (const toolName of toolNames) {
    const serverName = extractMcpServerName(toolName);
    const group = serverGroups.get(serverName) ?? [];
    group.push(toolName);
    serverGroups.set(serverName, group);
  }
  const entries = Array.from(serverGroups.entries());
  for (let i = 0;i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5);
    const results = await Promise.all(batch.map(async ([serverName, originalNames]) => {
      const description = await lookupMcpDescription(serverName);
      return { originalNames, description };
    }));
    for (const { originalNames, description } of results) {
      for (const name of originalNames) {
        result[name] = description;
      }
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
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var DAEMON_WARMUP_GRACE_MS = 3 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/log-rotation.ts
import { readdir as readdir2, unlink } from "node:fs/promises";
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
    const files = await readdir2(LOGS_DIR);
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

// src/extractors/toolkit-metadata-extractor.ts
var SKILLS_DIR = join3(CLAUDE_INSTALL_DIR, "skills");
var AGENTS_DIR = join3(CLAUDE_INSTALL_DIR, "agents");
var INSTALLED_PLUGINS_FILE = join3(CLAUDE_INSTALL_DIR, "plugins", "installed_plugins.json");
async function buildSkillIndex(projectDir) {
  const index = new Map;
  if (projectDir) {
    const projectSkillsDir = join3(projectDir, ".claude", "skills");
    const projectEntries = await safeReadDir(projectSkillsDir);
    for (const entry of projectEntries) {
      if (!entry.isDirectory())
        continue;
      const skillFile = join3(projectSkillsDir, entry.name, "SKILL.md");
      const content = await safeReadFile(skillFile);
      if (!content)
        continue;
      const fm = parseFrontmatter(content);
      index.set(entry.name, { description: fm.description, category: "skill" });
    }
  }
  const userEntries = await safeReadDir(SKILLS_DIR);
  for (const entry of userEntries) {
    if (!entry.isDirectory())
      continue;
    if (index.has(entry.name))
      continue;
    const skillFile = join3(SKILLS_DIR, entry.name, "SKILL.md");
    const content = await safeReadFile(skillFile);
    if (!content)
      continue;
    const fm = parseFrontmatter(content);
    index.set(entry.name, { description: fm.description, category: "skill" });
  }
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
          const skillsDir = join3(install.installPath, "skills");
          const skillEntries = await safeReadDir(skillsDir);
          for (const entry of skillEntries) {
            if (!entry.isDirectory())
              continue;
            const qualifiedName = pluginName ? `${pluginName}:${entry.name}` : entry.name;
            if (index.has(qualifiedName))
              continue;
            const skillFile = join3(skillsDir, entry.name, "SKILL.md");
            const content = await safeReadFile(skillFile);
            if (!content)
              continue;
            const fm = parseFrontmatter(content);
            index.set(qualifiedName, { description: fm.description, category: "skill" });
          }
          const commandsDir = join3(install.installPath, "commands");
          const cmdEntries = await safeReadDir(commandsDir);
          for (const entry of cmdEntries) {
            if (!entry.isFile() || !entry.name.endsWith(".md"))
              continue;
            const cmdName = entry.name.replace(/\.md$/, "");
            const qualifiedName = pluginName ? `${pluginName}:${cmdName}` : cmdName;
            if (index.has(qualifiedName))
              continue;
            const cmdFile = join3(commandsDir, entry.name);
            const content = await safeReadFile(cmdFile);
            if (!content)
              continue;
            const fm = parseFrontmatter(content);
            index.set(qualifiedName, { description: fm.description, category: "skill" });
          }
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
  return index;
}
async function scanAgentsDir(dir, index) {
  const entries = await safeReadDir(dir);
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md"))
      continue;
    const id = entry.name.replace(/\.md$/, "");
    if (index.has(id))
      continue;
    const agentFile = join3(dir, entry.name);
    const content = await safeReadFile(agentFile);
    if (!content)
      continue;
    const fm = parseFrontmatter(content);
    index.set(id, { description: fm.description, category: "agent" });
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
