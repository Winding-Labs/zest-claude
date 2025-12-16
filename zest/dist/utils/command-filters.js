// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_ZEST_DIR = join(homedir(), `.claude-zest${"-dev"}`);
var QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
var LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
var STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
var DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
var SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var LOG_FILE = join(LOGS_DIR, "plugin.log");
var SYNC_LOG_FILE = join(LOGS_DIR, "sync.log");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");
var EXCLUDED_COMMAND_PATTERNS = [
  /^\/(add-dir|agents|bashes|bug|clear|compact|config|context|cost|doctor|exit|export|help|hooks|ide|init|install-github-app|login|logout|mcp|memory|model|output-style|permissions|plugin|pr-comments|privacy-settings|release-notes|resume|review|rewind|sandbox|security-review|stats|status|statusline|terminal-setup|todos|usage|vim)\b/i,
  /^\/zest[^:\s]*:/i,
  /<command-name>\/zest[^<]*<\/command-name>/i,
  /node\s+.*\/dist\/commands\/.*-cli\.js/i
];

// src/utils/logger.ts
import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
class Logger {
  minLevel = "info";
  levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  setLevel(level) {
    this.minLevel = level;
  }
  async writeToFile(message) {
    try {
      await mkdir(dirname(LOG_FILE), { recursive: true });
      const timestamp = new Date().toISOString();
      await appendFile(LOG_FILE, `[${timestamp}] ${message}
`, "utf-8");
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

// src/extractors/extraction-utils.ts
function extractTextContent(content) {
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    const textBlocks = content.filter((block) => block.type === "text" && block.text).map((block) => block.text);
    return textBlocks.join(`
`);
  }
  return "";
}

// src/utils/command-filters.ts
function shouldExcludeCommand(command) {
  const trimmedCommand = command.trim();
  for (const pattern of EXCLUDED_COMMAND_PATTERNS) {
    if (pattern.test(trimmedCommand)) {
      return true;
    }
  }
  return false;
}
function restoreFilteringState(lines, lastReadLine) {
  if (lastReadLine === 0) {
    return false;
  }
  const lookbackLines = lines.slice(Math.max(0, lastReadLine - 10), lastReadLine);
  for (let i = lookbackLines.length - 1;i >= 0; i--) {
    try {
      const entry = JSON.parse(lookbackLines[i]);
      if (entry.message?.role === "user" && entry.message.content) {
        const textContent = extractTextContent(entry.message.content);
        if (textContent && shouldExcludeCommand(textContent)) {
          logger.debug(`Restored filtering state: last user message was filtered command: ${textContent.substring(0, 50)}...`);
          return true;
        }
        break;
      }
    } catch {}
  }
  return false;
}
function applyMessageFilter(role, textContent, currentState) {
  if (role === "user") {
    if (shouldExcludeCommand(textContent)) {
      return { shouldFilter: true, newState: true };
    }
    return { shouldFilter: false, newState: false };
  }
  if (role === "assistant") {
    if (currentState) {
      return { shouldFilter: true, newState: currentState };
    }
  }
  return { shouldFilter: false, newState: currentState };
}
export {
  shouldExcludeCommand,
  restoreFilteringState,
  applyMessageFilter
};

//# debugId=68AE88569B5AAB4D64756E2164756E21
