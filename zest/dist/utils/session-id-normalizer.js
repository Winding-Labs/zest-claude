// ../../node_modules/uuid/dist-node/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

// ../../node_modules/uuid/dist-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// ../../node_modules/uuid/dist-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  return Uint8Array.of((v = parseInt(uuid.slice(0, 8), 16)) >>> 24, v >>> 16 & 255, v >>> 8 & 255, v & 255, (v = parseInt(uuid.slice(9, 13), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(14, 18), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(19, 23), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255, v / 4294967296 & 255, v >>> 24 & 255, v >>> 16 & 255, v >>> 8 & 255, v & 255);
}
var parse_default = parse;

// ../../node_modules/uuid/dist-node/stringify.js
var byteToHex = [];
for (let i = 0;i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// ../../node_modules/uuid/dist-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = new Uint8Array(str.length);
  for (let i = 0;i < str.length; ++i) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(version, hash, value, namespace, buf, offset) {
  const valueBytes = typeof value === "string" ? stringToBytes(value) : value;
  const namespaceBytes = typeof namespace === "string" ? parse_default(namespace) : namespace;
  if (typeof namespace === "string") {
    namespace = parse_default(namespace);
  }
  if (namespace?.length !== 16) {
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  }
  let bytes = new Uint8Array(16 + valueBytes.length);
  bytes.set(namespaceBytes);
  bytes.set(valueBytes, namespaceBytes.length);
  bytes = hash(bytes);
  bytes[6] = bytes[6] & 15 | version;
  bytes[8] = bytes[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0;i < 16; ++i) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return unsafeStringify(bytes);
}

// ../../node_modules/uuid/dist-node/sha1.js
import { createHash } from "node:crypto";
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return createHash("sha1").update(bytes).digest();
}
var sha1_default = sha1;

// ../../node_modules/uuid/dist-node/v5.js
function v5(value, namespace, buf, offset) {
  return v35(80, sha1_default, value, namespace, buf, offset);
}
v5.DNS = DNS;
v5.URL = URL;
var v5_default = v5;
// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_ZEST_DIR = join(homedir(), `.claude-zest${""}`);
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
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");
var ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

// src/utils/session-id-normalizer.ts
function isValidSessionId(sessionId) {
  return validate_default(sessionId);
}
function normalizeSessionId(sessionId) {
  if (validate_default(sessionId)) {
    return sessionId;
  }
  return v5_default(sessionId, ZEST_SESSION_NAMESPACE);
}
export {
  normalizeSessionId,
  isValidSessionId
};

//# debugId=2EC695B2903460E664756E2164756E21
