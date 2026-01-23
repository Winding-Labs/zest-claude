// src/utils/folder-exclusion.ts
import { normalize, resolve, sep } from "node:path";
function isCaseInsensitiveFilesystem() {
  return process.platform === "win32" || process.platform === "darwin";
}
function normalizeForComparison(path) {
  const normalized = normalize(resolve(path));
  return isCaseInsensitiveFilesystem() ? normalized.toLowerCase() : normalized;
}
function isFolderExcluded(folderPath, settings) {
  const comparePath = normalizeForComparison(folderPath);
  const separatorForComparison = isCaseInsensitiveFilesystem() ? sep.toLowerCase() : sep;
  return settings.excludedFolders.some((excluded) => {
    const compareExcluded = normalizeForComparison(excluded);
    return comparePath === compareExcluded || comparePath.startsWith(compareExcluded + separatorForComparison);
  });
}
function addExcludedFolder(folderPath, settings) {
  const normalizedPath = normalize(resolve(folderPath));
  const comparePath = normalizeForComparison(folderPath);
  const alreadyExists = settings.excludedFolders.some((f) => normalizeForComparison(f) === comparePath);
  if (alreadyExists) {
    return { settings, alreadyExcluded: true };
  }
  return {
    settings: {
      ...settings,
      excludedFolders: [...settings.excludedFolders, normalizedPath]
    },
    alreadyExcluded: false
  };
}
function removeExcludedFolder(folderPath, settings) {
  const comparePath = normalizeForComparison(folderPath);
  const matchIndex = settings.excludedFolders.findIndex((f) => normalizeForComparison(f) === comparePath);
  if (matchIndex === -1) {
    return { settings, wasExcluded: false };
  }
  return {
    settings: {
      ...settings,
      excludedFolders: settings.excludedFolders.filter((_, i) => i !== matchIndex)
    },
    wasExcluded: true
  };
}
export {
  removeExcludedFolder,
  isFolderExcluded,
  addExcludedFolder
};
