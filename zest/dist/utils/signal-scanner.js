// src/utils/signal-scanner.ts
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
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
    imageCount: 0
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
function incrementMap(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}
var SKILL_DIR_REGEX = /\/skills\/([^\s/]+)/;
function processTextBlock(block, delta) {
  const text = block.text;
  if (typeof text !== "string")
    return;
  if (!text.includes("Base directory for this skill:"))
    return;
  const match = text.match(SKILL_DIR_REGEX);
  if (match) {
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
    case "skill":
      break;
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
        if (message && Array.isArray(message.content)) {
          for (const block of message.content) {
            if (block && typeof block === "object") {
              processBlock(block, delta);
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
  categorizeTool,
  EMPTY_SIGNALS
};
