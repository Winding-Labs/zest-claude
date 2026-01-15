#!/usr/bin/env node
import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR, CLAUDE_PROJECTS_DIR, CLAUDE_SETTINGS_FILE, CLAUDE_ZEST_DIR, QUEUE_DIR, LOGS_DIR, STATE_DIR, DELETION_CACHE_DIR, SESSION_FILE, SETTINGS_FILE, DAEMON_PID_FILE, STATUSLINE_SCRIPT_PATH, STATUS_CACHE_FILE, EVENTS_QUEUE_FILE, SESSIONS_QUEUE_FILE, MESSAGES_QUEUE_FILE, LOCK_RETRY_MS = 50, LOCK_MAX_RETRIES = 300, DEBOUNCE_DIR, DEBOUNCE_WINDOW_MS = 500, DELETION_CACHE_TTL_MS, LOG_RETENTION_DAYS = 7, PROACTIVE_REFRESH_THRESHOLD_MS, MAX_DIFF_SIZE_BYTES, STALE_SESSION_AGE_MS, EXCLUDED_COMMAND_PATTERNS, UPDATE_CHECK_CACHE_TTL_MS;
var init_constants = __esm(() => {
  CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
  CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
  CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
  CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
  QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
  LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
  STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
  DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
  SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
  SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
  DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
  STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
  STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
  EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
  SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
  MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
  DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
  DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
  PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
  MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
  STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
  EXCLUDED_COMMAND_PATTERNS = [
    /^\/(add-dir|agents|bashes|bug|clear|compact|config|context|cost|doctor|exit|export|help|hooks|ide|init|install-github-app|login|logout|mcp|memory|model|output-style|permissions|plugin|pr-comments|privacy-settings|release-notes|resume|review|rewind|sandbox|security-review|stats|status|statusline|terminal-setup|todos|usage|vim)\b/i,
    /^\/zest[^:\s]*:/i,
    /<command-name>\/zest[^<]*<\/command-name>/i,
    /node\s+.*\/dist\/commands\/.*-cli\.js/i
  ];
  UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
});

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}
var init_fs_utils = () => {};

// src/utils/log-rotation.ts
import { readdir, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";
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
    const files = await readdir(LOGS_DIR);
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
var CLEANUP_THROTTLE_MS, lastCleanupTime;
var init_log_rotation = __esm(() => {
  init_constants();
  init_fs_utils();
  init_logger();
  CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
  lastCleanupTime = {};
});

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

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
var logger;
var init_logger = __esm(() => {
  init_fs_utils();
  init_log_rotation();
  logger = new Logger;
});

// src/utils/deletion-cache.ts
var exports_deletion_cache = {};
__export(exports_deletion_cache, {
  getCachedFileContent: () => getCachedFileContent,
  cleanupOldCache: () => cleanupOldCache,
  cacheFileForDeletion: () => cacheFileForDeletion
});
import { readdir as readdir4, readFile as readFile3, rm, stat as stat3, writeFile as writeFile3 } from "node:fs/promises";
import { join as join5 } from "node:path";
function getCacheKey(filePath, sessionId) {
  const hash = Buffer.from(filePath).toString("base64").replace(/[/+=]/g, "_");
  return `${sessionId}_${hash}.json`;
}
async function cacheFileForDeletion(filePath, content, sessionId) {
  try {
    await ensureDirectory(DELETION_CACHE_DIR);
    const cached = {
      filePath,
      content,
      timestamp: Date.now(),
      sessionId
    };
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join5(DELETION_CACHE_DIR, cacheKey);
    await writeFile3(cachePath, JSON.stringify(cached, null, 2), "utf-8");
    logger.debug(`Cached file content: ${filePath} (${content.length} chars)`);
  } catch (error) {
    logger.error(`Failed to cache file for deletion: ${filePath}`, error);
  }
}
async function getCachedFileContent(filePath, sessionId) {
  try {
    const cacheKey = getCacheKey(filePath, sessionId);
    const cachePath = join5(DELETION_CACHE_DIR, cacheKey);
    try {
      const content = await readFile3(cachePath, "utf-8");
      const cached = JSON.parse(content);
      const age = Date.now() - cached.timestamp;
      if (age > DELETION_CACHE_TTL_MS) {
        logger.debug(`Cache expired for ${filePath} (${age}ms old)`);
        await rm(cachePath).catch(() => {});
        return null;
      }
      await rm(cachePath).catch(() => {});
      logger.debug(`Retrieved cached content for ${filePath} (${cached.content.length} chars)`);
      return cached.content;
    } catch (readError) {
      logger.debug(`Cache not found for ${filePath}`);
      return null;
    }
  } catch (error) {
    logger.error(`Failed to retrieve cached content: ${filePath}`, error);
    return null;
  }
}
async function cleanupOldCache() {
  try {
    await ensureDirectory(DELETION_CACHE_DIR);
    const files = await readdir4(DELETION_CACHE_DIR);
    const now = Date.now();
    for (const file of files) {
      try {
        const filePath = join5(DELETION_CACHE_DIR, file);
        const stats = await stat3(filePath);
        const age = now - stats.mtimeMs;
        if (age > DELETION_CACHE_TTL_MS) {
          await rm(filePath);
          logger.debug(`Cleaned up old cache entry: ${file} (${age}ms old)`);
        }
      } catch (error) {
        logger.debug(`Failed to clean up cache file ${file}:`, error);
      }
    }
  } catch (error) {
    logger.error("Failed to cleanup old cache:", error);
  }
}
var init_deletion_cache = __esm(() => {
  init_constants();
  init_fs_utils();
  init_logger();
});

// src/utils/debounce-manager.ts
init_constants();
import { readdir as readdir3, readFile as readFile2, stat as stat2, unlink as unlink3, writeFile as writeFile2 } from "node:fs/promises";
import { join as join4 } from "node:path";

// src/utils/file-lock.ts
init_constants();
import { readdir as readdir2, readFile, unlink as unlink2, writeFile } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";

// src/utils/daemon-manager.ts
import { dirname as dirname2, join as join3 } from "node:path";
import { fileURLToPath } from "node:url";
init_constants();
init_fs_utils();
init_logger();
var DAEMON_RESTART_LOCK = join3(CLAUDE_ZEST_DIR, "daemon-restart.lock");
var __filename2 = fileURLToPath(import.meta.url);
var __dirname2 = dirname2(__filename2);
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

// src/utils/file-lock.ts
init_fs_utils();
init_logger();
var activeLockFiles = new Set;
function isLockStale(lockInfo) {
  return !isProcessRunning(lockInfo.pid);
}
async function acquireFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  const lockInfo = {
    pid: process.pid,
    timestamp: Date.now()
  };
  try {
    await ensureDirectory(dirname3(lockFile));
    await writeFile(lockFile, JSON.stringify(lockInfo), { flag: "wx" });
    activeLockFiles.add(lockFile);
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") {
      const errCode = error.code;
      if (errCode === "ENOENT" || errCode === "EACCES") {
        logger.error(`Failed to create lock file ${lockFile}:`, error);
      }
      throw error;
    }
    try {
      const content = await readFile(lockFile, "utf8");
      const existingLock = JSON.parse(content);
      if (isLockStale(existingLock)) {
        logger.debug(`Removing stale lock for ${filePath} (PID ${existingLock.pid} is dead)`);
        await unlink2(lockFile).catch(() => {});
        return acquireFileLock(filePath);
      }
    } catch {
      logger.debug(`Lock file for ${filePath} is corrupted or unreadable, removing`);
      await unlink2(lockFile).catch(() => {});
      return acquireFileLock(filePath);
    }
    return false;
  }
}
async function releaseFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  activeLockFiles.delete(lockFile);
  await unlink2(lockFile).catch(() => {});
}
async function withFileLock(filePath, fn) {
  let retries = 0;
  while (!await acquireFileLock(filePath)) {
    if (++retries >= LOCK_MAX_RETRIES) {
      throw new Error(`Failed to acquire lock for ${filePath} after ${retries} retries`);
    }
    await new Promise((resolve) => setTimeout(resolve, LOCK_RETRY_MS));
  }
  try {
    return await fn();
  } finally {
    await releaseFileLock(filePath);
  }
}

// src/utils/debounce-manager.ts
init_fs_utils();
init_logger();
async function shouldSkipDuplicate(hookType, sessionId) {
  const debounceFile = join4(DEBOUNCE_DIR, `${hookType}-${sessionId}.json`);
  try {
    await ensureDirectory(DEBOUNCE_DIR);
    return await withFileLock(debounceFile, async () => {
      const now = Date.now();
      try {
        const content = await readFile2(debounceFile, "utf-8");
        const info = JSON.parse(content);
        if (now - info.timestamp < DEBOUNCE_WINDOW_MS) {
          logger.info(`Skipping duplicate ${hookType} (within ${DEBOUNCE_WINDOW_MS}ms window, PID ${info.pid} was first)`);
          return true;
        }
      } catch {}
      const newInfo = {
        timestamp: now,
        pid: process.pid
      };
      await writeFile2(debounceFile, JSON.stringify(newInfo), "utf-8");
      return false;
    });
  } catch (error) {
    logger.debug(`Debounce check failed for ${hookType}:`, error);
    return false;
  }
}

// src/hooks/pre-tool-handler-cli.ts
init_deletion_cache();

// src/utils/extraction-helpers.ts
import { stat as stat4 } from "node:fs/promises";
import { basename, join as join6 } from "node:path";
// src/auth/session-manager.ts
init_constants();
init_fs_utils();
init_logger();

// src/utils/extraction-helpers.ts
init_constants();

// src/utils/command-filters.ts
init_constants();

// src/extractors/extraction-utils.ts
init_constants();
init_deletion_cache();

// ../../node_modules/diff/libesm/diff/base.js
var Diff = function() {
  function Diff2() {}
  Diff2.prototype.diff = function(oldString, newString, options) {
    if (options === undefined) {
      options = {};
    }
    var callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if ("callback" in options) {
      callback = options.callback;
    }
    oldString = this.castInput(oldString, options);
    newString = this.castInput(newString, options);
    var oldTokens = this.removeEmpty(this.tokenize(oldString, options));
    var newTokens = this.removeEmpty(this.tokenize(newString, options));
    return this.diffWithOptionsObj(oldTokens, newTokens, options, callback);
  };
  Diff2.prototype.diffWithOptionsObj = function(oldTokens, newTokens, options, callback) {
    var _this = this;
    var _a;
    var done = function(value) {
      value = _this.postProcess(value, options);
      if (callback) {
        setTimeout(function() {
          callback(value);
        }, 0);
        return;
      } else {
        return value;
      }
    };
    var newLen = newTokens.length, oldLen = oldTokens.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    if (options.maxEditLength != null) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }
    var maxExecutionTime = (_a = options.timeout) !== null && _a !== undefined ? _a : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{ oldPos: -1, lastComponent: undefined }];
    var newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options);
    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
    }
    var minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
    var execEditLength = function() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength);diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = undefined;
        var removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
        if (removePath) {
          bestPath[diagonalPath - 1] = undefined;
        }
        var canAdd = false;
        if (addPath) {
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }
        var canRemove = removePath && removePath.oldPos + 1 < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = undefined;
          continue;
        }
        if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
          basePath = _this.addToPath(addPath, true, false, 0, options);
        } else {
          basePath = _this.addToPath(removePath, false, true, 1, options);
        }
        newPos = _this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options);
        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          return done(_this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
        } else {
          bestPath[diagonalPath] = basePath;
          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }
          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }
      editLength++;
    };
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback(undefined);
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  };
  Diff2.prototype.addToPath = function(path, added, removed, oldPosInc, options) {
    var last = path.lastComponent;
    if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: last.count + 1, added, removed, previousComponent: last.previousComponent }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: 1, added, removed, previousComponent: last }
      };
    }
  };
  Diff2.prototype.extractCommon = function(basePath, newTokens, oldTokens, diagonalPath, options) {
    var newLen = newTokens.length, oldLen = oldTokens.length;
    var oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options)) {
      newPos++;
      oldPos++;
      commonCount++;
      if (options.oneChangePerToken) {
        basePath.lastComponent = { count: 1, previousComponent: basePath.lastComponent, added: false, removed: false };
      }
    }
    if (commonCount && !options.oneChangePerToken) {
      basePath.lastComponent = { count: commonCount, previousComponent: basePath.lastComponent, added: false, removed: false };
    }
    basePath.oldPos = oldPos;
    return newPos;
  };
  Diff2.prototype.equals = function(left, right, options) {
    if (options.comparator) {
      return options.comparator(left, right);
    } else {
      return left === right || !!options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  };
  Diff2.prototype.removeEmpty = function(array) {
    var ret = [];
    for (var i = 0;i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  };
  Diff2.prototype.castInput = function(value, options) {
    return value;
  };
  Diff2.prototype.tokenize = function(value, options) {
    return Array.from(value);
  };
  Diff2.prototype.join = function(chars) {
    return chars.join("");
  };
  Diff2.prototype.postProcess = function(changeObjects, options) {
    return changeObjects;
  };
  Object.defineProperty(Diff2.prototype, "useLongestToken", {
    get: function() {
      return false;
    },
    enumerable: false,
    configurable: true
  });
  Diff2.prototype.buildValues = function(lastComponent, newTokens, oldTokens) {
    var components = [];
    var nextComponent;
    while (lastComponent) {
      components.push(lastComponent);
      nextComponent = lastComponent.previousComponent;
      delete lastComponent.previousComponent;
      lastComponent = nextComponent;
    }
    components.reverse();
    var componentLen = components.length;
    var componentPos = 0, newPos = 0, oldPos = 0;
    for (;componentPos < componentLen; componentPos++) {
      var component = components[componentPos];
      if (!component.removed) {
        if (!component.added && this.useLongestToken) {
          var value = newTokens.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            var oldValue = oldTokens[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = this.join(value);
        } else {
          component.value = this.join(newTokens.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
      }
    }
    return components;
  };
  return Diff2;
}();
var base_default = Diff;

// ../../node_modules/diff/libesm/diff/character.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var CharacterDiff = function(_super) {
  __extends(CharacterDiff2, _super);
  function CharacterDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return CharacterDiff2;
}(base_default);
var characterDiff = new CharacterDiff;

// ../../node_modules/diff/libesm/util/string.js
function longestCommonPrefix(str1, str2) {
  var i;
  for (i = 0;i < str1.length && i < str2.length; i++) {
    if (str1[i] != str2[i]) {
      return str1.slice(0, i);
    }
  }
  return str1.slice(0, i);
}
function longestCommonSuffix(str1, str2) {
  var i;
  if (!str1 || !str2 || str1[str1.length - 1] != str2[str2.length - 1]) {
    return "";
  }
  for (i = 0;i < str1.length && i < str2.length; i++) {
    if (str1[str1.length - (i + 1)] != str2[str2.length - (i + 1)]) {
      return str1.slice(-i);
    }
  }
  return str1.slice(-i);
}
function replacePrefix(string, oldPrefix, newPrefix) {
  if (string.slice(0, oldPrefix.length) != oldPrefix) {
    throw Error("string ".concat(JSON.stringify(string), " doesn't start with prefix ").concat(JSON.stringify(oldPrefix), "; this is a bug"));
  }
  return newPrefix + string.slice(oldPrefix.length);
}
function replaceSuffix(string, oldSuffix, newSuffix) {
  if (!oldSuffix) {
    return string + newSuffix;
  }
  if (string.slice(-oldSuffix.length) != oldSuffix) {
    throw Error("string ".concat(JSON.stringify(string), " doesn't end with suffix ").concat(JSON.stringify(oldSuffix), "; this is a bug"));
  }
  return string.slice(0, -oldSuffix.length) + newSuffix;
}
function removePrefix(string, oldPrefix) {
  return replacePrefix(string, oldPrefix, "");
}
function removeSuffix(string, oldSuffix) {
  return replaceSuffix(string, oldSuffix, "");
}
function maximumOverlap(string1, string2) {
  return string2.slice(0, overlapCount(string1, string2));
}
function overlapCount(a, b) {
  var startA = 0;
  if (a.length > b.length) {
    startA = a.length - b.length;
  }
  var endB = b.length;
  if (a.length < b.length) {
    endB = a.length;
  }
  var map = Array(endB);
  var k = 0;
  map[0] = 0;
  for (var j = 1;j < endB; j++) {
    if (b[j] == b[k]) {
      map[j] = map[k];
    } else {
      map[j] = k;
    }
    while (k > 0 && b[j] != b[k]) {
      k = map[k];
    }
    if (b[j] == b[k]) {
      k++;
    }
  }
  k = 0;
  for (var i = startA;i < a.length; i++) {
    while (k > 0 && a[i] != b[k]) {
      k = map[k];
    }
    if (a[i] == b[k]) {
      k++;
    }
  }
  return k;
}
function trailingWs(string) {
  var i;
  for (i = string.length - 1;i >= 0; i--) {
    if (!string[i].match(/\s/)) {
      break;
    }
  }
  return string.substring(i + 1);
}
function leadingWs(string) {
  var match = string.match(/^\s*/);
  return match ? match[0] : "";
}

// ../../node_modules/diff/libesm/diff/word.js
var __extends2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var extendedWordChars = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
var tokenizeIncludingWhitespace = new RegExp("[".concat(extendedWordChars, "]+|\\s+|[^").concat(extendedWordChars, "]"), "ug");
var WordDiff = function(_super) {
  __extends2(WordDiff2, _super);
  function WordDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  WordDiff2.prototype.equals = function(left, right, options) {
    if (options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }
    return left.trim() === right.trim();
  };
  WordDiff2.prototype.tokenize = function(value, options) {
    if (options === undefined) {
      options = {};
    }
    var parts;
    if (options.intlSegmenter) {
      var segmenter = options.intlSegmenter;
      if (segmenter.resolvedOptions().granularity != "word") {
        throw new Error('The segmenter passed must have a granularity of "word"');
      }
      parts = Array.from(segmenter.segment(value), function(segment) {
        return segment.segment;
      });
    } else {
      parts = value.match(tokenizeIncludingWhitespace) || [];
    }
    var tokens = [];
    var prevPart = null;
    parts.forEach(function(part) {
      if (/\s/.test(part)) {
        if (prevPart == null) {
          tokens.push(part);
        } else {
          tokens.push(tokens.pop() + part);
        }
      } else if (prevPart != null && /\s/.test(prevPart)) {
        if (tokens[tokens.length - 1] == prevPart) {
          tokens.push(tokens.pop() + part);
        } else {
          tokens.push(prevPart + part);
        }
      } else {
        tokens.push(part);
      }
      prevPart = part;
    });
    return tokens;
  };
  WordDiff2.prototype.join = function(tokens) {
    return tokens.map(function(token, i) {
      if (i == 0) {
        return token;
      } else {
        return token.replace(/^\s+/, "");
      }
    }).join("");
  };
  WordDiff2.prototype.postProcess = function(changes, options) {
    if (!changes || options.oneChangePerToken) {
      return changes;
    }
    var lastKeep = null;
    var insertion = null;
    var deletion = null;
    changes.forEach(function(change) {
      if (change.added) {
        insertion = change;
      } else if (change.removed) {
        deletion = change;
      } else {
        if (insertion || deletion) {
          dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, change);
        }
        lastKeep = change;
        insertion = null;
        deletion = null;
      }
    });
    if (insertion || deletion) {
      dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, null);
    }
    return changes;
  };
  return WordDiff2;
}(base_default);
var wordDiff = new WordDiff;
function dedupeWhitespaceInChangeObjects(startKeep, deletion, insertion, endKeep) {
  if (deletion && insertion) {
    var oldWsPrefix = leadingWs(deletion.value);
    var oldWsSuffix = trailingWs(deletion.value);
    var newWsPrefix = leadingWs(insertion.value);
    var newWsSuffix = trailingWs(insertion.value);
    if (startKeep) {
      var commonWsPrefix = longestCommonPrefix(oldWsPrefix, newWsPrefix);
      startKeep.value = replaceSuffix(startKeep.value, newWsPrefix, commonWsPrefix);
      deletion.value = removePrefix(deletion.value, commonWsPrefix);
      insertion.value = removePrefix(insertion.value, commonWsPrefix);
    }
    if (endKeep) {
      var commonWsSuffix = longestCommonSuffix(oldWsSuffix, newWsSuffix);
      endKeep.value = replacePrefix(endKeep.value, newWsSuffix, commonWsSuffix);
      deletion.value = removeSuffix(deletion.value, commonWsSuffix);
      insertion.value = removeSuffix(insertion.value, commonWsSuffix);
    }
  } else if (insertion) {
    if (startKeep) {
      var ws = leadingWs(insertion.value);
      insertion.value = insertion.value.substring(ws.length);
    }
    if (endKeep) {
      var ws = leadingWs(endKeep.value);
      endKeep.value = endKeep.value.substring(ws.length);
    }
  } else if (startKeep && endKeep) {
    var newWsFull = leadingWs(endKeep.value), delWsStart = leadingWs(deletion.value), delWsEnd = trailingWs(deletion.value);
    var newWsStart = longestCommonPrefix(newWsFull, delWsStart);
    deletion.value = removePrefix(deletion.value, newWsStart);
    var newWsEnd = longestCommonSuffix(removePrefix(newWsFull, newWsStart), delWsEnd);
    deletion.value = removeSuffix(deletion.value, newWsEnd);
    endKeep.value = replacePrefix(endKeep.value, newWsFull, newWsEnd);
    startKeep.value = replaceSuffix(startKeep.value, newWsFull, newWsFull.slice(0, newWsFull.length - newWsEnd.length));
  } else if (endKeep) {
    var endKeepWsPrefix = leadingWs(endKeep.value);
    var deletionWsSuffix = trailingWs(deletion.value);
    var overlap = maximumOverlap(deletionWsSuffix, endKeepWsPrefix);
    deletion.value = removeSuffix(deletion.value, overlap);
  } else if (startKeep) {
    var startKeepWsSuffix = trailingWs(startKeep.value);
    var deletionWsPrefix = leadingWs(deletion.value);
    var overlap = maximumOverlap(startKeepWsSuffix, deletionWsPrefix);
    deletion.value = removePrefix(deletion.value, overlap);
  }
}
var WordsWithSpaceDiff = function(_super) {
  __extends2(WordsWithSpaceDiff2, _super);
  function WordsWithSpaceDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  WordsWithSpaceDiff2.prototype.tokenize = function(value) {
    var regex = new RegExp("(\\r?\\n)|[".concat(extendedWordChars, "]+|[^\\S\\n\\r]+|[^").concat(extendedWordChars, "]"), "ug");
    return value.match(regex) || [];
  };
  return WordsWithSpaceDiff2;
}(base_default);
var wordsWithSpaceDiff = new WordsWithSpaceDiff;

// ../../node_modules/diff/libesm/diff/line.js
var __extends3 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var LineDiff = function(_super) {
  __extends3(LineDiff2, _super);
  function LineDiff2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.tokenize = tokenize;
    return _this;
  }
  LineDiff2.prototype.equals = function(left, right, options) {
    if (options.ignoreWhitespace) {
      if (!options.newlineIsToken || !left.includes(`
`)) {
        left = left.trim();
      }
      if (!options.newlineIsToken || !right.includes(`
`)) {
        right = right.trim();
      }
    } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
      if (left.endsWith(`
`)) {
        left = left.slice(0, -1);
      }
      if (right.endsWith(`
`)) {
        right = right.slice(0, -1);
      }
    }
    return _super.prototype.equals.call(this, left, right, options);
  };
  return LineDiff2;
}(base_default);
var lineDiff = new LineDiff;
function tokenize(value, options) {
  if (options.stripTrailingCr) {
    value = value.replace(/\r\n/g, `
`);
  }
  var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (var i = 0;i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];
    if (i % 2 && !options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      retLines.push(line);
    }
  }
  return retLines;
}

// ../../node_modules/diff/libesm/diff/sentence.js
var __extends4 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var SentenceDiff = function(_super) {
  __extends4(SentenceDiff2, _super);
  function SentenceDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SentenceDiff2.prototype.tokenize = function(value) {
    return value.split(/(?<=[.!?])(\s+|$)/);
  };
  return SentenceDiff2;
}(base_default);
var sentenceDiff = new SentenceDiff;

// ../../node_modules/diff/libesm/diff/css.js
var __extends5 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var CssDiff = function(_super) {
  __extends5(CssDiff2, _super);
  function CssDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  CssDiff2.prototype.tokenize = function(value) {
    return value.split(/([{}:;,]|\s+)/);
  };
  return CssDiff2;
}(base_default);
var cssDiff = new CssDiff;

// ../../node_modules/diff/libesm/diff/json.js
var __extends6 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var JsonDiff = function(_super) {
  __extends6(JsonDiff2, _super);
  function JsonDiff2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.tokenize = tokenize;
    return _this;
  }
  Object.defineProperty(JsonDiff2.prototype, "useLongestToken", {
    get: function() {
      return true;
    },
    enumerable: false,
    configurable: true
  });
  JsonDiff2.prototype.castInput = function(value, options) {
    var { undefinedReplacement, stringifyReplacer: _a } = options, stringifyReplacer = _a === undefined ? function(k, v) {
      return typeof v === "undefined" ? undefinedReplacement : v;
    } : _a;
    return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), null, "  ");
  };
  JsonDiff2.prototype.equals = function(left, right, options) {
    return _super.prototype.equals.call(this, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"), options);
  };
  return JsonDiff2;
}(base_default);
var jsonDiff = new JsonDiff;
function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];
  if (replacer) {
    obj = replacer(key === undefined ? "" : key, obj);
  }
  var i;
  for (i = 0;i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }
  var canonicalizedObj;
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0;i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, String(i));
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }
  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }
  if (typeof obj === "object" && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [];
    var key_1;
    for (key_1 in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key_1)) {
        sortedKeys.push(key_1);
      }
    }
    sortedKeys.sort();
    for (i = 0;i < sortedKeys.length; i += 1) {
      key_1 = sortedKeys[i];
      canonicalizedObj[key_1] = canonicalize(obj[key_1], stack, replacementStack, replacer, key_1);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}

// ../../node_modules/diff/libesm/diff/array.js
var __extends7 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  };
}();
var ArrayDiff = function(_super) {
  __extends7(ArrayDiff2, _super);
  function ArrayDiff2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ArrayDiff2.prototype.tokenize = function(value) {
    return value.slice();
  };
  ArrayDiff2.prototype.join = function(value) {
    return value;
  };
  ArrayDiff2.prototype.removeEmpty = function(value) {
    return value;
  };
  return ArrayDiff2;
}(base_default);
var arrayDiff = new ArrayDiff;

// src/utils/diff-utils.ts
init_constants();
init_logger();

// src/extractors/extraction-utils.ts
init_logger();

// src/utils/command-filters.ts
init_logger();
function shouldExcludeCommand(command) {
  const trimmedCommand = command.trim();
  for (const pattern of EXCLUDED_COMMAND_PATTERNS) {
    if (pattern.test(trimmedCommand)) {
      return true;
    }
  }
  return false;
}

// src/extractors/message-parser.ts
init_logger();

// src/utils/extraction-helpers.ts
init_logger();

// src/utils/queue-manager.ts
init_constants();
init_fs_utils();
init_logger();

// src/utils/state-manager.ts
init_constants();
init_fs_utils();
init_logger();

// src/utils/extraction-helpers.ts
async function findRecentBashCommand(conversationFile) {
  try {
    const { readFile: readFile4 } = await import("node:fs/promises");
    const content = await readFile4(conversationFile, "utf-8");
    const lines = content.trim().split(`
`).filter((l) => l.trim());
    for (let i = lines.length - 1;i >= Math.max(0, lines.length - 5); i--) {
      try {
        const entry = JSON.parse(lines[i]);
        if (entry.message?.content && Array.isArray(entry.message.content)) {
          for (const block of entry.message.content) {
            if (block.type === "tool_use" && (block.name === "Bash" || block.name === "bash")) {
              const command = block.input?.command || block.input?.cmd;
              if (command) {
                if (shouldExcludeCommand(command)) {
                  logger.debug(`Filtered out excluded bash command: ${command.substring(0, 50)}...`);
                  return null;
                }
                return command;
              }
            }
          }
        }
      } catch {}
    }
    return null;
  } catch (error) {
    logger.debug("Failed to find recent Bash command:", error);
    return null;
  }
}
function parseRmCommand(command) {
  if (!command)
    return [];
  const cmd = command.trim();
  const rmMatch = cmd.match(/^rm\s+(?:-[a-zA-Z]+\s+)*(.+)$/);
  if (rmMatch) {
    const pathsString = rmMatch[1].trim();
    const paths = pathsString.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)?.map((p) => p.replace(/['"]/g, "")) || [];
    return paths;
  }
  return [];
}
async function cacheFilesForDeletion(filePaths, sessionId, projectDir) {
  const { readFile: readFile4 } = await import("node:fs/promises");
  const { resolve } = await import("node:path");
  const { cacheFileForDeletion: cacheFileForDeletion2 } = await Promise.resolve().then(() => (init_deletion_cache(), exports_deletion_cache));
  for (const filePath of filePaths) {
    try {
      const absolutePath = filePath.startsWith("/") ? filePath : resolve(projectDir, filePath);
      const content = await readFile4(absolutePath, "utf-8");
      await cacheFileForDeletion2(absolutePath, content, sessionId);
    } catch (error) {
      logger.debug(`Could not cache ${filePath}:`, error);
    }
  }
}
async function findConversationFile(projectDir) {
  try {
    const claudeDirName = projectDir.replace(/\//g, "-");
    const projectPath = join6(CLAUDE_PROJECTS_DIR, claudeDirName);
    logger.debug(`Looking for project directory: ${projectPath}`);
    try {
      await stat4(projectPath);
    } catch {
      logger.warn(`Project directory not found: ${projectPath}`);
      return null;
    }
    const { readdir: readdir5 } = await import("node:fs/promises");
    const entries = await readdir5(projectPath);
    const jsonlFiles = entries.filter((f) => f.endsWith(".jsonl"));
    if (jsonlFiles.length === 0) {
      logger.warn(`No session files found in ${projectPath}`);
      return null;
    }
    let mostRecentFile = jsonlFiles[0];
    let mostRecentTime = 0;
    for (const file of jsonlFiles) {
      const filePath = join6(projectPath, file);
      const stats = await stat4(filePath);
      if (stats.mtimeMs > mostRecentTime) {
        mostRecentTime = stats.mtimeMs;
        mostRecentFile = file;
      }
    }
    const conversationFile = join6(projectPath, mostRecentFile);
    const sessionId = basename(mostRecentFile, ".jsonl");
    const fileStats = await stat4(conversationFile);
    return { conversationFile, sessionId, fileStats };
  } catch (error) {
    logger.error("Failed to find conversation file:", error);
    return null;
  }
}

// src/hooks/pre-tool-handler-cli.ts
init_logger();
async function main() {
  const projectDir = process.env.CLAUDE_PROJECT_DIR;
  try {
    if (!projectDir) {
      logger.warn("[PreToolUse] No project directory, cannot find session");
      process.exit(0);
    }
    const sessionInfo = await findConversationFile(projectDir);
    if (!sessionInfo) {
      logger.warn("[PreToolUse] Could not find session info");
      process.exit(0);
    }
    const { conversationFile, sessionId } = sessionInfo;
    const command = await findRecentBashCommand(conversationFile);
    if (!command) {
      logger.debug("No Bash command found in recent JSONL entries");
      process.exit(0);
    }
    const filesToDelete = parseRmCommand(command);
    if (filesToDelete.length === 0) {
      logger.debug("Not an rm command, skipping");
      process.exit(0);
    }
    const debounceKey = `${sessionId}-${filesToDelete.sort().join(",")}`;
    if (await shouldSkipDuplicate("PreToolUse", debounceKey)) {
      logger.debug("Skipping duplicate PreToolUse");
      process.exit(0);
    }
    logger.info(`Detected file deletion: ${filesToDelete.length} file(s) - ${filesToDelete.join(", ")}`);
    await cacheFilesForDeletion(filesToDelete, sessionId, projectDir);
    cleanupOldCache().catch((err) => logger.debug("Cache cleanup failed:", err));
  } catch (error) {
    logger.error("Failed to process PreToolUse:", error);
    process.exit(0);
  }
}
main().catch((error) => {
  console.error("PreToolUse handler error:", error);
  process.exit(1);
});
