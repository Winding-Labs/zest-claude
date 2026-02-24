// src/utils/poc-scanner.ts
import { createReadStream } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline";
import { join } from "node:path";

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/poc-scanner.ts
var KNOWN_CONTENT_BLOCK_TYPES = new Set([
  "text",
  "tool_use",
  "tool_result",
  "image",
  "document",
  "thinking",
  "redacted_thinking"
]);
var MAX_SAMPLES = 3;
function getPocStateFilePath(sessionId, stateDir) {
  return join(stateDir, `poc-${sessionId}.json`);
}
async function readPocState(sessionId, stateDir) {
  try {
    const content = await readFile(getPocStateFilePath(sessionId, stateDir), "utf-8");
    return JSON.parse(content);
  } catch {
    return { lastReadLine: 0 };
  }
}
async function writePocState(sessionId, stateDir, state) {
  try {
    await ensureDirectory(stateDir);
    await writeFile(getPocStateFilePath(sessionId, stateDir), JSON.stringify(state), "utf-8");
  } catch {}
}
function extractImageMeta(block) {
  const source = block.source;
  if (!source)
    return null;
  const sourceType = source.type || "unknown";
  const mediaType = source.media_type || "unknown";
  let dataSizeBytes = 0;
  if (sourceType === "base64" && typeof source.data === "string") {
    dataSizeBytes = Math.round(source.data.length * 0.75);
  } else if (sourceType === "url" && typeof source.url === "string") {
    dataSizeBytes = 0;
  }
  return { media_type: mediaType, data_size_bytes: dataSizeBytes, source_type: sourceType };
}
function extractDocumentMeta(block) {
  const source = block.source;
  const sourceType = source?.type || "unknown";
  const mediaType = source?.media_type || block.media_type || undefined;
  const title = block.title || undefined;
  return { media_type: mediaType, title, source_type: sourceType };
}
function processContentBlock(block, result) {
  const type = block.type;
  if (!type)
    return;
  if (!KNOWN_CONTENT_BLOCK_TYPES.has(type)) {
    result.unknownTypes.add(type);
  }
  if (type === "image") {
    result.imageCount++;
    if (result.imageSamples.length < MAX_SAMPLES) {
      const meta = extractImageMeta(block);
      if (meta)
        result.imageSamples.push(meta);
    }
  } else if (type === "document") {
    result.documentCount++;
    if (result.documentSamples.length < MAX_SAMPLES) {
      result.documentSamples.push(extractDocumentMeta(block));
    }
  } else if (type === "tool_use") {
    const name = block.name;
    if (name?.startsWith("mcp__")) {
      result.mcpCount++;
      result.mcpToolNames.add(name);
    }
  } else if (type === "tool_result") {
    result.toolResultCount++;
    if (Array.isArray(block.content)) {
      for (const nested of block.content) {
        if (nested && typeof nested === "object") {
          processContentBlock(nested, result);
        }
      }
    }
  }
}
async function scanNewLinesForExtendedTypes(filePath, sessionId, stateDir) {
  const state = await readPocState(sessionId, stateDir);
  const lastReadLine = state.lastReadLine;
  const accumulator = {
    imageSamples: [],
    documentSamples: [],
    mcpToolNames: new Set,
    unknownTypes: new Set,
    imageCount: 0,
    documentCount: 0,
    mcpCount: 0,
    toolResultCount: 0
  };
  let lineNumber = 0;
  let newLinesScanned = 0;
  let lastSuccessfulLine = lastReadLine - 1;
  try {
    const stream = createReadStream(filePath, { encoding: "utf-8" });
    const rl = createInterface({ input: stream, crlfDelay: Number.POSITIVE_INFINITY });
    for await (const line of rl) {
      const trimmed = line.trim();
      if (lineNumber < lastReadLine) {
        lineNumber++;
        continue;
      }
      if (!trimmed) {
        lineNumber++;
        continue;
      }
      try {
        const entry = JSON.parse(trimmed);
        newLinesScanned++;
        const message = entry.message;
        if (message && Array.isArray(message.content)) {
          for (const block of message.content) {
            if (block && typeof block === "object") {
              processContentBlock(block, accumulator);
            }
          }
        }
        lastSuccessfulLine = lineNumber;
      } catch {}
      lineNumber++;
    }
  } catch {}
  await writePocState(sessionId, stateDir, { lastReadLine: lastSuccessfulLine + 1 });
  return {
    new_lines_scanned: newLinesScanned,
    image_blocks_found: accumulator.imageCount,
    document_blocks_found: accumulator.documentCount,
    mcp_tool_uses_found: accumulator.mcpCount,
    tool_result_blocks_found: accumulator.toolResultCount,
    image_samples: accumulator.imageSamples,
    document_samples: accumulator.documentSamples,
    mcp_tool_names: Array.from(accumulator.mcpToolNames),
    unknown_content_block_types: Array.from(accumulator.unknownTypes)
  };
}
export {
  scanNewLinesForExtendedTypes
};
