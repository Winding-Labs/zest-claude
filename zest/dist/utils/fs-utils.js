// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
function sanitizeForFilename(input) {
  return input.replace(/[\\/:*?"<>|]/g, "_");
}
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}
export {
  sanitizeForFilename,
  ensureDirectory
};
