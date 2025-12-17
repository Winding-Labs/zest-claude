// src/auth/session-manager.ts
import { mkdir as mkdir2, readFile, unlink, writeFile } from "node:fs/promises";
import { dirname as dirname2 } from "node:path";

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
var PLATFORM = "terminal";
var SOURCE = "claude-code";
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var WEB_APP_URL = "https://app.meetzest.com";
var CLAUDE_PROJECTS_DIR = join(homedir(), ".claude", "projects");
var ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

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

// src/auth/session-manager.ts
async function loadSession() {
  try {
    const content = await readFile(SESSION_FILE, "utf-8");
    const session = JSON.parse(content);
    if (!session.accessToken || !session.refreshToken || !session.expiresAt || !session.userId || !session.email) {
      logger.warn("Invalid session structure, clearing session");
      await clearSession();
      return null;
    }
    const now = Date.now();
    if (session.refreshTokenExpiresAt && session.refreshTokenExpiresAt < now) {
      logger.warn("Refresh token expired, user must re-authenticate");
      await clearSession();
      return null;
    }
    if (session.expiresAt < now) {
      logger.debug("Access token expired, attempting refresh");
      try {
        return await refreshSession(session);
      } catch (error) {
        logger.warn("Failed to refresh session", error);
        await clearSession();
        return null;
      }
    }
    return session;
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    logger.error("Failed to load session", error);
    return null;
  }
}
async function saveSession(session) {
  try {
    await mkdir2(dirname2(SESSION_FILE), { recursive: true, mode: 448 });
    await writeFile(SESSION_FILE, JSON.stringify(session, null, 2), {
      encoding: "utf-8",
      mode: 384
    });
    logger.info("Session saved successfully");
  } catch (error) {
    logger.error("Failed to save session", error);
    throw error;
  }
}
async function clearSession() {
  try {
    await unlink(SESSION_FILE);
    logger.info("Session cleared successfully");
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    logger.error("Failed to clear session", error);
    throw error;
  }
}
async function refreshSession(session) {
  try {
    logger.debug("Refreshing session");
    const response = await fetch(`${WEB_APP_URL}/api/auth/extension/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refreshToken: session.refreshToken
      })
    });
    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const now = Date.now();
    const expiresAt = now + data.expiresIn * 1000;
    const refreshTokenExpiresAt = data.refreshTokenExpiresIn ? now + data.refreshTokenExpiresIn * 1000 : session.refreshTokenExpiresAt;
    const newSession = {
      ...session,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresAt,
      refreshTokenExpiresAt
    };
    logger.debug(`Access token will expire in ${data.expiresIn} seconds (${new Date(expiresAt).toISOString()})`);
    if (refreshTokenExpiresAt) {
      logger.debug(`Refresh token will expire at ${new Date(refreshTokenExpiresAt).toISOString()}`);
    } else {
      logger.debug("Refresh token does not expire");
    }
    await saveSession(newSession);
    logger.info("Session refreshed successfully");
    return newSession;
  } catch (error) {
    logger.error("Failed to refresh session", error);
    throw error;
  }
}
async function getValidSession() {
  const session = await loadSession();
  if (!session) {
    return null;
  }
  const now = Date.now();
  const timeUntilExpiration = session.expiresAt - now;
  if (timeUntilExpiration < PROACTIVE_REFRESH_THRESHOLD_MS) {
    try {
      logger.debug(`Token ${timeUntilExpiration < 0 ? "expired" : `expiring in ${Math.round(timeUntilExpiration / 1000)}s`}, refreshing...`);
      return await refreshSession(session);
    } catch (error) {
      logger.warn("Failed to refresh session", error);
      return null;
    }
  }
  return session;
}

// src/utils/queue-manager.ts
import { appendFile as appendFile2, mkdir as mkdir3, readFile as readFile2, stat, unlink as unlink2, writeFile as writeFile2 } from "node:fs/promises";
var locks = new Map;
async function withLock(filePath, fn) {
  while (locks.has(filePath)) {
    await locks.get(filePath);
  }
  let releaseLock;
  const lockPromise = new Promise((resolve) => {
    releaseLock = resolve;
  });
  locks.set(filePath, lockPromise);
  try {
    return await fn();
  } finally {
    locks.delete(filePath);
    releaseLock();
  }
}
async function readJsonl(filePath) {
  try {
    const content = await readFile2(filePath, "utf8");
    const lines = content.trim().split(`
`).filter(Boolean);
    const results = [];
    for (let i = 0;i < lines.length; i++) {
      try {
        results.push(JSON.parse(lines[i]));
      } catch (error) {
        logger.warn(`Failed to parse line ${i + 1} in ${filePath}:`, error);
      }
    }
    return results;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}
async function deleteFile(filePath) {
  try {
    await unlink2(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }
}
async function readQueue(queueFile) {
  try {
    return await readJsonl(queueFile);
  } catch (error) {
    logger.error(`Failed to read queue file ${queueFile}:`, error);
    throw error;
  }
}
async function clearQueue(queueFile) {
  try {
    await withLock(queueFile, async () => {
      await deleteFile(queueFile);
      logger.debug(`Cleared queue file: ${queueFile}`);
    });
  } catch (error) {
    logger.error(`Failed to clear queue file ${queueFile}:`, error);
    throw error;
  }
}

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
// src/utils/session-id-normalizer.ts
function normalizeSessionId(sessionId) {
  if (validate_default(sessionId)) {
    return sessionId;
  }
  return v5_default(sessionId, ZEST_SESSION_NAMESPACE);
}

// src/supabase/events-uploader.ts
function deduplicateEvents(events) {
  const eventMap = new Map;
  for (const event of events) {
    if (!event.id)
      continue;
    const existing = eventMap.get(event.id);
    if (!existing) {
      eventMap.set(event.id, event);
      continue;
    }
    const existingTime = existing.timestamp ? new Date(existing.timestamp).getTime() : 0;
    const currentTime = event.timestamp ? new Date(event.timestamp).getTime() : 0;
    if (currentTime >= existingTime) {
      eventMap.set(event.id, event);
    }
  }
  return Array.from(eventMap.values());
}
async function uploadEvents(supabase) {
  try {
    const session = await getValidSession();
    if (!session) {
      logger.debug("Not authenticated, skipping events upload");
      return { success: false, uploaded: 0 };
    }
    const queuedEvents = await readQueue(EVENTS_QUEUE_FILE);
    if (queuedEvents.length === 0) {
      logger.debug("No events to upload");
      return { success: true, uploaded: 0 };
    }
    const uniqueEvents = deduplicateEvents(queuedEvents);
    if (uniqueEvents.length < queuedEvents.length) {
      logger.info(`Deduplicated events: ${queuedEvents.length} → ${uniqueEvents.length} (removed ${queuedEvents.length - uniqueEvents.length} duplicates)`);
    }
    logger.info(`Uploading ${uniqueEvents.length} code digest events`);
    const eventsToUpload = uniqueEvents.map((e) => ({
      ...e,
      session_id: normalizeSessionId(e.session_id),
      event_type: "file.changed",
      user_id: session.userId,
      platform: PLATFORM,
      source: SOURCE,
      payload: e.payload ? {
        ...e.payload,
        session_id: normalizeSessionId(e.payload.session_id)
      } : undefined
    }));
    const batchSize = 100;
    let uploadedCount = 0;
    for (let i = 0;i < eventsToUpload.length; i += batchSize) {
      const batch = eventsToUpload.slice(i, i + batchSize);
      const { error } = await supabase.from("code_digest_events").upsert(batch, { onConflict: "id" });
      if (error) {
        logger.error(`Failed to upload events batch ${i / batchSize + 1}`, error);
        return { success: false, uploaded: uploadedCount };
      }
      uploadedCount += batch.length;
      logger.debug(`✓ Uploaded batch ${i / batchSize + 1} (${batch.length} events)`);
    }
    await clearQueue(EVENTS_QUEUE_FILE);
    logger.info(`✓ Events upload completed: ${uploadedCount} events`);
    return { success: true, uploaded: uploadedCount };
  } catch (error) {
    logger.error("Failed to upload events", error);
    return { success: false, uploaded: 0 };
  }
}
async function uploadEventsWithRetry(supabase, maxRetries = 3, backoffMs = 5000) {
  let lastError = null;
  for (let attempt = 1;attempt <= maxRetries; attempt++) {
    try {
      const result = await uploadEvents(supabase);
      if (result.success) {
        return result;
      }
      return result;
    } catch (error) {
      lastError = error;
      logger.warn(`Events upload attempt ${attempt}/${maxRetries} failed: ${lastError.message}`);
      if (attempt < maxRetries) {
        const delay = backoffMs * attempt;
        logger.debug(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  logger.error(`Events upload failed after ${maxRetries} attempts`, lastError);
  return { success: false, uploaded: 0 };
}
export {
  uploadEventsWithRetry,
  uploadEvents
};

//# debugId=246AD628469C233064756E2164756E21
