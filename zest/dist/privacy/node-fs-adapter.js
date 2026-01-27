// src/privacy/node-fs-adapter.ts
import { readFile, readdir, stat } from "node:fs/promises";
function createNodeFsAdapter(workspaceRoot) {
  return {
    async readFile(path) {
      return readFile(path, "utf-8");
    },
    async fileExists(path) {
      try {
        await stat(path);
        return true;
      } catch {
        return false;
      }
    },
    async readDir(path) {
      return readdir(path);
    },
    getWorkspaceRoot() {
      return workspaceRoot;
    }
  };
}
export {
  createNodeFsAdapter
};
