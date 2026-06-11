#!/usr/bin/env node
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __reExport = (target, mod, secondTarget) => {
  var keys = __getOwnPropNames(mod);
  for (let key of keys)
    if (!__hasOwnProp.call(target, key) && key !== "default")
      __defProp(target, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (secondTarget) {
    for (let key of keys)
      if (!__hasOwnProp.call(secondTarget, key) && key !== "default")
        __defProp(secondTarget, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
    return secondTarget;
  }
};
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// ../../packages/plugin-common/src/analytics/events.ts
function getErrorCategory(errorType) {
  if (errorType.startsWith("auth_"))
    return "auth";
  if (errorType.startsWith("sync_"))
    return "sync";
  if (errorType.startsWith("queue_") || errorType.startsWith("file_") || errorType.startsWith("notification_") || errorType.startsWith("extraction_"))
    return "filesystem";
  if (errorType.startsWith("daemon_"))
    return "daemon";
  if (errorType.startsWith("api_"))
    return "api";
  if (errorType.startsWith("supabase_"))
    return "supabase";
  return "api";
}
var AUTH_DEVICE_CODE_INITIATION_FAILED = "auth_device_code_initiation_failed", AUTH_DEVICE_CODE_POLLING_FAILED = "auth_device_code_polling_failed", AUTH_AGENT_PROVISIONING_FAILED = "auth_agent_provisioning_failed", AUTH_SESSION_LOAD_FAILED = "auth_session_load_failed", AUTH_SESSION_CLEAR_FAILED = "auth_session_clear_failed", AUTH_SESSION_SAVE_FAILED = "auth_session_save_failed", SYNC_NOT_AUTHENTICATED = "sync_not_authenticated", SYNC_EVENTS_UPLOAD_FAILED = "sync_events_upload_failed", SYNC_EVENTS_RETRY_EXHAUSTED = "sync_events_upload_retry_exhausted", SYNC_CHAT_UPLOAD_FAILED = "sync_chat_upload_failed", SYNC_NETWORK_ERROR = "sync_network_error", SYNC_SERVER_OVERLOAD = "sync_server_overload", SYNC_DATA_ERROR = "sync_data_error", SYNC_AUTH_ERROR = "sync_auth_error", SYNC_BLOCKED_NO_WORKSPACE = "sync_blocked_no_workspace", AUTH_SESSION_METADATA_LOST = "auth_session_metadata_lost", QUEUE_READ_CORRUPTED = "queue_read_corrupted", QUEUE_WRITE_FAILED = "queue_write_failed", FILE_LOCK_TIMEOUT = "file_lock_timeout", FILE_LOCK_CREATE_FAILED = "file_lock_create_failed", NOTIFICATION_STATE_WRITE_FAILED = "notification_state_write_failed", QUEUE_CAP_EVICTION = "queue_cap_eviction", SYNC_STALE_EVENTS_DROPPED = "sync_stale_events_dropped", SYNC_DRAIN_THROTTLED = "sync_drain_throttled", SYNC_ORPHANED_MESSAGES_DROPPED = "sync_orphaned_messages_dropped", EXTRACTION_PROJECT_DIR_NOT_FOUND = "extraction_project_dir_not_found", EXTRACTION_SESSION_FAILED = "extraction_session_failed", DAEMON_START_FAILED = "daemon_start_failed", DAEMON_RESTART_FAILED = "daemon_restart_failed", DAEMON_SYNC_CYCLE_FAILED = "daemon_sync_cycle_failed", DAEMON_UNHANDLED_ERROR = "daemon_unhandled_error", API_WORKSPACE_FETCH_FAILED = "api_workspace_fetch_failed", API_PROFILE_UPDATE_FAILED = "api_profile_update_failed", API_PROFILE_METADATA_PREFETCH_FAILED = "api_profile_metadata_prefetch_failed", API_STANDUP_TEAM_FETCH_FAILED = "api_standup_team_fetch_failed", API_STANDUP_PROMPT_FETCH_FAILED = "api_standup_prompt_fetch_failed", API_STANDUP_GENERATION_FAILED = "api_standup_generation_failed", API_DATA_CONTROLS_FETCH_FAILED = "api_data_controls_fetch_failed", SUPABASE_CLIENT_INIT_FAILED = "supabase_client_init_failed", SUPABASE_SESSION_READ_FAILED = "supabase_session_read_failed", SUPABASE_SESSION_WRITE_FAILED = "supabase_session_write_failed", ERROR_TYPES, errorTypeSet;
var init_events = __esm(() => {
  ERROR_TYPES = [
    AUTH_DEVICE_CODE_INITIATION_FAILED,
    AUTH_DEVICE_CODE_POLLING_FAILED,
    AUTH_AGENT_PROVISIONING_FAILED,
    AUTH_SESSION_CLEAR_FAILED,
    AUTH_SESSION_LOAD_FAILED,
    AUTH_SESSION_SAVE_FAILED,
    AUTH_SESSION_METADATA_LOST,
    SYNC_NOT_AUTHENTICATED,
    SYNC_EVENTS_UPLOAD_FAILED,
    SYNC_EVENTS_RETRY_EXHAUSTED,
    SYNC_CHAT_UPLOAD_FAILED,
    SYNC_NETWORK_ERROR,
    SYNC_SERVER_OVERLOAD,
    SYNC_DATA_ERROR,
    SYNC_AUTH_ERROR,
    SYNC_BLOCKED_NO_WORKSPACE,
    QUEUE_READ_CORRUPTED,
    QUEUE_WRITE_FAILED,
    QUEUE_CAP_EVICTION,
    SYNC_STALE_EVENTS_DROPPED,
    SYNC_DRAIN_THROTTLED,
    SYNC_ORPHANED_MESSAGES_DROPPED,
    FILE_LOCK_TIMEOUT,
    FILE_LOCK_CREATE_FAILED,
    NOTIFICATION_STATE_WRITE_FAILED,
    EXTRACTION_PROJECT_DIR_NOT_FOUND,
    EXTRACTION_SESSION_FAILED,
    DAEMON_START_FAILED,
    DAEMON_RESTART_FAILED,
    DAEMON_SYNC_CYCLE_FAILED,
    DAEMON_UNHANDLED_ERROR,
    API_WORKSPACE_FETCH_FAILED,
    API_PROFILE_UPDATE_FAILED,
    API_PROFILE_METADATA_PREFETCH_FAILED,
    API_STANDUP_TEAM_FETCH_FAILED,
    API_STANDUP_PROMPT_FETCH_FAILED,
    API_STANDUP_GENERATION_FAILED,
    API_DATA_CONTROLS_FETCH_FAILED,
    SUPABASE_CLIENT_INIT_FAILED,
    SUPABASE_SESSION_READ_FAILED,
    SUPABASE_SESSION_WRITE_FAILED
  ];
  errorTypeSet = new Set(ERROR_TYPES);
});

// ../../packages/plugin-common/src/analytics/properties.ts
import { release } from "node:os";
import { basename } from "node:path";
function buildStandardProperties(version) {
  return {
    plugin_version: version,
    node_version: process.version,
    os_platform: process.platform,
    os_version: release()
  };
}
function buildUserProperties(session) {
  if (!session)
    return {};
  return {
    user_id: session.userId,
    email: session.email,
    workspace_id: session.workspaceId,
    workspace_name: session.workspaceName
  };
}
function buildFileSystemProperties(options) {
  const anonymizedPath = options.filePath ? basename(options.filePath) : undefined;
  return {
    ...anonymizedPath && { file_name: anonymizedPath },
    operation: options.operation,
    ...options.errnoCode && { errno_code: options.errnoCode }
  };
}
function buildApiProperties(options) {
  return {
    ...options.endpoint && { api_endpoint: options.endpoint },
    ...options.responseStatus !== undefined && { response_status: options.responseStatus },
    ...options.responseMessage && { response_message: options.responseMessage }
  };
}
var init_properties = () => {};
// ../../packages/utils/src/command-xml.ts
var CLAUDE_BUILTIN_COMMANDS;
var init_command_xml = __esm(() => {
  CLAUDE_BUILTIN_COMMANDS = new Set([
    "add-dir",
    "agents",
    "allowed-tools",
    "android",
    "app",
    "autofix-pr",
    "bashes",
    "branch",
    "btw",
    "bug",
    "checkpoint",
    "chrome",
    "clear",
    "color",
    "compact",
    "config",
    "context",
    "continue",
    "copy",
    "cost",
    "desktop",
    "diff",
    "doctor",
    "effort",
    "exit",
    "export",
    "extra-usage",
    "fast",
    "feedback",
    "fork",
    "help",
    "hooks",
    "ide",
    "init",
    "insights",
    "install-github-app",
    "install-slack-app",
    "ios",
    "keybindings",
    "login",
    "logout",
    "mcp",
    "memory",
    "mobile",
    "model",
    "new",
    "output-style",
    "passes",
    "permissions",
    "plan",
    "plugin",
    "powerup",
    "pr-comments",
    "privacy-settings",
    "quit",
    "rc",
    "release-notes",
    "reload-plugins",
    "remote-control",
    "remote-env",
    "rename",
    "reset",
    "resume",
    "review",
    "rewind",
    "sandbox",
    "schedule",
    "security-review",
    "settings",
    "setup-bedrock",
    "skills",
    "stats",
    "status",
    "statusline",
    "stickers",
    "tasks",
    "teleport",
    "terminal-setup",
    "theme",
    "todos",
    "tp",
    "ultraplan",
    "upgrade",
    "usage",
    "vim",
    "voice",
    "web-setup"
  ]);
});
// ../../packages/utils/src/date-range.ts
function getLocalDateStr(timezone, referenceDate = new Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  return formatter.format(referenceDate);
}
function getTimezoneOffsetMs(timezone, localDateStr) {
  const tempDate = new Date(`${localDateStr}T00:00:00Z`);
  const utcDate = new Date(tempDate.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(tempDate.toLocaleString("en-US", { timeZone: timezone }));
  return utcDate.getTime() - tzDate.getTime();
}
function calculateDayDateRange(timezone, localDateStr) {
  const offsetMs = getTimezoneOffsetMs(timezone, localDateStr);
  const midnightUTC = new Date(`${localDateStr}T00:00:00Z`);
  const startOfDayUTC = new Date(midnightUTC.getTime() + offsetMs);
  const endOfDayUTC = new Date(startOfDayUTC.getTime() + 24 * 60 * 60 * 1000 - 1);
  return {
    dateFrom: startOfDayUTC.toISOString(),
    dateTo: endOfDayUTC.toISOString()
  };
}
function calculateDayDateRangeFromDate(timezone, referenceDate = new Date) {
  const localDateStr = getLocalDateStr(timezone, referenceDate);
  return calculateDayDateRange(timezone, localDateStr);
}
function resolveTimezone(storedTimezone, fallback = "UTC") {
  return storedTimezone || fallback;
}
var PERIOD_TYPE_LABELS, PERIOD_SUMMARY_LABELS;
var init_date_range = __esm(() => {
  PERIOD_TYPE_LABELS = {
    ["today" /* Today */]: "Today",
    ["this_week" /* ThisWeek */]: "This Week",
    ["this_month" /* ThisMonth */]: "This Month"
  };
  PERIOD_SUMMARY_LABELS = {
    ["today" /* Today */]: "Daily Summary",
    ["this_week" /* ThisWeek */]: "Weekly Summary",
    ["this_month" /* ThisMonth */]: "Monthly Summary",
    custom: "Custom Period"
  };
});
// ../../packages/utils/src/frontmatter.ts
var FRONTMATTER_KEYS;
var init_frontmatter = __esm(() => {
  FRONTMATTER_KEYS = new Set(["name", "description"]);
});

// ../../packages/utils/src/language-utils.ts
var init_language_utils = () => {};

// ../../packages/utils/src/mcp-registry.ts
class TtlCache {
  map = new Map;
  get(key) {
    const entry = this.map.get(key);
    if (!entry)
      return { hit: false };
    if (Date.now() > entry.expiry) {
      this.map.delete(key);
      return { hit: false };
    }
    return { hit: true, value: entry.value };
  }
  set(key, value) {
    if (this.map.size >= CACHE_MAX_SIZE && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value;
      if (firstKey !== undefined)
        this.map.delete(firstKey);
    }
    this.map.set(key, { value, expiry: Date.now() + CACHE_TTL_MS });
  }
  clear() {
    this.map.clear();
  }
}
var CACHE_TTL_MS, CACHE_MAX_SIZE = 100, cache, toolCache, serverCache, GENERIC_SEGMENTS, VERB_PREFIXES;
var init_mcp_registry = __esm(() => {
  CACHE_TTL_MS = 30 * 60 * 1000;
  cache = new TtlCache;
  toolCache = new TtlCache;
  serverCache = new TtlCache;
  GENERIC_SEGMENTS = new Set(["mcp", "com", "org", "io", "dev", "server", "api"]);
  VERB_PREFIXES = new Set([
    "get",
    "list",
    "create",
    "delete",
    "update",
    "search",
    "query",
    "fetch",
    "run",
    "execute",
    "resolve",
    "find",
    "read",
    "write",
    "set",
    "send",
    "check",
    "add",
    "remove"
  ]);
});
// ../../packages/utils/src/string-utils.ts
var init_string_utils = () => {};
// ../../packages/utils/src/index.ts
var init_src = __esm(() => {
  init_command_xml();
  init_date_range();
  init_frontmatter();
  init_language_utils();
  init_mcp_registry();
  init_string_utils();
});

// ../../packages/analytics/src/client.ts
class Analytics {
  providers;
  defaultContext = {};
  constructor(providers) {
    this.providers = providers;
  }
  setContext(properties) {
    Object.assign(this.defaultContext, properties);
  }
  set(collection, objectId, properties) {
    for (const provider of this.providers) {
      try {
        provider.set(collection, objectId, properties);
      } catch (e) {
        if (true) {
          console.warn("[analytics] provider.set() failed:", e);
        }
      }
    }
  }
  event(collection, objectId, eventName, properties, context) {
    const mergedContext = { ...this.defaultContext, ...context };
    for (const provider of this.providers) {
      try {
        provider.event(collection, objectId, eventName, properties, mergedContext);
      } catch (e) {
        if (true) {
          console.warn("[analytics] provider.event() failed:", e);
        }
      }
    }
  }
  captureException(error, distinctId, context) {
    for (const provider of this.providers) {
      try {
        provider.captureException?.(error, distinctId, context);
      } catch (e) {
        if (true) {
          console.warn("[analytics] provider.captureException() failed:", e);
        }
      }
    }
  }
  reset() {
    this.defaultContext = {};
    for (const provider of this.providers) {
      try {
        provider.reset?.();
      } catch (e) {
        if (true) {
          console.warn("[analytics] provider.reset() failed:", e);
        }
      }
    }
  }
  track(params) {
    this.event("users", params.distinctId, params.event, params.properties);
  }
  identify(userId, properties) {
    this.set("users", userId, properties ?? {});
  }
  async dispose() {
    await Promise.allSettled(this.providers.map((p) => {
      try {
        return p.dispose?.();
      } catch {
        return;
      }
    }));
  }
}

// ../../packages/analytics/src/events.ts
var EVENTS, GA4_EVENT_MAP;
var init_events2 = __esm(() => {
  EVENTS = {
    USER_CREATED: "User Created",
    WORKSPACE_CREATED: "Workspace Created",
    EXTENSION_INSTALL_CLICKED: "Extension Install Clicked",
    EXTENSION_GUIDE_VIEWED: "Extension Guide Viewed",
    EXTENSION_INSTALLED: "Extension Installed",
    FIRST_DATA_SENT: "First Data Sent",
    ONBOARDING_STEP_COMPLETED: "Onboarding Step Completed",
    NAV_LINK_CLICKED: "Nav Link Clicked",
    WORKSPACE_SWITCHED: "Workspace Switched",
    TEAM_SWITCHED: "Team Switched",
    STANDUP_GENERATED: "Standup Generated",
    STANDUP_VIEWED: "Standup Viewed",
    STANDUP_SHARED: "Standup Shared",
    TEAM_STANDUP_GENERATED: "Team Standup Generated",
    TEAM_STANDUP_VIEWED: "Team Standup Viewed",
    MY_METRICS_VIEWED: "My Metrics Viewed",
    LEADERBOARD_VIEWED: "Leaderboard Viewed",
    TIMELINE_VIEWED: "Timeline Viewed",
    METRICS_CARD_CLICKED: "Metrics Card Clicked",
    USER_INVITED: "User Invited",
    INVITE_LINK_CREATED: "Invite Link Created",
    TEAM_CREATED: "Team Created",
    ORG_MEMBERS_DETECTED: "Org Members Detected",
    WORKSPACE_MEMBERS_PROVISIONED: "Workspace Members Provisioned",
    WORKSPACE_SETTINGS_VIEWED: "Workspace Settings Viewed",
    TEAM_SETTINGS_VIEWED: "Team Settings Viewed",
    CLI_SIGNED_IN: "CLI Signed In",
    TRIAL_STARTED: "Trial Started",
    PLAN_SELECTED: "Plan Selected",
    PAYMENT_SETUP_COMPLETED: "Payment Setup Completed",
    PAYMENT_SETUP_FAILED: "Payment Setup Failed",
    SUBSCRIPTION_CREATED: "Subscription Created",
    SUBSCRIPTION_UPDATED: "Subscription Updated",
    SUBSCRIPTION_UPGRADED: "Subscription Upgraded",
    SUBSCRIPTION_DOWNGRADED: "Subscription Downgraded",
    SUBSCRIPTION_CANCELED: "Subscription Canceled",
    USER_CHURNED: "User Churned",
    PAYMENT_SUCCEEDED: "Payment Succeeded",
    PAYMENT_FAILED: "Payment Failed",
    BILLING_PORTAL_OPENED: "Billing Portal Opened",
    SUBSCRIPTION_GATE_SHOWN: "Subscription Gate Shown",
    ADMIN_IMPERSONATION_STARTED: "Admin Impersonation Started",
    ADMIN_IMPERSONATION_ENDED: "Admin Impersonation Ended"
  };
  GA4_EVENT_MAP = {
    [EVENTS.USER_CREATED]: "sign_up"
  };
});

// ../../packages/analytics/src/utils.ts
function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, " $1").trim().toLowerCase().replace(/\s+/g, "_");
}

// ../../packages/analytics/src/providers/ga4-server.ts
class GA4ServerProvider {
  measurementId;
  apiSecret;
  pendingRequests = [];
  constructor(measurementId, apiSecret) {
    this.measurementId = measurementId;
    this.apiSecret = apiSecret;
  }
  set(_collection, _objectId, _properties) {}
  event(_collection, objectId, eventName, properties, context) {
    const ga4Name = GA4_EVENT_MAP[eventName] || toSnakeCase(eventName);
    const clientId = context?.ga4_client_id || `server.${objectId}`;
    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${this.measurementId}&api_secret=${this.apiSecret}`;
    const request = fetch(url, {
      method: "POST",
      body: JSON.stringify({
        client_id: clientId,
        user_id: objectId,
        events: [
          {
            name: ga4Name,
            params: {
              ...properties,
              ...context,
              engagement_time_msec: "100"
            }
          }
        ]
      })
    }).then(() => {}).catch(() => {});
    this.pendingRequests.push(request);
    request.then(() => {
      this.pendingRequests = this.pendingRequests.filter((r) => r !== request);
    });
  }
  async dispose() {
    await Promise.allSettled(this.pendingRequests);
    this.pendingRequests = [];
  }
}
var init_ga4_server = __esm(() => {
  init_events2();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/error-tracking/modifiers/module.node.mjs
import { dirname, posix, sep } from "path";
function createModulerModifier() {
  const getModuleFromFileName = createGetModuleFromFilename();
  return async (frames) => {
    for (const frame of frames)
      frame.module = getModuleFromFileName(frame.filename);
    return frames;
  };
}
function createGetModuleFromFilename(basePath = process.argv[1] ? dirname(process.argv[1]) : process.cwd(), isWindows = sep === "\\") {
  const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;
  return (filename) => {
    if (!filename)
      return;
    const normalizedFilename = isWindows ? normalizeWindowsPath(filename) : filename;
    let { dir, base: file, ext } = posix.parse(normalizedFilename);
    if (ext === ".js" || ext === ".mjs" || ext === ".cjs")
      file = file.slice(0, -1 * ext.length);
    const decodedFile = decodeURIComponent(file);
    if (!dir)
      dir = ".";
    const n = dir.lastIndexOf("/node_modules");
    if (n > -1)
      return `${dir.slice(n + 14).replace(/\//g, ".")}:${decodedFile}`;
    if (dir.startsWith(normalizedBase)) {
      const moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, ".");
      return moduleName ? `${moduleName}:${decodedFile}` : decodedFile;
    }
    return decodedFile;
  };
}
function normalizeWindowsPath(path) {
  return path.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
}
var init_module_node = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/featureFlagUtils.mjs
function getFlagDetailFromFlagAndPayload(key, value, payload) {
  return {
    key,
    enabled: typeof value == "string" ? true : value,
    variant: typeof value == "string" ? value : undefined,
    reason: undefined,
    metadata: {
      id: undefined,
      version: undefined,
      payload: payload ? JSON.stringify(payload) : undefined,
      description: undefined
    }
  };
}
var normalizeFlagsResponse = (flagsResponse) => {
  if ("flags" in flagsResponse) {
    const featureFlags = getFlagValuesFromFlags(flagsResponse.flags);
    const featureFlagPayloads = getPayloadsFromFlags(flagsResponse.flags);
    return {
      ...flagsResponse,
      featureFlags,
      featureFlagPayloads
    };
  }
  {
    const featureFlags = flagsResponse.featureFlags ?? {};
    const featureFlagPayloads = Object.fromEntries(Object.entries(flagsResponse.featureFlagPayloads || {}).map(([k, v]) => [
      k,
      parsePayload(v)
    ]));
    const flags = Object.fromEntries(Object.entries(featureFlags).map(([key, value]) => [
      key,
      getFlagDetailFromFlagAndPayload(key, value, featureFlagPayloads[key])
    ]));
    return {
      ...flagsResponse,
      featureFlags,
      featureFlagPayloads,
      flags
    };
  }
}, getFlagValuesFromFlags = (flags) => Object.fromEntries(Object.entries(flags ?? {}).map(([key, detail]) => [
  key,
  getFeatureFlagValue(detail)
]).filter(([, value]) => value !== undefined)), getPayloadsFromFlags = (flags) => {
  const safeFlags = flags ?? {};
  return Object.fromEntries(Object.keys(safeFlags).filter((flag) => {
    const details = safeFlags[flag];
    return details.enabled && details.metadata && details.metadata.payload !== undefined;
  }).map((flag) => {
    const payload = safeFlags[flag].metadata?.payload;
    return [
      flag,
      payload ? parsePayload(payload) : undefined
    ];
  }));
}, getFeatureFlagValue = (detail) => detail === undefined ? undefined : detail.variant ?? detail.enabled, parsePayload = (response) => {
  if (typeof response != "string")
    return response;
  try {
    return JSON.parse(response);
  } catch {
    return response;
  }
};
var init_featureFlagUtils = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/types.mjs
var types_PostHogPersistedProperty;
var init_types = __esm(() => {
  types_PostHogPersistedProperty = /* @__PURE__ */ function(PostHogPersistedProperty) {
    PostHogPersistedProperty["AnonymousId"] = "anonymous_id";
    PostHogPersistedProperty["DistinctId"] = "distinct_id";
    PostHogPersistedProperty["Props"] = "props";
    PostHogPersistedProperty["EnablePersonProcessing"] = "enable_person_processing";
    PostHogPersistedProperty["PersonMode"] = "person_mode";
    PostHogPersistedProperty["FeatureFlagDetails"] = "feature_flag_details";
    PostHogPersistedProperty["FeatureFlags"] = "feature_flags";
    PostHogPersistedProperty["FeatureFlagPayloads"] = "feature_flag_payloads";
    PostHogPersistedProperty["BootstrapFeatureFlagDetails"] = "bootstrap_feature_flag_details";
    PostHogPersistedProperty["BootstrapFeatureFlags"] = "bootstrap_feature_flags";
    PostHogPersistedProperty["BootstrapFeatureFlagPayloads"] = "bootstrap_feature_flag_payloads";
    PostHogPersistedProperty["OverrideFeatureFlags"] = "override_feature_flags";
    PostHogPersistedProperty["Queue"] = "queue";
    PostHogPersistedProperty["LogsQueue"] = "logs_queue";
    PostHogPersistedProperty["OptedOut"] = "opted_out";
    PostHogPersistedProperty["SessionId"] = "session_id";
    PostHogPersistedProperty["SessionStartTimestamp"] = "session_start_timestamp";
    PostHogPersistedProperty["SessionLastTimestamp"] = "session_timestamp";
    PostHogPersistedProperty["PersonProperties"] = "person_properties";
    PostHogPersistedProperty["GroupProperties"] = "group_properties";
    PostHogPersistedProperty["InstalledAppBuild"] = "installed_app_build";
    PostHogPersistedProperty["InstalledAppVersion"] = "installed_app_version";
    PostHogPersistedProperty["SessionReplay"] = "session_replay";
    PostHogPersistedProperty["SurveyLastSeenDate"] = "survey_last_seen_date";
    PostHogPersistedProperty["SurveysSeen"] = "surveys_seen";
    PostHogPersistedProperty["Surveys"] = "surveys";
    PostHogPersistedProperty["RemoteConfig"] = "remote_config";
    PostHogPersistedProperty["FlagsEndpointWasHit"] = "flags_endpoint_was_hit";
    PostHogPersistedProperty["DeviceId"] = "device_id";
    return PostHogPersistedProperty;
  }({});
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/gzip.mjs
function isGzipSupported() {
  return "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && typeof Response.prototype.blob == "function";
}
async function gzipCompress(input, isDebug = true, options) {
  try {
    const inputBytes = new TextEncoder().encode(input);
    const compressedStream = new CompressionStream("gzip");
    const writer = compressedStream.writable.getWriter();
    const writePromise = writer.write(inputBytes).then(() => writer.close()).catch(async (err) => {
      try {
        await writer.abort(err);
      } catch {}
      throw err;
    });
    const responsePromise = new Response(compressedStream.readable).blob();
    const [compressed] = await Promise.all([
      responsePromise,
      writePromise
    ]);
    await validateNativeGzip(compressed, inputBytes);
    return compressed;
  } catch (error) {
    if (options?.rethrow)
      throw error;
    if (isDebug)
      console.error("Failed to gzip compress data", error);
    return null;
  }
}
var NATIVE_GZIP_VALIDATION_ERROR = "NativeGzipValidationError", GZIP_MAGIC_FIRST_BYTE = 31, GZIP_MAGIC_SECOND_BYTE = 139, GZIP_DEFLATE_METHOD = 8, hasGzipMagic = (bytes) => bytes.length >= 2 && bytes[0] === GZIP_MAGIC_FIRST_BYTE && bytes[1] === GZIP_MAGIC_SECOND_BYTE, crc32Table, getCrc32Table = () => {
  if (crc32Table)
    return crc32Table;
  crc32Table = [];
  for (let i = 0;i < 256; i++) {
    let crc = i;
    for (let j = 0;j < 8; j++)
      crc = 1 & crc ? 3988292384 ^ crc >>> 1 : crc >>> 1;
    crc32Table[i] = crc >>> 0;
  }
  return crc32Table;
}, crc32 = (bytes) => {
  const table = getCrc32Table();
  let crc = 4294967295;
  for (let i = 0;i < bytes.length; i++)
    crc = table[(crc ^ bytes[i]) & 255] ^ crc >>> 8;
  return (4294967295 ^ crc) >>> 0;
}, throwNativeGzipValidationError = (reason) => {
  const error = new Error(`Native gzip produced invalid output: ${reason}`);
  error.name = NATIVE_GZIP_VALIDATION_ERROR;
  throw error;
}, validateNativeGzip = async (compressed, inputBytes) => {
  if (compressed.size < 18)
    throwNativeGzipValidationError("too-short");
  const header = new Uint8Array(await compressed.slice(0, 10).arrayBuffer());
  if (!hasGzipMagic(header) || header[2] !== GZIP_DEFLATE_METHOD)
    throwNativeGzipValidationError("invalid-header");
  const trailer = new DataView(await compressed.slice(compressed.size - 8).arrayBuffer());
  if (trailer.getUint32(0, true) !== crc32(inputBytes))
    throwNativeGzipValidationError("invalid-crc");
  const inputSize = inputBytes.length >>> 0;
  if (trailer.getUint32(4, true) !== inputSize)
    throwNativeGzipValidationError("invalid-size");
};
var init_gzip = __esm(() => {
  init_types();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/bot-detection.mjs
var DEFAULT_BLOCKED_UA_STRS, isBlockedUA = function(ua, customBlockedUserAgents = []) {
  if (!ua)
    return false;
  const uaLower = ua.toLowerCase();
  return DEFAULT_BLOCKED_UA_STRS.concat(customBlockedUserAgents).some((blockedUA) => {
    const blockedUaLower = blockedUA.toLowerCase();
    return uaLower.indexOf(blockedUaLower) !== -1;
  });
};
var init_bot_detection = __esm(() => {
  DEFAULT_BLOCKED_UA_STRS = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterest",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercel-screenshot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider"
  ];
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/string-utils.mjs
var init_string_utils2 = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/type-utils.mjs
function isPrimitive(value) {
  return value === null || typeof value != "object";
}
function isBuiltin(candidate, className) {
  return Object.prototype.toString.call(candidate) === `[object ${className}]`;
}
function isErrorEvent(event) {
  return isBuiltin(event, "ErrorEvent");
}
function isEvent(candidate) {
  return typeof Event != "undefined" && isInstanceOf(candidate, Event);
}
function isPlainObject(candidate) {
  return isBuiltin(candidate, "Object");
}
function isInstanceOf(candidate, base) {
  try {
    return candidate instanceof base;
  } catch {
    return false;
  }
}
var nativeIsArray, ObjProto, type_utils_hasOwnProperty, type_utils_toString, isArray, isObject = (x) => x === Object(x) && !isArray(x), isUndefined = (x) => x === undefined, isString = (x) => type_utils_toString.call(x) == "[object String]", isEmptyString = (x) => isString(x) && x.trim().length === 0, isNumber = (x) => type_utils_toString.call(x) == "[object Number]" && x === x, isPlainError = (x) => x instanceof Error;
var init_type_utils = __esm(() => {
  init_types();
  init_string_utils2();
  nativeIsArray = Array.isArray;
  ObjProto = Object.prototype;
  type_utils_hasOwnProperty = ObjProto.hasOwnProperty;
  type_utils_toString = ObjProto.toString;
  isArray = nativeIsArray || function(obj) {
    return type_utils_toString.call(obj) === "[object Array]";
  };
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/number-utils.mjs
function clampToRange(value, min, max, logger, fallbackValue) {
  if (min > max) {
    logger.warn("min cannot be greater than max.");
    min = max;
  }
  if (isNumber(value))
    if (value > max) {
      logger.warn(" cannot be  greater than max: " + max + ". Using max value instead.");
      return max;
    } else {
      if (!(value < min))
        return value;
      logger.warn(" cannot be less than min: " + min + ". Using min value instead.");
      return min;
    }
  logger.warn(" must be a number. using max or fallback. max: " + max + ", fallback: " + fallbackValue);
  return clampToRange(fallbackValue || max, min, max, logger);
}
var init_number_utils = __esm(() => {
  init_type_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/bucketed-rate-limiter.mjs
class BucketedRateLimiter {
  constructor(options) {
    this._buckets = {};
    this._onBucketRateLimited = options._onBucketRateLimited;
    this._bucketSize = clampToRange(options.bucketSize, 0, 100, options._logger);
    this._refillRate = clampToRange(options.refillRate, 0, this._bucketSize, options._logger);
    this._refillInterval = clampToRange(options.refillInterval, 0, ONE_DAY_IN_MS, options._logger);
  }
  _applyRefill(bucket, now) {
    const elapsedMs = now - bucket.lastAccess;
    const refillIntervals = Math.floor(elapsedMs / this._refillInterval);
    if (refillIntervals > 0) {
      const tokensToAdd = refillIntervals * this._refillRate;
      bucket.tokens = Math.min(bucket.tokens + tokensToAdd, this._bucketSize);
      bucket.lastAccess = bucket.lastAccess + refillIntervals * this._refillInterval;
    }
  }
  consumeRateLimit(key) {
    const now = Date.now();
    const keyStr = String(key);
    let bucket = this._buckets[keyStr];
    if (bucket)
      this._applyRefill(bucket, now);
    else {
      bucket = {
        tokens: this._bucketSize,
        lastAccess: now
      };
      this._buckets[keyStr] = bucket;
    }
    if (bucket.tokens === 0)
      return true;
    bucket.tokens--;
    if (bucket.tokens === 0)
      this._onBucketRateLimited?.(key);
    return bucket.tokens === 0;
  }
  stop() {
    this._buckets = {};
  }
}
var ONE_DAY_IN_MS = 86400000;
var init_bucketed_rate_limiter = __esm(() => {
  init_number_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/vendor/uuidv7.mjs
class UUID {
  constructor(bytes) {
    this.bytes = bytes;
  }
  static ofInner(bytes) {
    if (bytes.length === 16)
      return new UUID(bytes);
    throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(unixTsMs, randA, randBHi, randBLo) {
    if (!Number.isInteger(unixTsMs) || !Number.isInteger(randA) || !Number.isInteger(randBHi) || !Number.isInteger(randBLo) || unixTsMs < 0 || randA < 0 || randBHi < 0 || randBLo < 0 || unixTsMs > 281474976710655 || randA > 4095 || randBHi > 1073741823 || randBLo > 4294967295)
      throw new RangeError("invalid field value");
    const bytes = new Uint8Array(16);
    bytes[0] = unixTsMs / 2 ** 40;
    bytes[1] = unixTsMs / 2 ** 32;
    bytes[2] = unixTsMs / 2 ** 24;
    bytes[3] = unixTsMs / 2 ** 16;
    bytes[4] = unixTsMs / 256;
    bytes[5] = unixTsMs;
    bytes[6] = 112 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 128 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    return new UUID(bytes);
  }
  static parse(uuid) {
    let hex;
    switch (uuid.length) {
      case 32:
        hex = /^[0-9a-f]{32}$/i.exec(uuid)?.[0];
        break;
      case 36:
        hex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      case 38:
        hex = /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      case 45:
        hex = /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      default:
        break;
    }
    if (hex) {
      const inner = new Uint8Array(16);
      for (let i = 0;i < 16; i += 4) {
        const n = parseInt(hex.substring(2 * i, 2 * i + 8), 16);
        inner[i + 0] = n >>> 24;
        inner[i + 1] = n >>> 16;
        inner[i + 2] = n >>> 8;
        inner[i + 3] = n;
      }
      return new UUID(inner);
    }
    throw new SyntaxError("could not parse UUID string");
  }
  toString() {
    let text = "";
    for (let i = 0;i < this.bytes.length; i++) {
      text += DIGITS.charAt(this.bytes[i] >>> 4);
      text += DIGITS.charAt(15 & this.bytes[i]);
      if (i === 3 || i === 5 || i === 7 || i === 9)
        text += "-";
    }
    return text;
  }
  toHex() {
    let text = "";
    for (let i = 0;i < this.bytes.length; i++) {
      text += DIGITS.charAt(this.bytes[i] >>> 4);
      text += DIGITS.charAt(15 & this.bytes[i]);
    }
    return text;
  }
  toJSON() {
    return this.toString();
  }
  getVariant() {
    const n = this.bytes[8] >>> 4;
    if (n < 0)
      throw new Error("unreachable");
    if (n <= 7)
      return this.bytes.every((e) => e === 0) ? "NIL" : "VAR_0";
    if (n <= 11)
      return "VAR_10";
    if (n <= 13)
      return "VAR_110";
    if (n <= 15)
      return this.bytes.every((e) => e === 255) ? "MAX" : "VAR_RESERVED";
    else
      throw new Error("unreachable");
  }
  getVersion() {
    return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : undefined;
  }
  clone() {
    return new UUID(this.bytes.slice(0));
  }
  equals(other) {
    return this.compareTo(other) === 0;
  }
  compareTo(other) {
    for (let i = 0;i < 16; i++) {
      const diff = this.bytes[i] - other.bytes[i];
      if (diff !== 0)
        return Math.sign(diff);
    }
    return 0;
  }
}

class V7Generator {
  constructor(randomNumberGenerator) {
    this.timestamp = 0;
    this.counter = 0;
    this.random = randomNumberGenerator ?? getDefaultRandom();
  }
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  generateOrResetCore(unixTsMs, rollbackAllowance) {
    let value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    if (value === undefined) {
      this.timestamp = 0;
      value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    }
    return value;
  }
  generateOrAbortCore(unixTsMs, rollbackAllowance) {
    const MAX_COUNTER = 4398046511103;
    if (!Number.isInteger(unixTsMs) || unixTsMs < 1 || unixTsMs > 281474976710655)
      throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    if (rollbackAllowance < 0 || rollbackAllowance > 281474976710655)
      throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (unixTsMs > this.timestamp) {
      this.timestamp = unixTsMs;
      this.resetCounter();
    } else {
      if (!(unixTsMs + rollbackAllowance >= this.timestamp))
        return;
      this.counter++;
      if (this.counter > MAX_COUNTER) {
        this.timestamp++;
        this.resetCounter();
      }
    }
    return UUID.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
  generateV4() {
    const bytes = new Uint8Array(Uint32Array.of(this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32()).buffer);
    bytes[6] = 64 | bytes[6] >>> 4;
    bytes[8] = 128 | bytes[8] >>> 2;
    return UUID.ofInner(bytes);
  }
}
var DIGITS = "0123456789abcdef", getDefaultRandom = () => ({
  nextUint32: () => 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
}), defaultGenerator, uuidv7 = () => uuidv7obj().toString(), uuidv7obj = () => (defaultGenerator || (defaultGenerator = new V7Generator)).generate();
var init_uuidv7 = __esm(() => {
  /*! For license information please see uuidv7.mjs.LICENSE.txt */
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/promise-queue.mjs
class PromiseQueue {
  add(promise) {
    const promiseUUID = uuidv7();
    this.promiseByIds[promiseUUID] = promise;
    promise.catch(() => {}).finally(() => {
      delete this.promiseByIds[promiseUUID];
    });
    return promise;
  }
  async join() {
    let promises = Object.values(this.promiseByIds);
    let length = promises.length;
    while (length > 0) {
      await Promise.all(promises);
      promises = Object.values(this.promiseByIds);
      length = promises.length;
    }
  }
  get length() {
    return Object.keys(this.promiseByIds).length;
  }
  constructor() {
    this.promiseByIds = {};
  }
}
var init_promise_queue = __esm(() => {
  init_uuidv7();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/logger.mjs
function createConsole(consoleLike = console) {
  const lockedMethods = {
    log: consoleLike.log.bind(consoleLike),
    warn: consoleLike.warn.bind(consoleLike),
    error: consoleLike.error.bind(consoleLike),
    debug: consoleLike.debug.bind(consoleLike)
  };
  return lockedMethods;
}
function createLogger(prefix, maybeCall = passThrough) {
  return _createLogger(prefix, maybeCall, createConsole());
}
var _createLogger = (prefix, maybeCall, consoleLike) => {
  function _log(level, ...args) {
    maybeCall(() => {
      const consoleMethod = consoleLike[level];
      consoleMethod(prefix, ...args);
    });
  }
  const logger = {
    debug: (...args) => {
      _log("debug", ...args);
    },
    info: (...args) => {
      _log("log", ...args);
    },
    warn: (...args) => {
      _log("warn", ...args);
    },
    error: (...args) => {
      _log("error", ...args);
    },
    critical: (...args) => {
      consoleLike["error"](prefix, ...args);
    },
    createLogger: (additionalPrefix) => _createLogger(`${prefix} ${additionalPrefix}`, maybeCall, consoleLike)
  };
  return logger;
}, passThrough = (fn) => fn();
var init_logger = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/user-agent-utils.mjs
var MOBILE = "Mobile", IOS = "iOS", ANDROID = "Android", TABLET = "Tablet", ANDROID_TABLET, APPLE = "Apple", APPLE_WATCH, SAFARI = "Safari", BLACKBERRY = "BlackBerry", SAMSUNG = "Samsung", SAMSUNG_BROWSER, SAMSUNG_INTERNET, CHROME = "Chrome", CHROME_OS, CHROME_IOS, INTERNET_EXPLORER = "Internet Explorer", INTERNET_EXPLORER_MOBILE, OPERA = "Opera", OPERA_MINI, EDGE = "Edge", MICROSOFT_EDGE, FIREFOX = "Firefox", FIREFOX_IOS, NINTENDO = "Nintendo", PLAYSTATION = "PlayStation", XBOX = "Xbox", ANDROID_MOBILE, MOBILE_SAFARI, WINDOWS = "Windows", WINDOWS_PHONE, GENERIC = "Generic", GENERIC_MOBILE, GENERIC_TABLET, KONQUEROR = "Konqueror", BROWSER_VERSION_REGEX_SUFFIX = "(\\d+(\\.\\d+)?)", DEFAULT_BROWSER_VERSION_REGEX, XBOX_REGEX, PLAYSTATION_REGEX, NINTENDO_REGEX, BLACKBERRY_REGEX, windowsVersionMap, versionRegexes, osMatchers;
var init_user_agent_utils = __esm(() => {
  init_string_utils2();
  init_type_utils();
  ANDROID_TABLET = ANDROID + " " + TABLET;
  APPLE_WATCH = APPLE + " Watch";
  SAMSUNG_BROWSER = SAMSUNG + "Browser";
  SAMSUNG_INTERNET = SAMSUNG + " Internet";
  CHROME_OS = CHROME + " OS";
  CHROME_IOS = CHROME + " " + IOS;
  INTERNET_EXPLORER_MOBILE = INTERNET_EXPLORER + " " + MOBILE;
  OPERA_MINI = OPERA + " Mini";
  MICROSOFT_EDGE = "Microsoft " + EDGE;
  FIREFOX_IOS = FIREFOX + " " + IOS;
  ANDROID_MOBILE = ANDROID + " " + MOBILE;
  MOBILE_SAFARI = MOBILE + " " + SAFARI;
  WINDOWS_PHONE = WINDOWS + " Phone";
  GENERIC_MOBILE = GENERIC + " " + MOBILE.toLowerCase();
  GENERIC_TABLET = GENERIC + " " + TABLET.toLowerCase();
  DEFAULT_BROWSER_VERSION_REGEX = new RegExp("Version/" + BROWSER_VERSION_REGEX_SUFFIX);
  XBOX_REGEX = new RegExp(XBOX, "i");
  PLAYSTATION_REGEX = new RegExp(PLAYSTATION + " \\w+", "i");
  NINTENDO_REGEX = new RegExp(NINTENDO + " \\w+", "i");
  BLACKBERRY_REGEX = new RegExp(BLACKBERRY + "|PlayBook|BB10", "i");
  windowsVersionMap = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    "5.1": "XP",
    "5.2": "XP",
    "6.0": "Vista",
    "6.1": "7",
    "6.2": "8",
    "6.3": "8.1",
    "6.4": "10",
    "10.0": "10"
  };
  versionRegexes = {
    [INTERNET_EXPLORER_MOBILE]: [
      new RegExp("rv:" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [MICROSOFT_EDGE]: [
      new RegExp(EDGE + "?\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [CHROME]: [
      new RegExp("(" + CHROME + "|CrMo)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [CHROME_IOS]: [
      new RegExp("CriOS\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    "UC Browser": [
      new RegExp("(UCBrowser|UCWEB)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [SAFARI]: [
      DEFAULT_BROWSER_VERSION_REGEX
    ],
    [MOBILE_SAFARI]: [
      DEFAULT_BROWSER_VERSION_REGEX
    ],
    [OPERA]: [
      new RegExp("(" + OPERA + "|OPR)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [FIREFOX]: [
      new RegExp(FIREFOX + "\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [FIREFOX_IOS]: [
      new RegExp("FxiOS\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [KONQUEROR]: [
      new RegExp("Konqueror[:/]?" + BROWSER_VERSION_REGEX_SUFFIX, "i")
    ],
    [BLACKBERRY]: [
      new RegExp(BLACKBERRY + " " + BROWSER_VERSION_REGEX_SUFFIX),
      DEFAULT_BROWSER_VERSION_REGEX
    ],
    [ANDROID_MOBILE]: [
      new RegExp("android\\s" + BROWSER_VERSION_REGEX_SUFFIX, "i")
    ],
    [SAMSUNG_INTERNET]: [
      new RegExp(SAMSUNG_BROWSER + "\\/" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    [INTERNET_EXPLORER]: [
      new RegExp("(rv:|MSIE )" + BROWSER_VERSION_REGEX_SUFFIX)
    ],
    Mozilla: [
      new RegExp("rv:" + BROWSER_VERSION_REGEX_SUFFIX)
    ]
  };
  osMatchers = [
    [
      new RegExp(XBOX + "; " + XBOX + " (.*?)[);]", "i"),
      (match) => [
        XBOX,
        match && match[1] || ""
      ]
    ],
    [
      new RegExp(NINTENDO, "i"),
      [
        NINTENDO,
        ""
      ]
    ],
    [
      new RegExp(PLAYSTATION, "i"),
      [
        PLAYSTATION,
        ""
      ]
    ],
    [
      BLACKBERRY_REGEX,
      [
        BLACKBERRY,
        ""
      ]
    ],
    [
      new RegExp(WINDOWS, "i"),
      (_, user_agent) => {
        if (/Phone/.test(user_agent) || /WPDesktop/.test(user_agent))
          return [
            WINDOWS_PHONE,
            ""
          ];
        if (new RegExp(MOBILE).test(user_agent) && !/IEMobile\b/.test(user_agent))
          return [
            WINDOWS + " " + MOBILE,
            ""
          ];
        const match = /Windows NT ([0-9.]+)/i.exec(user_agent);
        if (match && match[1]) {
          const version = match[1];
          let osVersion = windowsVersionMap[version] || "";
          if (/arm/i.test(user_agent))
            osVersion = "RT";
          return [
            WINDOWS,
            osVersion
          ];
        }
        return [
          WINDOWS,
          ""
        ];
      }
    ],
    [
      /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
      (match) => {
        if (match && match[3]) {
          const versionParts = [
            match[3],
            match[4],
            match[5] || "0"
          ];
          return [
            IOS,
            versionParts.join(".")
          ];
        }
        return [
          IOS,
          ""
        ];
      }
    ],
    [
      /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
      (match) => {
        let version = "";
        if (match && match.length >= 3)
          version = isUndefined(match[2]) ? match[3] : match[2];
        return [
          "watchOS",
          version
        ];
      }
    ],
    [
      new RegExp("(" + ANDROID + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ANDROID + ")", "i"),
      (match) => {
        if (match && match[2]) {
          const versionParts = [
            match[2],
            match[3],
            match[4] || "0"
          ];
          return [
            ANDROID,
            versionParts.join(".")
          ];
        }
        return [
          ANDROID,
          ""
        ];
      }
    ],
    [
      /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
      (match) => {
        const result = [
          "Mac OS X",
          ""
        ];
        if (match && match[1]) {
          const versionParts = [
            match[1],
            match[2],
            match[3] || "0"
          ];
          result[1] = versionParts.join(".");
        }
        return result;
      }
    ],
    [
      /Mac/i,
      [
        "Mac OS X",
        ""
      ]
    ],
    [
      /CrOS/,
      [
        CHROME_OS,
        ""
      ]
    ],
    [
      /Linux|debian/i,
      [
        "Linux",
        ""
      ]
    ]
  ];
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/utils/index.mjs
function removeTrailingSlash(url) {
  return url?.replace(/\/+$/, "");
}
async function retriable(fn, props) {
  let lastError = null;
  for (let i = 0;i < props.retryCount + 1; i++) {
    if (i > 0)
      await new Promise((r) => setTimeout(r, props.retryDelay));
    try {
      const res = await fn();
      return res;
    } catch (e) {
      lastError = e;
      if (!props.retryCheck(e))
        throw e;
    }
  }
  throw lastError;
}
function currentISOTime() {
  return new Date().toISOString();
}
function safeSetTimeout(fn, timeout) {
  const t = setTimeout(fn, timeout);
  t?.unref && t?.unref();
  return t;
}
function allSettled(promises) {
  return Promise.all(promises.map((p) => (p ?? Promise.resolve()).then((value) => ({
    status: "fulfilled",
    value
  }), (reason) => ({
    status: "rejected",
    reason
  }))));
}
var STRING_FORMAT = "utf8", isError = (x) => x instanceof Error;
var init_utils = __esm(() => {
  init_bot_detection();
  init_bucketed_rate_limiter();
  init_number_utils();
  init_string_utils2();
  init_type_utils();
  init_promise_queue();
  init_logger();
  init_user_agent_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/logs/logs-utils.mjs
var OTLP_SEVERITY_MAP, DEFAULT_OTLP_SEVERITY;
var init_logs_utils = __esm(() => {
  init_utils();
  OTLP_SEVERITY_MAP = {
    trace: {
      text: "TRACE",
      number: 1
    },
    debug: {
      text: "DEBUG",
      number: 5
    },
    info: {
      text: "INFO",
      number: 9
    },
    warn: {
      text: "WARN",
      number: 13
    },
    error: {
      text: "ERROR",
      number: 17
    },
    fatal: {
      text: "FATAL",
      number: 21
    }
  };
  DEFAULT_OTLP_SEVERITY = OTLP_SEVERITY_MAP.info;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/logs/index.mjs
var init_logs = __esm(() => {
  init_logs_utils();
  init_types();
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/surveys/validation.mjs
var init_validation = __esm(() => {
  init_types();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/cookie.mjs
var init_cookie = __esm(() => {
  init_utils();
  init_uuidv7();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/eventemitter.mjs
class SimpleEventEmitter {
  constructor() {
    this.events = {};
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event])
      this.events[event] = [];
    this.events[event].push(listener);
    return () => {
      this.events[event] = this.events[event].filter((x) => x !== listener);
    };
  }
  emit(event, payload) {
    for (const listener of this.events[event] || [])
      listener(payload);
    for (const listener of this.events["*"] || [])
      listener(event, payload);
  }
}
var init_eventemitter = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/posthog-core-stateless.mjs
async function logFlushError(err) {
  if (err instanceof PostHogFetchHttpError) {
    let text = "";
    try {
      text = await err.text;
    } catch {}
    console.error(`Error while flushing PostHog: message=${err.message}, response body=${text}`, err);
  } else
    console.error("Error while flushing PostHog", err);
  return Promise.resolve();
}
function isPostHogFetchError(err) {
  return typeof err == "object" && (err instanceof PostHogFetchHttpError || err instanceof PostHogFetchNetworkError);
}
function isPostHogFetchContentTooLargeError(err) {
  return typeof err == "object" && err instanceof PostHogFetchHttpError && err.status === 413;
}

class PostHogCoreStateless {
  constructor(apiKey, options = {}) {
    this.flushPromise = null;
    this.shutdownPromise = null;
    this.promiseQueue = new PromiseQueue;
    this._events = new SimpleEventEmitter;
    this._isInitialized = false;
    const normalizedApiKey = typeof apiKey == "string" ? apiKey.trim() : "";
    const normalizedHost = typeof options.host == "string" ? options.host.trim() : "";
    const missingApiKey = !normalizedApiKey;
    this._logger = createLogger("[PostHog]", this.logMsgIfDebug.bind(this));
    if (missingApiKey)
      this._logger.error("You must pass your PostHog project's api key. The client will be disabled.");
    this.apiKey = normalizedApiKey;
    this.host = removeTrailingSlash(normalizedHost || "https://us.i.posthog.com");
    this.flushAt = options.flushAt ? Math.max(options.flushAt, 1) : 20;
    this.maxBatchSize = Math.max(this.flushAt, options.maxBatchSize ?? 100);
    this.maxQueueSize = Math.max(this.flushAt, options.maxQueueSize ?? 1000);
    this.flushInterval = options.flushInterval ?? 1e4;
    this.preloadFeatureFlags = options.preloadFeatureFlags ?? true;
    this.defaultOptIn = options.defaultOptIn ?? true;
    this.disableSurveys = options.disableSurveys ?? false;
    this._retryOptions = {
      retryCount: options.fetchRetryCount ?? 3,
      retryDelay: options.fetchRetryDelay ?? 3000,
      retryCheck: isPostHogFetchError
    };
    this.requestTimeout = options.requestTimeout ?? 1e4;
    this.featureFlagsRequestTimeoutMs = options.featureFlagsRequestTimeoutMs ?? 3000;
    this.remoteConfigRequestTimeoutMs = options.remoteConfigRequestTimeoutMs ?? 3000;
    this.disableGeoip = options.disableGeoip ?? true;
    this.disabled = (options.disabled ?? false) || missingApiKey;
    this.historicalMigration = options?.historicalMigration ?? false;
    this._initPromise = Promise.resolve();
    this._isInitialized = true;
    this.evaluationContexts = options?.evaluationContexts ?? options?.evaluationEnvironments;
    if (options?.evaluationEnvironments && !options?.evaluationContexts)
      this._logger.warn("evaluationEnvironments is deprecated. Use evaluationContexts instead. This property will be removed in a future version.");
    this.disableCompression = !isGzipSupported() || (options?.disableCompression ?? false);
  }
  logMsgIfDebug(fn) {
    if (this.isDebug)
      fn();
  }
  wrap(fn) {
    if (this.disabled)
      return void this._logger.warn("The client is disabled");
    if (this._isInitialized)
      return fn();
    this._initPromise.then(() => fn());
  }
  getCommonEventProperties() {
    return {
      $lib: this.getLibraryId(),
      $lib_version: this.getLibraryVersion()
    };
  }
  get optedOut() {
    return this.getPersistedProperty(types_PostHogPersistedProperty.OptedOut) ?? !this.defaultOptIn;
  }
  async optIn() {
    this.wrap(() => {
      this.setPersistedProperty(types_PostHogPersistedProperty.OptedOut, false);
    });
  }
  async optOut() {
    this.wrap(() => {
      this.setPersistedProperty(types_PostHogPersistedProperty.OptedOut, true);
    });
  }
  on(event, cb) {
    return this._events.on(event, cb);
  }
  debug(enabled = true) {
    this.removeDebugCallback?.();
    if (enabled) {
      const removeDebugCallback = this.on("*", (event, payload) => this._logger.info(event, payload));
      this.removeDebugCallback = () => {
        removeDebugCallback();
        this.removeDebugCallback = undefined;
      };
    }
  }
  get isDebug() {
    return !!this.removeDebugCallback;
  }
  get isDisabled() {
    return this.disabled;
  }
  buildPayload(payload) {
    return {
      distinct_id: payload.distinct_id,
      event: payload.event,
      properties: {
        ...payload.properties || {},
        ...this.getCommonEventProperties()
      }
    };
  }
  addPendingPromise(promise) {
    return this.promiseQueue.add(promise);
  }
  identifyStateless(distinctId, properties, options) {
    this.wrap(() => {
      const payload = {
        ...this.buildPayload({
          distinct_id: distinctId,
          event: "$identify",
          properties
        })
      };
      this.enqueue("identify", payload, options);
    });
  }
  async identifyStatelessImmediate(distinctId, properties, options) {
    const payload = {
      ...this.buildPayload({
        distinct_id: distinctId,
        event: "$identify",
        properties
      })
    };
    await this.sendImmediate("identify", payload, options);
  }
  captureStateless(distinctId, event, properties, options) {
    this.wrap(() => {
      const payload = this.buildPayload({
        distinct_id: distinctId,
        event,
        properties
      });
      this.enqueue("capture", payload, options);
    });
  }
  async captureStatelessImmediate(distinctId, event, properties, options) {
    const payload = this.buildPayload({
      distinct_id: distinctId,
      event,
      properties
    });
    await this.sendImmediate("capture", payload, options);
  }
  aliasStateless(alias, distinctId, properties, options) {
    this.wrap(() => {
      const payload = this.buildPayload({
        event: "$create_alias",
        distinct_id: distinctId,
        properties: {
          ...properties || {},
          distinct_id: distinctId,
          alias
        }
      });
      this.enqueue("alias", payload, options);
    });
  }
  async aliasStatelessImmediate(alias, distinctId, properties, options) {
    const payload = this.buildPayload({
      event: "$create_alias",
      distinct_id: distinctId,
      properties: {
        ...properties || {},
        distinct_id: distinctId,
        alias
      }
    });
    await this.sendImmediate("alias", payload, options);
  }
  groupIdentifyStateless(groupType, groupKey, groupProperties, options, distinctId, eventProperties) {
    this.wrap(() => {
      const payload = this.buildPayload({
        distinct_id: distinctId || `$${groupType}_${groupKey}`,
        event: "$groupidentify",
        properties: {
          $group_type: groupType,
          $group_key: groupKey,
          $group_set: groupProperties || {},
          ...eventProperties || {}
        }
      });
      this.enqueue("capture", payload, options);
    });
  }
  async getRemoteConfig() {
    await this._initPromise;
    let host = this.host;
    if (host === "https://us.i.posthog.com")
      host = "https://us-assets.i.posthog.com";
    else if (host === "https://eu.i.posthog.com")
      host = "https://eu-assets.i.posthog.com";
    const url = `${host}/array/${this.apiKey}/config`;
    const fetchOptions = {
      method: "GET",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      }
    };
    return this.fetchWithRetry(url, fetchOptions, {
      retryCount: 0
    }, this.remoteConfigRequestTimeoutMs).then((response) => response.json()).catch((error) => {
      this._logger.error("Remote config could not be loaded", error);
      this._events.emit("error", error);
    });
  }
  async getFlags(distinctId, groups = {}, personProperties = {}, groupProperties = {}, extraPayload = {}, fetchConfig = false) {
    await this._initPromise;
    const configParam = fetchConfig ? "&config=true" : "";
    const url = `${this.host}/flags/?v=2${configParam}`;
    const requestData = {
      token: this.apiKey,
      distinct_id: distinctId,
      groups,
      person_properties: personProperties,
      group_properties: groupProperties,
      ...extraPayload
    };
    if (personProperties.$device_id)
      requestData.$device_id = personProperties.$device_id;
    if (this.evaluationContexts && this.evaluationContexts.length > 0)
      requestData.evaluation_contexts = this.evaluationContexts;
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    };
    this._logger.info("Flags URL", url);
    return this.fetchWithRetry(url, fetchOptions, {
      retryCount: 0
    }, this.featureFlagsRequestTimeoutMs).then((response) => response.json()).then((response) => ({
      success: true,
      response: normalizeFlagsResponse(response)
    })).catch((error) => {
      this._events.emit("error", error);
      return {
        success: false,
        error: this.categorizeRequestError(error)
      };
    });
  }
  categorizeRequestError(error) {
    if (error instanceof PostHogFetchHttpError)
      return {
        type: "api_error",
        statusCode: error.status
      };
    if (error instanceof PostHogFetchNetworkError) {
      const cause = error.error;
      if (cause instanceof Error && (cause.name === "AbortError" || cause.name === "TimeoutError"))
        return {
          type: "timeout"
        };
      return {
        type: "connection_error"
      };
    }
    return {
      type: "unknown_error"
    };
  }
  async getFeatureFlagStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const flagDetailResponse = await this.getFeatureFlagDetailStateless(key, distinctId, groups, personProperties, groupProperties, disableGeoip);
    if (flagDetailResponse === undefined)
      return {
        response: undefined,
        requestId: undefined
      };
    let response = getFeatureFlagValue(flagDetailResponse.response);
    if (response === undefined)
      response = false;
    return {
      response,
      requestId: flagDetailResponse.requestId
    };
  }
  async getFeatureFlagDetailStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const flagsResponse = await this.getFeatureFlagDetailsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, [
      key
    ]);
    if (flagsResponse === undefined)
      return;
    const featureFlags = flagsResponse.flags;
    const flagDetail = featureFlags[key];
    return {
      response: flagDetail,
      requestId: flagsResponse.requestId,
      evaluatedAt: flagsResponse.evaluatedAt
    };
  }
  async getFeatureFlagPayloadStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const payloads = await this.getFeatureFlagPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, [
      key
    ]);
    if (!payloads)
      return;
    const response = payloads[key];
    if (response === undefined)
      return null;
    return response;
  }
  async getFeatureFlagPayloadsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const payloads = (await this.getFeatureFlagsAndPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate)).payloads;
    return payloads;
  }
  async getFeatureFlagsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    return await this.getFeatureFlagsAndPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate);
  }
  async getFeatureFlagsAndPayloadsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const featureFlagDetails = await this.getFeatureFlagDetailsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate);
    if (!featureFlagDetails)
      return {
        flags: undefined,
        payloads: undefined,
        requestId: undefined
      };
    return {
      flags: featureFlagDetails.featureFlags,
      payloads: featureFlagDetails.featureFlagPayloads,
      requestId: featureFlagDetails.requestId
    };
  }
  async getFeatureFlagDetailsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const extraPayload = {};
    if (disableGeoip ?? this.disableGeoip)
      extraPayload["geoip_disable"] = true;
    if (flagKeysToEvaluate)
      extraPayload["flag_keys_to_evaluate"] = flagKeysToEvaluate;
    const result = await this.getFlags(distinctId, groups, personProperties, groupProperties, extraPayload);
    if (!result.success)
      return;
    const flagsResponse = result.response;
    if (flagsResponse.errorsWhileComputingFlags)
      console.error("[FEATURE FLAGS] Error while computing feature flags, some flags may be missing or incorrect. Learn more at https://posthog.com/docs/feature-flags/best-practices");
    if (flagsResponse.quotaLimited?.includes("feature_flags")) {
      console.warn("[FEATURE FLAGS] Feature flags quota limit exceeded - feature flags unavailable. Learn more about billing limits at https://posthog.com/docs/billing/limits-alerts");
      return {
        flags: {},
        featureFlags: {},
        featureFlagPayloads: {},
        requestId: flagsResponse?.requestId,
        quotaLimited: flagsResponse.quotaLimited
      };
    }
    return flagsResponse;
  }
  async getSurveysStateless() {
    await this._initPromise;
    if (this.disabled)
      return [];
    if (this.disableSurveys === true) {
      this._logger.info("Loading surveys is disabled.");
      return [];
    }
    const url = `${this.host}/api/surveys/?token=${this.apiKey}`;
    const fetchOptions = {
      method: "GET",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      }
    };
    const response = await this.fetchWithRetry(url, fetchOptions).then((response2) => {
      if (response2.status !== 200 || !response2.json) {
        const msg = `Surveys API could not be loaded: ${response2.status}`;
        const error = new Error(msg);
        this._logger.error(error);
        this._events.emit("error", new Error(msg));
        return;
      }
      return response2.json();
    }).catch((error) => {
      this._logger.error("Surveys API could not be loaded", error);
      this._events.emit("error", error);
    });
    const newSurveys = response?.surveys;
    if (newSurveys)
      this._logger.info("Surveys fetched from API: ", JSON.stringify(newSurveys));
    return newSurveys ?? [];
  }
  get props() {
    if (!this._props)
      this._props = this.getPersistedProperty(types_PostHogPersistedProperty.Props);
    return this._props || {};
  }
  set props(val) {
    this._props = val;
  }
  async register(properties) {
    this.wrap(() => {
      this.props = {
        ...this.props,
        ...properties
      };
      this.setPersistedProperty(types_PostHogPersistedProperty.Props, this.props);
    });
  }
  async unregister(property) {
    this.wrap(() => {
      delete this.props[property];
      this.setPersistedProperty(types_PostHogPersistedProperty.Props, this.props);
    });
  }
  processBeforeEnqueue(message) {
    return message;
  }
  async flushStorage() {}
  enqueue(type, _message, options) {
    this.wrap(() => {
      if (this.optedOut)
        return void this._events.emit(type, "Library is disabled. Not sending event. To re-enable, call posthog.optIn()");
      let message = this.prepareMessage(type, _message, options);
      message = this.processBeforeEnqueue(message);
      if (message === null)
        return;
      const queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
      if (queue.length >= this.maxQueueSize) {
        queue.shift();
        this._logger.info("Queue is full, the oldest event is dropped.");
      }
      queue.push({
        message
      });
      this.setPersistedProperty(types_PostHogPersistedProperty.Queue, queue);
      this._events.emit(type, message);
      if (queue.length >= this.flushAt)
        this.flushBackground();
      if (this.flushInterval && !this._flushTimer)
        this._flushTimer = safeSetTimeout(() => this.flushBackground(), this.flushInterval);
    });
  }
  async sendImmediate(type, _message, options) {
    if (this.disabled)
      return void this._logger.warn("The client is disabled");
    if (!this._isInitialized)
      await this._initPromise;
    if (this.optedOut)
      return void this._events.emit(type, "Library is disabled. Not sending event. To re-enable, call posthog.optIn()");
    let message = this.prepareMessage(type, _message, options);
    message = this.processBeforeEnqueue(message);
    if (message === null)
      return;
    const data = {
      api_key: this.apiKey,
      batch: [
        message
      ],
      sent_at: currentISOTime()
    };
    if (this.historicalMigration)
      data.historical_migration = true;
    const payload = JSON.stringify(data);
    const url = `${this.host}/batch/`;
    const gzippedPayload = this.disableCompression ? null : await gzipCompress(payload, this.isDebug);
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json",
        ...gzippedPayload !== null && {
          "Content-Encoding": "gzip"
        }
      },
      body: gzippedPayload || payload
    };
    try {
      const response = await this.fetchWithRetry(url, fetchOptions);
      await response.body?.cancel()?.catch(() => {});
    } catch (err) {
      this._events.emit("error", err);
    }
  }
  prepareMessage(type, _message, options) {
    const message = {
      ..._message,
      type,
      library: this.getLibraryId(),
      library_version: this.getLibraryVersion(),
      timestamp: options?.timestamp ? options?.timestamp : currentISOTime(),
      uuid: options?.uuid ? options.uuid : uuidv7()
    };
    const addGeoipDisableProperty = options?.disableGeoip ?? this.disableGeoip;
    if (addGeoipDisableProperty) {
      if (!message.properties)
        message.properties = {};
      message["properties"]["$geoip_disable"] = true;
    }
    if (message.distinctId) {
      message.distinct_id = message.distinctId;
      delete message.distinctId;
    }
    return message;
  }
  clearFlushTimer() {
    if (this._flushTimer) {
      clearTimeout(this._flushTimer);
      this._flushTimer = undefined;
    }
  }
  flushBackground() {
    this.flush().catch(async (err) => {
      await logFlushError(err);
    });
  }
  async flush() {
    if (this.disabled)
      return;
    const nextFlushPromise = allSettled([
      this.flushPromise
    ]).then(() => this._flush());
    this.flushPromise = nextFlushPromise;
    this.addPendingPromise(nextFlushPromise);
    allSettled([
      nextFlushPromise
    ]).then(() => {
      if (this.flushPromise === nextFlushPromise)
        this.flushPromise = null;
    });
    return nextFlushPromise;
  }
  getCustomHeaders() {
    const customUserAgent = this.getCustomUserAgent();
    const headers = {};
    if (customUserAgent && customUserAgent !== "")
      headers["User-Agent"] = customUserAgent;
    return headers;
  }
  async _flush() {
    this.clearFlushTimer();
    await this._initPromise;
    let queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
    if (!queue.length)
      return;
    const sentMessages = [];
    const originalQueueLength = queue.length;
    while (queue.length > 0 && sentMessages.length < originalQueueLength) {
      const batchItems = queue.slice(0, this.maxBatchSize);
      const batchMessages = batchItems.map((item) => item.message);
      const persistQueueChange = async () => {
        const refreshedQueue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
        const newQueue = refreshedQueue.slice(batchItems.length);
        this.setPersistedProperty(types_PostHogPersistedProperty.Queue, newQueue);
        queue = newQueue;
        await this.flushStorage();
      };
      const data = {
        api_key: this.apiKey,
        batch: batchMessages,
        sent_at: currentISOTime()
      };
      if (this.historicalMigration)
        data.historical_migration = true;
      const payload = JSON.stringify(data);
      const url = `${this.host}/batch/`;
      const gzippedPayload = this.disableCompression ? null : await gzipCompress(payload, this.isDebug);
      const fetchOptions = {
        method: "POST",
        headers: {
          ...this.getCustomHeaders(),
          "Content-Type": "application/json",
          ...gzippedPayload !== null && {
            "Content-Encoding": "gzip"
          }
        },
        body: gzippedPayload || payload
      };
      const retryOptions = {
        retryCheck: (err) => {
          if (isPostHogFetchContentTooLargeError(err))
            return false;
          return isPostHogFetchError(err);
        }
      };
      try {
        const response = await this.fetchWithRetry(url, fetchOptions, retryOptions);
        await response.body?.cancel()?.catch(() => {});
      } catch (err) {
        if (isPostHogFetchContentTooLargeError(err) && batchMessages.length > 1) {
          this.maxBatchSize = Math.max(1, Math.floor(batchMessages.length / 2));
          this._logger.warn(`Received 413 when sending batch of size ${batchMessages.length}, reducing batch size to ${this.maxBatchSize}`);
          continue;
        }
        if (!(err instanceof PostHogFetchNetworkError))
          await persistQueueChange();
        this._events.emit("error", err);
        throw err;
      }
      await persistQueueChange();
      sentMessages.push(...batchMessages);
    }
    this._events.emit("flush", sentMessages);
  }
  async _sendLogsBatch(payload) {
    if (this.disabled)
      return {
        kind: "fatal",
        error: new Error("The client is disabled")
      };
    const serialized = JSON.stringify(payload);
    const url = `${this.host}/i/v1/logs?token=${encodeURIComponent(this.apiKey)}`;
    const gzippedPayload = this.disableCompression ? null : await gzipCompress(serialized, this.isDebug);
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json",
        ...gzippedPayload !== null && {
          "Content-Encoding": "gzip"
        }
      },
      body: gzippedPayload || serialized
    };
    try {
      await this.fetchWithRetry(url, fetchOptions, {
        retryCheck: (err) => {
          if (isPostHogFetchContentTooLargeError(err))
            return false;
          return isPostHogFetchError(err);
        }
      });
      return {
        kind: "ok"
      };
    } catch (err) {
      if (isPostHogFetchContentTooLargeError(err))
        return {
          kind: "too-large"
        };
      if (err instanceof PostHogFetchNetworkError)
        return {
          kind: "retry-later",
          error: err
        };
      return {
        kind: "fatal",
        error: err
      };
    }
  }
  async fetchWithRetry(url, options, retryOptions, requestTimeout) {
    const body = options.body ? options.body : "";
    let reqByteLength = -1;
    try {
      reqByteLength = body instanceof Blob ? body.size : Buffer.byteLength(body, STRING_FORMAT);
    } catch {
      if (body instanceof Blob)
        reqByteLength = body.size;
      else {
        const encoded = new TextEncoder().encode(body);
        reqByteLength = encoded.length;
      }
    }
    return await retriable(async () => {
      const ctrl = new AbortController;
      const timeoutMs = requestTimeout ?? this.requestTimeout;
      const timer = safeSetTimeout(() => ctrl.abort(), timeoutMs);
      let res = null;
      try {
        res = await this.fetch(url, {
          signal: ctrl.signal,
          ...options
        });
      } catch (e) {
        throw new PostHogFetchNetworkError(e);
      } finally {
        clearTimeout(timer);
      }
      const isNoCors = options.mode === "no-cors";
      if (!isNoCors && (res.status < 200 || res.status >= 400))
        throw new PostHogFetchHttpError(res, reqByteLength);
      return res;
    }, {
      ...this._retryOptions,
      ...retryOptions
    });
  }
  async _shutdown(shutdownTimeoutMs = 30000) {
    await this._initPromise;
    let hasTimedOut = false;
    this.clearFlushTimer();
    if (this.disabled)
      return;
    const doShutdown = async () => {
      try {
        await this.promiseQueue.join();
        while (true) {
          const queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
          if (queue.length === 0)
            break;
          await this.flush();
          if (hasTimedOut)
            break;
        }
      } catch (e) {
        if (!isPostHogFetchError(e))
          throw e;
        await logFlushError(e);
      }
    };
    let timeoutHandle;
    try {
      return await Promise.race([
        new Promise((_, reject) => {
          timeoutHandle = safeSetTimeout(() => {
            this._logger.error("Timed out while shutting down PostHog");
            hasTimedOut = true;
            reject("Timeout while shutting down PostHog. Some events may not have been sent.");
          }, shutdownTimeoutMs);
        }),
        doShutdown()
      ]);
    } finally {
      clearTimeout(timeoutHandle);
    }
  }
  async shutdown(shutdownTimeoutMs = 30000) {
    if (this.shutdownPromise)
      this._logger.warn("shutdown() called while already shutting down. shutdown() is meant to be called once before process exit - use flush() for per-request cleanup");
    else
      this.shutdownPromise = this._shutdown(shutdownTimeoutMs).finally(() => {
        this.shutdownPromise = null;
      });
    return this.shutdownPromise;
  }
}
var PostHogFetchHttpError, PostHogFetchNetworkError;
var init_posthog_core_stateless = __esm(() => {
  init_eventemitter();
  init_featureFlagUtils();
  init_gzip();
  init_types();
  init_utils();
  init_uuidv7();
  PostHogFetchHttpError = class PostHogFetchHttpError extends Error {
    constructor(response, reqByteLength) {
      super("HTTP error while fetching PostHog: status=" + response.status + ", reqByteLength=" + reqByteLength), this.response = response, this.reqByteLength = reqByteLength, this.name = "PostHogFetchHttpError";
    }
    get status() {
      return this.response.status;
    }
    get text() {
      return this.response.text();
    }
    get json() {
      return this.response.json();
    }
  };
  PostHogFetchNetworkError = class PostHogFetchNetworkError extends Error {
    constructor(error) {
      super("Network error while fetching PostHog", error instanceof Error ? {
        cause: error
      } : {}), this.error = error, this.name = "PostHogFetchNetworkError";
    }
  };
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/posthog-core.mjs
var init_posthog_core = __esm(() => {
  init_featureFlagUtils();
  init_types();
  init_posthog_core_stateless();
  init_uuidv7();
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/tracing-headers.mjs
var init_tracing_headers = __esm(() => {
  init_type_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/chunk-ids.mjs
function getFilenameToChunkIdMap(stackParser) {
  const chunkIdMap = globalThis._posthogChunkIds;
  if (!chunkIdMap)
    return;
  const chunkIdKeys = Object.keys(chunkIdMap);
  if (cachedFilenameChunkIds && chunkIdKeys.length === lastKeysCount)
    return cachedFilenameChunkIds;
  lastKeysCount = chunkIdKeys.length;
  cachedFilenameChunkIds = chunkIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults)
      parsedStackResults = {};
    const result = parsedStackResults[stackKey];
    if (result)
      acc[result[0]] = result[1];
    else {
      const parsedStack = stackParser(stackKey);
      for (let i = parsedStack.length - 1;i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame?.filename;
        const chunkId = chunkIdMap[stackKey];
        if (filename && chunkId) {
          acc[filename] = chunkId;
          parsedStackResults[stackKey] = [
            filename,
            chunkId
          ];
          break;
        }
      }
    }
    return acc;
  }, {});
  return cachedFilenameChunkIds;
}
var parsedStackResults, lastKeysCount, cachedFilenameChunkIds;
var init_chunk_ids = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/error-properties-builder.mjs
class ErrorPropertiesBuilder {
  constructor(coercers, stackParser, modifiers = []) {
    this.coercers = coercers;
    this.stackParser = stackParser;
    this.modifiers = modifiers;
  }
  buildFromUnknown(input, hint = {}) {
    const providedMechanism = hint && hint.mechanism;
    const mechanism = providedMechanism || {
      handled: true,
      type: "generic"
    };
    const coercingContext = this.buildCoercingContext(mechanism, hint, 0);
    const exceptionWithCause = coercingContext.apply(input);
    const parsingContext = this.buildParsingContext(hint);
    const exceptionWithStack = this.parseStacktrace(exceptionWithCause, parsingContext);
    const exceptionList = this.convertToExceptionList(exceptionWithStack, mechanism);
    return {
      $exception_list: exceptionList,
      $exception_level: "error"
    };
  }
  async modifyFrames(exceptionList) {
    for (const exc of exceptionList)
      if (exc.stacktrace && exc.stacktrace.frames && isArray(exc.stacktrace.frames))
        exc.stacktrace.frames = await this.applyModifiers(exc.stacktrace.frames);
    return exceptionList;
  }
  coerceFallback(ctx) {
    return {
      type: "Error",
      value: "Unknown error",
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
  parseStacktrace(err, ctx) {
    let cause;
    if (err.cause != null)
      cause = this.parseStacktrace(err.cause, ctx);
    let stack;
    if (err.stack != "" && err.stack != null)
      stack = this.applyChunkIds(this.stackParser(err.stack, err.synthetic ? ctx.skipFirstLines : 0), ctx.chunkIdMap);
    return {
      ...err,
      cause,
      stack
    };
  }
  applyChunkIds(frames, chunkIdMap) {
    return frames.map((frame) => {
      if (frame.filename && chunkIdMap)
        frame.chunk_id = chunkIdMap[frame.filename];
      return frame;
    });
  }
  applyCoercers(input, ctx) {
    for (const adapter of this.coercers)
      if (adapter.match(input))
        return adapter.coerce(input, ctx);
    return this.coerceFallback(ctx);
  }
  async applyModifiers(frames) {
    let newFrames = frames;
    for (const modifier of this.modifiers)
      newFrames = await modifier(newFrames);
    return newFrames;
  }
  convertToExceptionList(exceptionWithStack, mechanism) {
    const currentException = {
      type: exceptionWithStack.type,
      value: exceptionWithStack.value,
      mechanism: {
        type: mechanism.type ?? "generic",
        handled: mechanism.handled ?? true,
        synthetic: exceptionWithStack.synthetic ?? false
      }
    };
    if (exceptionWithStack.stack)
      currentException.stacktrace = {
        type: "raw",
        frames: exceptionWithStack.stack
      };
    const exceptionList = [
      currentException
    ];
    if (exceptionWithStack.cause != null)
      exceptionList.push(...this.convertToExceptionList(exceptionWithStack.cause, {
        ...mechanism,
        handled: true
      }));
    return exceptionList;
  }
  buildParsingContext(hint) {
    const context = {
      chunkIdMap: getFilenameToChunkIdMap(this.stackParser),
      skipFirstLines: hint.skipFirstLines ?? 1
    };
    return context;
  }
  buildCoercingContext(mechanism, hint, depth = 0) {
    const coerce = (input, depth2) => {
      if (!(depth2 <= MAX_CAUSE_RECURSION))
        return;
      {
        const ctx = this.buildCoercingContext(mechanism, hint, depth2);
        return this.applyCoercers(input, ctx);
      }
    };
    const context = {
      ...hint,
      syntheticException: depth == 0 ? hint.syntheticException : undefined,
      mechanism,
      apply: (input) => coerce(input, depth),
      next: (input) => coerce(input, depth + 1)
    };
    return context;
  }
}
var MAX_CAUSE_RECURSION = 4;
var init_error_properties_builder = __esm(() => {
  init_utils();
  init_chunk_ids();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/base.mjs
function createFrame(platform, filename, func, lineno, colno) {
  const frame = {
    platform,
    filename,
    function: func === "<anonymous>" ? UNKNOWN_FUNCTION : func,
    in_app: true
  };
  if (!isUndefined(lineno))
    frame.lineno = lineno;
  if (!isUndefined(colno))
    frame.colno = colno;
  return frame;
}
var UNKNOWN_FUNCTION = "?";
var init_base = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/safari.mjs
var extractSafariExtensionDetails = (func, filename) => {
  const isSafariExtension = func.indexOf("safari-extension") !== -1;
  const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
  return isSafariExtension || isSafariWebExtension ? [
    func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
    isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
  ] : [
    func,
    filename
  ];
};
var init_safari = __esm(() => {
  init_base();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/chrome.mjs
var chromeRegexNoFnName, chromeRegex, chromeEvalRegex, chromeStackLineParser = (line, platform) => {
  const noFnParts = chromeRegexNoFnName.exec(line);
  if (noFnParts) {
    const [, filename, line2, col] = noFnParts;
    return createFrame(platform, filename, UNKNOWN_FUNCTION, +line2, +col);
  }
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = parts[2] && parts[2].indexOf("eval") === 0;
    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        parts[2] = subMatch[1];
        parts[3] = subMatch[2];
        parts[4] = subMatch[3];
      }
    }
    const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
    return createFrame(platform, filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
  }
};
var init_chrome = __esm(() => {
  init_base();
  init_safari();
  chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
  chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/gecko.mjs
var geckoREgex, geckoEvalRegex, geckoStackLineParser = (line, platform) => {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        parts[1] = parts[1] || "eval";
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = "";
      }
    }
    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    [func, filename] = extractSafariExtensionDetails(func, filename);
    return createFrame(platform, filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
  }
};
var init_gecko = __esm(() => {
  init_base();
  init_safari();
  geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/winjs.mjs
var winjsRegex, winjsStackLineParser = (line, platform) => {
  const parts = winjsRegex.exec(line);
  return parts ? createFrame(platform, parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
var init_winjs = __esm(() => {
  init_base();
  winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/opera.mjs
var opera10Regex, opera10StackLineParser = (line, platform) => {
  const parts = opera10Regex.exec(line);
  return parts ? createFrame(platform, parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : undefined;
}, opera11Regex, opera11StackLineParser = (line, platform) => {
  const parts = opera11Regex.exec(line);
  return parts ? createFrame(platform, parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : undefined;
};
var init_opera = __esm(() => {
  init_base();
  opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
  opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/node.mjs
function filenameIsInApp(filename, isNative = false) {
  const isInternal = isNative || filename && !filename.startsWith("/") && !filename.match(/^[A-Z]:/) && !filename.startsWith(".") && !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  return !isInternal && filename !== undefined && !filename.includes("node_modules/");
}
function _parseIntOrUndefined(input) {
  return parseInt(input || "", 10) || undefined;
}
var FILENAME_MATCH, FULL_MATCH, nodeStackLineParser = (line, platform) => {
  const lineMatch = line.match(FULL_MATCH);
  if (lineMatch) {
    let object;
    let method;
    let functionName;
    let typeName;
    let methodName;
    if (lineMatch[1]) {
      functionName = lineMatch[1];
      let methodStart = functionName.lastIndexOf(".");
      if (functionName[methodStart - 1] === ".")
        methodStart--;
      if (methodStart > 0) {
        object = functionName.slice(0, methodStart);
        method = functionName.slice(methodStart + 1);
        const objectEnd = object.indexOf(".Module");
        if (objectEnd > 0) {
          functionName = functionName.slice(objectEnd + 1);
          object = object.slice(0, objectEnd);
        }
      }
      typeName = undefined;
    }
    if (method) {
      typeName = object;
      methodName = method;
    }
    if (method === "<anonymous>") {
      methodName = undefined;
      functionName = undefined;
    }
    if (functionName === undefined) {
      methodName = methodName || UNKNOWN_FUNCTION;
      functionName = typeName ? `${typeName}.${methodName}` : methodName;
    }
    let filename = lineMatch[2]?.startsWith("file://") ? lineMatch[2].slice(7) : lineMatch[2];
    const isNative = lineMatch[5] === "native";
    if (filename?.match(/\/[A-Z]:/))
      filename = filename.slice(1);
    if (!filename && lineMatch[5] && !isNative)
      filename = lineMatch[5];
    return {
      filename: filename ? decodeURI(filename) : undefined,
      module: undefined,
      function: functionName,
      lineno: _parseIntOrUndefined(lineMatch[3]),
      colno: _parseIntOrUndefined(lineMatch[4]),
      in_app: filenameIsInApp(filename || "", isNative),
      platform
    };
  }
  if (line.match(FILENAME_MATCH))
    return {
      filename: line,
      platform
    };
};
var init_node = __esm(() => {
  init_base();
  FILENAME_MATCH = /^\s*[-]{4,}$/;
  FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/parsers/index.mjs
function reverseAndStripFrames(stack) {
  if (!stack.length)
    return [];
  const localStack = Array.from(stack);
  localStack.reverse();
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
function createDefaultStackParser() {
  return createStackParser("web:javascript", chromeStackLineParser, geckoStackLineParser);
}
function createStackParser(platform, ...parsers) {
  return (stack, skipFirstLines = 0) => {
    const frames = [];
    const lines = stack.split(`
`);
    for (let i = skipFirstLines;i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 1024)
        continue;
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (!cleanedLine.match(/\S*Error: /)) {
        for (const parser of parsers) {
          const frame = parser(cleanedLine, platform);
          if (frame) {
            frames.push(frame);
            break;
          }
        }
        if (frames.length >= STACKTRACE_FRAME_LIMIT)
          break;
      }
    }
    return reverseAndStripFrames(frames);
  };
}
var WEBPACK_ERROR_REGEXP, STACKTRACE_FRAME_LIMIT = 50;
var init_parsers = __esm(() => {
  init_base();
  init_chrome();
  init_gecko();
  init_winjs();
  init_opera();
  init_node();
  WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/dom-exception-coercer.mjs
class DOMExceptionCoercer {
  match(err) {
    return this.isDOMException(err) || this.isDOMError(err);
  }
  coerce(err, ctx) {
    const hasStack = isString(err.stack);
    return {
      type: this.getType(err),
      value: this.getValue(err),
      stack: hasStack ? err.stack : undefined,
      cause: err.cause ? ctx.next(err.cause) : undefined,
      synthetic: false
    };
  }
  getType(candidate) {
    return this.isDOMError(candidate) ? "DOMError" : "DOMException";
  }
  getValue(err) {
    const name = err.name || (this.isDOMError(err) ? "DOMError" : "DOMException");
    const message = err.message ? `${name}: ${err.message}` : name;
    return message;
  }
  isDOMException(err) {
    return isBuiltin(err, "DOMException");
  }
  isDOMError(err) {
    return isBuiltin(err, "DOMError");
  }
}
var init_dom_exception_coercer = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/error-coercer.mjs
class ErrorCoercer {
  match(err) {
    return isPlainError(err);
  }
  coerce(err, ctx) {
    return {
      type: this.getType(err),
      value: this.getMessage(err, ctx),
      stack: this.getStack(err),
      cause: err.cause ? ctx.next(err.cause) : undefined,
      synthetic: false
    };
  }
  getType(err) {
    return err.name || err.constructor.name;
  }
  getMessage(err, _ctx) {
    const message = err.message;
    if (message.error && typeof message.error.message == "string")
      return String(message.error.message);
    return String(message);
  }
  getStack(err) {
    return err.stacktrace || err.stack || undefined;
  }
}
var init_error_coercer = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/error-event-coercer.mjs
class ErrorEventCoercer {
  constructor() {}
  match(err) {
    return isErrorEvent(err) && err.error != null;
  }
  coerce(err, ctx) {
    const exceptionLike = ctx.apply(err.error);
    if (!exceptionLike)
      return {
        type: "ErrorEvent",
        value: err.message,
        stack: ctx.syntheticException?.stack,
        synthetic: true
      };
    return exceptionLike;
  }
}
var init_error_event_coercer = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/string-coercer.mjs
class StringCoercer {
  match(input) {
    return typeof input == "string";
  }
  coerce(input, ctx) {
    const [type, value] = this.getInfos(input);
    return {
      type: type ?? "Error",
      value: value ?? input,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
  getInfos(candidate) {
    let type = "Error";
    let value = candidate;
    const groups = candidate.match(ERROR_TYPES_PATTERN);
    if (groups) {
      type = groups[1];
      value = groups[2];
    }
    return [
      type,
      value
    ];
  }
}
var ERROR_TYPES_PATTERN;
var init_string_coercer = __esm(() => {
  ERROR_TYPES_PATTERN = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/types.mjs
var severityLevels;
var init_types2 = __esm(() => {
  severityLevels = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
  ];
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/utils.mjs
function extractExceptionKeysForMessage(err, maxLength = 40) {
  const keys = Object.keys(err);
  keys.sort();
  if (!keys.length)
    return "[object has no keys]";
  for (let i = keys.length;i > 0; i--) {
    const serialized = keys.slice(0, i).join(", ");
    if (!(serialized.length > maxLength)) {
      if (i === keys.length)
        return serialized;
      return serialized.length <= maxLength ? serialized : `${serialized.slice(0, maxLength)}...`;
    }
  }
  return "";
}
var init_utils2 = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/object-coercer.mjs
class ObjectCoercer {
  match(candidate) {
    return typeof candidate == "object" && candidate !== null;
  }
  coerce(candidate, ctx) {
    const errorProperty = this.getErrorPropertyFromObject(candidate);
    if (errorProperty)
      return ctx.apply(errorProperty);
    return {
      type: this.getType(candidate),
      value: this.getValue(candidate),
      stack: ctx.syntheticException?.stack,
      level: this.isSeverityLevel(candidate.level) ? candidate.level : "error",
      synthetic: true
    };
  }
  getType(err) {
    return isEvent(err) ? err.constructor.name : "Error";
  }
  getValue(err) {
    if ("name" in err && typeof err.name == "string") {
      let message = `'${err.name}' captured as exception`;
      if ("message" in err && typeof err.message == "string")
        message += ` with message: '${err.message}'`;
      return message;
    }
    if ("message" in err && typeof err.message == "string")
      return err.message;
    const className = this.getObjectClassName(err);
    const keys = extractExceptionKeysForMessage(err);
    return `${className && className !== "Object" ? `'${className}'` : "Object"} captured as exception with keys: ${keys}`;
  }
  isSeverityLevel(x) {
    return isString(x) && !isEmptyString(x) && severityLevels.indexOf(x) >= 0;
  }
  getErrorPropertyFromObject(obj) {
    for (const prop in obj)
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        const value = obj[prop];
        if (isError(value))
          return value;
      }
  }
  getObjectClassName(obj) {
    try {
      const prototype = Object.getPrototypeOf(obj);
      return prototype ? prototype.constructor.name : undefined;
    } catch (e) {
      return;
    }
  }
}
var init_object_coercer = __esm(() => {
  init_utils();
  init_types2();
  init_utils2();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/event-coercer.mjs
class EventCoercer {
  match(err) {
    return isEvent(err);
  }
  coerce(evt, ctx) {
    const constructorName = evt.constructor.name;
    return {
      type: constructorName,
      value: `${constructorName} captured as exception with keys: ${extractExceptionKeysForMessage(evt)}`,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
}
var init_event_coercer = __esm(() => {
  init_utils();
  init_utils2();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/primitive-coercer.mjs
class PrimitiveCoercer {
  match(candidate) {
    return isPrimitive(candidate);
  }
  coerce(value, ctx) {
    return {
      type: "Error",
      value: `Primitive value captured as exception: ${String(value)}`,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
}
var init_primitive_coercer = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/promise-rejection-event.mjs
class PromiseRejectionEventCoercer {
  match(err) {
    return isBuiltin(err, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(err);
  }
  isCustomEventWrappingRejection(err) {
    if (!isEvent(err))
      return false;
    try {
      const detail = err.detail;
      return detail != null && typeof detail == "object" && "reason" in detail;
    } catch {
      return false;
    }
  }
  coerce(err, ctx) {
    const reason = this.getUnhandledRejectionReason(err);
    if (isPrimitive(reason))
      return {
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(reason)}`,
        stack: ctx.syntheticException?.stack,
        synthetic: true
      };
    return ctx.apply(reason);
  }
  getUnhandledRejectionReason(error) {
    try {
      if ("reason" in error)
        return error.reason;
      if ("detail" in error && error.detail != null && typeof error.detail == "object" && "reason" in error.detail)
        return error.detail.reason;
    } catch {}
    return error;
  }
}
var init_promise_rejection_event = __esm(() => {
  init_utils();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/coercers/index.mjs
var init_coercers = __esm(() => {
  init_dom_exception_coercer();
  init_error_coercer();
  init_error_event_coercer();
  init_string_coercer();
  init_object_coercer();
  init_event_coercer();
  init_primitive_coercer();
  init_promise_rejection_event();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/utils.mjs
class ReduceableCache {
  constructor(_maxSize) {
    this._maxSize = _maxSize;
    this._cache = new Map;
  }
  get(key) {
    const value = this._cache.get(key);
    if (value === undefined)
      return;
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }
  set(key, value) {
    this._cache.set(key, value);
  }
  reduce() {
    while (this._cache.size >= this._maxSize) {
      const value = this._cache.keys().next().value;
      if (value)
        this._cache.delete(value);
    }
  }
}
var init_utils3 = () => {};

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/exception-steps.mjs
function resolveExceptionStepsConfig(config) {
  if (!config)
    return {
      ...DEFAULT_EXCEPTION_STEPS_CONFIG
    };
  return {
    enabled: config.enabled ?? DEFAULT_EXCEPTION_STEPS_CONFIG.enabled,
    max_bytes: normalizePositiveInteger(config.max_bytes, DEFAULT_EXCEPTION_STEPS_CONFIG.max_bytes)
  };
}
function stripReservedExceptionStepFields(properties) {
  if (!properties)
    return {
      sanitizedProperties: {},
      droppedKeys: []
    };
  const droppedKeys = [];
  const sanitizedProperties = Object.keys(properties).reduce((acc, key) => {
    if (RESERVED_EXCEPTION_STEP_KEYS.has(key)) {
      droppedKeys.push(key);
      return acc;
    }
    acc[key] = properties[key];
    return acc;
  }, {});
  return {
    sanitizedProperties,
    droppedKeys
  };
}

class ExceptionStepsBuffer {
  constructor(config) {
    this._entries = [];
    this._totalBytes = 0;
    this._config = resolveExceptionStepsConfig(config);
  }
  setConfig(config) {
    this._config = resolveExceptionStepsConfig(config);
    this._trimToMaxBytes();
  }
  add(step) {
    const serialized = normalizeAndSerializeStep(step);
    if (!serialized)
      return;
    const bytes = getUtf8ByteLength(serialized.json);
    if (bytes > this._config.max_bytes)
      return;
    this._entries.push({
      step: serialized.step,
      bytes
    });
    this._totalBytes += bytes;
    this._trimToMaxBytes();
  }
  getAttachable() {
    return this._entries.map((e) => e.step);
  }
  clear() {
    this._entries = [];
    this._totalBytes = 0;
  }
  size() {
    return this._entries.length;
  }
  _trimToMaxBytes() {
    while (this._totalBytes > this._config.max_bytes && this._entries.length > 0) {
      const evicted = this._entries.shift();
      if (evicted)
        this._totalBytes -= evicted.bytes;
    }
  }
}
function normalizePositiveInteger(input, fallback) {
  if (!isNumber(input) || input === 1 / 0 || input === -1 / 0)
    return fallback;
  const normalized = Math.floor(input);
  if (normalized < 0)
    return fallback;
  return normalized;
}
function normalizeAndSerializeStep(step) {
  const json = safeStringify(step);
  if (!json)
    return;
  try {
    const parsed = JSON.parse(json);
    if (!isObject(parsed))
      return;
    const parsedStep = parsed;
    const message = parsedStep[EXCEPTION_STEP_INTERNAL_FIELDS.MESSAGE];
    const timestamp = parsedStep[EXCEPTION_STEP_INTERNAL_FIELDS.TIMESTAMP];
    if (!isString(message) || message.trim().length === 0)
      return;
    if (!isString(timestamp) && !isNumber(timestamp))
      return;
    return {
      step: parsedStep,
      json
    };
  } catch {
    return;
  }
}
function safeStringify(value) {
  const seen = new WeakSet;
  try {
    return JSON.stringify(value, (_key, replacementValue) => {
      if (typeof replacementValue == "bigint")
        return replacementValue.toString();
      if (typeof replacementValue == "function" || typeof replacementValue == "symbol")
        return;
      if (replacementValue instanceof Date)
        return replacementValue.toISOString();
      if (replacementValue instanceof Error)
        return {
          name: replacementValue.name,
          message: replacementValue.message,
          stack: replacementValue.stack
        };
      if (replacementValue && typeof replacementValue == "object") {
        if (seen.has(replacementValue))
          return "[Circular]";
        seen.add(replacementValue);
      }
      return replacementValue;
    });
  } catch {
    return;
  }
}
function getUtf8ByteLength(value) {
  if (typeof TextEncoder != "undefined")
    return new TextEncoder().encode(value).length;
  const encoded = encodeURIComponent(value);
  let byteLength = 0;
  for (let i = 0;i < encoded.length; i++)
    if (encoded[i] === "%") {
      byteLength += 1;
      i += 2;
    } else
      byteLength += 1;
  return byteLength;
}
var EXCEPTION_STEP_INTERNAL_FIELDS, RESERVED_EXCEPTION_STEP_KEYS, DEFAULT_EXCEPTION_STEPS_CONFIG;
var init_exception_steps = __esm(() => {
  init_utils();
  EXCEPTION_STEP_INTERNAL_FIELDS = {
    MESSAGE: "$message",
    TIMESTAMP: "$timestamp"
  };
  RESERVED_EXCEPTION_STEP_KEYS = new Set([
    EXCEPTION_STEP_INTERNAL_FIELDS.MESSAGE,
    EXCEPTION_STEP_INTERNAL_FIELDS.TIMESTAMP
  ]);
  DEFAULT_EXCEPTION_STEPS_CONFIG = {
    enabled: true,
    max_bytes: 32768
  };
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/error-tracking/index.mjs
var exports_error_tracking = {};
__export(exports_error_tracking, {
  winjsStackLineParser: () => winjsStackLineParser,
  stripReservedExceptionStepFields: () => stripReservedExceptionStepFields,
  reverseAndStripFrames: () => reverseAndStripFrames,
  resolveExceptionStepsConfig: () => resolveExceptionStepsConfig,
  opera11StackLineParser: () => opera11StackLineParser,
  opera10StackLineParser: () => opera10StackLineParser,
  nodeStackLineParser: () => nodeStackLineParser,
  getUtf8ByteLength: () => getUtf8ByteLength,
  geckoStackLineParser: () => geckoStackLineParser,
  createStackParser: () => createStackParser,
  createDefaultStackParser: () => createDefaultStackParser,
  chromeStackLineParser: () => chromeStackLineParser,
  StringCoercer: () => StringCoercer,
  ReduceableCache: () => ReduceableCache,
  PromiseRejectionEventCoercer: () => PromiseRejectionEventCoercer,
  PrimitiveCoercer: () => PrimitiveCoercer,
  ObjectCoercer: () => ObjectCoercer,
  ExceptionStepsBuffer: () => ExceptionStepsBuffer,
  EventCoercer: () => EventCoercer,
  ErrorPropertiesBuilder: () => ErrorPropertiesBuilder,
  ErrorEventCoercer: () => ErrorEventCoercer,
  ErrorCoercer: () => ErrorCoercer,
  EXCEPTION_STEP_INTERNAL_FIELDS: () => EXCEPTION_STEP_INTERNAL_FIELDS,
  DOMExceptionCoercer: () => DOMExceptionCoercer,
  DEFAULT_EXCEPTION_STEPS_CONFIG: () => DEFAULT_EXCEPTION_STEPS_CONFIG
});
var init_error_tracking = __esm(() => {
  init_error_properties_builder();
  init_parsers();
  init_coercers();
  init_utils3();
  init_exception_steps();
});

// ../../node_modules/.bun/@posthog+core@1.29.2/node_modules/@posthog/core/dist/index.mjs
var init_dist = __esm(() => {
  init_featureFlagUtils();
  init_gzip();
  init_logs_utils();
  init_logs();
  init_uuidv7();
  init_validation();
  init_error_tracking();
  init_utils();
  init_cookie();
  init_posthog_core();
  init_posthog_core_stateless();
  init_tracing_headers();
  init_types();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/error-tracking/modifiers/context-lines.node.mjs
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
async function addSourceContext(frames) {
  const filesToLines = {};
  for (let i = frames.length - 1;i >= 0; i--) {
    const frame = frames[i];
    const filename = frame?.filename;
    if (!frame || typeof filename != "string" || typeof frame.lineno != "number" || shouldSkipContextLinesForFile(filename) || shouldSkipContextLinesForFrame(frame))
      continue;
    const filesToLinesOutput = filesToLines[filename];
    if (!filesToLinesOutput)
      filesToLines[filename] = [];
    filesToLines[filename].push(frame.lineno);
  }
  const files = Object.keys(filesToLines);
  if (files.length == 0)
    return frames;
  const readlinePromises = [];
  for (const file of files) {
    if (LRU_FILE_CONTENTS_FS_READ_FAILED.get(file))
      continue;
    const filesToLineRanges = filesToLines[file];
    if (!filesToLineRanges)
      continue;
    filesToLineRanges.sort((a, b) => a - b);
    const ranges = makeLineReaderRanges(filesToLineRanges);
    if (ranges.every((r) => rangeExistsInContentCache(file, r)))
      continue;
    const cache2 = emplace(LRU_FILE_CONTENTS_CACHE, file, {});
    readlinePromises.push(getContextLinesFromFile(file, ranges, cache2));
  }
  await Promise.all(readlinePromises).catch(() => {});
  if (frames && frames.length > 0)
    addSourceContextToFrames(frames, LRU_FILE_CONTENTS_CACHE);
  LRU_FILE_CONTENTS_CACHE.reduce();
  return frames;
}
function getContextLinesFromFile(path, ranges, output) {
  return new Promise((resolve) => {
    const stream = createReadStream(path);
    const lineReaded = createInterface({
      input: stream
    });
    function destroyStreamAndResolve() {
      stream.destroy();
      resolve();
    }
    let lineNumber = 0;
    let currentRangeIndex = 0;
    const range = ranges[currentRangeIndex];
    if (range === undefined)
      return void destroyStreamAndResolve();
    let rangeStart = range[0];
    let rangeEnd = range[1];
    function onStreamError() {
      LRU_FILE_CONTENTS_FS_READ_FAILED.set(path, 1);
      lineReaded.close();
      lineReaded.removeAllListeners();
      destroyStreamAndResolve();
    }
    stream.on("error", onStreamError);
    lineReaded.on("error", onStreamError);
    lineReaded.on("close", destroyStreamAndResolve);
    lineReaded.on("line", (line) => {
      lineNumber++;
      if (lineNumber < rangeStart)
        return;
      output[lineNumber] = snipLine(line, 0);
      if (lineNumber >= rangeEnd) {
        if (currentRangeIndex === ranges.length - 1) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        currentRangeIndex++;
        const range2 = ranges[currentRangeIndex];
        if (range2 === undefined) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        rangeStart = range2[0];
        rangeEnd = range2[1];
      }
    });
  });
}
function addSourceContextToFrames(frames, cache2) {
  for (const frame of frames)
    if (frame.filename && frame.context_line === undefined && typeof frame.lineno == "number") {
      const contents = cache2.get(frame.filename);
      if (contents === undefined)
        continue;
      addContextToFrame(frame.lineno, frame, contents);
    }
}
function addContextToFrame(lineno, frame, contents) {
  if (frame.lineno === undefined || contents === undefined)
    return;
  frame.pre_context = [];
  for (let i = makeRangeStart(lineno);i < lineno; i++) {
    const line = contents[i];
    if (line === undefined)
      return void clearLineContext(frame);
    frame.pre_context.push(line);
  }
  if (contents[lineno] === undefined)
    return void clearLineContext(frame);
  frame.context_line = contents[lineno];
  const end = makeRangeEnd(lineno);
  frame.post_context = [];
  for (let i = lineno + 1;i <= end; i++) {
    const line = contents[i];
    if (line === undefined)
      break;
    frame.post_context.push(line);
  }
}
function clearLineContext(frame) {
  delete frame.pre_context;
  delete frame.context_line;
  delete frame.post_context;
}
function shouldSkipContextLinesForFile(path) {
  return path.startsWith("node:") || path.endsWith(".min.js") || path.endsWith(".min.cjs") || path.endsWith(".min.mjs") || path.startsWith("data:");
}
function shouldSkipContextLinesForFrame(frame) {
  if (frame.lineno !== undefined && frame.lineno > MAX_CONTEXTLINES_LINENO)
    return true;
  if (frame.colno !== undefined && frame.colno > MAX_CONTEXTLINES_COLNO)
    return true;
  return false;
}
function rangeExistsInContentCache(file, range) {
  const contents = LRU_FILE_CONTENTS_CACHE.get(file);
  if (contents === undefined)
    return false;
  for (let i = range[0];i <= range[1]; i++)
    if (contents[i] === undefined)
      return false;
  return true;
}
function makeLineReaderRanges(lines) {
  if (!lines.length)
    return [];
  let i = 0;
  const line = lines[0];
  if (typeof line != "number")
    return [];
  let current = makeContextRange(line);
  const out = [];
  while (true) {
    if (i === lines.length - 1) {
      out.push(current);
      break;
    }
    const next = lines[i + 1];
    if (typeof next != "number")
      break;
    if (next <= current[1])
      current[1] = next + DEFAULT_LINES_OF_CONTEXT;
    else {
      out.push(current);
      current = makeContextRange(next);
    }
    i++;
  }
  return out;
}
function makeContextRange(line) {
  return [
    makeRangeStart(line),
    makeRangeEnd(line)
  ];
}
function makeRangeStart(line) {
  return Math.max(1, line - DEFAULT_LINES_OF_CONTEXT);
}
function makeRangeEnd(line) {
  return line + DEFAULT_LINES_OF_CONTEXT;
}
function emplace(map, key, contents) {
  const value = map.get(key);
  if (value === undefined) {
    map.set(key, contents);
    return contents;
  }
  return value;
}
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150)
    return newLine;
  if (colno > lineLength)
    colno = lineLength;
  let start = Math.max(colno - 60, 0);
  if (start < 5)
    start = 0;
  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5)
    end = lineLength;
  if (end === lineLength)
    start = Math.max(end - 140, 0);
  newLine = newLine.slice(start, end);
  if (start > 0)
    newLine = `...${newLine}`;
  if (end < lineLength)
    newLine += "...";
  return newLine;
}
var LRU_FILE_CONTENTS_CACHE, LRU_FILE_CONTENTS_FS_READ_FAILED, DEFAULT_LINES_OF_CONTEXT = 7, MAX_CONTEXTLINES_COLNO = 1000, MAX_CONTEXTLINES_LINENO = 1e4;
var init_context_lines_node = __esm(() => {
  init_dist();
  LRU_FILE_CONTENTS_CACHE = new exports_error_tracking.ReduceableCache(25);
  LRU_FILE_CONTENTS_FS_READ_FAILED = new exports_error_tracking.ReduceableCache(20);
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/error-tracking/modifiers/relative-path.node.mjs
import { isAbsolute, relative, sep as sep2 } from "path";
function createRelativePathModifier(basePath = process.cwd()) {
  const isWindows = sep2 === "\\";
  const toUnix = (p) => isWindows ? p.replace(/\\/g, "/") : p;
  const normalizedBase = toUnix(basePath);
  return async (frames) => {
    for (const frame of frames)
      if (!(!frame.filename || frame.filename.startsWith("node:") || frame.filename.startsWith("data:"))) {
        if (isAbsolute(frame.filename))
          frame.filename = toUnix(relative(normalizedBase, toUnix(frame.filename)));
      }
    return frames;
  };
}
var init_relative_path_node = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/error-tracking/autocapture.mjs
function makeUncaughtExceptionHandler(captureFn, onFatalFn) {
  let calledFatalError = false;
  return Object.assign((error) => {
    const userProvidedListenersCount = global.process.listeners("uncaughtException").filter((listener) => listener.name !== "domainUncaughtExceptionClear" && listener._posthogErrorHandler !== true).length;
    const processWouldExit = userProvidedListenersCount === 0;
    captureFn(error, {
      mechanism: {
        type: "onuncaughtexception",
        handled: false
      }
    });
    if (!calledFatalError && processWouldExit) {
      calledFatalError = true;
      onFatalFn(error);
    }
  }, {
    _posthogErrorHandler: true
  });
}
function addUncaughtExceptionListener(captureFn, onFatalFn) {
  globalThis.process?.on("uncaughtException", makeUncaughtExceptionHandler(captureFn, onFatalFn));
}
function addUnhandledRejectionListener(captureFn) {
  globalThis.process?.on("unhandledRejection", (reason) => captureFn(reason, {
    mechanism: {
      type: "onunhandledrejection",
      handled: false
    }
  }));
}
var init_autocapture = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/error-tracking/index.mjs
class ErrorTracking {
  constructor(client, options, _logger) {
    this.client = client;
    this._exceptionAutocaptureEnabled = options.enableExceptionAutocapture || false;
    this._logger = _logger;
    this._rateLimiter = new BucketedRateLimiter({
      refillRate: 1,
      bucketSize: 10,
      refillInterval: 1e4,
      _logger: this._logger
    });
    this.startAutocaptureIfEnabled();
  }
  static isPreviouslyCapturedError(x) {
    return isObject(x) && "__posthog_previously_captured_error" in x && x.__posthog_previously_captured_error === true;
  }
  static async buildEventMessage(error, hint, distinctId, additionalProperties) {
    const properties = {
      ...additionalProperties
    };
    const exceptionProperties = this.errorPropertiesBuilder.buildFromUnknown(error, hint);
    exceptionProperties.$exception_list = await this.errorPropertiesBuilder.modifyFrames(exceptionProperties.$exception_list);
    return {
      event: "$exception",
      distinctId,
      properties: {
        ...exceptionProperties,
        ...properties
      },
      _originatedFromCaptureException: true
    };
  }
  startAutocaptureIfEnabled() {
    if (this.isEnabled()) {
      addUncaughtExceptionListener(this.onException.bind(this), this.onFatalError.bind(this));
      addUnhandledRejectionListener(this.onException.bind(this));
    }
  }
  onException(exception, hint) {
    this.client.addPendingPromise((async () => {
      if (!ErrorTracking.isPreviouslyCapturedError(exception)) {
        const eventMessage = await ErrorTracking.buildEventMessage(exception, hint);
        const exceptionProperties = eventMessage.properties;
        const exceptionType = exceptionProperties?.$exception_list[0]?.type ?? "Exception";
        const isRateLimited = this._rateLimiter.consumeRateLimit(exceptionType);
        if (isRateLimited)
          return void this._logger.info("Skipping exception capture because of client rate limiting.", {
            exception: exceptionType
          });
        return this.client.capture(eventMessage);
      }
    })());
  }
  async onFatalError(exception) {
    console.error(exception);
    await this.client.shutdown(SHUTDOWN_TIMEOUT);
    process.exit(1);
  }
  isEnabled() {
    return !this.client.isDisabled && this._exceptionAutocaptureEnabled;
  }
  shutdown() {
    this._rateLimiter.stop();
  }
}
var SHUTDOWN_TIMEOUT = 2000;
var init_error_tracking2 = __esm(() => {
  init_autocapture();
  init_dist();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/version.mjs
var version = "5.34.2";
var init_version = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/types.mjs
var FeatureFlagError2;
var init_types3 = __esm(() => {
  FeatureFlagError2 = {
    ERRORS_WHILE_COMPUTING: "errors_while_computing_flags",
    FLAG_MISSING: "flag_missing",
    QUOTA_LIMITED: "quota_limited",
    UNKNOWN_ERROR: "unknown_error"
  };
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/feature-flag-evaluations.mjs
class FeatureFlagEvaluations {
  constructor(init) {
    this._host = init.host;
    this._distinctId = init.distinctId;
    this._groups = init.groups;
    this._disableGeoip = init.disableGeoip;
    this._flags = init.flags;
    this._requestId = init.requestId;
    this._evaluatedAt = init.evaluatedAt;
    this._flagDefinitionsLoadedAt = init.flagDefinitionsLoadedAt;
    this._errorsWhileComputing = init.errorsWhileComputing ?? false;
    this._quotaLimited = init.quotaLimited ?? false;
    this._accessed = init.accessed ?? new Set;
    this._isSlice = init.isSlice ?? false;
  }
  isEnabled(key) {
    const flag = this._flags[key];
    this._recordAccess(key);
    return flag?.enabled ?? false;
  }
  getFlag(key) {
    const flag = this._flags[key];
    this._recordAccess(key);
    if (!flag)
      return;
    if (!flag.enabled)
      return false;
    return flag.variant ?? true;
  }
  getFlagPayload(key) {
    return this._flags[key]?.payload;
  }
  onlyAccessed() {
    const filtered = {};
    for (const key of this._accessed) {
      const flag = this._flags[key];
      if (flag)
        filtered[key] = flag;
    }
    return this._cloneWith(filtered);
  }
  only(keys) {
    const filtered = {};
    const missing = [];
    for (const key of keys) {
      const flag = this._flags[key];
      if (flag)
        filtered[key] = flag;
      else
        missing.push(key);
    }
    if (missing.length > 0)
      this._host.logWarning(`FeatureFlagEvaluations.only() was called with flag keys that are not in the evaluation set and will be dropped: ${missing.join(", ")}`);
    return this._cloneWith(filtered);
  }
  get keys() {
    return Object.keys(this._flags);
  }
  _getEventProperties() {
    const properties = {};
    const activeFlags = [];
    for (const [key, flag] of Object.entries(this._flags)) {
      const value = flag.enabled === false ? false : flag.variant ?? true;
      properties[`$feature/${key}`] = value;
      if (flag.enabled)
        activeFlags.push(key);
    }
    if (activeFlags.length > 0) {
      activeFlags.sort();
      properties["$active_feature_flags"] = activeFlags;
    }
    return properties;
  }
  _cloneWith(flags) {
    return new FeatureFlagEvaluations({
      host: this._host,
      distinctId: this._distinctId,
      groups: this._groups,
      disableGeoip: this._disableGeoip,
      flags,
      requestId: this._requestId,
      evaluatedAt: this._evaluatedAt,
      flagDefinitionsLoadedAt: this._flagDefinitionsLoadedAt,
      errorsWhileComputing: this._errorsWhileComputing,
      quotaLimited: this._quotaLimited,
      accessed: new Set(this._accessed),
      isSlice: true
    });
  }
  _recordAccess(key) {
    this._accessed.add(key);
    if (this._distinctId === "")
      return;
    if (this._isSlice && !(key in this._flags))
      return;
    const flag = this._flags[key];
    const response = flag === undefined ? undefined : flag.enabled === false ? false : flag.variant ?? true;
    const properties = {
      $feature_flag: key,
      $feature_flag_response: response,
      $feature_flag_id: flag?.id,
      $feature_flag_version: flag?.version,
      $feature_flag_reason: flag?.reason,
      locally_evaluated: flag?.locallyEvaluated ?? false,
      [`$feature/${key}`]: response,
      $feature_flag_request_id: this._requestId,
      $feature_flag_evaluated_at: flag?.locallyEvaluated ? Date.now() : this._evaluatedAt
    };
    if (flag?.locallyEvaluated && this._flagDefinitionsLoadedAt !== undefined)
      properties.$feature_flag_definitions_loaded_at = this._flagDefinitionsLoadedAt;
    const errors = [];
    if (this._errorsWhileComputing)
      errors.push(FeatureFlagError2.ERRORS_WHILE_COMPUTING);
    if (this._quotaLimited)
      errors.push(FeatureFlagError2.QUOTA_LIMITED);
    if (flag === undefined)
      errors.push(FeatureFlagError2.FLAG_MISSING);
    if (errors.length > 0)
      properties.$feature_flag_error = errors.join(",");
    this._host.captureFlagCalledEventIfNeeded({
      distinctId: this._distinctId,
      key,
      response,
      groups: this._groups,
      disableGeoip: this._disableGeoip,
      properties
    });
  }
}
var init_feature_flag_evaluations = __esm(() => {
  init_types3();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/feature-flags/crypto.mjs
async function hashSHA1(text) {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle)
    throw new Error("SubtleCrypto API not available");
  const hashBuffer = await subtle.digest("SHA-1", new TextEncoder().encode(text));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
var init_crypto = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/feature-flags/feature-flags.mjs
class FeatureFlagsPoller {
  constructor({ pollingInterval, personalApiKey, projectApiKey, timeout, host, customHeaders, ...options }) {
    this.debugMode = false;
    this.shouldBeginExponentialBackoff = false;
    this.backOffCount = 0;
    this.pollingInterval = pollingInterval;
    this.personalApiKey = personalApiKey;
    this.featureFlags = [];
    this.featureFlagsByKey = {};
    this.groupTypeMapping = {};
    this.cohorts = {};
    this.loadedSuccessfullyOnce = false;
    this.timeout = timeout;
    this.projectApiKey = projectApiKey;
    this.host = host;
    this.poller = undefined;
    this.fetch = options.fetch || fetch;
    this.onError = options.onError;
    this.customHeaders = customHeaders;
    this.onLoad = options.onLoad;
    this.cacheProvider = options.cacheProvider;
    this.strictLocalEvaluation = options.strictLocalEvaluation ?? false;
    this.loadFeatureFlags();
  }
  debug(enabled = true) {
    this.debugMode = enabled;
  }
  logMsgIfDebug(fn) {
    if (this.debugMode)
      fn();
  }
  createEvaluationContext(distinctId, groups = {}, personProperties = {}, groupProperties = {}, evaluationCache = {}) {
    return {
      distinctId,
      groups,
      personProperties,
      groupProperties,
      evaluationCache
    };
  }
  async getFeatureFlag(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}) {
    await this.loadFeatureFlags();
    let response;
    let featureFlag;
    if (!this.loadedSuccessfullyOnce)
      return response;
    featureFlag = this.featureFlagsByKey[key];
    if (featureFlag !== undefined) {
      const evaluationContext = this.createEvaluationContext(distinctId, groups, personProperties, groupProperties);
      try {
        const result = await this.computeFlagAndPayloadLocally(featureFlag, evaluationContext);
        response = result.value;
        this.logMsgIfDebug(() => console.debug(`Successfully computed flag locally: ${key} -> ${response}`));
      } catch (e) {
        if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError)
          this.logMsgIfDebug(() => console.debug(`${e.name} when computing flag locally: ${key}: ${e.message}`));
        else if (e instanceof Error)
          this.onError?.(new Error(`Error computing flag locally: ${key}: ${e}`));
      }
    }
    return response;
  }
  async getAllFlagsAndPayloads(evaluationContext, flagKeysToExplicitlyEvaluate) {
    await this.loadFeatureFlags();
    const response = {};
    const payloads = {};
    let fallbackToFlags = this.featureFlags.length == 0;
    const flagsToEvaluate = flagKeysToExplicitlyEvaluate ? flagKeysToExplicitlyEvaluate.map((key) => this.featureFlagsByKey[key]).filter(Boolean) : this.featureFlags;
    const sharedEvaluationContext = {
      ...evaluationContext,
      evaluationCache: evaluationContext.evaluationCache ?? {}
    };
    await Promise.all(flagsToEvaluate.map(async (flag) => {
      try {
        const { value: matchValue, payload: matchPayload } = await this.computeFlagAndPayloadLocally(flag, sharedEvaluationContext);
        response[flag.key] = matchValue;
        if (matchPayload)
          payloads[flag.key] = matchPayload;
      } catch (e) {
        if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError)
          this.logMsgIfDebug(() => console.debug(`${e.name} when computing flag locally: ${flag.key}: ${e.message}`));
        else if (e instanceof Error)
          this.onError?.(new Error(`Error computing flag locally: ${flag.key}: ${e}`));
        fallbackToFlags = true;
      }
    }));
    return {
      response,
      payloads,
      fallbackToFlags
    };
  }
  async computeFlagAndPayloadLocally(flag, evaluationContext, options = {}) {
    const { matchValue, skipLoadCheck = false } = options;
    if (!skipLoadCheck)
      await this.loadFeatureFlags();
    if (!this.loadedSuccessfullyOnce)
      return {
        value: false,
        payload: null
      };
    let flagValue;
    flagValue = matchValue !== undefined ? matchValue : await this.computeFlagValueLocally(flag, evaluationContext);
    const payload = this.getFeatureFlagPayload(flag.key, flagValue);
    return {
      value: flagValue,
      payload
    };
  }
  async computeFlagValueLocally(flag, evaluationContext) {
    const { distinctId, groups, personProperties, groupProperties } = evaluationContext;
    if (flag.ensure_experience_continuity)
      throw new InconclusiveMatchError("Flag has experience continuity enabled");
    if (!flag.active)
      return false;
    const flagFilters = flag.filters || {};
    const aggregation_group_type_index = flagFilters.aggregation_group_type_index;
    if (aggregation_group_type_index != null) {
      const groupName = this.groupTypeMapping[String(aggregation_group_type_index)];
      if (!groupName) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Unknown group type index ${aggregation_group_type_index} for feature flag ${flag.key}`));
        throw new InconclusiveMatchError("Flag has unknown group type index");
      }
      if (!(groupName in groups)) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Can't compute group feature flag: ${flag.key} without group names passed in`));
        return false;
      }
      if (flag.bucketing_identifier === "device_id" && (personProperties?.$device_id === undefined || personProperties?.$device_id === null || personProperties?.$device_id === ""))
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Ignoring bucketing_identifier for group flag: ${flag.key}`));
      const focusedGroupProperties = groupProperties[groupName];
      return await this.matchFeatureFlagProperties(flag, groups[groupName], focusedGroupProperties, evaluationContext);
    }
    {
      const bucketingValue = this.getBucketingValueForFlag(flag, distinctId, personProperties);
      if (bucketingValue === undefined) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Can't compute feature flag: ${flag.key} without $device_id, falling back to server evaluation`));
        throw new InconclusiveMatchError(`Can't compute feature flag: ${flag.key} without $device_id`);
      }
      return await this.matchFeatureFlagProperties(flag, bucketingValue, personProperties, evaluationContext);
    }
  }
  getBucketingValueForFlag(flag, distinctId, properties) {
    if (flag.filters?.aggregation_group_type_index != null)
      return distinctId;
    if (flag.bucketing_identifier === "device_id") {
      const deviceId = properties?.$device_id;
      if (deviceId == null || deviceId === "")
        return;
      return deviceId;
    }
    return distinctId;
  }
  getFeatureFlagPayload(key, flagValue) {
    let payload = null;
    if (flagValue !== false && flagValue != null) {
      if (typeof flagValue == "boolean")
        payload = this.featureFlagsByKey?.[key]?.filters?.payloads?.[flagValue.toString()] || null;
      else if (typeof flagValue == "string")
        payload = this.featureFlagsByKey?.[key]?.filters?.payloads?.[flagValue] || null;
      if (payload != null) {
        if (typeof payload == "object")
          return payload;
        if (typeof payload == "string")
          try {
            return JSON.parse(payload);
          } catch {}
        return payload;
      }
    }
    return null;
  }
  async evaluateFlagDependency(property, properties, evaluationContext) {
    const { evaluationCache } = evaluationContext;
    const targetFlagKey = property.key;
    if (!this.featureFlagsByKey)
      throw new InconclusiveMatchError("Feature flags not available for dependency evaluation");
    if (!("dependency_chain" in property))
      throw new InconclusiveMatchError(`Flag dependency property for '${targetFlagKey}' is missing required 'dependency_chain' field`);
    const dependencyChain = property.dependency_chain;
    if (!Array.isArray(dependencyChain))
      throw new InconclusiveMatchError(`Flag dependency property for '${targetFlagKey}' has an invalid 'dependency_chain' (expected array, got ${typeof dependencyChain})`);
    if (dependencyChain.length === 0)
      throw new InconclusiveMatchError(`Circular dependency detected for flag '${targetFlagKey}' (empty dependency chain)`);
    for (const depFlagKey of dependencyChain) {
      if (!(depFlagKey in evaluationCache)) {
        const depFlag = this.featureFlagsByKey[depFlagKey];
        if (depFlag)
          if (depFlag.active)
            try {
              const depResult = await this.computeFlagValueLocally(depFlag, evaluationContext);
              evaluationCache[depFlagKey] = depResult;
            } catch (error) {
              throw new InconclusiveMatchError(`Error evaluating flag dependency '${depFlagKey}' for flag '${targetFlagKey}': ${error}`);
            }
          else
            evaluationCache[depFlagKey] = false;
        else
          throw new InconclusiveMatchError(`Missing flag dependency '${depFlagKey}' for flag '${targetFlagKey}'`);
      }
      const cachedResult = evaluationCache[depFlagKey];
      if (cachedResult == null)
        throw new InconclusiveMatchError(`Dependency '${depFlagKey}' could not be evaluated`);
    }
    const targetFlagValue = evaluationCache[targetFlagKey];
    return this.flagEvaluatesToExpectedValue(property.value, targetFlagValue);
  }
  flagEvaluatesToExpectedValue(expectedValue, flagValue) {
    if (typeof expectedValue == "boolean")
      return expectedValue === flagValue || typeof flagValue == "string" && flagValue !== "" && expectedValue === true;
    if (typeof expectedValue == "string")
      return flagValue === expectedValue;
    return false;
  }
  async matchFeatureFlagProperties(flag, bucketingValue, properties, evaluationContext) {
    const flagFilters = flag.filters || {};
    const flagConditions = flagFilters.groups || [];
    const flagAggregation = flagFilters.aggregation_group_type_index;
    const { groups, groupProperties } = evaluationContext;
    let isInconclusive = false;
    let result;
    for (const condition of flagConditions)
      try {
        const conditionAggregation = condition.aggregation_group_type_index !== undefined ? condition.aggregation_group_type_index : flagAggregation;
        let effectiveProperties = properties;
        let effectiveBucketingValue = bucketingValue;
        if (conditionAggregation !== flagAggregation) {
          if (conditionAggregation != null) {
            const groupName = this.groupTypeMapping[String(conditionAggregation)];
            if (!groupName || !(groupName in groups)) {
              this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] Skipping group condition for flag '${flag.key}': group type index ${conditionAggregation} not available`));
              continue;
            }
            if (!(groupName in groupProperties)) {
              isInconclusive = true;
              continue;
            }
            effectiveProperties = groupProperties[groupName];
            effectiveBucketingValue = groups[groupName];
          }
        }
        if (await this.isConditionMatch(flag, effectiveBucketingValue, condition, effectiveProperties, evaluationContext)) {
          const variantOverride = condition.variant;
          const flagVariants = flagFilters.multivariate?.variants || [];
          result = variantOverride && flagVariants.some((variant) => variant.key === variantOverride) ? variantOverride : await this.getMatchingVariant(flag, effectiveBucketingValue) || true;
          break;
        }
      } catch (e) {
        if (e instanceof RequiresServerEvaluation)
          throw e;
        if (e instanceof InconclusiveMatchError)
          isInconclusive = true;
        else
          throw e;
      }
    if (result !== undefined)
      return result;
    if (isInconclusive)
      throw new InconclusiveMatchError("Can't determine if feature flag is enabled or not with given properties");
    return false;
  }
  async isConditionMatch(flag, bucketingValue, condition, properties, evaluationContext) {
    const rolloutPercentage = condition.rollout_percentage;
    const warnFunction = (msg) => {
      this.logMsgIfDebug(() => console.warn(msg));
    };
    if ((condition.properties || []).length > 0) {
      for (const prop of condition.properties) {
        const propertyType = prop.type;
        let matches = false;
        matches = propertyType === "cohort" ? matchCohort(prop, properties, this.cohorts, this.debugMode) : propertyType === "flag" ? await this.evaluateFlagDependency(prop, properties, evaluationContext) : matchProperty(prop, properties, warnFunction);
        if (!matches)
          return false;
      }
      if (rolloutPercentage == undefined)
        return true;
    }
    if (rolloutPercentage != null && await _hash(flag.key, bucketingValue) > rolloutPercentage / 100)
      return false;
    return true;
  }
  async getMatchingVariant(flag, bucketingValue) {
    const hashValue = await _hash(flag.key, bucketingValue, "variant");
    const matchingVariant = this.variantLookupTable(flag).find((variant) => hashValue >= variant.valueMin && hashValue < variant.valueMax);
    if (matchingVariant)
      return matchingVariant.key;
  }
  variantLookupTable(flag) {
    const lookupTable = [];
    let valueMin = 0;
    let valueMax = 0;
    const flagFilters = flag.filters || {};
    const multivariates = flagFilters.multivariate?.variants || [];
    multivariates.forEach((variant) => {
      valueMax = valueMin + variant.rollout_percentage / 100;
      lookupTable.push({
        valueMin,
        valueMax,
        key: variant.key
      });
      valueMin = valueMax;
    });
    return lookupTable;
  }
  updateFlagState(flagData) {
    this.featureFlags = flagData.flags;
    this.featureFlagsByKey = flagData.flags.reduce((acc, curr) => (acc[curr.key] = curr, acc), {});
    this.groupTypeMapping = flagData.groupTypeMapping;
    this.cohorts = flagData.cohorts;
    this.loadedSuccessfullyOnce = true;
  }
  warnAboutExperienceContinuityFlags(flags) {
    if (this.strictLocalEvaluation)
      return;
    const experienceContinuityFlags = flags.filter((f) => f.ensure_experience_continuity);
    if (experienceContinuityFlags.length > 0)
      console.warn(`[PostHog] You are using local evaluation but ${experienceContinuityFlags.length} flag(s) have experience continuity enabled: ${experienceContinuityFlags.map((f) => f.key).join(", ")}. Experience continuity is incompatible with local evaluation and will cause a server request on every flag evaluation, negating local evaluation cost savings. To avoid server requests and unexpected costs, either disable experience continuity on these flags in PostHog, use strictLocalEvaluation: true in client init, or pass onlyEvaluateLocally: true per flag call (flags that cannot be evaluated locally will return undefined).`);
  }
  async loadFromCache(debugMessage) {
    if (!this.cacheProvider)
      return false;
    try {
      const cached = await this.cacheProvider.getFlagDefinitions();
      if (cached) {
        this.updateFlagState(cached);
        this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] ${debugMessage} (${cached.flags.length} flags)`));
        this.onLoad?.(this.featureFlags.length);
        this.warnAboutExperienceContinuityFlags(cached.flags);
        return true;
      }
      return false;
    } catch (err) {
      this.onError?.(new Error(`Failed to load from cache: ${err}`));
      return false;
    }
  }
  async loadFeatureFlags(forceReload = false) {
    if (this.loadedSuccessfullyOnce && !forceReload)
      return;
    if (!forceReload && this.nextFetchAllowedAt && Date.now() < this.nextFetchAllowedAt)
      return void this.logMsgIfDebug(() => console.debug("[FEATURE FLAGS] Skipping fetch, in backoff period"));
    if (!this.loadingPromise)
      this.loadingPromise = this._loadFeatureFlags().catch((err) => this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] Failed to load feature flags: ${err}`))).finally(() => {
        this.loadingPromise = undefined;
      });
    return this.loadingPromise;
  }
  isLocalEvaluationReady() {
    return (this.loadedSuccessfullyOnce ?? false) && (this.featureFlags?.length ?? 0) > 0;
  }
  getFlagDefinitionsLoadedAt() {
    return this.flagDefinitionsLoadedAt;
  }
  getPollingInterval() {
    if (!this.shouldBeginExponentialBackoff)
      return this.pollingInterval;
    return Math.min(SIXTY_SECONDS, this.pollingInterval * 2 ** this.backOffCount);
  }
  beginBackoff() {
    this.shouldBeginExponentialBackoff = true;
    this.backOffCount += 1;
    this.nextFetchAllowedAt = Date.now() + this.getPollingInterval();
  }
  clearBackoff() {
    this.shouldBeginExponentialBackoff = false;
    this.backOffCount = 0;
    this.nextFetchAllowedAt = undefined;
  }
  async _loadFeatureFlags() {
    if (this.poller) {
      clearTimeout(this.poller);
      this.poller = undefined;
    }
    this.poller = setTimeout(() => this.loadFeatureFlags(true), this.getPollingInterval());
    try {
      let shouldFetch = true;
      if (this.cacheProvider)
        try {
          shouldFetch = await this.cacheProvider.shouldFetchFlagDefinitions();
        } catch (err) {
          this.onError?.(new Error(`Error in shouldFetchFlagDefinitions: ${err}`));
        }
      if (!shouldFetch) {
        const loaded = await this.loadFromCache("Loaded flags from cache (skipped fetch)");
        if (loaded)
          return;
        if (this.loadedSuccessfullyOnce)
          return;
      }
      const res = await this._requestFeatureFlagDefinitions();
      if (!res)
        return;
      switch (res.status) {
        case 304:
          this.logMsgIfDebug(() => console.debug("[FEATURE FLAGS] Flags not modified (304), using cached data"));
          this.flagsEtag = res.headers?.get("ETag") ?? this.flagsEtag;
          this.loadedSuccessfullyOnce = true;
          this.clearBackoff();
          return;
        case 401:
          this.beginBackoff();
          throw new ClientError(`Your project key or personal API key is invalid. Setting next polling interval to ${this.getPollingInterval()}ms. More information: https://posthog.com/docs/api#rate-limiting`);
        case 402:
          console.warn("[FEATURE FLAGS] Feature flags quota limit exceeded - unsetting all local flags. Learn more about billing limits at https://posthog.com/docs/billing/limits-alerts");
          this.featureFlags = [];
          this.featureFlagsByKey = {};
          this.groupTypeMapping = {};
          this.cohorts = {};
          return;
        case 403:
          this.beginBackoff();
          throw new ClientError(`Your personal API key does not have permission to fetch feature flag definitions for local evaluation. Setting next polling interval to ${this.getPollingInterval()}ms. Are you sure you're using the correct personal and Project API key pair? More information: https://posthog.com/docs/api/overview`);
        case 429:
          this.beginBackoff();
          throw new ClientError(`You are being rate limited. Setting next polling interval to ${this.getPollingInterval()}ms. More information: https://posthog.com/docs/api#rate-limiting`);
        case 200: {
          const responseJson = await res.json() ?? {};
          if (!("flags" in responseJson))
            return void this.onError?.(new Error(`Invalid response when getting feature flags: ${JSON.stringify(responseJson)}`));
          this.flagsEtag = res.headers?.get("ETag") ?? undefined;
          const flagData = {
            flags: responseJson.flags ?? [],
            groupTypeMapping: responseJson.group_type_mapping || {},
            cohorts: responseJson.cohorts || {}
          };
          this.updateFlagState(flagData);
          this.flagDefinitionsLoadedAt = Date.now();
          this.clearBackoff();
          if (this.cacheProvider && shouldFetch)
            try {
              await this.cacheProvider.onFlagDefinitionsReceived(flagData);
            } catch (err) {
              this.onError?.(new Error(`Failed to store in cache: ${err}`));
            }
          this.onLoad?.(this.featureFlags.length);
          this.warnAboutExperienceContinuityFlags(flagData.flags);
          break;
        }
        default:
          return;
      }
    } catch (err) {
      if (err instanceof ClientError)
        this.onError?.(err);
    }
  }
  getPersonalApiKeyRequestOptions(method = "GET", etag) {
    const headers = {
      ...this.customHeaders,
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.personalApiKey}`
    };
    if (etag)
      headers["If-None-Match"] = etag;
    return {
      method,
      headers
    };
  }
  _requestFeatureFlagDefinitions() {
    const url = `${this.host}/flags/definitions?token=${this.projectApiKey}&send_cohorts`;
    const options = this.getPersonalApiKeyRequestOptions("GET", this.flagsEtag);
    let abortTimeout = null;
    if (this.timeout && typeof this.timeout == "number") {
      const controller = new AbortController;
      abortTimeout = safeSetTimeout(() => {
        controller.abort();
      }, this.timeout);
      options.signal = controller.signal;
    }
    try {
      const fetch1 = this.fetch;
      return fetch1(url, options);
    } finally {
      clearTimeout(abortTimeout);
    }
  }
  async stopPoller(timeoutMs = 30000) {
    clearTimeout(this.poller);
    if (this.cacheProvider)
      try {
        const shutdownResult = this.cacheProvider.shutdown();
        if (shutdownResult instanceof Promise)
          await Promise.race([
            shutdownResult,
            new Promise((_, reject) => setTimeout(() => reject(new Error(`Cache shutdown timeout after ${timeoutMs}ms`)), timeoutMs))
          ]);
      } catch (err) {
        this.onError?.(new Error(`Error during cache shutdown: ${err}`));
      }
  }
}
async function _hash(key, bucketingValue, salt = "") {
  const hashString = await hashSHA1(`${key}.${bucketingValue}${salt}`);
  return parseInt(hashString.slice(0, 15), 16) / LONG_SCALE;
}
function matchProperty(property, propertyValues, warnFunction) {
  const key = property.key;
  const value = property.value;
  const operator = property.operator || "exact";
  if (key in propertyValues) {
    if (operator === "is_not_set")
      throw new InconclusiveMatchError("Operator is_not_set is not supported");
  } else
    throw new InconclusiveMatchError(`Property ${key} not found in propertyValues`);
  const overrideValue = propertyValues[key];
  if (overrideValue == null && !NULL_VALUES_ALLOWED_OPERATORS.includes(operator)) {
    if (warnFunction)
      warnFunction(`Property ${key} cannot have a value of null/undefined with the ${operator} operator`);
    return false;
  }
  function computeExactMatch(value2, overrideValue2) {
    if (Array.isArray(value2))
      return value2.map((val) => String(val).toLowerCase()).includes(String(overrideValue2).toLowerCase());
    return String(value2).toLowerCase() === String(overrideValue2).toLowerCase();
  }
  function compare(lhs, rhs, operator2) {
    if (operator2 === "gt")
      return lhs > rhs;
    if (operator2 === "gte")
      return lhs >= rhs;
    if (operator2 === "lt")
      return lhs < rhs;
    if (operator2 === "lte")
      return lhs <= rhs;
    throw new Error(`Invalid operator: ${operator2}`);
  }
  switch (operator) {
    case "exact":
      return computeExactMatch(value, overrideValue);
    case "is_not":
      return !computeExactMatch(value, overrideValue);
    case "is_set":
      return key in propertyValues;
    case "icontains":
      return String(overrideValue).toLowerCase().includes(String(value).toLowerCase());
    case "not_icontains":
      return !String(overrideValue).toLowerCase().includes(String(value).toLowerCase());
    case "regex":
      return isValidRegex(String(value)) && String(overrideValue).match(String(value)) !== null;
    case "not_regex":
      return isValidRegex(String(value)) && String(overrideValue).match(String(value)) === null;
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      let parsedValue = typeof value == "number" ? value : null;
      if (typeof value == "string")
        try {
          parsedValue = parseFloat(value);
        } catch (err) {}
      if (parsedValue == null || overrideValue == null)
        return compare(String(overrideValue), String(value), operator);
      if (typeof overrideValue == "string")
        return compare(overrideValue, String(value), operator);
      return compare(overrideValue, parsedValue, operator);
    }
    case "is_date_after":
    case "is_date_before": {
      if (typeof value == "boolean")
        throw new InconclusiveMatchError("Date operations cannot be performed on boolean values");
      let parsedDate = relativeDateParseForFeatureFlagMatching(String(value));
      if (parsedDate == null)
        parsedDate = convertToDateTime(value);
      if (parsedDate == null)
        throw new InconclusiveMatchError(`Invalid date: ${value}`);
      const overrideDate = convertToDateTime(overrideValue);
      if ([
        "is_date_before"
      ].includes(operator))
        return overrideDate < parsedDate;
      return overrideDate > parsedDate;
    }
    case "semver_eq": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp === 0;
    }
    case "semver_neq": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp !== 0;
    }
    case "semver_gt": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp > 0;
    }
    case "semver_gte": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp >= 0;
    }
    case "semver_lt": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp < 0;
    }
    case "semver_lte": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp <= 0;
    }
    case "semver_tilde": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeTildeBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    case "semver_caret": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeCaretBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    case "semver_wildcard": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeWildcardBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    default:
      throw new InconclusiveMatchError(`Unknown operator: ${operator}`);
  }
}
function checkCohortExists(cohortId, cohortProperties) {
  if (!(cohortId in cohortProperties))
    throw new RequiresServerEvaluation(`cohort ${cohortId} not found in local cohorts - likely a static cohort that requires server evaluation`);
}
function matchCohort(property, propertyValues, cohortProperties, debugMode = false) {
  const cohortId = String(property.value);
  checkCohortExists(cohortId, cohortProperties);
  const propertyGroup = cohortProperties[cohortId];
  return matchPropertyGroup(propertyGroup, propertyValues, cohortProperties, debugMode);
}
function matchPropertyGroup(propertyGroup, propertyValues, cohortProperties, debugMode = false) {
  if (!propertyGroup)
    return true;
  const propertyGroupType = propertyGroup.type;
  const properties = propertyGroup.values;
  if (!properties || properties.length === 0)
    return true;
  let errorMatchingLocally = false;
  if ("values" in properties[0]) {
    for (const prop of properties)
      try {
        const matches = matchPropertyGroup(prop, propertyValues, cohortProperties, debugMode);
        if (propertyGroupType === "AND") {
          if (!matches)
            return false;
        } else if (matches)
          return true;
      } catch (err) {
        if (err instanceof RequiresServerEvaluation)
          throw err;
        if (err instanceof InconclusiveMatchError) {
          if (debugMode)
            console.debug(`Failed to compute property ${prop} locally: ${err}`);
          errorMatchingLocally = true;
        } else
          throw err;
      }
    if (errorMatchingLocally)
      throw new InconclusiveMatchError("Can't match cohort without a given cohort property value");
    return propertyGroupType === "AND";
  }
  for (const prop of properties)
    try {
      let matches;
      if (prop.type === "cohort")
        matches = matchCohort(prop, propertyValues, cohortProperties, debugMode);
      else if (prop.type === "flag") {
        if (debugMode)
          console.warn(`[FEATURE FLAGS] Flag dependency filters are not supported in local evaluation. Skipping condition with dependency on flag '${prop.key || "unknown"}'`);
        continue;
      } else
        matches = matchProperty(prop, propertyValues);
      const negation = prop.negation || false;
      if (propertyGroupType === "AND") {
        if (!matches && !negation)
          return false;
        if (matches && negation)
          return false;
      } else {
        if (matches && !negation)
          return true;
        if (!matches && negation)
          return true;
      }
    } catch (err) {
      if (err instanceof RequiresServerEvaluation)
        throw err;
      if (err instanceof InconclusiveMatchError) {
        if (debugMode)
          console.debug(`Failed to compute property ${prop} locally: ${err}`);
        errorMatchingLocally = true;
      } else
        throw err;
    }
  if (errorMatchingLocally)
    throw new InconclusiveMatchError("can't match cohort without a given cohort property value");
  return propertyGroupType === "AND";
}
function isValidRegex(regex) {
  try {
    new RegExp(regex);
    return true;
  } catch (err) {
    return false;
  }
}
function parseSemver(value) {
  const text = String(value).trim().replace(/^[vV]/, "");
  const baseVersion = text.split("-")[0].split("+")[0];
  if (!baseVersion || baseVersion.startsWith("."))
    throw new InconclusiveMatchError(`Invalid semver: ${value}`);
  const parts = baseVersion.split(".");
  const parsePart = (part) => {
    if (part === undefined || part === "")
      return 0;
    if (!/^\d+$/.test(part))
      throw new InconclusiveMatchError(`Invalid semver: ${value}`);
    return parseInt(part, 10);
  };
  const major = parsePart(parts[0]);
  const minor = parsePart(parts[1]);
  const patch = parsePart(parts[2]);
  return [
    major,
    minor,
    patch
  ];
}
function compareSemverTuples(a, b) {
  for (let i = 0;i < 3; i++) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }
  return 0;
}
function computeTildeBounds(value) {
  const parsed = parseSemver(value);
  const lower = [
    parsed[0],
    parsed[1],
    parsed[2]
  ];
  const upper = [
    parsed[0],
    parsed[1] + 1,
    0
  ];
  return {
    lower,
    upper
  };
}
function computeCaretBounds(value) {
  const parsed = parseSemver(value);
  const [major, minor, patch] = parsed;
  const lower = [
    major,
    minor,
    patch
  ];
  let upper;
  upper = major > 0 ? [
    major + 1,
    0,
    0
  ] : minor > 0 ? [
    0,
    minor + 1,
    0
  ] : [
    0,
    0,
    patch + 1
  ];
  return {
    lower,
    upper
  };
}
function computeWildcardBounds(value) {
  const text = String(value).trim().replace(/^[vV]/, "");
  const cleanedText = text.replace(/\.\*$/, "").replace(/\*$/, "");
  if (!cleanedText)
    throw new InconclusiveMatchError(`Invalid wildcard semver: ${value}`);
  const parts = cleanedText.split(".");
  const major = parseInt(parts[0], 10);
  if (isNaN(major))
    throw new InconclusiveMatchError(`Invalid wildcard semver: ${value}`);
  let lower;
  let upper;
  if (parts.length === 1) {
    lower = [
      major,
      0,
      0
    ];
    upper = [
      major + 1,
      0,
      0
    ];
  } else {
    const minor = parseInt(parts[1], 10);
    if (isNaN(minor))
      throw new InconclusiveMatchError(`Invalid wildcard semver: ${value}`);
    lower = [
      major,
      minor,
      0
    ];
    upper = [
      major,
      minor + 1,
      0
    ];
  }
  return {
    lower,
    upper
  };
}
function convertToDateTime(value) {
  if (value instanceof Date)
    return value;
  if (typeof value == "string" || typeof value == "number") {
    const date = new Date(value);
    if (!isNaN(date.valueOf()))
      return date;
    throw new InconclusiveMatchError(`${value} is in an invalid date format`);
  }
  throw new InconclusiveMatchError(`The date provided ${value} must be a string, number, or date object`);
}
function relativeDateParseForFeatureFlagMatching(value) {
  const regex = /^-?(?<number>[0-9]+)(?<interval>[a-z])$/;
  const match = value.match(regex);
  const parsedDt = new Date(new Date().toISOString());
  if (!match)
    return null;
  {
    if (!match.groups)
      return null;
    const number = parseInt(match.groups["number"]);
    if (number >= 1e4)
      return null;
    const interval = match.groups["interval"];
    if (interval == "h")
      parsedDt.setUTCHours(parsedDt.getUTCHours() - number);
    else if (interval == "d")
      parsedDt.setUTCDate(parsedDt.getUTCDate() - number);
    else if (interval == "w")
      parsedDt.setUTCDate(parsedDt.getUTCDate() - 7 * number);
    else if (interval == "m")
      parsedDt.setUTCMonth(parsedDt.getUTCMonth() - number);
    else {
      if (interval != "y")
        return null;
      parsedDt.setUTCFullYear(parsedDt.getUTCFullYear() - number);
    }
    return parsedDt;
  }
}
var SIXTY_SECONDS = 60000, LONG_SCALE = 1152921504606847000, NULL_VALUES_ALLOWED_OPERATORS, ClientError, InconclusiveMatchError, RequiresServerEvaluation;
var init_feature_flags = __esm(() => {
  init_dist();
  init_crypto();
  NULL_VALUES_ALLOWED_OPERATORS = [
    "is_not"
  ];
  ClientError = class ClientError extends Error {
    constructor(message) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.name = "ClientError";
      this.message = message;
      Object.setPrototypeOf(this, ClientError.prototype);
    }
  };
  InconclusiveMatchError = class InconclusiveMatchError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      Object.setPrototypeOf(this, InconclusiveMatchError.prototype);
    }
  };
  RequiresServerEvaluation = class RequiresServerEvaluation extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      Object.setPrototypeOf(this, RequiresServerEvaluation.prototype);
    }
  };
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/storage-memory.mjs
class PostHogMemoryStorage {
  getProperty(key) {
    return this._memoryStorage[key];
  }
  setProperty(key, value) {
    this._memoryStorage[key] = value !== null ? value : undefined;
  }
  constructor() {
    this._memoryStorage = {};
  }
}
var init_storage_memory = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/client.mjs
function emitDeprecationWarningOnce(id, message) {
  if (_emittedDeprecations.has(id))
    return;
  _emittedDeprecations.add(id);
  console.warn(`[PostHog] ${message}`);
}
function normalizeApiKey(value) {
  return typeof value == "string" ? value.trim() : "";
}
function normalizePersonalApiKey(value) {
  const normalizedValue = typeof value == "string" ? value.trim() : "";
  return normalizedValue || undefined;
}
function normalizeHost(value) {
  const normalizedValue = typeof value == "string" ? value.trim() : "";
  return normalizedValue || DEFAULT_NODE_HOST;
}
function buildFlagEventProperties(flagValues) {
  if (!flagValues)
    return {};
  const additionalProperties = {};
  for (const [feature, variant] of Object.entries(flagValues))
    additionalProperties[`$feature/${feature}`] = variant;
  const activeFlags = Object.keys(flagValues).filter((flag) => flagValues[flag] !== false).sort();
  if (activeFlags.length > 0)
    additionalProperties["$active_feature_flags"] = activeFlags;
  return additionalProperties;
}
var MINIMUM_POLLING_INTERVAL = 100, THIRTY_SECONDS = 30000, MAX_CACHE_SIZE = 50000, WAITUNTIL_DEBOUNCE_MS = 50, WAITUNTIL_MAX_WAIT_MS = 500, DEFAULT_NODE_HOST = "https://us.i.posthog.com", _emittedDeprecations, PostHogBackendClient;
var init_client = __esm(() => {
  init_version();
  init_dist();
  init_types3();
  init_feature_flag_evaluations();
  init_feature_flags();
  init_error_tracking2();
  init_storage_memory();
  _emittedDeprecations = new Set;
  PostHogBackendClient = class PostHogBackendClient extends PostHogCoreStateless {
    constructor(apiKey, options = {}) {
      const normalizedApiKey = normalizeApiKey(apiKey);
      const normalizedOptions = {
        ...options,
        host: normalizeHost(options.host),
        personalApiKey: normalizePersonalApiKey(options.personalApiKey)
      };
      super(normalizedApiKey, normalizedOptions), this._memoryStorage = new PostHogMemoryStorage;
      this.options = normalizedOptions;
      this.context = this.initializeContext();
      this.options.featureFlagsPollingInterval = typeof normalizedOptions.featureFlagsPollingInterval == "number" ? Math.max(normalizedOptions.featureFlagsPollingInterval, MINIMUM_POLLING_INTERVAL) : THIRTY_SECONDS;
      if (typeof normalizedOptions.waitUntilDebounceMs == "number")
        this.options.waitUntilDebounceMs = Math.max(normalizedOptions.waitUntilDebounceMs, 0);
      if (typeof normalizedOptions.waitUntilMaxWaitMs == "number")
        this.options.waitUntilMaxWaitMs = Math.max(normalizedOptions.waitUntilMaxWaitMs, 0);
      if (normalizedOptions.personalApiKey) {
        if (normalizedOptions.personalApiKey.includes("phc_"))
          throw new Error('Your Personal API key is invalid. These keys are prefixed with "phx_" and can be created in PostHog project settings.');
        const shouldEnableLocalEvaluation = normalizedOptions.enableLocalEvaluation !== false;
        if (shouldEnableLocalEvaluation)
          this.featureFlagsPoller = new FeatureFlagsPoller({
            pollingInterval: this.options.featureFlagsPollingInterval,
            personalApiKey: normalizedOptions.personalApiKey,
            projectApiKey: normalizedApiKey,
            timeout: normalizedOptions.requestTimeout ?? 1e4,
            host: this.host,
            fetch: normalizedOptions.fetch,
            onError: (err) => {
              this._events.emit("error", err);
            },
            onLoad: (count) => {
              this._events.emit("localEvaluationFlagsLoaded", count);
            },
            customHeaders: this.getCustomHeaders(),
            cacheProvider: normalizedOptions.flagDefinitionCacheProvider,
            strictLocalEvaluation: normalizedOptions.strictLocalEvaluation
          });
      }
      this.errorTracking = new ErrorTracking(this, normalizedOptions, this._logger);
      this.distinctIdHasSentFlagCalls = {};
      this.maxCacheSize = normalizedOptions.maxCacheSize || MAX_CACHE_SIZE;
    }
    enqueue(type, message, options) {
      super.enqueue(type, message, options);
      this.scheduleDebouncedFlush();
    }
    async flush() {
      const flushPromise = super.flush();
      const waitUntil = this.options.waitUntil;
      if (waitUntil && !this._waitUntilCycle)
        try {
          waitUntil(flushPromise.catch(() => {}));
        } catch {}
      return flushPromise;
    }
    scheduleDebouncedFlush() {
      const waitUntil = this.options.waitUntil;
      if (!waitUntil)
        return;
      if (this.disabled || this.optedOut)
        return;
      if (!this._waitUntilCycle) {
        let resolve;
        const promise = new Promise((r) => {
          resolve = r;
        });
        try {
          waitUntil(promise);
        } catch {
          return;
        }
        this._waitUntilCycle = {
          resolve,
          startedAt: Date.now(),
          timer: undefined
        };
      }
      const elapsed = Date.now() - this._waitUntilCycle.startedAt;
      const maxWaitMs = this.options.waitUntilMaxWaitMs ?? WAITUNTIL_MAX_WAIT_MS;
      const flushNow = elapsed >= maxWaitMs;
      if (this._waitUntilCycle.timer !== undefined)
        clearTimeout(this._waitUntilCycle.timer);
      if (flushNow)
        return void this.resolveWaitUntilFlush();
      const debounceMs = this.options.waitUntilDebounceMs ?? WAITUNTIL_DEBOUNCE_MS;
      this._waitUntilCycle.timer = safeSetTimeout(() => {
        this.resolveWaitUntilFlush();
      }, debounceMs);
    }
    _consumeWaitUntilCycle() {
      const cycle = this._waitUntilCycle;
      if (cycle) {
        clearTimeout(cycle.timer);
        this._waitUntilCycle = undefined;
      }
      return cycle?.resolve;
    }
    async resolveWaitUntilFlush() {
      const resolve = this._consumeWaitUntilCycle();
      try {
        await super.flush();
      } catch {} finally {
        resolve?.();
      }
    }
    getPersistedProperty(key) {
      return this._memoryStorage.getProperty(key);
    }
    setPersistedProperty(key, value) {
      return this._memoryStorage.setProperty(key, value);
    }
    fetch(url, options) {
      return this.options.fetch ? this.options.fetch(url, options) : fetch(url, options);
    }
    getLibraryVersion() {
      return version;
    }
    getCustomUserAgent() {
      return `${this.getLibraryId()}/${this.getLibraryVersion()}`;
    }
    enable() {
      return super.optIn();
    }
    disable() {
      return super.optOut();
    }
    debug(enabled = true) {
      super.debug(enabled);
      this.featureFlagsPoller?.debug(enabled);
    }
    capture(props) {
      if (typeof props == "string")
        this._logger.warn("Called capture() with a string as the first argument when an object was expected.");
      if (props.event === "$exception" && !props._originatedFromCaptureException)
        this._logger.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically.");
      this.addPendingPromise(this.prepareEventMessage(props).then(({ distinctId, event, properties, options }) => super.captureStateless(distinctId, event, properties, {
        timestamp: options.timestamp,
        disableGeoip: options.disableGeoip,
        uuid: options.uuid
      })).catch((err) => {
        if (err)
          console.error(err);
      }));
    }
    async captureImmediate(props) {
      if (typeof props == "string")
        this._logger.warn("Called captureImmediate() with a string as the first argument when an object was expected.");
      if (props.event === "$exception" && !props._originatedFromCaptureException)
        this._logger.warn("Capturing a `$exception` event via `posthog.captureImmediate('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureExceptionImmediate(error)` instead, which attaches this metadata by default.");
      return this.addPendingPromise(this.prepareEventMessage(props).then(({ distinctId, event, properties, options }) => super.captureStatelessImmediate(distinctId, event, properties, {
        timestamp: options.timestamp,
        disableGeoip: options.disableGeoip,
        uuid: options.uuid
      })).catch((err) => {
        if (err)
          console.error(err);
      }));
    }
    identify({ distinctId, properties = {}, disableGeoip }) {
      const { $set, $set_once, $anon_distinct_id, ...rest } = properties;
      const setProps = $set || rest;
      const setOnceProps = $set_once || {};
      const eventProperties = {
        $set: setProps,
        $set_once: setOnceProps,
        $anon_distinct_id: $anon_distinct_id ?? undefined
      };
      super.identifyStateless(distinctId, eventProperties, {
        disableGeoip
      });
    }
    async identifyImmediate({ distinctId, properties = {}, disableGeoip }) {
      const { $set, $set_once, $anon_distinct_id, ...rest } = properties;
      const setProps = $set || rest;
      const setOnceProps = $set_once || {};
      const eventProperties = {
        $set: setProps,
        $set_once: setOnceProps,
        $anon_distinct_id: $anon_distinct_id ?? undefined
      };
      super.identifyStatelessImmediate(distinctId, eventProperties, {
        disableGeoip
      });
    }
    alias(data) {
      super.aliasStateless(data.alias, data.distinctId, undefined, {
        disableGeoip: data.disableGeoip
      });
    }
    async aliasImmediate(data) {
      await super.aliasStatelessImmediate(data.alias, data.distinctId, undefined, {
        disableGeoip: data.disableGeoip
      });
    }
    isLocalEvaluationReady() {
      return this.featureFlagsPoller?.isLocalEvaluationReady() ?? false;
    }
    async waitForLocalEvaluationReady(timeoutMs = THIRTY_SECONDS) {
      if (this.isLocalEvaluationReady())
        return true;
      if (this.featureFlagsPoller === undefined)
        return false;
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          cleanup();
          resolve(false);
        }, timeoutMs);
        const cleanup = this._events.on("localEvaluationFlagsLoaded", (count) => {
          clearTimeout(timeout);
          cleanup();
          resolve(count > 0);
        });
      });
    }
    _resolveDistinctId(distinctIdOrOptions, options) {
      if (typeof distinctIdOrOptions == "string")
        return {
          distinctId: distinctIdOrOptions,
          options
        };
      return {
        distinctId: this.context?.get()?.distinctId,
        options: distinctIdOrOptions
      };
    }
    async _getFeatureFlagResult(key, distinctId, options = {}, matchValue) {
      const sendFeatureFlagEvents = options.sendFeatureFlagEvents ?? true;
      if (this._flagOverrides !== undefined && key in this._flagOverrides) {
        const overrideValue = this._flagOverrides[key];
        if (overrideValue === undefined)
          return;
        const overridePayload = this._payloadOverrides?.[key];
        return {
          key,
          enabled: overrideValue !== false,
          variant: typeof overrideValue == "string" ? overrideValue : undefined,
          payload: overridePayload
        };
      }
      const { groups, disableGeoip } = options;
      let { onlyEvaluateLocally, personProperties, groupProperties } = options;
      const adjustedProperties = this.addLocalPersonAndGroupProperties(distinctId, groups, personProperties, groupProperties);
      personProperties = adjustedProperties.allPersonProperties;
      groupProperties = adjustedProperties.allGroupProperties;
      const evaluationContext = this.createFeatureFlagEvaluationContext(distinctId, groups, personProperties, groupProperties);
      if (onlyEvaluateLocally == undefined)
        onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
      let result;
      let flagWasLocallyEvaluated = false;
      let requestId;
      let evaluatedAt;
      let featureFlagError;
      let flagId;
      let flagVersion;
      let flagReason;
      const localEvaluationEnabled = this.featureFlagsPoller !== undefined;
      if (localEvaluationEnabled) {
        await this.featureFlagsPoller?.loadFeatureFlags();
        const flag = this.featureFlagsPoller?.featureFlagsByKey[key];
        if (flag)
          try {
            const localResult = await this.featureFlagsPoller?.computeFlagAndPayloadLocally(flag, evaluationContext, {
              matchValue
            });
            if (localResult) {
              flagWasLocallyEvaluated = true;
              const value = localResult.value;
              flagId = flag.id;
              flagReason = "Evaluated locally";
              result = {
                key,
                enabled: value !== false,
                variant: typeof value == "string" ? value : undefined,
                payload: localResult.payload ?? undefined
              };
            }
          } catch (e) {
            if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError)
              this._logger?.info(`${e.name} when computing flag locally: ${key}: ${e.message}`);
            else
              throw e;
          }
      }
      if (!flagWasLocallyEvaluated && !onlyEvaluateLocally) {
        const flagsResponse = await super.getFeatureFlagDetailsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, [
          key
        ]);
        if (flagsResponse === undefined)
          featureFlagError = FeatureFlagError2.UNKNOWN_ERROR;
        else {
          requestId = flagsResponse.requestId;
          evaluatedAt = flagsResponse.evaluatedAt;
          const errors = [];
          if (flagsResponse.errorsWhileComputingFlags)
            errors.push(FeatureFlagError2.ERRORS_WHILE_COMPUTING);
          if (flagsResponse.quotaLimited?.includes("feature_flags"))
            errors.push(FeatureFlagError2.QUOTA_LIMITED);
          const flagDetail = flagsResponse.flags[key];
          if (flagDetail === undefined)
            errors.push(FeatureFlagError2.FLAG_MISSING);
          else {
            flagId = flagDetail.metadata?.id;
            flagVersion = flagDetail.metadata?.version;
            flagReason = flagDetail.reason?.description ?? flagDetail.reason?.code;
            let parsedPayload;
            if (flagDetail.metadata?.payload !== undefined)
              try {
                parsedPayload = JSON.parse(flagDetail.metadata.payload);
              } catch {
                parsedPayload = flagDetail.metadata.payload;
              }
            result = {
              key,
              enabled: flagDetail.enabled,
              variant: flagDetail.variant,
              payload: parsedPayload
            };
          }
          if (errors.length > 0)
            featureFlagError = errors.join(",");
        }
      }
      if (sendFeatureFlagEvents) {
        const response = result === undefined ? undefined : result.enabled === false ? false : result.variant ?? true;
        const properties = {
          $feature_flag: key,
          $feature_flag_response: response,
          $feature_flag_id: flagId,
          $feature_flag_version: flagVersion,
          $feature_flag_reason: flagReason,
          locally_evaluated: flagWasLocallyEvaluated,
          [`$feature/${key}`]: response,
          $feature_flag_request_id: requestId,
          $feature_flag_evaluated_at: flagWasLocallyEvaluated ? Date.now() : evaluatedAt
        };
        if (flagWasLocallyEvaluated && this.featureFlagsPoller) {
          const flagDefinitionsLoadedAt = this.featureFlagsPoller.getFlagDefinitionsLoadedAt();
          if (flagDefinitionsLoadedAt !== undefined)
            properties.$feature_flag_definitions_loaded_at = flagDefinitionsLoadedAt;
        }
        if (featureFlagError)
          properties.$feature_flag_error = featureFlagError;
        this._captureFlagCalledEventIfNeeded({
          distinctId,
          key,
          response,
          groups,
          disableGeoip,
          properties
        });
      }
      if (result !== undefined && this._payloadOverrides !== undefined && key in this._payloadOverrides)
        result = {
          ...result,
          payload: this._payloadOverrides[key]
        };
      return result;
    }
    async getFeatureFlag(key, distinctId, options) {
      emitDeprecationWarningOnce("getFeatureFlag", "`getFeatureFlag` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.getFlag(key)` instead — this consolidates flag evaluation into a single `/flags` request per incoming request.");
      const result = await this._getFeatureFlagResult(key, distinctId, {
        ...options,
        sendFeatureFlagEvents: options?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
      });
      if (result === undefined)
        return;
      if (result.enabled === false)
        return false;
      return result.variant ?? true;
    }
    async getFeatureFlagPayload(key, distinctId, matchValue, options) {
      emitDeprecationWarningOnce("getFeatureFlagPayload", "`getFeatureFlagPayload` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.getFlagPayload(key)` instead — this consolidates flag evaluation into a single `/flags` request per incoming request.");
      if (this._payloadOverrides !== undefined && key in this._payloadOverrides)
        return this._payloadOverrides[key];
      const result = await this._getFeatureFlagResult(key, distinctId, {
        ...options,
        sendFeatureFlagEvents: false
      }, matchValue);
      if (result === undefined)
        return;
      return result.payload ?? null;
    }
    async getFeatureFlagResult(key, distinctIdOrOptions, options) {
      const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
      if (!resolvedDistinctId)
        return void this._logger.warn("[PostHog] distinctId is required — pass it explicitly or use withContext()");
      return this._getFeatureFlagResult(key, resolvedDistinctId, {
        ...resolvedOptions,
        sendFeatureFlagEvents: resolvedOptions?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
      });
    }
    async getRemoteConfigPayload(flagKey) {
      if (!this.options.personalApiKey)
        throw new Error("Personal API key is required for remote config payload decryption");
      const response = await this._requestRemoteConfigPayload(flagKey);
      if (!response)
        return;
      const parsed = await response.json();
      if (typeof parsed == "string")
        try {
          return JSON.parse(parsed);
        } catch (e) {}
      return parsed;
    }
    async isFeatureEnabled(key, distinctId, options) {
      emitDeprecationWarningOnce("isFeatureEnabled", "`isFeatureEnabled` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.isEnabled(key)` instead — this consolidates flag evaluation into a single `/flags` request per incoming request.");
      const result = await this._getFeatureFlagResult(key, distinctId, {
        ...options,
        sendFeatureFlagEvents: options?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
      });
      if (result === undefined)
        return;
      if (result.enabled === false)
        return false;
      const feat = result.variant ?? true;
      return !!feat || false;
    }
    async getAllFlags(distinctIdOrOptions, options) {
      const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
      if (!resolvedDistinctId) {
        this._logger.warn("[PostHog] distinctId is required to get feature flags — pass it explicitly or use withContext()");
        return {};
      }
      const response = await this.getAllFlagsAndPayloads(resolvedDistinctId, resolvedOptions);
      return response.featureFlags || {};
    }
    async getAllFlagsAndPayloads(distinctIdOrOptions, options) {
      const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
      if (!resolvedDistinctId) {
        this._logger.warn("[PostHog] distinctId is required to get feature flags and payloads — pass it explicitly or use withContext()");
        return {
          featureFlags: {},
          featureFlagPayloads: {}
        };
      }
      const { groups, disableGeoip, flagKeys } = resolvedOptions || {};
      let { onlyEvaluateLocally, personProperties, groupProperties } = resolvedOptions || {};
      const adjustedProperties = this.addLocalPersonAndGroupProperties(resolvedDistinctId, groups, personProperties, groupProperties);
      personProperties = adjustedProperties.allPersonProperties;
      groupProperties = adjustedProperties.allGroupProperties;
      const evaluationContext = this.createFeatureFlagEvaluationContext(resolvedDistinctId, groups, personProperties, groupProperties);
      if (onlyEvaluateLocally == undefined)
        onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
      const localEvaluationResult = await this.featureFlagsPoller?.getAllFlagsAndPayloads(evaluationContext, flagKeys);
      let featureFlags = {};
      let featureFlagPayloads = {};
      let fallbackToFlags = true;
      if (localEvaluationResult) {
        featureFlags = localEvaluationResult.response;
        featureFlagPayloads = localEvaluationResult.payloads;
        fallbackToFlags = localEvaluationResult.fallbackToFlags;
      }
      if (fallbackToFlags && !onlyEvaluateLocally) {
        const remoteEvaluationResult = await super.getFeatureFlagsAndPayloadsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, flagKeys);
        featureFlags = {
          ...featureFlags,
          ...remoteEvaluationResult.flags || {}
        };
        featureFlagPayloads = {
          ...featureFlagPayloads,
          ...remoteEvaluationResult.payloads || {}
        };
      }
      if (this._flagOverrides !== undefined)
        featureFlags = {
          ...featureFlags,
          ...this._flagOverrides
        };
      if (this._payloadOverrides !== undefined)
        featureFlagPayloads = {
          ...featureFlagPayloads,
          ...this._payloadOverrides
        };
      return {
        featureFlags,
        featureFlagPayloads
      };
    }
    async evaluateFlags(distinctIdOrOptions, options) {
      const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
      if (!resolvedDistinctId) {
        this._logger.warn("[PostHog] distinctId is required to evaluate feature flags — pass it explicitly or use withContext()");
        return new FeatureFlagEvaluations({
          host: this._getFeatureFlagEvaluationsHost(),
          distinctId: "",
          flags: {}
        });
      }
      const { groups, disableGeoip, flagKeys } = resolvedOptions || {};
      let { onlyEvaluateLocally, personProperties, groupProperties } = resolvedOptions || {};
      const adjustedProperties = this.addLocalPersonAndGroupProperties(resolvedDistinctId, groups, personProperties, groupProperties);
      personProperties = adjustedProperties.allPersonProperties;
      groupProperties = adjustedProperties.allGroupProperties;
      const evaluationContext = this.createFeatureFlagEvaluationContext(resolvedDistinctId, groups, personProperties, groupProperties);
      if (onlyEvaluateLocally == undefined)
        onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
      const records = {};
      let requestId;
      let evaluatedAt;
      let errorsWhileComputing = false;
      let quotaLimited = false;
      const localResult = await this.featureFlagsPoller?.getAllFlagsAndPayloads(evaluationContext, flagKeys);
      const locallyEvaluatedKeys = new Set;
      if (localResult)
        for (const [key, value] of Object.entries(localResult.response)) {
          const flagDef = this.featureFlagsPoller?.featureFlagsByKey[key];
          records[key] = {
            key,
            enabled: value !== false,
            variant: typeof value == "string" ? value : undefined,
            payload: localResult.payloads[key],
            id: flagDef?.id,
            version: undefined,
            reason: "Evaluated locally",
            locallyEvaluated: true
          };
          locallyEvaluatedKeys.add(key);
        }
      const fallbackToFlags = localResult ? localResult.fallbackToFlags : true;
      if (fallbackToFlags && !onlyEvaluateLocally) {
        const details = await super.getFeatureFlagDetailsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, flagKeys);
        if (details) {
          requestId = details.requestId;
          evaluatedAt = details.evaluatedAt;
          errorsWhileComputing = Boolean(details.errorsWhileComputingFlags);
          quotaLimited = Array.isArray(details.quotaLimited) && details.quotaLimited.includes("feature_flags");
          for (const [key, detail] of Object.entries(details.flags)) {
            if (locallyEvaluatedKeys.has(key))
              continue;
            let parsedPayload;
            if (detail.metadata?.payload !== undefined)
              try {
                parsedPayload = JSON.parse(detail.metadata.payload);
              } catch {
                parsedPayload = detail.metadata.payload;
              }
            records[key] = {
              key,
              enabled: detail.enabled,
              variant: detail.variant,
              payload: parsedPayload,
              id: detail.metadata?.id,
              version: detail.metadata?.version,
              reason: detail.reason?.description ?? detail.reason?.code,
              locallyEvaluated: false
            };
          }
        }
      }
      if (this._flagOverrides !== undefined)
        for (const [key, value] of Object.entries(this._flagOverrides)) {
          if (value === undefined) {
            delete records[key];
            continue;
          }
          const existing = records[key];
          records[key] = {
            key,
            enabled: value !== false,
            variant: typeof value == "string" ? value : undefined,
            payload: existing?.payload,
            id: existing?.id,
            version: existing?.version,
            reason: existing?.reason,
            locallyEvaluated: existing?.locallyEvaluated ?? false
          };
        }
      if (this._payloadOverrides !== undefined)
        for (const [key, payload] of Object.entries(this._payloadOverrides)) {
          const existing = records[key];
          if (existing)
            records[key] = {
              ...existing,
              payload
            };
        }
      return new FeatureFlagEvaluations({
        host: this._getFeatureFlagEvaluationsHost(),
        distinctId: resolvedDistinctId,
        groups,
        disableGeoip,
        flags: records,
        requestId,
        evaluatedAt,
        flagDefinitionsLoadedAt: this.featureFlagsPoller?.getFlagDefinitionsLoadedAt(),
        errorsWhileComputing,
        quotaLimited
      });
    }
    _captureFlagCalledEventIfNeeded(params) {
      const { distinctId, key, response, groups, disableGeoip, properties } = params;
      const featureFlagReportedKey = `${key}_${response}`;
      if (distinctId in this.distinctIdHasSentFlagCalls && this.distinctIdHasSentFlagCalls[distinctId].includes(featureFlagReportedKey))
        return;
      if (Object.keys(this.distinctIdHasSentFlagCalls).length >= this.maxCacheSize)
        this.distinctIdHasSentFlagCalls = {};
      if (Array.isArray(this.distinctIdHasSentFlagCalls[distinctId]))
        this.distinctIdHasSentFlagCalls[distinctId].push(featureFlagReportedKey);
      else
        this.distinctIdHasSentFlagCalls[distinctId] = [
          featureFlagReportedKey
        ];
      this.capture({
        distinctId,
        event: "$feature_flag_called",
        properties,
        groups,
        disableGeoip
      });
    }
    _getFeatureFlagEvaluationsHost() {
      if (!this._featureFlagEvaluationsHost)
        this._featureFlagEvaluationsHost = {
          captureFlagCalledEventIfNeeded: (params) => this._captureFlagCalledEventIfNeeded(params),
          logWarning: (message) => {
            if (this.options.featureFlagsLogWarnings !== false)
              console.warn(`[PostHog] ${message}`);
          }
        };
      return this._featureFlagEvaluationsHost;
    }
    groupIdentify({ groupType, groupKey, properties, distinctId, disableGeoip }) {
      super.groupIdentifyStateless(groupType, groupKey, properties, {
        disableGeoip
      }, distinctId);
    }
    async reloadFeatureFlags() {
      await this.featureFlagsPoller?.loadFeatureFlags(true);
    }
    overrideFeatureFlags(overrides) {
      const flagArrayToRecord = (flags) => Object.fromEntries(flags.map((f) => [
        f,
        true
      ]));
      if (overrides === false) {
        this._flagOverrides = undefined;
        this._payloadOverrides = undefined;
        return;
      }
      if (Array.isArray(overrides)) {
        this._flagOverrides = flagArrayToRecord(overrides);
        return;
      }
      if (this._isFeatureFlagOverrideOptions(overrides)) {
        if ("flags" in overrides) {
          if (overrides.flags === false)
            this._flagOverrides = undefined;
          else if (Array.isArray(overrides.flags))
            this._flagOverrides = flagArrayToRecord(overrides.flags);
          else if (overrides.flags !== undefined)
            this._flagOverrides = {
              ...overrides.flags
            };
        }
        if ("payloads" in overrides) {
          if (overrides.payloads === false)
            this._payloadOverrides = undefined;
          else if (overrides.payloads !== undefined)
            this._payloadOverrides = {
              ...overrides.payloads
            };
        }
        return;
      }
      this._flagOverrides = {
        ...overrides
      };
    }
    _isFeatureFlagOverrideOptions(overrides) {
      if (typeof overrides != "object" || overrides === null || Array.isArray(overrides))
        return false;
      const obj = overrides;
      if ("flags" in obj) {
        const flagsValue = obj["flags"];
        if (flagsValue === false || Array.isArray(flagsValue) || typeof flagsValue == "object" && flagsValue !== null)
          return true;
      }
      if ("payloads" in obj) {
        const payloadsValue = obj["payloads"];
        if (payloadsValue === false || typeof payloadsValue == "object" && payloadsValue !== null)
          return true;
      }
      return false;
    }
    withContext(data, fn, options) {
      if (!this.context)
        return fn();
      return this.context.run(data, fn, options);
    }
    getContext() {
      return this.context?.get();
    }
    enterContext(data, options) {
      this.context?.enter(data, options);
    }
    async _shutdown(shutdownTimeoutMs) {
      const resolve = this._consumeWaitUntilCycle();
      await this.featureFlagsPoller?.stopPoller(shutdownTimeoutMs);
      this.errorTracking.shutdown();
      try {
        return await super._shutdown(shutdownTimeoutMs);
      } finally {
        resolve?.();
      }
    }
    async _requestRemoteConfigPayload(flagKey) {
      if (!this.options.personalApiKey)
        return;
      const url = `${this.host}/api/projects/@current/feature_flags/${flagKey}/remote_config?token=${encodeURIComponent(this.apiKey)}`;
      const options = {
        method: "GET",
        headers: {
          ...this.getCustomHeaders(),
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.options.personalApiKey}`
        }
      };
      let abortTimeout = null;
      if (this.options.requestTimeout && typeof this.options.requestTimeout == "number") {
        const controller = new AbortController;
        abortTimeout = safeSetTimeout(() => {
          controller.abort();
        }, this.options.requestTimeout);
        options.signal = controller.signal;
      }
      try {
        return await this.fetch(url, options);
      } catch (error) {
        this._events.emit("error", error);
        return;
      } finally {
        if (abortTimeout)
          clearTimeout(abortTimeout);
      }
    }
    extractPropertiesFromEvent(eventProperties, groups) {
      if (!eventProperties)
        return {
          personProperties: {},
          groupProperties: {}
        };
      const personProperties = {};
      const groupProperties = {};
      for (const [key, value] of Object.entries(eventProperties))
        if (isPlainObject(value) && groups && key in groups) {
          const groupProps = {};
          for (const [groupKey, groupValue] of Object.entries(value))
            groupProps[String(groupKey)] = String(groupValue);
          groupProperties[String(key)] = groupProps;
        } else
          personProperties[String(key)] = String(value);
      return {
        personProperties,
        groupProperties
      };
    }
    async getFeatureFlagsForEvent(distinctId, groups, disableGeoip, sendFeatureFlagsOptions) {
      const finalPersonProperties = sendFeatureFlagsOptions?.personProperties || {};
      const finalGroupProperties = sendFeatureFlagsOptions?.groupProperties || {};
      const flagKeys = sendFeatureFlagsOptions?.flagKeys;
      const onlyEvaluateLocally = sendFeatureFlagsOptions?.onlyEvaluateLocally ?? this.options.strictLocalEvaluation ?? false;
      if (onlyEvaluateLocally)
        if (!((this.featureFlagsPoller?.featureFlags?.length || 0) > 0))
          return {};
        else {
          const groupsWithStringValues = {};
          for (const [key, value] of Object.entries(groups || {}))
            groupsWithStringValues[key] = String(value);
          return await this.getAllFlags(distinctId, {
            groups: groupsWithStringValues,
            personProperties: finalPersonProperties,
            groupProperties: finalGroupProperties,
            disableGeoip,
            onlyEvaluateLocally: true,
            flagKeys
          });
        }
      if ((this.featureFlagsPoller?.featureFlags?.length || 0) > 0) {
        const groupsWithStringValues = {};
        for (const [key, value] of Object.entries(groups || {}))
          groupsWithStringValues[key] = String(value);
        return await this.getAllFlags(distinctId, {
          groups: groupsWithStringValues,
          personProperties: finalPersonProperties,
          groupProperties: finalGroupProperties,
          disableGeoip,
          onlyEvaluateLocally: true,
          flagKeys
        });
      }
      return (await super.getFeatureFlagsStateless(distinctId, groups, finalPersonProperties, finalGroupProperties, disableGeoip)).flags;
    }
    addLocalPersonAndGroupProperties(distinctId, groups, personProperties, groupProperties) {
      const allPersonProperties = {
        distinct_id: distinctId,
        ...personProperties || {}
      };
      const allGroupProperties = {};
      if (groups)
        for (const groupName of Object.keys(groups))
          allGroupProperties[groupName] = {
            $group_key: groups[groupName],
            ...groupProperties?.[groupName] || {}
          };
      return {
        allPersonProperties,
        allGroupProperties
      };
    }
    createFeatureFlagEvaluationContext(distinctId, groups, personProperties, groupProperties) {
      return {
        distinctId,
        groups: groups || {},
        personProperties: personProperties || {},
        groupProperties: groupProperties || {},
        evaluationCache: {}
      };
    }
    captureException(error, distinctId, additionalProperties, uuid, flags) {
      if (!ErrorTracking.isPreviouslyCapturedError(error)) {
        const syntheticException = new Error("PostHog syntheticException");
        this.addPendingPromise(ErrorTracking.buildEventMessage(error, {
          syntheticException
        }, distinctId, additionalProperties).then((msg) => this.capture({
          ...msg,
          uuid,
          flags
        })));
      }
    }
    async captureExceptionImmediate(error, distinctId, additionalProperties, flags) {
      if (!ErrorTracking.isPreviouslyCapturedError(error)) {
        const syntheticException = new Error("PostHog syntheticException");
        return this.addPendingPromise(ErrorTracking.buildEventMessage(error, {
          syntheticException
        }, distinctId, additionalProperties).then((msg) => this.captureImmediate({
          ...msg,
          flags
        })));
      }
    }
    async prepareEventMessage(props) {
      const { distinctId, event, properties, groups, flags, sendFeatureFlags, timestamp, disableGeoip, uuid } = props;
      const contextData = this.context?.get();
      let mergedDistinctId = distinctId || contextData?.distinctId;
      const mergedProperties = {
        ...this.props,
        ...contextData?.properties || {},
        ...properties || {}
      };
      if (!mergedDistinctId) {
        mergedDistinctId = uuidv7();
        mergedProperties.$process_person_profile = false;
      }
      if (contextData?.sessionId && !mergedProperties.$session_id)
        mergedProperties.$session_id = contextData.sessionId;
      const eventMessage = this._runBeforeSend({
        distinctId: mergedDistinctId,
        event,
        properties: mergedProperties,
        groups,
        flags,
        sendFeatureFlags,
        timestamp,
        disableGeoip,
        uuid
      });
      if (!eventMessage)
        return Promise.reject(null);
      const eventProperties = await Promise.resolve().then(async () => {
        if (flags) {
          if (sendFeatureFlags)
            console.warn("[PostHog] Both `flags` and `sendFeatureFlags` were passed to capture(); using `flags` and ignoring `sendFeatureFlags`.");
          return flags._getEventProperties();
        }
        if (sendFeatureFlags) {
          emitDeprecationWarningOnce("sendFeatureFlags", "`sendFeatureFlags` is deprecated and will be removed in a future major version. Pass a `flags` snapshot from `posthog.evaluateFlags(...)` instead — it avoids a second `/flags` request per capture and guarantees the event carries the exact flag values your code branched on.");
          const sendFeatureFlagsOptions = typeof sendFeatureFlags == "object" ? sendFeatureFlags : undefined;
          const flagValues = await this.getFeatureFlagsForEvent(eventMessage.distinctId, groups, disableGeoip, sendFeatureFlagsOptions);
          return buildFlagEventProperties(flagValues);
        }
        return {};
      }).catch(() => ({})).then((additionalProperties) => {
        const props2 = {
          ...additionalProperties,
          ...eventMessage.properties || {},
          $groups: eventMessage.groups || groups
        };
        return props2;
      });
      if (eventMessage.event === "$pageview" && this.options.__preview_capture_bot_pageviews && typeof eventProperties.$raw_user_agent == "string") {
        if (isBlockedUA(eventProperties.$raw_user_agent, this.options.custom_blocked_useragents || [])) {
          eventMessage.event = "$bot_pageview";
          eventProperties.$browser_type = "bot";
        }
      }
      return {
        distinctId: eventMessage.distinctId,
        event: eventMessage.event,
        properties: eventProperties,
        options: {
          timestamp: eventMessage.timestamp,
          disableGeoip: eventMessage.disableGeoip,
          uuid: eventMessage.uuid
        }
      };
    }
    _runBeforeSend(eventMessage) {
      const beforeSend = this.options.before_send;
      if (!beforeSend)
        return eventMessage;
      const fns = Array.isArray(beforeSend) ? beforeSend : [
        beforeSend
      ];
      let result = eventMessage;
      for (const fn of fns) {
        result = fn(result);
        if (!result) {
          this._logger.info(`Event '${eventMessage.event}' was rejected in beforeSend function`);
          return null;
        }
        if (!result.properties || Object.keys(result.properties).length === 0) {
          const message = `Event '${result.event}' has no properties after beforeSend function, this is likely an error.`;
          this._logger.warn(message);
        }
      }
      return result;
    }
  };
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/context/context.mjs
import { AsyncLocalStorage } from "node:async_hooks";

class PostHogContext {
  constructor() {
    this.storage = new AsyncLocalStorage;
  }
  get() {
    return this.storage.getStore();
  }
  run(context, fn, options) {
    return this.storage.run(this.resolve(context, options), fn);
  }
  enter(context, options) {
    this.storage.enterWith(this.resolve(context, options));
  }
  resolve(context, options) {
    if (options?.fresh === true)
      return context;
    const current = this.get() || {};
    return {
      distinctId: context.distinctId ?? current.distinctId,
      sessionId: context.sessionId ?? current.sessionId,
      properties: {
        ...current.properties || {},
        ...context.properties || {}
      }
    };
  }
}
var init_context = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/sentry-integration.mjs
function createEventProcessor(_posthog, { organization, projectId, prefix, severityAllowList = [
  "error"
], sendExceptionsToPostHog = true } = {}) {
  return (event) => {
    const shouldProcessLevel = severityAllowList === "*" || severityAllowList.includes(event.level);
    if (!shouldProcessLevel)
      return event;
    if (!event.tags)
      event.tags = {};
    const userId = event.tags[PostHogSentryIntegration.POSTHOG_ID_TAG];
    if (userId === undefined)
      return event;
    const uiHost = _posthog.options.host ?? "https://us.i.posthog.com";
    const personUrl = new URL(`/project/${_posthog.apiKey}/person/${userId}`, uiHost).toString();
    event.tags["PostHog Person URL"] = personUrl;
    const exceptions = event.exception?.values || [];
    const exceptionList = exceptions.map((exception) => ({
      ...exception,
      stacktrace: exception.stacktrace ? {
        ...exception.stacktrace,
        type: "raw",
        frames: (exception.stacktrace.frames || []).map((frame) => ({
          ...frame,
          platform: "node:javascript"
        }))
      } : undefined
    }));
    const properties = {
      $exception_message: exceptions[0]?.value || event.message,
      $exception_type: exceptions[0]?.type,
      $exception_level: event.level,
      $exception_list: exceptionList,
      $sentry_event_id: event.event_id,
      $sentry_exception: event.exception,
      $sentry_exception_message: exceptions[0]?.value || event.message,
      $sentry_exception_type: exceptions[0]?.type,
      $sentry_tags: event.tags
    };
    if (organization && projectId)
      properties["$sentry_url"] = (prefix || "https://sentry.io/organizations/") + organization + "/issues/?project=" + projectId + "&query=" + event.event_id;
    if (sendExceptionsToPostHog)
      _posthog.capture({
        event: "$exception",
        distinctId: userId,
        properties
      });
    return event;
  };
}
var NAME = "posthog-node", PostHogSentryIntegration;
var init_sentry_integration = __esm(() => {
  PostHogSentryIntegration = class PostHogSentryIntegration {
    static #_ = this.POSTHOG_ID_TAG = "posthog_distinct_id";
    constructor(_posthog, organization, prefix, severityAllowList, sendExceptionsToPostHog) {
      this.name = NAME;
      this.name = NAME;
      this.setupOnce = function(addGlobalEventProcessor, getCurrentHub) {
        const projectId = getCurrentHub()?.getClient()?.getDsn()?.projectId;
        addGlobalEventProcessor(createEventProcessor(_posthog, {
          organization,
          projectId,
          prefix,
          severityAllowList,
          sendExceptionsToPostHog: sendExceptionsToPostHog ?? true
        }));
      };
    }
  };
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/tracing-headers.mjs
var init_tracing_headers2 = () => {};

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/extensions/express.mjs
var init_express = __esm(() => {
  init_error_tracking2();
  init_tracing_headers2();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/exports.mjs
var init_exports = __esm(() => {
  init_feature_flag_evaluations();
  init_dist();
  init_sentry_integration();
  init_express();
  init_types3();
});

// ../../node_modules/.bun/posthog-node@5.34.2+63120419cc93e79b/node_modules/posthog-node/dist/entrypoints/index.node.mjs
var PostHog;
var init_index_node = __esm(() => {
  init_module_node();
  init_context_lines_node();
  init_relative_path_node();
  init_error_tracking2();
  init_client();
  init_dist();
  init_context();
  init_exports();
  ErrorTracking.errorPropertiesBuilder = new exports_error_tracking.ErrorPropertiesBuilder([
    new exports_error_tracking.EventCoercer,
    new exports_error_tracking.ErrorCoercer,
    new exports_error_tracking.ObjectCoercer,
    new exports_error_tracking.StringCoercer,
    new exports_error_tracking.PrimitiveCoercer
  ], exports_error_tracking.createStackParser("node:javascript", exports_error_tracking.nodeStackLineParser), [
    createModulerModifier(),
    addSourceContext,
    createRelativePathModifier()
  ]);
  PostHog = class PostHog extends PostHogBackendClient {
    getLibraryId() {
      return "posthog-node";
    }
    initializeContext() {
      return new PostHogContext;
    }
  };
});

// ../../packages/analytics/src/providers/posthog-server.ts
class PostHogServerProvider {
  posthog;
  defaultProperties;
  constructor(apiKey, apiHost, defaultProperties) {
    this.posthog = new PostHog(apiKey, {
      host: apiHost || "https://us.i.posthog.com",
      disableGeoip: false
    });
    this.defaultProperties = defaultProperties ?? {};
  }
  set(collection, objectId, properties) {
    if (collection === "users") {
      this.posthog.identify({
        distinctId: objectId,
        properties: { ...this.defaultProperties, ...properties }
      });
    }
  }
  event(_collection, objectId, eventName, properties, context) {
    this.posthog.capture({
      distinctId: objectId,
      event: eventName,
      properties: { ...this.defaultProperties, ...properties, ...context }
    });
  }
  captureException(error, distinctId, context) {
    this.posthog.captureException(error, distinctId, {
      ...this.defaultProperties,
      ...context
    });
  }
  async dispose() {
    await this.posthog.shutdown();
  }
}
var init_posthog_server = __esm(() => {
  init_index_node();
});

// ../../packages/analytics/src/server.ts
function createServerAnalytics(configOrApiKey, legacyOptions) {
  if (typeof configOrApiKey === "string") {
    const providers2 = [
      new PostHogServerProvider(configOrApiKey, undefined, legacyOptions?.defaultProperties)
    ];
    return new Analytics(providers2);
  }
  const explicit = configOrApiKey ?? {};
  const posthogConfig = explicit.posthog ?? { apiKey: "phc_cSYAEzsJX9gr0sgCp4tfnr7QJ71PwGD04eUQSglw4iQ" };
  const ga4Config = explicit.ga4 ?? (process.env.GA4_MEASUREMENT_ID && process.env.GA4_API_SECRET ? { measurementId: process.env.GA4_MEASUREMENT_ID, apiSecret: process.env.GA4_API_SECRET } : undefined);
  const providers = [];
  if (posthogConfig?.apiKey) {
    providers.push(new PostHogServerProvider(posthogConfig.apiKey, posthogConfig.apiHost, explicit.defaultProperties));
  }
  if (ga4Config?.measurementId && ga4Config?.apiSecret) {
    providers.push(new GA4ServerProvider(ga4Config.measurementId, ga4Config.apiSecret));
  }
  return new Analytics(providers);
}
var init_server = __esm(() => {
  init_ga4_server();
  init_posthog_server();
});

// ../../packages/plugin-common/src/analytics/index.ts
function createAnalyticsClient(config) {
  const { posthogApiKey, errorSourcePrefix, logger: logger2 } = config;
  if (!posthogApiKey) {
    return null;
  }
  const client = createServerAnalytics(posthogApiKey);
  return {
    captureException(error, errorType, errorSource, userId, properties) {
      try {
        const context = {
          error_type: errorType,
          error_category: getErrorCategory(errorType),
          error_source: `${errorSourcePrefix}/${errorSource}`,
          ...properties
        };
        client.captureException(error, userId, context);
      } catch (e) {
        logger2?.debug("Failed to capture exception in PostHog", e);
      }
    },
    capture(distinctId, eventName, properties) {
      try {
        client.track({
          distinctId,
          event: eventName,
          properties
        });
      } catch (e) {
        logger2?.debug("Failed to capture event in PostHog", e);
      }
    },
    async shutdown() {
      try {
        await client.dispose();
      } catch (e) {
        logger2?.debug("Error shutting down analytics", e);
      }
    }
  };
}
var init_analytics = __esm(() => {
  init_server();
  init_events();
  init_events();
});

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR, CLAUDE_CONFIG_FILE, CLAUDE_PROJECTS_DIR, CLAUDE_SETTINGS_FILE, CLAUDE_ZEST_DIR, QUEUE_DIR, LOGS_DIR, STATE_DIR, DELETION_CACHE_DIR, SESSION_FILE, SETTINGS_FILE, DAEMON_PID_FILE, CLAUDE_INSTANCES_FILE, STATUSLINE_SCRIPT_PATH, STATUSLINE_PROXY_CONFIG_FILE, STATUSLINE_SNAPSHOTS_FILE, STATUS_CACHE_FILE, SYNC_METRICS_FILE, EVENTS_QUEUE_FILE, SESSIONS_QUEUE_FILE, MESSAGES_QUEUE_FILE, LOCK_RETRY_MS = 50, LOCK_MAX_RETRIES = 300, DEBOUNCE_DIR, DELETION_CACHE_TTL_MS, LOG_RETENTION_DAYS = 7, PROACTIVE_REFRESH_THRESHOLD_MS, MAX_DIFF_SIZE_BYTES, STALE_SESSION_AGE_MS, WEB_APP_URL = "https://app.meetzest.com", SUPABASE_URL = "https://fnnlebrtmlxxjwdvngck.supabase.co", SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubmxlYnJ0bWx4eGp3ZHZuZ2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzA3MjYsImV4cCI6MjA3MjMwNjcyNn0.0IE3HCY_DiyyALdewbRn1vkedwzDW27NQMQ28V6j4Dk", POSTHOG_API_KEY = "phc_cSYAEzsJX9gr0sgCp4tfnr7QJ71PwGD04eUQSglw4iQ", EXCLUDED_COMMAND_PATTERNS, UPDATE_CHECK_CACHE_TTL_MS, DAEMON_INACTIVITY_TIMEOUT_MS, DAEMON_WARMUP_GRACE_MS, NOTIFICATION_DURATION_MS, STANDUP_NOTIFICATION_THROTTLE_MS, SYNC_METRICS_RETENTION_MS, DEFAULT_STANDUP_MODEL = "anthropic/claude-opus-4-5";
var init_constants = __esm(() => {
  init_src();
  init_src();
  CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
  CLAUDE_CONFIG_FILE = process.env.CLAUDE_CONFIG_FILE || join(homedir(), ".claude.json");
  CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
  CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
  CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
  QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
  LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
  STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
  DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
  SESSION_FILE = process.env.ZEST_SESSION_FILE ?? join(CLAUDE_ZEST_DIR, "session.json");
  SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
  DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
  CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
  STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
  STATUSLINE_PROXY_CONFIG_FILE = join(CLAUDE_ZEST_DIR, "statusline-proxy.json");
  STATUSLINE_SNAPSHOTS_FILE = process.env.ZEST_STATUSLINE_SNAPSHOTS_FILE ?? join(CLAUDE_ZEST_DIR, "statusline-snapshots.json");
  STATUS_CACHE_FILE = process.env.ZEST_STATUS_CACHE_FILE ?? join(CLAUDE_ZEST_DIR, "status-cache.json");
  SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
  EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
  SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
  MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
  DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
  DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
  PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
  MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
  STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
  EXCLUDED_COMMAND_PATTERNS = [
    new RegExp(`^\\/(${[...CLAUDE_BUILTIN_COMMANDS].join("|")})\\b`, "i"),
    /^\/zest[^:\s]*:/i,
    /<command-name>\/zest[^<]*<\/command-name>/i,
    /node\s+.*\/dist\/commands\/.*-cli\.js/i
  ];
  UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
  DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
  DAEMON_WARMUP_GRACE_MS = 3 * 1000;
  NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
  STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
  SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;
});

// ../../packages/plugin-common/src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}
var init_fs_utils = () => {};

// ../../packages/plugin-common/src/log-rotation/log-rotation.ts
import { readdir, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";
function getDateString() {
  return new Date().toISOString().split("T")[0];
}
function getDatedLogPath(logsDir, logPrefix) {
  const dateStr = getDateString();
  return join2(logsDir, `${logPrefix}-${dateStr}.log`);
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
function createLogRotation(config) {
  const { logsDir, retentionDays, logger: logger2 } = config;
  const lastCleanupTime = {};
  async function cleanupStaleLogs(logPrefix) {
    const now = Date.now();
    const lastCleanup = lastCleanupTime[logPrefix] || 0;
    if (now - lastCleanup < CLEANUP_THROTTLE_MS) {
      return;
    }
    lastCleanupTime[logPrefix] = now;
    try {
      await ensureDirectory(logsDir);
      const files = await readdir(logsDir);
      const cutoffDate = new Date(now - retentionDays * 24 * 60 * 60 * 1000);
      for (const file of files) {
        const fileDate = parseDateFromFilename(file, logPrefix);
        if (fileDate && fileDate < cutoffDate) {
          const filePath = join2(logsDir, file);
          try {
            await unlink(filePath);
          } catch (error) {
            logger2?.error(`Failed to delete old log file ${file}`, error);
          }
        }
      }
    } catch (error) {
      logger2?.error("Failed to cleanup old logs", error);
    }
  }
  async function forceCleanupStaleLogs(logPrefix) {
    lastCleanupTime[logPrefix] = 0;
    await cleanupStaleLogs(logPrefix);
  }
  return { cleanupStaleLogs, forceCleanupStaleLogs };
}
var CLEANUP_THROTTLE_MS;
var init_log_rotation = __esm(() => {
  init_fs_utils();
  CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
});

// src/log-rotation/log-rotation.ts
function getDatedLogPath2(logPrefix) {
  return getDatedLogPath(LOGS_DIR, logPrefix);
}
var logRotation, cleanupStaleLogs, forceCleanupStaleLogs;
var init_log_rotation2 = __esm(() => {
  init_log_rotation();
  init_constants();
  logRotation = createLogRotation({
    logsDir: LOGS_DIR,
    retentionDays: LOG_RETENTION_DAYS
  });
  ({ cleanupStaleLogs, forceCleanupStaleLogs } = logRotation);
});

// src/utils/fs-utils.ts
import { mkdir as mkdir2, stat as stat2 } from "node:fs/promises";
async function ensureDirectory2(dirPath) {
  try {
    await stat2(dirPath);
  } catch {
    await mkdir2(dirPath, { recursive: true, mode: 448 });
  }
}
var init_fs_utils2 = () => {};

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname as dirname2 } from "node:path";

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
      const logFilePath = getDatedLogPath2(this.logPrefix);
      await ensureDirectory2(dirname2(logFilePath));
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
      console.error(`[Zest:Error] ${message}`);
      this.writeToFile(`ERROR: ${message} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    }
  }
}
var logger2;
var init_logger2 = __esm(() => {
  init_log_rotation2();
  init_fs_utils2();
  logger2 = new Logger;
});
// src/utils/plugin-version.ts
import { readFileSync } from "node:fs";
import { join as join3 } from "node:path";
function getPluginVersion() {
  try {
    const marketplacePluginPath = join3(CLAUDE_INSTALL_DIR, "plugins", "marketplaces", "zest-marketplace", "zest", ".claude-plugin", "plugin.json");
    const pluginJson = JSON.parse(readFileSync(marketplacePluginPath, "utf-8"));
    if (pluginJson.version && typeof pluginJson.version === "string") {
      logger2.debug("Read plugin version from marketplace plugin.json", {
        version: pluginJson.version
      });
      return pluginJson.version;
    }
    logger2.warn("Version field not found in marketplace plugin.json");
    return "unknown";
  } catch (error) {
    logger2.warn("Failed to read plugin version from marketplace plugin.json", error);
    return "unknown";
  }
}
var init_plugin_version = __esm(() => {
  init_constants();
  init_logger2();
});

// ../../packages/plugin-common/src/utils/file-lock.ts
import { unlinkSync } from "node:fs";
import { readdir as readdir2, readFile, unlink as unlink2, writeFile } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";
function defaultIsProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
function isLockStale(lockInfo, isRunning) {
  return !isRunning(lockInfo.pid);
}
async function acquireFileLock(filePath, isRunning, options, activeLockFiles, depth = 0) {
  if (depth >= MAX_ACQUIRE_DEPTH) {
    options.logger?.warn(`Lock acquisition for ${filePath} exceeded max recursive depth (${MAX_ACQUIRE_DEPTH})`);
    return false;
  }
  const lockFile = `${filePath}.lock`;
  const lockInfo = {
    pid: process.pid,
    timestamp: Date.now()
  };
  try {
    await ensureDirectory(dirname3(lockFile));
    await writeFile(lockFile, JSON.stringify(lockInfo), { flag: "wx" });
    activeLockFiles?.add(lockFile);
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") {
      const errCode = error.code;
      if (errCode === "ENOENT" || errCode === "EACCES") {
        options.logger?.error(`Failed to create lock file ${lockFile}:`, error);
        options.onCaptureException?.(error, FILE_LOCK_CREATE_FAILED, "file-lock", {
          ...buildFileSystemProperties({
            filePath: lockFile,
            operation: "lock",
            errnoCode: errCode
          })
        });
      }
      throw error;
    }
    try {
      const content = await readFile(lockFile, "utf8");
      const existingLock = JSON.parse(content);
      if (isLockStale(existingLock, isRunning)) {
        options.logger?.debug(`Removing stale lock for ${filePath} (PID ${existingLock.pid} is dead)`);
        await unlink2(lockFile).catch(() => {});
        return acquireFileLock(filePath, isRunning, options, activeLockFiles, depth + 1);
      }
    } catch {
      options.logger?.debug(`Lock file for ${filePath} is corrupted or unreadable, removing`);
      await unlink2(lockFile).catch(() => {});
      return acquireFileLock(filePath, isRunning, options, activeLockFiles, depth + 1);
    }
    return false;
  }
}
async function releaseFileLock(filePath, activeLockFiles) {
  const lockFile = `${filePath}.lock`;
  activeLockFiles?.delete(lockFile);
  await unlink2(lockFile).catch(() => {});
}
function createFileLock(config) {
  const {
    logger: logger3,
    onCaptureException,
    lockRetryMs = DEFAULT_LOCK_RETRY_MS,
    lockMaxRetries = DEFAULT_LOCK_MAX_RETRIES,
    lockDir
  } = config;
  const isRunning = config.isProcessRunning ?? defaultIsProcessRunning;
  const options = { logger: logger3, onCaptureException, isProcessRunning: isRunning, lockRetryMs, lockMaxRetries };
  const activeLockFiles = new Set;
  async function withFileLockInstance(filePath, fn) {
    let retries = 0;
    while (!await acquireFileLock(filePath, isRunning, options, activeLockFiles)) {
      if (++retries >= lockMaxRetries) {
        const error = new Error(`Failed to acquire lock for ${filePath} after ${retries} retries`);
        onCaptureException?.(error, FILE_LOCK_TIMEOUT, "file-lock", {
          ...buildFileSystemProperties({ filePath, operation: "lock" }),
          retries,
          max_retries: lockMaxRetries,
          retry_delay_ms: lockRetryMs
        });
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, lockRetryMs));
    }
    try {
      return await fn();
    } finally {
      await releaseFileLock(filePath, activeLockFiles);
    }
  }
  function cleanupLockFiles() {
    for (const lockFile of activeLockFiles) {
      try {
        unlinkSync(lockFile);
      } catch {}
    }
    activeLockFiles.clear();
  }
  async function cleanupStaleLocks() {
    if (!lockDir) {
      logger3?.debug("No lockDir configured, skipping stale lock cleanup");
      return;
    }
    try {
      const files = await readdir2(lockDir).catch(() => []);
      const lockFiles = files.filter((f) => f.endsWith(".lock"));
      for (const lockFileName of lockFiles) {
        const lockFile = `${lockDir}/${lockFileName}`;
        try {
          const content = await readFile(lockFile, "utf8");
          const lockInfo = JSON.parse(content);
          if (!isRunning(lockInfo.pid)) {
            await unlink2(lockFile);
            logger3?.info(`Cleaned up stale lock file: ${lockFileName} (PID ${lockInfo.pid} is dead)`);
          }
        } catch {
          await unlink2(lockFile).catch(() => {});
          logger3?.info(`Removed corrupted lock file: ${lockFileName}`);
        }
      }
    } catch (error) {
      logger3?.debug("Failed to clean up stale locks:", error);
    }
  }
  return {
    withFileLock: withFileLockInstance,
    cleanupStaleLocks,
    cleanupLockFiles
  };
}
function resolveFileLock(callback) {
  return callback ?? noopFileLock;
}
var DEFAULT_LOCK_RETRY_MS = 50, DEFAULT_LOCK_MAX_RETRIES = 300, MAX_ACQUIRE_DEPTH = 3, noopFileLock = (_path, fn) => fn();
var init_file_lock = __esm(() => {
  init_events();
  init_properties();
  init_fs_utils();
});

// ../../packages/plugin-common/src/auth/session-io.ts
import { mkdir as mkdir3, readFile as readFile2, unlink as unlink3, writeFile as writeFile2 } from "node:fs/promises";
import { dirname as dirname4 } from "node:path";
async function readSessionFile(filePath) {
  try {
    const content = await readFile2(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}
async function writeSessionFile(filePath, session) {
  await mkdir3(dirname4(filePath), { recursive: true });
  await writeFile2(filePath, JSON.stringify(session, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
}
async function deleteSessionFile(filePath) {
  try {
    await unlink3(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }
}
function isSessionStructureValid(session) {
  return Boolean(session.accessToken && session.refreshToken && session.userId && session.email);
}
function isRefreshTokenExpired(session) {
  return Boolean(session.refreshTokenExpiresAt && session.refreshTokenExpiresAt < Date.now());
}
var init_session_io = () => {};

// ../../packages/plugin-common/src/auth/session-manager.ts
function createSessionManager(config) {
  const { sessionFilePath, logger: logger3, onError } = config;
  const withFileLock = resolveFileLock(config.withFileLock);
  async function loadSession() {
    try {
      const session = await readSessionFile(sessionFilePath);
      if (!session)
        return null;
      if (!isSessionStructureValid(session)) {
        logger3?.warn("Invalid session structure, clearing session");
        await clearSession();
        return null;
      }
      return session;
    } catch (error) {
      logger3?.error("Failed to load session file", error);
      if (error instanceof Error)
        onError?.(error, "load");
      return null;
    }
  }
  async function saveSession(session) {
    try {
      await withFileLock(sessionFilePath, async () => {
        await writeSessionFile(sessionFilePath, session);
      });
      logger3?.info("Session saved successfully");
    } catch (error) {
      logger3?.error("Failed to save session", error);
      if (error instanceof Error)
        onError?.(error, "save");
      throw error;
    }
  }
  async function clearSession() {
    try {
      await deleteSessionFile(sessionFilePath);
      logger3?.info("Session cleared successfully");
    } catch (error) {
      logger3?.error("Failed to clear session", error);
      if (error instanceof Error)
        onError?.(error, "clear");
      throw error;
    }
  }
  async function getValidSession() {
    const session = await loadSession();
    if (!session) {
      logger3?.debug("getValidSession: No session found");
      return null;
    }
    if (isRefreshTokenExpired(session)) {
      logger3?.warn("getValidSession: Refresh token expired, user must re-authenticate");
      await clearSession();
      return null;
    }
    return session;
  }
  async function reconcileWorkspaceName(session, workspaces) {
    if (!session.workspaceId)
      return session.workspaceName;
    const current = workspaces.find((ws) => ws.id === session.workspaceId);
    if (!current)
      return session.workspaceName;
    if (current.name !== session.workspaceName) {
      try {
        await updateWorkspaceInSession(current.id, current.name);
      } catch (error) {
        logger3?.debug("Failed to update workspace name in session (non-critical)", error);
      }
    }
    return current.name;
  }
  async function updateWorkspaceInSession(workspaceId, workspaceName) {
    try {
      await withFileLock(sessionFilePath, async () => {
        const session = await readSessionFile(sessionFilePath);
        if (!session) {
          logger3?.debug("Cannot update workspace: session file does not exist");
          return;
        }
        if (!isSessionStructureValid(session)) {
          throw new Error("Cannot update workspace: session file has invalid structure");
        }
        session.workspaceId = workspaceId;
        session.workspaceName = workspaceName;
        await writeSessionFile(sessionFilePath, session);
      });
      logger3?.info("Workspace metadata updated in session");
    } catch (error) {
      logger3?.error("Failed to update workspace in session", error);
      if (error instanceof Error)
        onError?.(error, "save");
      throw error;
    }
  }
  async function clearSessionIfStale(staleRefreshToken) {
    const current = await loadSession();
    if (current && current.refreshToken === staleRefreshToken) {
      await clearSession();
    } else {
      logger3?.info("Session refresh token changed on disk, skipping clear");
    }
  }
  return {
    loadSession,
    saveSession,
    clearSession,
    clearSessionIfStale,
    getValidSession,
    reconcileWorkspaceName,
    updateWorkspaceInSession,
    getSessionFilePath: () => sessionFilePath
  };
}
var init_session_manager = __esm(() => {
  init_file_lock();
  init_session_io();
});

// src/utils/claude-instances.ts
var init_claude_instances = __esm(() => {
  init_constants();
  init_daemon_manager();
  init_file_lock2();
  init_logger2();
});

// src/utils/daemon-manager.ts
import { readFile as readFile3, stat as stat3, unlink as unlink4, writeFile as writeFile3 } from "node:fs/promises";
import { dirname as dirname5, join as join4 } from "node:path";
import { fileURLToPath } from "node:url";
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
async function getDaemonPid() {
  try {
    const pidData = await readFile3(DAEMON_PID_FILE, "utf-8");
    const pid = Number.parseInt(pidData.trim(), 10);
    if (Number.isNaN(pid)) {
      return null;
    }
    return isProcessRunning(pid) ? pid : null;
  } catch {
    return null;
  }
}
var DAEMON_RESTART_LOCK, __filename2, __dirname2;
var init_daemon_manager = __esm(() => {
  init_events();
  init_properties();
  init_analytics2();
  init_constants();
  init_claude_instances();
  init_file_lock2();
  init_fs_utils2();
  init_logger2();
  DAEMON_RESTART_LOCK = join4(CLAUDE_ZEST_DIR, "daemon-restart.lock");
  __filename2 = fileURLToPath(import.meta.url);
  __dirname2 = dirname5(__filename2);
});

// src/utils/file-lock.ts
var fileLock, withFileLock, cleanupStaleLocks, cleanupLockFiles;
var init_file_lock2 = __esm(() => {
  init_file_lock();
  init_analytics2();
  init_constants();
  init_daemon_manager();
  init_logger2();
  fileLock = createFileLock({
    logger: logger2,
    onCaptureException: captureException,
    isProcessRunning,
    lockRetryMs: LOCK_RETRY_MS,
    lockMaxRetries: LOCK_MAX_RETRIES,
    lockDir: QUEUE_DIR
  });
  ({ withFileLock, cleanupStaleLocks, cleanupLockFiles } = fileLock);
});

// src/auth/session-manager.ts
var exports_session_manager = {};
__export(exports_session_manager, {
  updateWorkspaceInSession: () => updateWorkspaceInSession,
  sessionManager: () => sessionManager,
  saveSession: () => saveSession,
  reconcileWorkspaceName: () => reconcileWorkspaceName,
  loadSessionFile: () => loadSessionFile,
  loadSession: () => loadSession,
  isSessionStructureValid: () => isSessionStructureValid,
  isRefreshTokenExpired: () => isRefreshTokenExpired,
  getValidSession: () => getValidSession,
  clearSession: () => clearSession
});
var ERROR_OPERATION_MAP, sessionManager, loadSession, saveSession, clearSession, getValidSession, reconcileWorkspaceName, updateWorkspaceInSession, loadSessionFile;
var init_session_manager2 = __esm(() => {
  init_events();
  init_properties();
  init_session_manager();
  init_analytics2();
  init_constants();
  init_file_lock2();
  init_logger2();
  init_session_io();
  ERROR_OPERATION_MAP = {
    load: { eventType: AUTH_SESSION_LOAD_FAILED, fsOperation: "read" },
    save: { eventType: AUTH_SESSION_SAVE_FAILED, fsOperation: "write" },
    clear: { eventType: AUTH_SESSION_CLEAR_FAILED, fsOperation: "read" }
  };
  sessionManager = createSessionManager({
    sessionFilePath: SESSION_FILE,
    logger: logger2,
    withFileLock,
    onError: (error, operation) => {
      const { eventType, fsOperation } = ERROR_OPERATION_MAP[operation];
      captureException(error, eventType, "session-manager", {
        ...buildFileSystemProperties({
          filePath: SESSION_FILE,
          operation: fsOperation,
          errnoCode: error.code
        })
      });
    }
  });
  ({
    loadSession,
    saveSession,
    clearSession,
    getValidSession,
    reconcileWorkspaceName,
    updateWorkspaceInSession
  } = sessionManager);
  loadSessionFile = loadSession;
});

// src/analytics/client.ts
async function getAnalyticsClient() {
  if (!POSTHOG_API_KEY)
    return null;
  if (!analyticsClient) {
    analyticsClient = createAnalyticsClient({
      posthogApiKey: POSTHOG_API_KEY,
      errorSourcePrefix: "claude-cli-plugin",
      logger: logger2
    });
    try {
      const { loadSessionFile: loadSessionFile2 } = await Promise.resolve().then(() => (init_session_manager2(), exports_session_manager));
      cachedSession = await loadSessionFile2();
    } catch (error) {
      logger2.debug("Could not load session for analytics context", error);
    }
  }
  return analyticsClient;
}
function enrichProperties(extra) {
  return {
    ...buildStandardProperties(getPluginVersion()),
    ...buildUserProperties(cachedSession),
    ...extra
  };
}
async function captureException(error, errorType, errorSource, additionalProperties) {
  try {
    const client = await getAnalyticsClient();
    if (!client)
      return;
    client.captureException(error, errorType, errorSource, cachedSession?.userId, enrichProperties(additionalProperties));
    logger2.debug("Exception captured in PostHog", {
      error_type: errorType,
      error_message: error.message
    });
  } catch (e) {
    logger2.debug("Failed to capture exception in PostHog", e);
  }
}
var analyticsClient = null, cachedSession = null;
var init_client2 = __esm(() => {
  init_analytics();
  init_properties();
  init_constants();
  init_logger2();
  init_plugin_version();
});

// src/utils/claude-version.ts
var init_claude_version = __esm(() => {
  init_logger2();
});

// src/analytics/trackers.ts
var init_trackers = __esm(() => {
  init_events2();
  init_properties();
  init_claude_version();
  init_logger2();
  init_plugin_version();
  init_client2();
});

// src/analytics/index.ts
var init_analytics2 = __esm(() => {
  init_client2();
  init_trackers();
});

// ../../node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports2, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports3) {
        factory(createExporter(root, createExporter(exports3)));
      });
    } else if (typeof module === "object" && typeof exports2 === "object") {
      factory(createExporter(root, createExporter(exports2)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports3, previous) {
      if (exports3 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports3, "__esModule", { value: true });
        } else {
          exports3.__esModule = true;
        }
      }
      return function(id, v) {
        return exports3[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// ../../node_modules/.bun/@supabase+functions-js@2.105.4/node_modules/@supabase/functions-js/dist/main/helper.js
var require_helper = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.resolveFetch = undefined;
  var resolveFetch = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };
  exports2.resolveFetch = resolveFetch;
});

// ../../node_modules/.bun/@supabase+functions-js@2.105.4/node_modules/@supabase/functions-js/dist/main/types.js
var require_types = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FunctionRegion = exports2.FunctionsHttpError = exports2.FunctionsRelayError = exports2.FunctionsFetchError = exports2.FunctionsError = undefined;

  class FunctionsError extends Error {
    constructor(message, name = "FunctionsError", context) {
      super(message);
      this.name = name;
      this.context = context;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        context: this.context
      };
    }
  }
  exports2.FunctionsError = FunctionsError;

  class FunctionsFetchError extends FunctionsError {
    constructor(context) {
      super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
  }
  exports2.FunctionsFetchError = FunctionsFetchError;

  class FunctionsRelayError extends FunctionsError {
    constructor(context) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
  }
  exports2.FunctionsRelayError = FunctionsRelayError;

  class FunctionsHttpError extends FunctionsError {
    constructor(context) {
      super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
  }
  exports2.FunctionsHttpError = FunctionsHttpError;
  var FunctionRegion;
  (function(FunctionRegion2) {
    FunctionRegion2["Any"] = "any";
    FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion2["ApSouth1"] = "ap-south-1";
    FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion2["CaCentral1"] = "ca-central-1";
    FunctionRegion2["EuCentral1"] = "eu-central-1";
    FunctionRegion2["EuWest1"] = "eu-west-1";
    FunctionRegion2["EuWest2"] = "eu-west-2";
    FunctionRegion2["EuWest3"] = "eu-west-3";
    FunctionRegion2["SaEast1"] = "sa-east-1";
    FunctionRegion2["UsEast1"] = "us-east-1";
    FunctionRegion2["UsWest1"] = "us-west-1";
    FunctionRegion2["UsWest2"] = "us-west-2";
  })(FunctionRegion || (exports2.FunctionRegion = FunctionRegion = {}));
});

// ../../node_modules/.bun/@supabase+functions-js@2.105.4/node_modules/@supabase/functions-js/dist/main/FunctionsClient.js
var require_FunctionsClient = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FunctionsClient = undefined;
  var tslib_1 = require_tslib();
  var helper_1 = require_helper();
  var types_1 = require_types();

  class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = types_1.FunctionRegion.Any } = {}) {
      this.url = url;
      this.headers = headers;
      this.region = region;
      this.fetch = (0, helper_1.resolveFetch)(customFetch);
    }
    setAuth(token) {
      this.headers.Authorization = `Bearer ${token}`;
    }
    invoke(functionName_1) {
      return tslib_1.__awaiter(this, arguments, undefined, function* (functionName, options = {}) {
        var _a;
        let timeoutId;
        let timeoutController;
        try {
          const { headers, method, body: functionArgs, signal, timeout } = options;
          let _headers = {};
          let { region } = options;
          if (!region) {
            region = this.region;
          }
          const url = new URL(`${this.url}/${functionName}`);
          if (region && region !== "any") {
            _headers["x-region"] = region;
            url.searchParams.set("forceFunctionRegion", region);
          }
          let body;
          if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
            if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
              _headers["Content-Type"] = "application/octet-stream";
              body = functionArgs;
            } else if (typeof functionArgs === "string") {
              _headers["Content-Type"] = "text/plain";
              body = functionArgs;
            } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) {
              body = functionArgs;
            } else {
              _headers["Content-Type"] = "application/json";
              body = JSON.stringify(functionArgs);
            }
          } else {
            if (functionArgs && typeof functionArgs !== "string" && !(typeof Blob !== "undefined" && functionArgs instanceof Blob) && !(functionArgs instanceof ArrayBuffer) && !(typeof FormData !== "undefined" && functionArgs instanceof FormData)) {
              body = JSON.stringify(functionArgs);
            } else {
              body = functionArgs;
            }
          }
          let effectiveSignal = signal;
          if (timeout) {
            timeoutController = new AbortController;
            timeoutId = setTimeout(() => timeoutController.abort(), timeout);
            if (signal) {
              effectiveSignal = timeoutController.signal;
              signal.addEventListener("abort", () => timeoutController.abort());
            } else {
              effectiveSignal = timeoutController.signal;
            }
          }
          const response = yield this.fetch(url.toString(), {
            method: method || "POST",
            headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
            body,
            signal: effectiveSignal
          }).catch((fetchError) => {
            throw new types_1.FunctionsFetchError(fetchError);
          });
          const isRelayError = response.headers.get("x-relay-error");
          if (isRelayError && isRelayError === "true") {
            throw new types_1.FunctionsRelayError(response);
          }
          if (!response.ok) {
            throw new types_1.FunctionsHttpError(response);
          }
          let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== undefined ? _a : "text/plain").split(";")[0].trim();
          let data;
          if (responseType === "application/json") {
            data = yield response.json();
          } else if (responseType === "application/octet-stream" || responseType === "application/pdf") {
            data = yield response.blob();
          } else if (responseType === "text/event-stream") {
            data = response;
          } else if (responseType === "multipart/form-data") {
            data = yield response.formData();
          } else {
            data = yield response.text();
          }
          return { data, error: null, response };
        } catch (error) {
          return {
            data: null,
            error,
            response: error instanceof types_1.FunctionsHttpError || error instanceof types_1.FunctionsRelayError ? error.context : undefined
          };
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      });
    }
  }
  exports2.FunctionsClient = FunctionsClient;
});

// ../../node_modules/.bun/@supabase+functions-js@2.105.4/node_modules/@supabase/functions-js/dist/main/index.js
var require_main = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FunctionRegion = exports2.FunctionsRelayError = exports2.FunctionsHttpError = exports2.FunctionsFetchError = exports2.FunctionsError = exports2.FunctionsClient = undefined;
  var FunctionsClient_1 = require_FunctionsClient();
  Object.defineProperty(exports2, "FunctionsClient", { enumerable: true, get: function() {
    return FunctionsClient_1.FunctionsClient;
  } });
  var types_1 = require_types();
  Object.defineProperty(exports2, "FunctionsError", { enumerable: true, get: function() {
    return types_1.FunctionsError;
  } });
  Object.defineProperty(exports2, "FunctionsFetchError", { enumerable: true, get: function() {
    return types_1.FunctionsFetchError;
  } });
  Object.defineProperty(exports2, "FunctionsHttpError", { enumerable: true, get: function() {
    return types_1.FunctionsHttpError;
  } });
  Object.defineProperty(exports2, "FunctionsRelayError", { enumerable: true, get: function() {
    return types_1.FunctionsRelayError;
  } });
  Object.defineProperty(exports2, "FunctionRegion", { enumerable: true, get: function() {
    return types_1.FunctionRegion;
  } });
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/websocket-factory.js
var require_websocket_factory = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WebSocketFactory = undefined;

  class WebSocketFactory {
    constructor() {}
    static detectEnvironment() {
      var _a;
      if (typeof WebSocket !== "undefined") {
        return { type: "native", wsConstructor: WebSocket };
      }
      const gt = globalThis;
      if (typeof globalThis !== "undefined" && typeof gt.WebSocket !== "undefined") {
        return { type: "native", wsConstructor: gt.WebSocket };
      }
      const gl = typeof global !== "undefined" ? global : undefined;
      if (gl && typeof gl.WebSocket !== "undefined") {
        return { type: "native", wsConstructor: gl.WebSocket };
      }
      if (typeof globalThis !== "undefined" && typeof gt.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
        return {
          type: "cloudflare",
          error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
          workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
      }
      if (typeof globalThis !== "undefined" && gt.EdgeRuntime || typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === undefined ? undefined : _a.includes("Vercel-Edge"))) {
        return {
          type: "unsupported",
          error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
          workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
      }
      const _process = globalThis["process"];
      if (_process) {
        const processVersions = _process["versions"];
        if (processVersions && processVersions["node"]) {
          const versionString = processVersions["node"];
          const nodeVersion = parseInt(versionString.replace(/^v/, "").split(".")[0]);
          if (nodeVersion >= 22) {
            if (typeof globalThis.WebSocket !== "undefined") {
              return { type: "native", wsConstructor: globalThis.WebSocket };
            }
            return {
              type: "unsupported",
              error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
          return {
            type: "unsupported",
            error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
            workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
` + `import ws from "ws"
` + "new RealtimeClient(url, { transport: ws })"
          };
        }
      }
      return {
        type: "unsupported",
        error: "Unknown JavaScript runtime without WebSocket support.",
        workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
      };
    }
    static getWebSocketConstructor() {
      const env = this.detectEnvironment();
      if (env.wsConstructor) {
        return env.wsConstructor;
      }
      let errorMessage = env.error || "WebSocket not supported in this environment.";
      if (env.workaround) {
        errorMessage += `

Suggested solution: ${env.workaround}`;
      }
      throw new Error(errorMessage);
    }
    static isWebSocketSupported() {
      try {
        const env = this.detectEnvironment();
        return env.type === "native" || env.type === "ws";
      } catch (_a) {
        return false;
      }
    }
  }
  exports2.WebSocketFactory = WebSocketFactory;
  exports2.default = WebSocketFactory;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/version.js
var require_version = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.version = undefined;
  exports2.version = "2.105.4";
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/constants.js
var require_constants = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CONNECTION_STATE = exports2.TRANSPORTS = exports2.CHANNEL_EVENTS = exports2.CHANNEL_STATES = exports2.SOCKET_STATES = exports2.MAX_PUSH_BUFFER_SIZE = exports2.WS_CLOSE_NORMAL = exports2.DEFAULT_TIMEOUT = exports2.VERSION = exports2.DEFAULT_VSN = exports2.VSN_2_0_0 = exports2.VSN_1_0_0 = exports2.DEFAULT_VERSION = undefined;
  var version_1 = require_version();
  exports2.DEFAULT_VERSION = `realtime-js/${version_1.version}`;
  exports2.VSN_1_0_0 = "1.0.0";
  exports2.VSN_2_0_0 = "2.0.0";
  exports2.DEFAULT_VSN = exports2.VSN_2_0_0;
  exports2.VERSION = version_1.version;
  exports2.DEFAULT_TIMEOUT = 1e4;
  exports2.WS_CLOSE_NORMAL = 1000;
  exports2.MAX_PUSH_BUFFER_SIZE = 100;
  exports2.SOCKET_STATES = {
    connecting: 0,
    open: 1,
    closing: 2,
    closed: 3
  };
  exports2.CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  exports2.CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
    access_token: "access_token"
  };
  exports2.TRANSPORTS = {
    websocket: "websocket"
  };
  exports2.CONNECTION_STATE = {
    connecting: "connecting",
    open: "open",
    closing: "closing",
    closed: "closed"
  };
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/serializer.js
var require_serializer = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });

  class Serializer {
    constructor(allowedMetadataKeys) {
      this.HEADER_LENGTH = 1;
      this.USER_BROADCAST_PUSH_META_LENGTH = 6;
      this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 };
      this.BINARY_ENCODING = 0;
      this.JSON_ENCODING = 1;
      this.BROADCAST_EVENT = "broadcast";
      this.allowedMetadataKeys = [];
      this.allowedMetadataKeys = allowedMetadataKeys !== null && allowedMetadataKeys !== undefined ? allowedMetadataKeys : [];
    }
    encode(msg, callback) {
      if (msg.event === this.BROADCAST_EVENT && !(msg.payload instanceof ArrayBuffer) && typeof msg.payload.event === "string") {
        return callback(this._binaryEncodeUserBroadcastPush(msg));
      }
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
    _binaryEncodeUserBroadcastPush(message) {
      var _a;
      if (this._isArrayBuffer((_a = message.payload) === null || _a === undefined ? undefined : _a.payload)) {
        return this._encodeBinaryUserBroadcastPush(message);
      } else {
        return this._encodeJsonUserBroadcastPush(message);
      }
    }
    _encodeBinaryUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === undefined ? undefined : _a.payload) !== null && _b !== undefined ? _b : new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(message, this.BINARY_ENCODING, userPayload);
    }
    _encodeJsonUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === undefined ? undefined : _a.payload) !== null && _b !== undefined ? _b : {};
      const encoder = new TextEncoder;
      const encodedUserPayload = encoder.encode(JSON.stringify(userPayload)).buffer;
      return this._encodeUserBroadcastPush(message, this.JSON_ENCODING, encodedUserPayload);
    }
    _encodeUserBroadcastPush(message, encodingType, encodedPayload) {
      var _a, _b;
      const topic = message.topic;
      const ref = (_a = message.ref) !== null && _a !== undefined ? _a : "";
      const joinRef = (_b = message.join_ref) !== null && _b !== undefined ? _b : "";
      const userEvent = message.payload.event;
      const rest = this.allowedMetadataKeys ? this._pick(message.payload, this.allowedMetadataKeys) : {};
      const metadata = Object.keys(rest).length === 0 ? "" : JSON.stringify(rest);
      if (joinRef.length > 255) {
        throw new Error(`joinRef length ${joinRef.length} exceeds maximum of 255`);
      }
      if (ref.length > 255) {
        throw new Error(`ref length ${ref.length} exceeds maximum of 255`);
      }
      if (topic.length > 255) {
        throw new Error(`topic length ${topic.length} exceeds maximum of 255`);
      }
      if (userEvent.length > 255) {
        throw new Error(`userEvent length ${userEvent.length} exceeds maximum of 255`);
      }
      if (metadata.length > 255) {
        throw new Error(`metadata length ${metadata.length} exceeds maximum of 255`);
      }
      const metaLength = this.USER_BROADCAST_PUSH_META_LENGTH + joinRef.length + ref.length + topic.length + userEvent.length + metadata.length;
      const header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.userBroadcastPush);
      view.setUint8(offset++, joinRef.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, userEvent.length);
      view.setUint8(offset++, metadata.length);
      view.setUint8(offset++, encodingType);
      Array.from(joinRef, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(userEvent, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(metadata, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + encodedPayload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(encodedPayload), header.byteLength);
      return combined.buffer;
    }
    decode(rawPayload, callback) {
      if (this._isArrayBuffer(rawPayload)) {
        let result = this._binaryDecode(rawPayload);
        return callback(result);
      }
      if (typeof rawPayload === "string") {
        const jsonPayload = JSON.parse(rawPayload);
        const [join_ref, ref, topic, event, payload] = jsonPayload;
        return callback({ join_ref, ref, topic, event, payload });
      }
      return callback({});
    }
    _binaryDecode(buffer) {
      const view = new DataView(buffer);
      const kind = view.getUint8(0);
      const decoder = new TextDecoder;
      switch (kind) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(buffer, view, decoder);
      }
    }
    _decodeUserBroadcast(buffer, view, decoder) {
      const topicSize = view.getUint8(1);
      const userEventSize = view.getUint8(2);
      const metadataSize = view.getUint8(3);
      const payloadEncoding = view.getUint8(4);
      let offset = this.HEADER_LENGTH + 4;
      const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      const userEvent = decoder.decode(buffer.slice(offset, offset + userEventSize));
      offset = offset + userEventSize;
      const metadata = decoder.decode(buffer.slice(offset, offset + metadataSize));
      offset = offset + metadataSize;
      const payload = buffer.slice(offset, buffer.byteLength);
      const parsedPayload = payloadEncoding === this.JSON_ENCODING ? JSON.parse(decoder.decode(payload)) : payload;
      const data = {
        type: this.BROADCAST_EVENT,
        event: userEvent,
        payload: parsedPayload
      };
      if (metadataSize > 0) {
        data["meta"] = JSON.parse(metadata);
      }
      return { join_ref: null, ref: null, topic, event: this.BROADCAST_EVENT, payload: data };
    }
    _isArrayBuffer(buffer) {
      var _a;
      return buffer instanceof ArrayBuffer || ((_a = buffer === null || buffer === undefined ? undefined : buffer.constructor) === null || _a === undefined ? undefined : _a.name) === "ArrayBuffer";
    }
    _pick(obj, keys) {
      if (!obj || typeof obj !== "object") {
        return {};
      }
      return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    }
  }
  exports2.default = Serializer;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/transformers.js
var require_transformers = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.httpEndpointURL = exports2.toTimestampString = exports2.toArray = exports2.toJson = exports2.toNumber = exports2.toBoolean = exports2.convertCell = exports2.convertColumn = exports2.convertChangeData = exports2.PostgresTypes = undefined;
  var PostgresTypes;
  (function(PostgresTypes2) {
    PostgresTypes2["abstime"] = "abstime";
    PostgresTypes2["bool"] = "bool";
    PostgresTypes2["date"] = "date";
    PostgresTypes2["daterange"] = "daterange";
    PostgresTypes2["float4"] = "float4";
    PostgresTypes2["float8"] = "float8";
    PostgresTypes2["int2"] = "int2";
    PostgresTypes2["int4"] = "int4";
    PostgresTypes2["int4range"] = "int4range";
    PostgresTypes2["int8"] = "int8";
    PostgresTypes2["int8range"] = "int8range";
    PostgresTypes2["json"] = "json";
    PostgresTypes2["jsonb"] = "jsonb";
    PostgresTypes2["money"] = "money";
    PostgresTypes2["numeric"] = "numeric";
    PostgresTypes2["oid"] = "oid";
    PostgresTypes2["reltime"] = "reltime";
    PostgresTypes2["text"] = "text";
    PostgresTypes2["time"] = "time";
    PostgresTypes2["timestamp"] = "timestamp";
    PostgresTypes2["timestamptz"] = "timestamptz";
    PostgresTypes2["timetz"] = "timetz";
    PostgresTypes2["tsrange"] = "tsrange";
    PostgresTypes2["tstzrange"] = "tstzrange";
  })(PostgresTypes || (exports2.PostgresTypes = PostgresTypes = {}));
  var convertChangeData = (columns, record, options = {}) => {
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== undefined ? _a : [];
    if (!record) {
      return {};
    }
    return Object.keys(record).reduce((acc, rec_key) => {
      acc[rec_key] = (0, exports2.convertColumn)(rec_key, columns, record, skipTypes);
      return acc;
    }, {});
  };
  exports2.convertChangeData = convertChangeData;
  var convertColumn = (columnName, columns, record, skipTypes) => {
    const column = columns.find((x) => x.name === columnName);
    const colType = column === null || column === undefined ? undefined : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
      return (0, exports2.convertCell)(colType, value);
    }
    return noop(value);
  };
  exports2.convertColumn = convertColumn;
  var convertCell = (type, value) => {
    if (type.charAt(0) === "_") {
      const dataType = type.slice(1, type.length);
      return (0, exports2.toArray)(value, dataType);
    }
    switch (type) {
      case PostgresTypes.bool:
        return (0, exports2.toBoolean)(value);
      case PostgresTypes.float4:
      case PostgresTypes.float8:
      case PostgresTypes.int2:
      case PostgresTypes.int4:
      case PostgresTypes.int8:
      case PostgresTypes.numeric:
      case PostgresTypes.oid:
        return (0, exports2.toNumber)(value);
      case PostgresTypes.json:
      case PostgresTypes.jsonb:
        return (0, exports2.toJson)(value);
      case PostgresTypes.timestamp:
        return (0, exports2.toTimestampString)(value);
      case PostgresTypes.abstime:
      case PostgresTypes.date:
      case PostgresTypes.daterange:
      case PostgresTypes.int4range:
      case PostgresTypes.int8range:
      case PostgresTypes.money:
      case PostgresTypes.reltime:
      case PostgresTypes.text:
      case PostgresTypes.time:
      case PostgresTypes.timestamptz:
      case PostgresTypes.timetz:
      case PostgresTypes.tsrange:
      case PostgresTypes.tstzrange:
        return noop(value);
      default:
        return noop(value);
    }
  };
  exports2.convertCell = convertCell;
  var noop = (value) => {
    return value;
  };
  var toBoolean = (value) => {
    switch (value) {
      case "t":
        return true;
      case "f":
        return false;
      default:
        return value;
    }
  };
  exports2.toBoolean = toBoolean;
  var toNumber = (value) => {
    if (typeof value === "string") {
      const parsedValue = parseFloat(value);
      if (!Number.isNaN(parsedValue)) {
        return parsedValue;
      }
    }
    return value;
  };
  exports2.toNumber = toNumber;
  var toJson = (value) => {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    }
    return value;
  };
  exports2.toJson = toJson;
  var toArray = (value, type) => {
    if (typeof value !== "string") {
      return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    if (openBrace === "{" && closeBrace === "}") {
      let arr;
      const valTrim = value.slice(1, lastIdx);
      try {
        arr = JSON.parse("[" + valTrim + "]");
      } catch (_) {
        arr = valTrim ? valTrim.split(",") : [];
      }
      return arr.map((val) => (0, exports2.convertCell)(type, val));
    }
    return value;
  };
  exports2.toArray = toArray;
  var toTimestampString = (value) => {
    if (typeof value === "string") {
      return value.replace(" ", "T");
    }
    return value;
  };
  exports2.toTimestampString = toTimestampString;
  var httpEndpointURL = (socketUrl) => {
    const wsUrl = new URL(socketUrl);
    wsUrl.protocol = wsUrl.protocol.replace(/^ws/i, "http");
    wsUrl.pathname = wsUrl.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
    if (wsUrl.pathname === "" || wsUrl.pathname === "/") {
      wsUrl.pathname = "/api/broadcast";
    } else {
      wsUrl.pathname = wsUrl.pathname + "/api/broadcast";
    }
    return wsUrl.href;
  };
  exports2.httpEndpointURL = httpEndpointURL;
});

// ../../node_modules/.bun/@supabase+phoenix@0.4.2/node_modules/@supabase/phoenix/priv/static/phoenix.cjs.js
var require_phoenix_cjs = __commonJS((exports2, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var phoenix_exports = {};
  __export2(phoenix_exports, {
    Channel: () => Channel,
    LongPoll: () => LongPoll,
    Presence: () => Presence,
    Push: () => Push,
    Serializer: () => serializer_default,
    Socket: () => Socket,
    Timer: () => Timer
  });
  module.exports = __toCommonJS(phoenix_exports);
  var closure = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure2 = function() {
        return value;
      };
      return closure2;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global2 = globalSelf || phxWindow || globalThis;
  var DEFAULT_VSN = "2.0.0";
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1000;
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var AUTH_TOKEN_PREFIX = "base64url.bearer.phx.";
  var Push = class {
    constructor(channel, event, payload, timeout) {
      this.channel = channel;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
      this.ref = undefined;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    destroy() {
      this.cancelRefEvent();
      this.cancelTimeout();
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = undefined;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure(params || {});
      this.socket = socket;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", (reason) => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    teardown() {
      this.pushBuffer.forEach((push) => push.destroy());
      this.pushBuffer = [];
      this.rejoinTimer.reset();
      this.joinPush.destroy();
      this.state = CHANNEL_STATES.closed;
      this.bindings = [];
    }
    onClose(callback) {
      this.on(CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    filterBindings(_binding, _payload, _ref) {
      return true;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event && this.filterBindings(bind, payload, ref));
      for (let i = 0;i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, headers, body, timeout, ontimeout, callback) {
      if (global2.XDomainRequest) {
        let req = new global2.XDomainRequest;
        return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else if (global2.XMLHttpRequest) {
        let req = new global2.XMLHttpRequest;
        return this.xhrRequest(req, method, endPoint, headers, body, timeout, ontimeout, callback);
      } else if (global2.fetch && global2.AbortController) {
        return this.fetchRequest(method, endPoint, headers, body, timeout, ontimeout, callback);
      } else {
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(method, endPoint, headers, body, timeout, ontimeout, callback) {
      let options = {
        method,
        headers,
        body
      };
      let controller = null;
      if (timeout) {
        controller = new AbortController;
        const _timeoutId = setTimeout(() => controller.abort(), timeout);
        options.signal = controller.signal;
      }
      global2.fetch(endPoint, options).then((response) => response.text()).then((data) => this.parseJSON(data)).then((data) => callback && callback(data)).catch((err) => {
        if (err.name === "AbortError" && ontimeout) {
          ontimeout();
        } else {
          callback && callback(null);
        }
      });
      return controller;
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {};
      req.send(body);
      return req;
    }
    static xhrRequest(req, method, endPoint, headers, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      for (let [key, value] of Object.entries(headers)) {
        req.setRequestHeader(key, value);
      }
      req.onerror = () => callback && callback(null);
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
      return req;
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0;i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  var LongPoll = class {
    constructor(endPoint, protocols) {
      if (protocols && protocols.length === 2 && protocols[1].startsWith(AUTH_TOKEN_PREFIX)) {
        this.authToken = atob(protocols[1].slice(AUTH_TOKEN_PREFIX.length));
      }
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.reqs = /* @__PURE__ */ new Set;
      this.awaitingBatchAck = false;
      this.currentBatch = null;
      this.currentBatchTimer = null;
      this.batchBuffer = [];
      this.onopen = function() {};
      this.onerror = function() {};
      this.onmessage = function() {};
      this.onclose = function() {};
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      setTimeout(() => this.poll(), 0);
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(code, reason, wasClean) {
      this.close(code, reason, wasClean);
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry(1005, "timeout", false);
    }
    isActive() {
      return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
    }
    poll() {
      const headers = { Accept: "application/json" };
      if (this.authToken) {
        headers["X-Phoenix-AuthToken"] = this.authToken;
      }
      this.ajax("GET", headers, null, () => this.ontimeout(), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          if (status === 410 && this.token !== null) {
            this.onerror(410);
            this.closeAndRetry(3410, "session_gone", false);
            return;
          }
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => this.onmessage({ data: msg }), 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen({});
            this.poll();
            break;
          case 403:
            this.onerror(403);
            this.close(1008, "forbidden", false);
            break;
          case 0:
          case 500:
            this.onerror(500);
            this.closeAndRetry(1011, "internal server error", 500);
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      if (typeof body !== "string") {
        body = arrayBufferToBase64(body);
      }
      if (this.currentBatch) {
        this.currentBatch.push(body);
      } else if (this.awaitingBatchAck) {
        this.batchBuffer.push(body);
      } else {
        this.currentBatch = [body];
        this.currentBatchTimer = setTimeout(() => {
          this.batchSend(this.currentBatch);
          this.currentBatch = null;
        }, 0);
      }
    }
    batchSend(messages) {
      this.awaitingBatchAck = true;
      this.ajax("POST", { "Content-Type": "application/x-ndjson" }, messages.join(`
`), () => this.onerror("timeout"), (resp) => {
        this.awaitingBatchAck = false;
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry(1011, "internal server error", false);
        } else if (this.batchBuffer.length > 0) {
          this.batchSend(this.batchBuffer);
          this.batchBuffer = [];
        }
      });
    }
    close(code, reason, wasClean) {
      for (let req of this.reqs) {
        req.abort();
      }
      this.readyState = SOCKET_STATES.closed;
      let opts = Object.assign({ code: 1000, reason: undefined, wasClean: true }, { code, reason, wasClean });
      this.batchBuffer = [];
      clearTimeout(this.currentBatchTimer);
      this.currentBatchTimer = null;
      if (typeof CloseEvent !== "undefined") {
        this.onclose(new CloseEvent("close", opts));
      } else {
        this.onclose(opts);
      }
    }
    ajax(method, headers, body, onCallerTimeout, callback) {
      let req;
      let ontimeout = () => {
        this.reqs.delete(req);
        onCallerTimeout();
      };
      req = Ajax.request(method, this.endpointURL(), headers, body, this.timeout, ontimeout, (resp) => {
        this.reqs.delete(req);
        if (this.isActive()) {
          callback(resp);
        }
      });
      this.reqs.add(req);
    }
  };
  var Presence = class _Presence {
    constructor(channel, opts = {}) {
      let events = opts.events || { state: "presence_state", diff: "presence_diff" };
      this.state = {};
      this.pendingDiffs = [];
      this.channel = channel;
      this.joinRef = null;
      this.caller = {
        onJoin: function() {},
        onLeave: function() {},
        onSync: function() {}
      };
      this.channel.on(events.state, (newState) => {
        let { onJoin, onLeave, onSync } = this.caller;
        this.joinRef = this.channel.joinRef();
        this.state = _Presence.syncState(this.state, newState, onJoin, onLeave);
        this.pendingDiffs.forEach((diff) => {
          this.state = _Presence.syncDiff(this.state, diff, onJoin, onLeave);
        });
        this.pendingDiffs = [];
        onSync();
      });
      this.channel.on(events.diff, (diff) => {
        let { onJoin, onLeave, onSync } = this.caller;
        if (this.inPendingSyncState()) {
          this.pendingDiffs.push(diff);
        } else {
          this.state = _Presence.syncDiff(this.state, diff, onJoin, onLeave);
          onSync();
        }
      });
    }
    onJoin(callback) {
      this.caller.onJoin = callback;
    }
    onLeave(callback) {
      this.caller.onLeave = callback;
    }
    onSync(callback) {
      this.caller.onSync = callback;
    }
    list(by) {
      return _Presence.list(this.state, by);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(currentState, newState, onJoin, onLeave) {
      let state = this.clone(currentState);
      let joins = {};
      let leaves = {};
      this.map(state, (key, presence) => {
        if (!newState[key]) {
          leaves[key] = presence;
        }
      });
      this.map(newState, (key, newPresence) => {
        let currentPresence = state[key];
        if (currentPresence) {
          let newRefs = newPresence.metas.map((m) => m.phx_ref);
          let curRefs = currentPresence.metas.map((m) => m.phx_ref);
          let joinedMetas = newPresence.metas.filter((m) => curRefs.indexOf(m.phx_ref) < 0);
          let leftMetas = currentPresence.metas.filter((m) => newRefs.indexOf(m.phx_ref) < 0);
          if (joinedMetas.length > 0) {
            joins[key] = newPresence;
            joins[key].metas = joinedMetas;
          }
          if (leftMetas.length > 0) {
            leaves[key] = this.clone(currentPresence);
            leaves[key].metas = leftMetas;
          }
        } else {
          joins[key] = newPresence;
        }
      });
      return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
    }
    static syncDiff(state, diff, onJoin, onLeave) {
      let { joins, leaves } = this.clone(diff);
      if (!onJoin) {
        onJoin = function() {};
      }
      if (!onLeave) {
        onLeave = function() {};
      }
      this.map(joins, (key, newPresence) => {
        let currentPresence = state[key];
        state[key] = this.clone(newPresence);
        if (currentPresence) {
          let joinedRefs = state[key].metas.map((m) => m.phx_ref);
          let curMetas = currentPresence.metas.filter((m) => joinedRefs.indexOf(m.phx_ref) < 0);
          state[key].metas.unshift(...curMetas);
        }
        onJoin(key, currentPresence, newPresence);
      });
      this.map(leaves, (key, leftPresence) => {
        let currentPresence = state[key];
        if (!currentPresence) {
          return;
        }
        let refsToRemove = leftPresence.metas.map((m) => m.phx_ref);
        currentPresence.metas = currentPresence.metas.filter((p) => {
          return refsToRemove.indexOf(p.phx_ref) < 0;
        });
        onLeave(key, currentPresence, leftPresence);
        if (currentPresence.metas.length === 0) {
          delete state[key];
        }
      });
      return state;
    }
    static list(presences, chooser) {
      if (!chooser) {
        chooser = function(key, pres) {
          return pres;
        };
      }
      return this.map(presences, (key, presence) => {
        return chooser(key, presence);
      });
    }
    static map(obj, func) {
      return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
    }
    static clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder;
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.fallbackRef = null;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global2.WebSocket || LongPoll;
      this.conn = undefined;
      this.primaryPassedHealthCheck = false;
      this.longPollFallbackMs = opts.longPollFallbackMs;
      this.fallbackTimer = null;
      let envSessionStorage = null;
      try {
        envSessionStorage = global2 && global2.sessionStorage;
      } catch {}
      this.sessionStore = opts.sessionStorage || envSessionStorage;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = true;
      this.disconnecting = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      this.pageHidden = false;
      this.encode = undefined;
      this.decode = undefined;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
        phxWindow.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden") {
            this.pageHidden = true;
          } else {
            this.pageHidden = false;
            if (!this.isConnected() && !this.closeWasClean) {
              this.teardown(() => this.connect());
            }
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 30000;
      this.autoSendHeartbeat = opts.autoSendHeartbeat ?? true;
      this.heartbeatCallback = opts.heartbeatCallback ?? (() => {});
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1000, 2000, 5000][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1000, 2000][tries - 1] || 5000;
        }
      };
      this.logger = opts.logger || null;
      if (!this.logger && opts.debug) {
        this.logger = (kind, msg, data) => {
          console.log(`${kind}: ${msg}`, data);
        };
      }
      this.longpollerTimeout = opts.longpollerTimeout || 20000;
      this.params = closure(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimeoutTimer = null;
      this.heartbeatTimer = null;
      this.heartbeatSentAt = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        if (this.pageHidden) {
          this.log("Not reconnecting as page is hidden!");
          this.teardown();
          return;
        }
        this.teardown(async () => {
          if (opts.beforeReconnect)
            await opts.beforeReconnect();
          this.connect();
        });
      }, this.reconnectAfterMs);
      this.authToken = opts.authToken;
    }
    getLongPollTransport() {
      return LongPoll;
    }
    replaceTransport(newTransport) {
      this.connectClock++;
      this.closeWasClean = true;
      clearTimeout(this.fallbackTimer);
      this.reconnectTimer.reset();
      if (this.conn) {
        this.conn.close();
        this.conn = null;
      }
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback, code, reason) {
      this.connectClock++;
      this.disconnecting = true;
      this.closeWasClean = true;
      clearTimeout(this.fallbackTimer);
      this.reconnectTimer.reset();
      this.teardown(() => {
        this.disconnecting = false;
        callback && callback();
      }, code, reason);
    }
    connect(params) {
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn && !this.disconnecting) {
        return;
      }
      if (this.longPollFallbackMs && this.transport !== LongPoll) {
        this.connectWithFallback(LongPoll, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
    log(kind, msg, data) {
      this.logger && this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    onHeartbeat(callback) {
      this.heartbeatCallback = callback;
    }
    ping(callback) {
      if (!this.isConnected()) {
        return false;
      }
      let ref = this.makeRef();
      let startTime = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
      let onMsgRef = this.onMessage((msg) => {
        if (msg.ref === ref) {
          this.off([onMsgRef]);
          callback(Date.now() - startTime);
        }
      });
      return true;
    }
    transportName(transport) {
      switch (transport) {
        case LongPoll:
          return "LongPoll";
        default:
          return transport.name;
      }
    }
    transportConnect() {
      this.connectClock++;
      this.closeWasClean = false;
      let protocols = undefined;
      if (this.authToken) {
        protocols = ["phoenix", `${AUTH_TOKEN_PREFIX}${btoa(this.authToken).replace(/=/g, "")}`];
      }
      this.conn = new this.transport(this.endPointURL(), protocols);
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    getSession(key) {
      return this.sessionStore && this.sessionStore.getItem(key);
    }
    storeSession(key, val) {
      this.sessionStore && this.sessionStore.setItem(key, val);
    }
    connectWithFallback(fallbackTransport, fallbackThreshold = 2500) {
      clearTimeout(this.fallbackTimer);
      let established = false;
      let primaryTransport = true;
      let openRef, errorRef;
      let fallbackTransportName = this.transportName(fallbackTransport);
      let fallback = (reason) => {
        this.log("transport", `falling back to ${fallbackTransportName}...`, reason);
        this.off([openRef, errorRef]);
        primaryTransport = false;
        this.replaceTransport(fallbackTransport);
        this.transportConnect();
      };
      if (this.getSession(`phx:fallback:${fallbackTransportName}`)) {
        return fallback("memorized");
      }
      this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
      errorRef = this.onError((reason) => {
        this.log("transport", "error", reason);
        if (primaryTransport && !established) {
          clearTimeout(this.fallbackTimer);
          fallback(reason);
        }
      });
      if (this.fallbackRef) {
        this.off([this.fallbackRef]);
      }
      this.fallbackRef = this.onOpen(() => {
        established = true;
        if (!primaryTransport) {
          let fallbackTransportName2 = this.transportName(fallbackTransport);
          if (!this.primaryPassedHealthCheck) {
            this.storeSession(`phx:fallback:${fallbackTransportName2}`, "true");
          }
          return this.log("transport", `established ${fallbackTransportName2} fallback`);
        }
        clearTimeout(this.fallbackTimer);
        this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
        this.ping((rtt) => {
          this.log("transport", "connected to primary after", rtt);
          this.primaryPassedHealthCheck = true;
          clearTimeout(this.fallbackTimer);
        });
      });
      this.transportConnect();
    }
    clearHeartbeats() {
      clearTimeout(this.heartbeatTimer);
      clearTimeout(this.heartbeatTimeoutTimer);
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.disconnecting = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      if (this.autoSendHeartbeat) {
        this.resetHeartbeat();
      }
      this.triggerStateCallbacks("open");
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this.heartbeatSentAt = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        this.triggerChanError(new Error("heartbeat timeout"));
        this.closeWasClean = false;
        this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      const connToClose = this.conn;
      this.waitForBufferDone(connToClose, () => {
        if (code) {
          connToClose.close(code, reason || "");
        } else {
          connToClose.close();
        }
        this.waitForSocketClosed(connToClose, () => {
          if (this.conn === connToClose) {
            this.conn.onopen = function() {};
            this.conn.onerror = function() {};
            this.conn.onmessage = function() {};
            this.conn.onclose = function() {};
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
    waitForBufferDone(conn, callback, tries = 1) {
      if (tries === 5 || !conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(conn, callback, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(conn, callback, tries = 1) {
      if (tries === 5 || conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(conn, callback, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      if (this.conn)
        this.conn.onclose = () => {};
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError(event);
      this.clearHeartbeats();
      if (!this.closeWasClean) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.triggerStateCallbacks("close", event);
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", "error", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.triggerStateCallbacks("error", error, transportBefore, establishedBefore);
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError(error);
      }
    }
    triggerChanError(reason) {
      this.channels.forEach((channel) => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS.error, reason);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter((c) => c !== channel);
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.heartbeatSentAt = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          const latency = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : undefined;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(payload.status === "ok" ? "ok" : "error", latency);
          } catch (e) {
            this.log("error", "error in heartbeat callback", e);
          }
          this.pendingHeartbeatRef = null;
          this.heartbeatSentAt = null;
          if (this.autoSendHeartbeat) {
            this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
          }
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`.trim(), payload);
        for (let i = 0;i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        this.triggerStateCallbacks("message", msg);
      });
    }
    triggerStateCallbacks(event, ...args) {
      try {
        this.stateChangeCallbacks[event].forEach(([_, callback]) => {
          try {
            callback(...args);
          } catch (e) {
            this.log("error", `error in ${event} callback`, e);
          }
        });
      } catch (e) {
        this.log("error", `error triggering ${event} callbacks`, e);
      }
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/phoenix/presenceAdapter.js
var require_presenceAdapter = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var phoenix_1 = require_phoenix_cjs();

  class PresenceAdapter {
    constructor(channel, opts) {
      const phoenixOptions = phoenixPresenceOptions(opts);
      this.presence = new phoenix_1.Presence(channel.getChannel(), phoenixOptions);
      this.presence.onJoin((key, currentPresence, newPresence) => {
        const onJoinPayload = PresenceAdapter.onJoinPayload(key, currentPresence, newPresence);
        channel.getChannel().trigger("presence", onJoinPayload);
      });
      this.presence.onLeave((key, currentPresence, leftPresence) => {
        const onLeavePayload = PresenceAdapter.onLeavePayload(key, currentPresence, leftPresence);
        channel.getChannel().trigger("presence", onLeavePayload);
      });
      this.presence.onSync(() => {
        channel.getChannel().trigger("presence", { event: "sync" });
      });
    }
    get state() {
      return PresenceAdapter.transformState(this.presence.state);
    }
    static transformState(state) {
      state = cloneState(state);
      return Object.getOwnPropertyNames(state).reduce((newState, key) => {
        const presences = state[key];
        newState[key] = transformState(presences);
        return newState;
      }, {});
    }
    static onJoinPayload(key, currentPresence, newPresence) {
      const currentPresences = parseCurrentPresences(currentPresence);
      const newPresences = transformState(newPresence);
      return {
        event: "join",
        key,
        currentPresences,
        newPresences
      };
    }
    static onLeavePayload(key, currentPresence, leftPresence) {
      const currentPresences = parseCurrentPresences(currentPresence);
      const leftPresences = transformState(leftPresence);
      return {
        event: "leave",
        key,
        currentPresences,
        leftPresences
      };
    }
  }
  exports2.default = PresenceAdapter;
  function transformState(presences) {
    return presences.metas.map((presence) => {
      presence["presence_ref"] = presence["phx_ref"];
      delete presence["phx_ref"];
      delete presence["phx_ref_prev"];
      return presence;
    });
  }
  function cloneState(state) {
    return JSON.parse(JSON.stringify(state));
  }
  function phoenixPresenceOptions(opts) {
    return (opts === null || opts === undefined ? undefined : opts.events) && { events: opts.events };
  }
  function parseCurrentPresences(currentPresences) {
    return (currentPresences === null || currentPresences === undefined ? undefined : currentPresences.metas) ? transformState(currentPresences) : [];
  }
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/RealtimePresence.js
var require_RealtimePresence = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.REALTIME_PRESENCE_LISTEN_EVENTS = undefined;
  var tslib_1 = require_tslib();
  var presenceAdapter_1 = tslib_1.__importDefault(require_presenceAdapter());
  var REALTIME_PRESENCE_LISTEN_EVENTS;
  (function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
    REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
  })(REALTIME_PRESENCE_LISTEN_EVENTS || (exports2.REALTIME_PRESENCE_LISTEN_EVENTS = REALTIME_PRESENCE_LISTEN_EVENTS = {}));

  class RealtimePresence {
    get state() {
      return this.presenceAdapter.state;
    }
    constructor(channel, opts) {
      this.channel = channel;
      this.presenceAdapter = new presenceAdapter_1.default(this.channel.channelAdapter, opts);
    }
  }
  exports2.default = RealtimePresence;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/lib/normalizeChannelError.js
var require_normalizeChannelError = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.normalizeChannelError = normalizeChannelError;
  function normalizeChannelError(reason) {
    if (reason instanceof Error) {
      return reason;
    }
    if (typeof reason === "string") {
      return new Error(reason);
    }
    if (reason && typeof reason === "object") {
      const obj = reason;
      if (typeof obj.code === "number") {
        const detail = typeof obj.reason === "string" && obj.reason ? ` (${obj.reason})` : "";
        return new Error(`socket closed: ${obj.code}${detail}`, { cause: reason });
      }
      return new Error("channel error: transport failure", { cause: reason });
    }
    return new Error("channel error: connection lost");
  }
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/phoenix/channelAdapter.js
var require_channelAdapter = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var constants_1 = require_constants();

  class ChannelAdapter {
    constructor(socket, topic, params) {
      const phoenixParams = phoenixChannelParams(params);
      this.channel = socket.getSocket().channel(topic, phoenixParams);
      this.socket = socket;
    }
    get state() {
      return this.channel.state;
    }
    set state(state) {
      this.channel.state = state;
    }
    get joinedOnce() {
      return this.channel.joinedOnce;
    }
    get joinPush() {
      return this.channel.joinPush;
    }
    get rejoinTimer() {
      return this.channel.rejoinTimer;
    }
    on(event, callback) {
      return this.channel.on(event, callback);
    }
    off(event, refNumber) {
      this.channel.off(event, refNumber);
    }
    subscribe(timeout) {
      return this.channel.join(timeout);
    }
    unsubscribe(timeout) {
      return this.channel.leave(timeout);
    }
    teardown() {
      this.channel.teardown();
    }
    onClose(callback) {
      this.channel.onClose(callback);
    }
    onError(callback) {
      return this.channel.onError(callback);
    }
    push(event, payload, timeout) {
      let push;
      try {
        push = this.channel.push(event, payload, timeout);
      } catch (error) {
        throw new Error(`tried to push '${event}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
      }
      if (this.channel.pushBuffer.length > constants_1.MAX_PUSH_BUFFER_SIZE) {
        const removedPush = this.channel.pushBuffer.shift();
        removedPush.cancelTimeout();
        this.socket.log("channel", `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload());
      }
      return push;
    }
    updateJoinPayload(payload) {
      const oldPayload = this.channel.joinPush.payload();
      this.channel.joinPush.payload = () => Object.assign(Object.assign({}, oldPayload), payload);
    }
    canPush() {
      return this.socket.isConnected() && this.state === constants_1.CHANNEL_STATES.joined;
    }
    isJoined() {
      return this.state === constants_1.CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === constants_1.CHANNEL_STATES.joining;
    }
    isClosed() {
      return this.state === constants_1.CHANNEL_STATES.closed;
    }
    isLeaving() {
      return this.state === constants_1.CHANNEL_STATES.leaving;
    }
    updateFilterBindings(filterBindings) {
      this.channel.filterBindings = filterBindings;
    }
    updatePayloadTransform(callback) {
      this.channel.onMessage = callback;
    }
    getChannel() {
      return this.channel;
    }
  }
  exports2.default = ChannelAdapter;
  function phoenixChannelParams(options) {
    return {
      config: Object.assign({
        broadcast: { ack: false, self: false },
        presence: { key: "", enabled: false },
        private: false
      }, options.config)
    };
  }
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/RealtimeChannel.js
var require_RealtimeChannel = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.REALTIME_CHANNEL_STATES = exports2.REALTIME_SUBSCRIBE_STATES = exports2.REALTIME_LISTEN_TYPES = exports2.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = undefined;
  var tslib_1 = require_tslib();
  var constants_1 = require_constants();
  var RealtimePresence_1 = tslib_1.__importDefault(require_RealtimePresence());
  var Transformers = tslib_1.__importStar(require_transformers());
  var transformers_1 = require_transformers();
  var normalizeChannelError_1 = require_normalizeChannelError();
  var channelAdapter_1 = tslib_1.__importDefault(require_channelAdapter());
  var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  (function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
  })(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (exports2.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
  var REALTIME_LISTEN_TYPES;
  (function(REALTIME_LISTEN_TYPES2) {
    REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
  })(REALTIME_LISTEN_TYPES || (exports2.REALTIME_LISTEN_TYPES = REALTIME_LISTEN_TYPES = {}));
  var REALTIME_SUBSCRIBE_STATES;
  (function(REALTIME_SUBSCRIBE_STATES2) {
    REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
  })(REALTIME_SUBSCRIBE_STATES || (exports2.REALTIME_SUBSCRIBE_STATES = REALTIME_SUBSCRIBE_STATES = {}));
  exports2.REALTIME_CHANNEL_STATES = constants_1.CHANNEL_STATES;

  class RealtimeChannel {
    get state() {
      return this.channelAdapter.state;
    }
    set state(state) {
      this.channelAdapter.state = state;
    }
    get joinedOnce() {
      return this.channelAdapter.joinedOnce;
    }
    get timeout() {
      return this.socket.timeout;
    }
    get joinPush() {
      return this.channelAdapter.joinPush;
    }
    get rejoinTimer() {
      return this.channelAdapter.rejoinTimer;
    }
    constructor(topic, params = { config: {} }, socket) {
      var _a, _b;
      this.topic = topic;
      this.params = params;
      this.socket = socket;
      this.bindings = {};
      this.subTopic = topic.replace(/^realtime:/i, "");
      this.params.config = Object.assign({
        broadcast: { ack: false, self: false },
        presence: { key: "", enabled: false },
        private: false
      }, params.config);
      this.channelAdapter = new channelAdapter_1.default(this.socket.socketAdapter, topic, this.params);
      this.presence = new RealtimePresence_1.default(this);
      this._onClose(() => {
        this.socket._remove(this);
      });
      this._updateFilterTransform();
      this.broadcastEndpointURL = (0, transformers_1.httpEndpointURL)(this.socket.socketAdapter.endPointURL());
      this.private = this.params.config.private || false;
      if (!this.private && ((_b = (_a = this.params.config) === null || _a === undefined ? undefined : _a.broadcast) === null || _b === undefined ? undefined : _b.replay)) {
        throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
      }
    }
    subscribe(callback, timeout = this.timeout) {
      var _a, _b, _c;
      if (!this.socket.isConnected()) {
        this.socket.connect();
      }
      if (this.channelAdapter.isClosed()) {
        const { config: { broadcast, presence, private: isPrivate } } = this.params;
        const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === undefined ? undefined : _a.map((r) => r.filter)) !== null && _b !== undefined ? _b : [];
        const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === undefined ? undefined : _c.enabled) === true;
        const accessTokenPayload = {};
        const config = {
          broadcast,
          presence: Object.assign(Object.assign({}, presence), { enabled: presence_enabled }),
          postgres_changes,
          private: isPrivate
        };
        if (this.socket.accessTokenValue) {
          accessTokenPayload.access_token = this.socket.accessTokenValue;
        }
        this._onError((reason) => {
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, (0, normalizeChannelError_1.normalizeChannelError)(reason));
        });
        this._onClose(() => callback === null || callback === undefined ? undefined : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
        this.updateJoinPayload(Object.assign({ config }, accessTokenPayload));
        this._updateFilterMessage();
        this.channelAdapter.subscribe(timeout).receive("ok", async ({ postgres_changes: postgres_changes2 }) => {
          if (!this.socket._isManualToken()) {
            this.socket.setAuth();
          }
          if (postgres_changes2 === undefined) {
            callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          }
          this._updatePostgresBindings(postgres_changes2, callback);
        }).receive("error", (error) => {
          this.state = constants_1.CHANNEL_STATES.errored;
          const message = Object.values(error).join(", ") || "error";
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(message, { cause: error }));
        }).receive("timeout", () => {
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
        });
      }
      return this;
    }
    _updatePostgresBindings(postgres_changes, callback) {
      var _a;
      const clientPostgresBindings = this.bindings.postgres_changes;
      const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === undefined ? undefined : clientPostgresBindings.length) !== null && _a !== undefined ? _a : 0;
      const newPostgresBindings = [];
      for (let i = 0;i < bindingsLen; i++) {
        const clientPostgresBinding = clientPostgresBindings[i];
        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
        const serverPostgresFilter = postgres_changes && postgres_changes[i];
        if (serverPostgresFilter && serverPostgresFilter.event === event && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.schema, schema) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.table, table) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.filter, filter)) {
          newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
        } else {
          this.unsubscribe();
          this.state = constants_1.CHANNEL_STATES.errored;
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
          return;
        }
      }
      this.bindings.postgres_changes = newPostgresBindings;
      if (this.state != constants_1.CHANNEL_STATES.errored && callback) {
        callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
      }
    }
    presenceState() {
      return this.presence.state;
    }
    async track(payload, opts = {}) {
      return await this.send({
        type: "presence",
        event: "track",
        payload
      }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
      return await this.send({
        type: "presence",
        event: "untrack"
      }, opts);
    }
    on(type, filter, callback) {
      const stateCheck = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
      const typeCheck = type === REALTIME_LISTEN_TYPES.PRESENCE || type === REALTIME_LISTEN_TYPES.POSTGRES_CHANGES;
      if (stateCheck && typeCheck) {
        this.socket.log("channel", `cannot add \`${type}\` callbacks for ${this.topic} after \`subscribe()\`.`);
        throw new Error(`cannot add \`${type}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      }
      return this._on(type, filter, callback);
    }
    async httpSend(event, payload, opts = {}) {
      var _a;
      if (payload === undefined || payload === null) {
        return Promise.reject(new Error("Payload is required for httpSend()"));
      }
      const headers = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
      }
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event,
              payload,
              private: this.private
            }
          ]
        })
      };
      const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== undefined ? _a : this.timeout);
      if (response.status === 202) {
        return { success: true };
      }
      let errorMessage = response.statusText;
      try {
        const errorBody = await response.json();
        errorMessage = errorBody.error || errorBody.message || errorMessage;
      } catch (_b) {}
      return Promise.reject(new Error(errorMessage));
    }
    async send(args, opts = {}) {
      var _a, _b;
      if (!this.channelAdapter.canPush() && args.type === "broadcast") {
        console.warn("Realtime send() is automatically falling back to REST API. " + "This behavior will be deprecated in the future. " + "Please use httpSend() explicitly for REST delivery.");
        const { event, payload: endpoint_payload } = args;
        const headers = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        };
        if (this.socket.accessTokenValue) {
          headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
        }
        const options = {
          method: "POST",
          headers,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event,
                payload: endpoint_payload,
                private: this.private
              }
            ]
          })
        };
        try {
          const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== undefined ? _a : this.timeout);
          await ((_b = response.body) === null || _b === undefined ? undefined : _b.cancel());
          return response.ok ? "ok" : "error";
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return "timed out";
          } else {
            return "error";
          }
        }
      } else {
        return new Promise((resolve) => {
          var _a2, _b2, _c;
          const push = this.channelAdapter.push(args.type, args, opts.timeout || this.timeout);
          if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === undefined ? undefined : _a2.config) === null || _b2 === undefined ? undefined : _b2.broadcast) === null || _c === undefined ? undefined : _c.ack)) {
            resolve("ok");
          }
          push.receive("ok", () => resolve("ok"));
          push.receive("error", () => resolve("error"));
          push.receive("timeout", () => resolve("timed out"));
        });
      }
    }
    updateJoinPayload(payload) {
      this.channelAdapter.updateJoinPayload(payload);
    }
    async unsubscribe(timeout = this.timeout) {
      return new Promise((resolve) => {
        this.channelAdapter.unsubscribe(timeout).receive("ok", () => resolve("ok")).receive("timeout", () => resolve("timed out")).receive("error", () => resolve("error"));
      });
    }
    teardown() {
      this.channelAdapter.teardown();
    }
    async _fetchWithTimeout(url, options, timeout) {
      const controller = new AbortController;
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
      clearTimeout(id);
      return response;
    }
    _on(type, filter, callback) {
      const typeLower = type.toLocaleLowerCase();
      const ref = this.channelAdapter.on(type, callback);
      const binding = {
        type: typeLower,
        filter,
        callback,
        ref
      };
      if (this.bindings[typeLower]) {
        this.bindings[typeLower].push(binding);
      } else {
        this.bindings[typeLower] = [binding];
      }
      this._updateFilterMessage();
      return this;
    }
    _onClose(callback) {
      this.channelAdapter.onClose(callback);
    }
    _onError(callback) {
      this.channelAdapter.onError(callback);
    }
    _updateFilterMessage() {
      this.channelAdapter.updateFilterBindings((binding, payload, ref) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const typeLower = binding.event.toLocaleLowerCase();
        if (this._notThisChannelEvent(typeLower, ref)) {
          return false;
        }
        const bind = (_a = this.bindings[typeLower]) === null || _a === undefined ? undefined : _a.find((bind2) => bind2.ref === binding.ref);
        if (!bind) {
          return true;
        }
        if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
          if ("id" in bind) {
            const bindId = bind.id;
            const bindEvent = (_b = bind.filter) === null || _b === undefined ? undefined : _b.event;
            return bindId && ((_c = payload.ids) === null || _c === undefined ? undefined : _c.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === undefined ? undefined : bindEvent.toLocaleLowerCase()) === ((_d = payload.data) === null || _d === undefined ? undefined : _d.type.toLocaleLowerCase()));
          } else {
            const bindEvent = (_f = (_e = bind === null || bind === undefined ? undefined : bind.filter) === null || _e === undefined ? undefined : _e.event) === null || _f === undefined ? undefined : _f.toLocaleLowerCase();
            return bindEvent === "*" || bindEvent === ((_g = payload === null || payload === undefined ? undefined : payload.event) === null || _g === undefined ? undefined : _g.toLocaleLowerCase());
          }
        } else {
          return bind.type.toLocaleLowerCase() === typeLower;
        }
      });
    }
    _notThisChannelEvent(event, ref) {
      const { close, error, leave, join: join5 } = constants_1.CHANNEL_EVENTS;
      const events = [close, error, leave, join5];
      return ref && events.includes(event) && ref !== this.joinPush.ref;
    }
    _updateFilterTransform() {
      this.channelAdapter.updatePayloadTransform((event, payload, ref) => {
        if (typeof payload === "object" && "ids" in payload) {
          const postgresChanges = payload.data;
          const { schema, table, commit_timestamp, type, errors } = postgresChanges;
          const enrichedPayload = {
            schema,
            table,
            commit_timestamp,
            eventType: type,
            new: {},
            old: {},
            errors
          };
          return Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
        }
        return payload;
      });
    }
    copyBindings(other) {
      if (this.joinedOnce) {
        throw new Error("cannot copy bindings into joined channel");
      }
      for (const kind in other.bindings) {
        for (const binding of other.bindings[kind]) {
          this._on(binding.type, binding.filter, binding.callback);
        }
      }
    }
    static isFilterValueEqual(serverValue, clientValue) {
      const normalizedServer = serverValue !== null && serverValue !== undefined ? serverValue : undefined;
      const normalizedClient = clientValue !== null && clientValue !== undefined ? clientValue : undefined;
      return normalizedServer === normalizedClient;
    }
    _getPayloadRecords(payload) {
      const records = {
        new: {},
        old: {}
      };
      if (payload.type === "INSERT" || payload.type === "UPDATE") {
        records.new = Transformers.convertChangeData(payload.columns, payload.record);
      }
      if (payload.type === "UPDATE" || payload.type === "DELETE") {
        records.old = Transformers.convertChangeData(payload.columns, payload.old_record);
      }
      return records;
    }
  }
  exports2.default = RealtimeChannel;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/phoenix/socketAdapter.js
var require_socketAdapter = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var phoenix_1 = require_phoenix_cjs();
  var constants_1 = require_constants();

  class SocketAdapter {
    constructor(endPoint, options) {
      this.socket = new phoenix_1.Socket(endPoint, options);
    }
    get timeout() {
      return this.socket.timeout;
    }
    get endPoint() {
      return this.socket.endPoint;
    }
    get transport() {
      return this.socket.transport;
    }
    get heartbeatIntervalMs() {
      return this.socket.heartbeatIntervalMs;
    }
    get heartbeatCallback() {
      return this.socket.heartbeatCallback;
    }
    set heartbeatCallback(callback) {
      this.socket.heartbeatCallback = callback;
    }
    get heartbeatTimer() {
      return this.socket.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      return this.socket.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socket.reconnectTimer;
    }
    get vsn() {
      return this.socket.vsn;
    }
    get encode() {
      return this.socket.encode;
    }
    get decode() {
      return this.socket.decode;
    }
    get reconnectAfterMs() {
      return this.socket.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socket.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socket.stateChangeCallbacks;
    }
    connect() {
      this.socket.connect();
    }
    disconnect(callback, code, reason, timeout = 1e4) {
      return new Promise((resolve) => {
        setTimeout(() => resolve("timeout"), timeout);
        this.socket.disconnect(() => {
          callback();
          resolve("ok");
        }, code, reason);
      });
    }
    push(data) {
      this.socket.push(data);
    }
    log(kind, msg, data) {
      this.socket.log(kind, msg, data);
    }
    makeRef() {
      return this.socket.makeRef();
    }
    onOpen(callback) {
      this.socket.onOpen(callback);
    }
    onClose(callback) {
      this.socket.onClose(callback);
    }
    onError(callback) {
      this.socket.onError(callback);
    }
    onMessage(callback) {
      this.socket.onMessage(callback);
    }
    isConnected() {
      return this.socket.isConnected();
    }
    isConnecting() {
      return this.socket.connectionState() == constants_1.CONNECTION_STATE.connecting;
    }
    isDisconnecting() {
      return this.socket.connectionState() == constants_1.CONNECTION_STATE.closing;
    }
    connectionState() {
      return this.socket.connectionState();
    }
    endPointURL() {
      return this.socket.endPointURL();
    }
    sendHeartbeat() {
      this.socket.sendHeartbeat();
    }
    getSocket() {
      return this.socket;
    }
  }
  exports2.default = SocketAdapter;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
var require_RealtimeClient = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  var websocket_factory_1 = tslib_1.__importDefault(require_websocket_factory());
  var constants_1 = require_constants();
  var serializer_1 = tslib_1.__importDefault(require_serializer());
  var transformers_1 = require_transformers();
  var RealtimeChannel_1 = tslib_1.__importDefault(require_RealtimeChannel());
  var socketAdapter_1 = tslib_1.__importDefault(require_socketAdapter());
  var CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25000,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
  };
  var RECONNECT_INTERVALS = [1000, 2000, 5000, 1e4];
  var DEFAULT_RECONNECT_FALLBACK = 1e4;
  function createMemorySessionStorage() {
    const store = new Map;
    return {
      get length() {
        return store.size;
      },
      clear() {
        store.clear();
      },
      getItem(key) {
        return store.has(key) ? store.get(key) : null;
      },
      key(index) {
        var _a;
        return (_a = Array.from(store.keys())[index]) !== null && _a !== undefined ? _a : null;
      },
      removeItem(key) {
        store.delete(key);
      },
      setItem(key, value) {
        store.set(key, String(value));
      }
    };
  }
  function resolveSessionStorage() {
    try {
      if (typeof globalThis !== "undefined" && globalThis.sessionStorage) {
        return globalThis.sessionStorage;
      }
    } catch (_a) {}
    return createMemorySessionStorage();
  }
  var WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;

  class RealtimeClient {
    get endPoint() {
      return this.socketAdapter.endPoint;
    }
    get timeout() {
      return this.socketAdapter.timeout;
    }
    get transport() {
      return this.socketAdapter.transport;
    }
    get heartbeatCallback() {
      return this.socketAdapter.heartbeatCallback;
    }
    get heartbeatIntervalMs() {
      return this.socketAdapter.heartbeatIntervalMs;
    }
    get heartbeatTimer() {
      if (this.worker) {
        return this._workerHeartbeatTimer;
      }
      return this.socketAdapter.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      if (this.worker) {
        return this._pendingWorkerHeartbeatRef;
      }
      return this.socketAdapter.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socketAdapter.reconnectTimer;
    }
    get vsn() {
      return this.socketAdapter.vsn;
    }
    get encode() {
      return this.socketAdapter.encode;
    }
    get decode() {
      return this.socketAdapter.decode;
    }
    get reconnectAfterMs() {
      return this.socketAdapter.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socketAdapter.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socketAdapter.stateChangeCallbacks;
    }
    constructor(endPoint, options) {
      var _a;
      this.channels = new Array;
      this.accessTokenValue = null;
      this.accessToken = null;
      this.apiKey = null;
      this.httpEndpoint = "";
      this.headers = {};
      this.params = {};
      this.ref = 0;
      this.serializer = new serializer_1.default;
      this._manuallySetToken = false;
      this._authPromise = null;
      this._workerHeartbeatTimer = undefined;
      this._pendingWorkerHeartbeatRef = null;
      this._pendingDisconnectTimer = null;
      this._disconnectOnEmptyChannelsAfterMs = 0;
      this._resolveFetch = (customFetch) => {
        if (customFetch) {
          return (...args) => customFetch(...args);
        }
        return (...args) => fetch(...args);
      };
      if (!((_a = options === null || options === undefined ? undefined : options.params) === null || _a === undefined ? undefined : _a.apikey)) {
        throw new Error("API key is required to connect to Realtime");
      }
      this.apiKey = options.params.apikey;
      const socketAdapterOptions = this._initializeOptions(options);
      this.socketAdapter = new socketAdapter_1.default(endPoint, socketAdapterOptions);
      this.httpEndpoint = (0, transformers_1.httpEndpointURL)(endPoint);
      this.fetch = this._resolveFetch(options === null || options === undefined ? undefined : options.fetch);
    }
    connect() {
      if (this.isConnecting() || this.isDisconnecting() || this.isConnected()) {
        return;
      }
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (error) {
        const errorMessage = error.message;
        if (errorMessage.includes("Node.js")) {
          throw new Error(`${errorMessage}

` + `To use Realtime in Node.js, you need to provide a WebSocket implementation:

` + `Option 1: Use Node.js 22+ which has native WebSocket support
` + `Option 2: Install and provide the "ws" package:

` + `  npm install ws

` + `  import ws from "ws"
` + `  const client = new RealtimeClient(url, {
` + `    ...options,
` + `    transport: ws
` + "  })");
        }
        throw new Error(`WebSocket not available: ${errorMessage}`);
      }
      this._handleNodeJsRaceCondition();
    }
    endpointURL() {
      return this.socketAdapter.endPointURL();
    }
    async disconnect(code, reason) {
      this._cancelPendingDisconnect();
      if (this.isDisconnecting()) {
        return "ok";
      }
      return await this.socketAdapter.disconnect(() => {
        clearInterval(this._workerHeartbeatTimer);
        this._terminateWorker();
      }, code, reason);
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(channel) {
      const status = await channel.unsubscribe();
      if (status === "ok") {
        channel.teardown();
      }
      return status;
    }
    async removeAllChannels() {
      const promises = this.channels.map(async (channel) => {
        const result2 = await channel.unsubscribe();
        channel.teardown();
        return result2;
      });
      const result = await Promise.all(promises);
      await this.disconnect();
      return result;
    }
    log(kind, msg, data) {
      this.socketAdapter.log(kind, msg, data);
    }
    connectionState() {
      return this.socketAdapter.connectionState() || constants_1.CONNECTION_STATE.closed;
    }
    isConnected() {
      return this.socketAdapter.isConnected();
    }
    isConnecting() {
      return this.socketAdapter.isConnecting();
    }
    isDisconnecting() {
      return this.socketAdapter.isDisconnecting();
    }
    channel(topic, params = { config: {} }) {
      const realtimeTopic = `realtime:${topic}`;
      const exists = this.getChannels().find((c) => c.topic === realtimeTopic);
      if (!exists) {
        const chan = new RealtimeChannel_1.default(`realtime:${topic}`, params, this);
        this._cancelPendingDisconnect();
        this.channels.push(chan);
        return chan;
      } else {
        return exists;
      }
    }
    push(data) {
      this.socketAdapter.push(data);
    }
    async setAuth(token = null) {
      this._authPromise = this._performAuth(token);
      try {
        await this._authPromise;
      } finally {
        this._authPromise = null;
      }
    }
    _isManualToken() {
      return this._manuallySetToken;
    }
    async sendHeartbeat() {
      this.socketAdapter.sendHeartbeat();
    }
    onHeartbeat(callback) {
      this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(callback);
    }
    _makeRef() {
      return this.socketAdapter.makeRef();
    }
    _remove(channel) {
      this.channels = this.channels.filter((c) => c.topic !== channel.topic);
      if (this.channels.length === 0) {
        this.log("transport", "no channels remaining, scheduling disconnect");
        this._schedulePendingDisconnect();
      }
    }
    _schedulePendingDisconnect() {
      this._cancelPendingDisconnect();
      if (this._disconnectOnEmptyChannelsAfterMs === 0) {
        this.log("transport", "disconnecting immediately - no channels");
        this.disconnect();
        return;
      }
      this._pendingDisconnectTimer = setTimeout(() => {
        this._pendingDisconnectTimer = null;
        if (this.channels.length === 0) {
          this.log("transport", "deferred disconnect fired - no channels, disconnecting");
          this.disconnect();
        }
      }, this._disconnectOnEmptyChannelsAfterMs);
      this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
    }
    _cancelPendingDisconnect() {
      if (this._pendingDisconnectTimer !== null) {
        this.log("transport", "pending disconnect cancelled - channel activity detected");
        clearTimeout(this._pendingDisconnectTimer);
        this._pendingDisconnectTimer = null;
      }
    }
    async _performAuth(token = null) {
      let tokenToSend;
      let isManualToken = false;
      if (token) {
        tokenToSend = token;
        isManualToken = true;
      } else if (this.accessToken) {
        try {
          tokenToSend = await this.accessToken();
        } catch (e) {
          this.log("error", "Error fetching access token from callback", e);
          tokenToSend = this.accessTokenValue;
        }
      } else {
        tokenToSend = this.accessTokenValue;
      }
      if (isManualToken) {
        this._manuallySetToken = true;
      } else if (this.accessToken) {
        this._manuallySetToken = false;
      }
      if (this.accessTokenValue != tokenToSend) {
        this.accessTokenValue = tokenToSend;
        this.channels.forEach((channel) => {
          const payload = {
            access_token: tokenToSend,
            version: constants_1.DEFAULT_VERSION
          };
          tokenToSend && channel.updateJoinPayload(payload);
          if (channel.joinedOnce && channel.channelAdapter.isJoined()) {
            channel.channelAdapter.push(constants_1.CHANNEL_EVENTS.access_token, {
              access_token: tokenToSend
            });
          }
        });
      }
    }
    async _waitForAuthIfNeeded() {
      if (this._authPromise) {
        await this._authPromise;
      }
    }
    _setAuthSafely(context = "general") {
      if (!this._isManualToken()) {
        this.setAuth().catch((e) => {
          this.log("error", `Error setting auth in ${context}`, e);
        });
      }
    }
    _setupConnectionHandlers() {
      this.socketAdapter.onOpen(() => {
        const authPromise = this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve());
        authPromise.catch((e) => {
          this.log("error", "error waiting for auth on connect", e);
        });
        if (this.worker && !this.workerRef) {
          this._startWorkerHeartbeat();
        }
      });
      this.socketAdapter.onClose(() => {
        if (this.worker && this.workerRef) {
          this._terminateWorker();
        }
      });
      this.socketAdapter.onMessage((message) => {
        if (message.ref && message.ref === this._pendingWorkerHeartbeatRef) {
          this._pendingWorkerHeartbeatRef = null;
        }
      });
    }
    _handleNodeJsRaceCondition() {
      if (this.socketAdapter.isConnected()) {
        this.socketAdapter.getSocket().onConnOpen();
      }
    }
    _wrapHeartbeatCallback(heartbeatCallback) {
      return (status, latency) => {
        if (status == "sent")
          this._setAuthSafely();
        if (heartbeatCallback)
          heartbeatCallback(status, latency);
      };
    }
    _startWorkerHeartbeat() {
      if (this.workerUrl) {
        this.log("worker", `starting worker for from ${this.workerUrl}`);
      } else {
        this.log("worker", `starting default worker`);
      }
      const objectUrl = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(objectUrl);
      this.workerRef.onerror = (error) => {
        this.log("worker", "worker error", error.message);
        this._terminateWorker();
        this.disconnect();
      };
      this.workerRef.onmessage = (event) => {
        if (event.data.event === "keepAlive") {
          this.sendHeartbeat();
        }
      };
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    _terminateWorker() {
      if (this.workerRef) {
        this.log("worker", "terminating worker");
        this.workerRef.terminate();
        this.workerRef = undefined;
      }
    }
    _workerObjectUrl(url) {
      let result_url;
      if (url) {
        result_url = url;
      } else {
        const blob = new Blob([WORKER_SCRIPT], { type: "application/javascript" });
        result_url = URL.createObjectURL(blob);
      }
      return result_url;
    }
    _initializeOptions(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      this.worker = (_a = options === null || options === undefined ? undefined : options.worker) !== null && _a !== undefined ? _a : false;
      this.accessToken = (_b = options === null || options === undefined ? undefined : options.accessToken) !== null && _b !== undefined ? _b : null;
      const result = {};
      result.timeout = (_c = options === null || options === undefined ? undefined : options.timeout) !== null && _c !== undefined ? _c : constants_1.DEFAULT_TIMEOUT;
      result.heartbeatIntervalMs = (_d = options === null || options === undefined ? undefined : options.heartbeatIntervalMs) !== null && _d !== undefined ? _d : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this._disconnectOnEmptyChannelsAfterMs = (_e = options === null || options === undefined ? undefined : options.disconnectOnEmptyChannelsAfterMs) !== null && _e !== undefined ? _e : 2 * ((_f = options === null || options === undefined ? undefined : options.heartbeatIntervalMs) !== null && _f !== undefined ? _f : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL);
      result.transport = (_g = options === null || options === undefined ? undefined : options.transport) !== null && _g !== undefined ? _g : websocket_factory_1.default.getWebSocketConstructor();
      result.params = options === null || options === undefined ? undefined : options.params;
      result.logger = options === null || options === undefined ? undefined : options.logger;
      result.heartbeatCallback = this._wrapHeartbeatCallback(options === null || options === undefined ? undefined : options.heartbeatCallback);
      result.sessionStorage = (_h = options === null || options === undefined ? undefined : options.sessionStorage) !== null && _h !== undefined ? _h : resolveSessionStorage();
      result.reconnectAfterMs = (_j = options === null || options === undefined ? undefined : options.reconnectAfterMs) !== null && _j !== undefined ? _j : (tries) => {
        return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
      };
      let defaultEncode;
      let defaultDecode;
      const vsn = (_k = options === null || options === undefined ? undefined : options.vsn) !== null && _k !== undefined ? _k : constants_1.DEFAULT_VSN;
      switch (vsn) {
        case constants_1.VSN_1_0_0:
          defaultEncode = (payload, callback) => {
            return callback(JSON.stringify(payload));
          };
          defaultDecode = (payload, callback) => {
            return callback(JSON.parse(payload));
          };
          break;
        case constants_1.VSN_2_0_0:
          defaultEncode = this.serializer.encode.bind(this.serializer);
          defaultDecode = this.serializer.decode.bind(this.serializer);
          break;
        default:
          throw new Error(`Unsupported serializer version: ${result.vsn}`);
      }
      result.vsn = vsn;
      result.encode = (_l = options === null || options === undefined ? undefined : options.encode) !== null && _l !== undefined ? _l : defaultEncode;
      result.decode = (_m = options === null || options === undefined ? undefined : options.decode) !== null && _m !== undefined ? _m : defaultDecode;
      result.beforeReconnect = this._reconnectAuth.bind(this);
      if ((options === null || options === undefined ? undefined : options.logLevel) || (options === null || options === undefined ? undefined : options.log_level)) {
        this.logLevel = options.logLevel || options.log_level;
        result.params = Object.assign(Object.assign({}, result.params), { log_level: this.logLevel });
      }
      if (this.worker) {
        if (typeof window !== "undefined" && !window.Worker) {
          throw new Error("Web Worker is not supported");
        }
        this.workerUrl = options === null || options === undefined ? undefined : options.workerUrl;
        result.autoSendHeartbeat = !this.worker;
      }
      return result;
    }
    async _reconnectAuth() {
      await this._waitForAuthIfNeeded();
      if (!this.isConnected()) {
        this.connect();
      }
    }
  }
  exports2.default = RealtimeClient;
});

// ../../node_modules/.bun/@supabase+realtime-js@2.105.4/node_modules/@supabase/realtime-js/dist/main/index.js
var require_main2 = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WebSocketFactory = exports2.REALTIME_CHANNEL_STATES = exports2.REALTIME_SUBSCRIBE_STATES = exports2.REALTIME_PRESENCE_LISTEN_EVENTS = exports2.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = exports2.REALTIME_LISTEN_TYPES = exports2.RealtimeClient = exports2.RealtimeChannel = exports2.RealtimePresence = undefined;
  var tslib_1 = require_tslib();
  var RealtimeClient_1 = tslib_1.__importDefault(require_RealtimeClient());
  exports2.RealtimeClient = RealtimeClient_1.default;
  var RealtimeChannel_1 = tslib_1.__importStar(require_RealtimeChannel());
  exports2.RealtimeChannel = RealtimeChannel_1.default;
  Object.defineProperty(exports2, "REALTIME_LISTEN_TYPES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_LISTEN_TYPES;
  } });
  Object.defineProperty(exports2, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  } });
  Object.defineProperty(exports2, "REALTIME_SUBSCRIBE_STATES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_SUBSCRIBE_STATES;
  } });
  Object.defineProperty(exports2, "REALTIME_CHANNEL_STATES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_CHANNEL_STATES;
  } });
  var RealtimePresence_1 = tslib_1.__importStar(require_RealtimePresence());
  exports2.RealtimePresence = RealtimePresence_1.default;
  Object.defineProperty(exports2, "REALTIME_PRESENCE_LISTEN_EVENTS", { enumerable: true, get: function() {
    return RealtimePresence_1.REALTIME_PRESENCE_LISTEN_EVENTS;
  } });
  var websocket_factory_1 = tslib_1.__importDefault(require_websocket_factory());
  exports2.WebSocketFactory = websocket_factory_1.default;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/version.js
var require_version2 = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.version = undefined;
  exports2.version = "2.105.4";
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/constants.js
var require_constants2 = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.JWKS_TTL = exports2.BASE64URL_REGEX = exports2.API_VERSIONS = exports2.API_VERSION_HEADER_NAME = exports2.NETWORK_FAILURE = exports2.DEFAULT_HEADERS = exports2.AUDIENCE = exports2.STORAGE_KEY = exports2.GOTRUE_URL = exports2.EXPIRY_MARGIN_MS = exports2.AUTO_REFRESH_TICK_THRESHOLD = exports2.AUTO_REFRESH_TICK_DURATION_MS = undefined;
  var version_1 = require_version2();
  exports2.AUTO_REFRESH_TICK_DURATION_MS = 30 * 1000;
  exports2.AUTO_REFRESH_TICK_THRESHOLD = 3;
  exports2.EXPIRY_MARGIN_MS = exports2.AUTO_REFRESH_TICK_THRESHOLD * exports2.AUTO_REFRESH_TICK_DURATION_MS;
  exports2.GOTRUE_URL = "http://localhost:9999";
  exports2.STORAGE_KEY = "supabase.auth.token";
  exports2.AUDIENCE = "";
  exports2.DEFAULT_HEADERS = { "X-Client-Info": `gotrue-js/${version_1.version}` };
  exports2.NETWORK_FAILURE = {
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
  };
  exports2.API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
  exports2.API_VERSIONS = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01"
    }
  };
  exports2.BASE64URL_REGEX = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
  exports2.JWKS_TTL = 10 * 60 * 1000;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/errors.js
var require_errors = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.AuthInvalidJwtError = exports2.AuthWeakPasswordError = exports2.AuthRetryableFetchError = exports2.AuthPKCECodeVerifierMissingError = exports2.AuthPKCEGrantCodeExchangeError = exports2.AuthImplicitGrantRedirectError = exports2.AuthInvalidCredentialsError = exports2.AuthInvalidTokenResponseError = exports2.AuthSessionMissingError = exports2.CustomAuthError = exports2.AuthUnknownError = exports2.AuthApiError = exports2.AuthError = undefined;
  exports2.isAuthError = isAuthError;
  exports2.isAuthApiError = isAuthApiError;
  exports2.isAuthSessionMissingError = isAuthSessionMissingError;
  exports2.isAuthImplicitGrantRedirectError = isAuthImplicitGrantRedirectError;
  exports2.isAuthPKCECodeVerifierMissingError = isAuthPKCECodeVerifierMissingError;
  exports2.isAuthRetryableFetchError = isAuthRetryableFetchError;
  exports2.isAuthWeakPasswordError = isAuthWeakPasswordError;

  class AuthError extends Error {
    constructor(message, status, code) {
      super(message);
      this.__isAuthError = true;
      this.name = "AuthError";
      this.status = status;
      this.code = code;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        code: this.code
      };
    }
  }
  exports2.AuthError = AuthError;
  function isAuthError(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
  }

  class AuthApiError extends AuthError {
    constructor(message, status, code) {
      super(message, status, code);
      this.name = "AuthApiError";
      this.status = status;
      this.code = code;
    }
  }
  exports2.AuthApiError = AuthApiError;
  function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
  }

  class AuthUnknownError extends AuthError {
    constructor(message, originalError) {
      super(message);
      this.name = "AuthUnknownError";
      this.originalError = originalError;
    }
  }
  exports2.AuthUnknownError = AuthUnknownError;

  class CustomAuthError extends AuthError {
    constructor(message, name, status, code) {
      super(message, status, code);
      this.name = name;
      this.status = status;
    }
  }
  exports2.CustomAuthError = CustomAuthError;

  class AuthSessionMissingError extends CustomAuthError {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
    }
  }
  exports2.AuthSessionMissingError = AuthSessionMissingError;
  function isAuthSessionMissingError(error) {
    return isAuthError(error) && error.name === "AuthSessionMissingError";
  }

  class AuthInvalidTokenResponseError extends CustomAuthError {
    constructor() {
      super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
    }
  }
  exports2.AuthInvalidTokenResponseError = AuthInvalidTokenResponseError;

  class AuthInvalidCredentialsError extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidCredentialsError", 400, undefined);
    }
  }
  exports2.AuthInvalidCredentialsError = AuthInvalidCredentialsError;

  class AuthImplicitGrantRedirectError extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthImplicitGrantRedirectError", 500, undefined);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
    }
  }
  exports2.AuthImplicitGrantRedirectError = AuthImplicitGrantRedirectError;
  function isAuthImplicitGrantRedirectError(error) {
    return isAuthError(error) && error.name === "AuthImplicitGrantRedirectError";
  }

  class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthPKCEGrantCodeExchangeError", 500, undefined);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
    }
  }
  exports2.AuthPKCEGrantCodeExchangeError = AuthPKCEGrantCodeExchangeError;

  class AuthPKCECodeVerifierMissingError extends CustomAuthError {
    constructor() {
      super("PKCE code verifier not found in storage. " + "This can happen if the auth flow was initiated in a different browser or device, " + "or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), " + "use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
    }
  }
  exports2.AuthPKCECodeVerifierMissingError = AuthPKCECodeVerifierMissingError;
  function isAuthPKCECodeVerifierMissingError(error) {
    return isAuthError(error) && error.name === "AuthPKCECodeVerifierMissingError";
  }

  class AuthRetryableFetchError extends CustomAuthError {
    constructor(message, status) {
      super(message, "AuthRetryableFetchError", status, undefined);
    }
  }
  exports2.AuthRetryableFetchError = AuthRetryableFetchError;
  function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
  }

  class AuthWeakPasswordError extends CustomAuthError {
    constructor(message, status, reasons) {
      super(message, "AuthWeakPasswordError", status, "weak_password");
      this.reasons = reasons;
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
    }
  }
  exports2.AuthWeakPasswordError = AuthWeakPasswordError;
  function isAuthWeakPasswordError(error) {
    return isAuthError(error) && error.name === "AuthWeakPasswordError";
  }

  class AuthInvalidJwtError extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
  }
  exports2.AuthInvalidJwtError = AuthInvalidJwtError;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/base64url.js
var require_base64url = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.byteToBase64URL = byteToBase64URL;
  exports2.byteFromBase64URL = byteFromBase64URL;
  exports2.stringToBase64URL = stringToBase64URL;
  exports2.stringFromBase64URL = stringFromBase64URL;
  exports2.codepointToUTF8 = codepointToUTF8;
  exports2.stringToUTF8 = stringToUTF8;
  exports2.stringFromUTF8 = stringFromUTF8;
  exports2.base64UrlToUint8Array = base64UrlToUint8Array;
  exports2.stringToUint8Array = stringToUint8Array;
  exports2.bytesToBase64URL = bytesToBase64URL;
  var TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
  var IGNORE_BASE64URL = ` 	
\r=`.split("");
  var FROM_BASE64URL = (() => {
    const charMap = new Array(128);
    for (let i = 0;i < charMap.length; i += 1) {
      charMap[i] = -1;
    }
    for (let i = 0;i < IGNORE_BASE64URL.length; i += 1) {
      charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
    }
    for (let i = 0;i < TO_BASE64URL.length; i += 1) {
      charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
    }
    return charMap;
  })();
  function byteToBase64URL(byte, state, emit) {
    if (byte !== null) {
      state.queue = state.queue << 8 | byte;
      state.queuedBits += 8;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    } else if (state.queuedBits > 0) {
      state.queue = state.queue << 6 - state.queuedBits;
      state.queuedBits = 6;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    }
  }
  function byteFromBase64URL(charCode, state, emit) {
    const bits = FROM_BASE64URL[charCode];
    if (bits > -1) {
      state.queue = state.queue << 6 | bits;
      state.queuedBits += 6;
      while (state.queuedBits >= 8) {
        emit(state.queue >> state.queuedBits - 8 & 255);
        state.queuedBits -= 8;
      }
    } else if (bits === -2) {
      return;
    } else {
      throw new Error(`Invalid Base64-URL character "${String.fromCharCode(charCode)}"`);
    }
  }
  function stringToBase64URL(str) {
    const base64 = [];
    const emitter = (char) => {
      base64.push(char);
    };
    const state = { queue: 0, queuedBits: 0 };
    stringToUTF8(str, (byte) => {
      byteToBase64URL(byte, state, emitter);
    });
    byteToBase64URL(null, state, emitter);
    return base64.join("");
  }
  function stringFromBase64URL(str) {
    const conv = [];
    const utf8Emit = (codepoint) => {
      conv.push(String.fromCodePoint(codepoint));
    };
    const utf8State = {
      utf8seq: 0,
      codepoint: 0
    };
    const b64State = { queue: 0, queuedBits: 0 };
    const byteEmit = (byte) => {
      stringFromUTF8(byte, utf8State, utf8Emit);
    };
    for (let i = 0;i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), b64State, byteEmit);
    }
    return conv.join("");
  }
  function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 127) {
      emit(codepoint);
      return;
    } else if (codepoint <= 2047) {
      emit(192 | codepoint >> 6);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 65535) {
      emit(224 | codepoint >> 12);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 1114111) {
      emit(240 | codepoint >> 18);
      emit(128 | codepoint >> 12 & 63);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
  }
  function stringToUTF8(str, emit) {
    for (let i = 0;i < str.length; i += 1) {
      let codepoint = str.charCodeAt(i);
      if (codepoint > 55295 && codepoint <= 56319) {
        const highSurrogate = (codepoint - 55296) * 1024 & 65535;
        const lowSurrogate = str.charCodeAt(i + 1) - 56320 & 65535;
        codepoint = (lowSurrogate | highSurrogate) + 65536;
        i += 1;
      }
      codepointToUTF8(codepoint, emit);
    }
  }
  function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
      if (byte <= 127) {
        emit(byte);
        return;
      }
      for (let leadingBit = 1;leadingBit < 6; leadingBit += 1) {
        if ((byte >> 7 - leadingBit & 1) === 0) {
          state.utf8seq = leadingBit;
          break;
        }
      }
      if (state.utf8seq === 2) {
        state.codepoint = byte & 31;
      } else if (state.utf8seq === 3) {
        state.codepoint = byte & 15;
      } else if (state.utf8seq === 4) {
        state.codepoint = byte & 7;
      } else {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
      if (byte <= 127) {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.codepoint = state.codepoint << 6 | byte & 63;
      state.utf8seq -= 1;
      if (state.utf8seq === 0) {
        emit(state.codepoint);
      }
    }
  }
  function base64UrlToUint8Array(str) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onByte = (byte) => {
      result.push(byte);
    };
    for (let i = 0;i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), state, onByte);
    }
    return new Uint8Array(result);
  }
  function stringToUint8Array(str) {
    const result = [];
    stringToUTF8(str, (byte) => result.push(byte));
    return new Uint8Array(result);
  }
  function bytesToBase64URL(bytes) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onChar = (char) => {
      result.push(char);
    };
    bytes.forEach((byte) => byteToBase64URL(byte, state, onChar));
    byteToBase64URL(null, state, onChar);
    return result.join("");
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/helpers.js
var require_helpers = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Deferred = exports2.removeItemAsync = exports2.getItemAsync = exports2.setItemAsync = exports2.looksLikeFetchResponse = exports2.resolveFetch = exports2.supportsLocalStorage = exports2.isBrowser = undefined;
  exports2.expiresAt = expiresAt;
  exports2.generateCallbackId = generateCallbackId;
  exports2.parseParametersFromURL = parseParametersFromURL;
  exports2.decodeJWT = decodeJWT;
  exports2.sleep = sleep2;
  exports2.retryable = retryable;
  exports2.generatePKCEVerifier = generatePKCEVerifier;
  exports2.generatePKCEChallenge = generatePKCEChallenge;
  exports2.getCodeChallengeAndMethod = getCodeChallengeAndMethod;
  exports2.parseResponseAPIVersion = parseResponseAPIVersion;
  exports2.validateExp = validateExp;
  exports2.getAlgorithm = getAlgorithm;
  exports2.validateUUID = validateUUID;
  exports2.assertPasskeyExperimentalEnabled = assertPasskeyExperimentalEnabled;
  exports2.userNotAvailableProxy = userNotAvailableProxy;
  exports2.insecureUserWarningProxy = insecureUserWarningProxy;
  exports2.deepClone = deepClone;
  var constants_1 = require_constants2();
  var errors_1 = require_errors();
  var base64url_1 = require_base64url();
  function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
  }
  function generateCallbackId() {
    return Symbol("auth-callback");
  }
  var isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
  exports2.isBrowser = isBrowser;
  var localStorageWriteTests = {
    tested: false,
    writable: false
  };
  var supportsLocalStorage = () => {
    if (!(0, exports2.isBrowser)()) {
      return false;
    }
    try {
      if (typeof globalThis.localStorage !== "object") {
        return false;
      }
    } catch (e) {
      return false;
    }
    if (localStorageWriteTests.tested) {
      return localStorageWriteTests.writable;
    }
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(randomKey, randomKey);
      globalThis.localStorage.removeItem(randomKey);
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = true;
    } catch (e) {
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
  };
  exports2.supportsLocalStorage = supportsLocalStorage;
  function parseParametersFromURL(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") {
      try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key) => {
          result[key] = value;
        });
      } catch (_e) {}
    }
    url.searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  var resolveFetch2 = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };
  exports2.resolveFetch = resolveFetch2;
  var looksLikeFetchResponse = (maybeResponse) => {
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
  };
  exports2.looksLikeFetchResponse = looksLikeFetchResponse;
  var setItemAsync = async (storage, key, data) => {
    await storage.setItem(key, JSON.stringify(data));
  };
  exports2.setItemAsync = setItemAsync;
  var getItemAsync = async (storage, key) => {
    const value = await storage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (_a) {
      return null;
    }
  };
  exports2.getItemAsync = getItemAsync;
  var removeItemAsync = async (storage, key) => {
    await storage.removeItem(key);
  };
  exports2.removeItemAsync = removeItemAsync;

  class Deferred {
    constructor() {
      this.promise = new Deferred.promiseConstructor((res, rej) => {
        this.resolve = res;
        this.reject = rej;
      });
    }
  }
  exports2.Deferred = Deferred;
  Deferred.promiseConstructor = Promise;
  function decodeJWT(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new errors_1.AuthInvalidJwtError("Invalid JWT structure");
    }
    for (let i = 0;i < parts.length; i++) {
      if (!constants_1.BASE64URL_REGEX.test(parts[i])) {
        throw new errors_1.AuthInvalidJwtError("JWT not in base64url format");
      }
    }
    const data = {
      header: JSON.parse((0, base64url_1.stringFromBase64URL)(parts[0])),
      payload: JSON.parse((0, base64url_1.stringFromBase64URL)(parts[1])),
      signature: (0, base64url_1.base64UrlToUint8Array)(parts[2]),
      raw: {
        header: parts[0],
        payload: parts[1]
      }
    };
    return data;
  }
  async function sleep2(time) {
    return await new Promise((accept) => {
      setTimeout(() => accept(null), time);
    });
  }
  function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject) => {
      (async () => {
        for (let attempt = 0;attempt < Infinity; attempt++) {
          try {
            const result = await fn(attempt);
            if (!isRetryable(attempt, null, result)) {
              accept(result);
              return;
            }
          } catch (e) {
            if (!isRetryable(attempt, e)) {
              reject(e);
              return;
            }
          }
        }
      })();
    });
    return promise;
  }
  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
      const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      const charSetLen = charSet.length;
      let verifier = "";
      for (let i = 0;i < verifierLength; i++) {
        verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
      }
      return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
  }
  async function sha256(randomString) {
    const encoder = new TextEncoder;
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c) => String.fromCharCode(c)).join("");
  }
  async function generatePKCEChallenge(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
      console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
      return verifier;
    }
    const hashed = await sha256(verifier);
    return btoa(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
    const codeVerifier = generatePKCEVerifier();
    let storedCodeVerifier = codeVerifier;
    if (isPasswordRecovery) {
      storedCodeVerifier += "/recovery";
    }
    await (0, exports2.setItemAsync)(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
    return [codeChallenge, codeChallengeMethod];
  }
  var API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function parseResponseAPIVersion(response) {
    const apiVersion = response.headers.get(constants_1.API_VERSION_HEADER_NAME);
    if (!apiVersion) {
      return null;
    }
    if (!apiVersion.match(API_VERSION_REGEX)) {
      return null;
    }
    try {
      const date = new Date(`${apiVersion}T00:00:00.0Z`);
      return date;
    } catch (_e) {
      return null;
    }
  }
  function validateExp(exp) {
    if (!exp) {
      throw new Error("Missing exp claim");
    }
    const timeNow = Math.floor(Date.now() / 1000);
    if (exp <= timeNow) {
      throw new Error("JWT has expired");
    }
  }
  function getAlgorithm(alg) {
    switch (alg) {
      case "RS256":
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
      case "ES256":
        return {
          name: "ECDSA",
          namedCurve: "P-256",
          hash: { name: "SHA-256" }
        };
      default:
        throw new Error("Invalid alg claim");
    }
  }
  var UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  function validateUUID(str) {
    if (!UUID_REGEX.test(str)) {
      throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
    }
  }
  function assertPasskeyExperimentalEnabled(experimental) {
    if (!experimental.passkey) {
      throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
    }
  }
  function userNotAvailableProxy() {
    const proxyTarget = {};
    return new Proxy(proxyTarget, {
      get: (target, prop) => {
        if (prop === "__isUserNotAvailableProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)") {
            return;
          }
        }
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${prop}" property of the session object is not supported. Please use getUser() instead.`);
      },
      set: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      },
      deleteProperty: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      }
    });
  }
  function insecureUserWarningProxy(user, suppressWarningRef) {
    return new Proxy(user, {
      get: (target, prop, receiver) => {
        if (prop === "__isInsecureUserWarningProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)" || sProp === "Symbol(nodejs.util.inspect.custom)") {
            return Reflect.get(target, prop, receiver);
          }
        }
        if (!suppressWarningRef.value && typeof prop === "string") {
          console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
          suppressWarningRef.value = true;
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/fetch.js
var require_fetch = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.handleError = handleError2;
  exports2._request = _request;
  exports2._sessionResponse = _sessionResponse;
  exports2._sessionResponsePassword = _sessionResponsePassword;
  exports2._userResponse = _userResponse;
  exports2._ssoResponse = _ssoResponse;
  exports2._generateLinkResponse = _generateLinkResponse;
  exports2._noResolveJsonResponse = _noResolveJsonResponse;
  var tslib_1 = require_tslib();
  var constants_1 = require_constants2();
  var helpers_1 = require_helpers();
  var errors_1 = require_errors();
  var _getErrorMessage2 = (err) => {
    if (typeof err === "object" && err !== null) {
      const e = err;
      if (typeof e.msg === "string")
        return e.msg;
      if (typeof e.message === "string")
        return e.message;
      if (typeof e.error_description === "string")
        return e.error_description;
      if (typeof e.error === "string")
        return e.error;
    }
    return JSON.stringify(err);
  };
  var NETWORK_ERROR_CODES = [502, 503, 504, 520, 521, 522, 523, 524, 530];
  async function handleError2(error) {
    var _a;
    if (!(0, helpers_1.looksLikeFetchResponse)(error)) {
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(error), 0);
    }
    if (NETWORK_ERROR_CODES.includes(error.status)) {
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(error), error.status);
    }
    let data;
    try {
      data = await error.json();
    } catch (e) {
      throw new errors_1.AuthUnknownError(_getErrorMessage2(e), e);
    }
    let errorCode = undefined;
    const responseAPIVersion = (0, helpers_1.parseResponseAPIVersion)(error);
    if (responseAPIVersion && responseAPIVersion.getTime() >= constants_1.API_VERSIONS["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") {
      errorCode = data.code;
    } else if (typeof data === "object" && data && typeof data.error_code === "string") {
      errorCode = data.error_code;
    }
    if (!errorCode) {
      if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
        throw new errors_1.AuthWeakPasswordError(_getErrorMessage2(data), error.status, data.weak_password.reasons);
      }
    } else if (errorCode === "weak_password") {
      throw new errors_1.AuthWeakPasswordError(_getErrorMessage2(data), error.status, ((_a = data.weak_password) === null || _a === undefined ? undefined : _a.reasons) || []);
    } else if (errorCode === "session_not_found") {
      throw new errors_1.AuthSessionMissingError;
    }
    throw new errors_1.AuthApiError(_getErrorMessage2(data), error.status || 500, errorCode);
  }
  var _getRequestParams2 = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === undefined ? undefined : options.headers) || {} };
    if (method === "GET") {
      return params;
    }
    params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === undefined ? undefined : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
  };
  async function _request(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === undefined ? undefined : options.headers);
    if (!headers[constants_1.API_VERSION_HEADER_NAME]) {
      headers[constants_1.API_VERSION_HEADER_NAME] = constants_1.API_VERSIONS["2024-01-01"].name;
    }
    if (options === null || options === undefined ? undefined : options.jwt) {
      headers["Authorization"] = `Bearer ${options.jwt}`;
    }
    const qs = (_a = options === null || options === undefined ? undefined : options.query) !== null && _a !== undefined ? _a : {};
    if (options === null || options === undefined ? undefined : options.redirectTo) {
      qs["redirect_to"] = options.redirectTo;
    }
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await _handleRequest2(fetcher, method, url + queryString, {
      headers,
      noResolveJson: options === null || options === undefined ? undefined : options.noResolveJson
    }, {}, options === null || options === undefined ? undefined : options.body);
    return (options === null || options === undefined ? undefined : options.xform) ? options === null || options === undefined ? undefined : options.xform(data) : { data: Object.assign({}, data), error: null };
  }
  async function _handleRequest2(fetcher, method, url, options, parameters, body) {
    const requestParams = _getRequestParams2(method, options, parameters, body);
    let result;
    try {
      result = await fetcher(url, Object.assign({}, requestParams));
    } catch (e) {
      console.error(e);
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(e), 0);
    }
    if (!result.ok) {
      await handleError2(result);
    }
    if (options === null || options === undefined ? undefined : options.noResolveJson) {
      return result;
    }
    try {
      return await result.json();
    } catch (e) {
      await handleError2(e);
    }
  }
  function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
      session = Object.assign({}, data);
      if (!data.expires_at) {
        session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
      }
    }
    const user = (_a = data.user) !== null && _a !== undefined ? _a : data;
    return { data: { session, user }, error: null };
  }
  function _sessionResponsePassword(data) {
    const response = _sessionResponse(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
      response.data.weak_password = data.weak_password;
    }
    return response;
  }
  function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== undefined ? _a : data;
    return { data: { user }, error: null };
  }
  function _ssoResponse(data) {
    return { data, error: null };
  }
  function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = tslib_1.__rest(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
    const properties = {
      action_link,
      email_otp,
      hashed_token,
      redirect_to,
      verification_type
    };
    const user = Object.assign({}, rest);
    return {
      data: {
        properties,
        user
      },
      error: null
    };
  }
  function _noResolveJsonResponse(data) {
    return data;
  }
  function hasSession(data) {
    return !!data.access_token && !!data.refresh_token && !!data.expires_in;
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/types.js
var require_types2 = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SIGN_OUT_SCOPES = undefined;
  exports2.SIGN_OUT_SCOPES = ["global", "local", "others"];
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/GoTrueAdminApi.js
var require_GoTrueAdminApi = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  var fetch_1 = require_fetch();
  var helpers_1 = require_helpers();
  var types_1 = require_types2();
  var errors_1 = require_errors();

  class GoTrueAdminApi {
    constructor({ url = "", headers = {}, fetch: fetch2, experimental }) {
      this.url = url;
      this.headers = headers;
      this.fetch = (0, helpers_1.resolveFetch)(fetch2);
      this.experimental = experimental !== null && experimental !== undefined ? experimental : {};
      this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this)
      };
      this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
      };
      this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this)
      };
      this.passkey = {
        listPasskeys: this._adminListPasskeys.bind(this),
        deletePasskey: this._adminDeletePasskey.bind(this)
      };
    }
    async signOut(jwt, scope = types_1.SIGN_OUT_SCOPES[0]) {
      if (types_1.SIGN_OUT_SCOPES.indexOf(scope) < 0) {
        throw new Error(`@supabase/auth-js: Parameter scope must be one of ${types_1.SIGN_OUT_SCOPES.join(", ")}`);
      }
      try {
        await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
          headers: this.headers,
          jwt,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async inviteUserByEmail(email, options = {}) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/invite`, {
          body: { email, data: options.data },
          headers: this.headers,
          redirectTo: options.redirectTo,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async generateLink(params) {
      try {
        const { options } = params, rest = tslib_1.__rest(params, ["options"]);
        const body = Object.assign(Object.assign({}, rest), options);
        if ("newEmail" in rest) {
          body.new_email = rest === null || rest === undefined ? undefined : rest.newEmail;
          delete body["newEmail"];
        }
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body,
          headers: this.headers,
          xform: fetch_1._generateLinkResponse,
          redirectTo: options === null || options === undefined ? undefined : options.redirectTo
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return {
            data: {
              properties: null,
              user: null
            },
            error
          };
        }
        throw error;
      }
    }
    async createUser(attributes) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/users`, {
          body: attributes,
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async listUsers(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === undefined ? undefined : params.page) === null || _a === undefined ? undefined : _a.toString()) !== null && _b !== undefined ? _b : "",
            per_page: (_d = (_c = params === null || params === undefined ? undefined : params.perPage) === null || _c === undefined ? undefined : _c.toString()) !== null && _d !== undefined ? _d : ""
          },
          xform: fetch_1._noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const users = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== undefined ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === undefined ? undefined : _f.split(",")) !== null && _g !== undefined ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, users), pagination), error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { users: [] }, error };
        }
        throw error;
      }
    }
    async getUserById(uid) {
      (0, helpers_1.validateUUID)(uid);
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async updateUserById(uid, attributes) {
      (0, helpers_1.validateUUID)(uid);
      try {
        return await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
          body: attributes,
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async deleteUser(id, shouldSoftDelete = false) {
      (0, helpers_1.validateUUID)(id);
      try {
        return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
          headers: this.headers,
          body: {
            should_soft_delete: shouldSoftDelete
          },
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async _listFactors(params) {
      (0, helpers_1.validateUUID)(params.userId);
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
          headers: this.headers,
          xform: (factors) => {
            return { data: { factors }, error: null };
          }
        });
        return { data, error };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteFactor(params) {
      (0, helpers_1.validateUUID)(params.userId);
      (0, helpers_1.validateUUID)(params.id);
      try {
        const data = await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
          headers: this.headers
        });
        return { data, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _listOAuthClients(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === undefined ? undefined : params.page) === null || _a === undefined ? undefined : _a.toString()) !== null && _b !== undefined ? _b : "",
            per_page: (_d = (_c = params === null || params === undefined ? undefined : params.perPage) === null || _c === undefined ? undefined : _c.toString()) !== null && _d !== undefined ? _d : ""
          },
          xform: fetch_1._noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const clients = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== undefined ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === undefined ? undefined : _f.split(",")) !== null && _g !== undefined ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, clients), pagination), error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { clients: [] }, error };
        }
        throw error;
      }
    }
    async _createOAuthClient(params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _getOAuthClient(clientId) {
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _updateOAuthClient(clientId, params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${clientId}`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteOAuthClient(clientId) {
      try {
        await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _regenerateOAuthClientSecret(clientId) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/oauth/clients/${clientId}/regenerate_secret`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _listCustomProviders(params) {
      try {
        const query = {};
        if (params === null || params === undefined ? undefined : params.type) {
          query.type = params.type;
        }
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query,
          xform: (data) => {
            var _a;
            return { data: { providers: (_a = data === null || data === undefined ? undefined : data.providers) !== null && _a !== undefined ? _a : [] }, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { providers: [] }, error };
        }
        throw error;
      }
    }
    async _createCustomProvider(params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
          body: params,
          headers: this.headers,
          xform: (provider) => {
            return { data: provider, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _getCustomProvider(identifier) {
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/custom-providers/${identifier}`, {
          headers: this.headers,
          xform: (provider) => {
            return { data: provider, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _updateCustomProvider(identifier, params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/admin/custom-providers/${identifier}`, {
          body: params,
          headers: this.headers,
          xform: (provider) => {
            return { data: provider, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteCustomProvider(identifier) {
      try {
        await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${identifier}`, {
          headers: this.headers,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _adminListPasskeys(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      (0, helpers_1.validateUUID)(params.userId);
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/passkeys`, { headers: this.headers, xform: (data) => ({ data, error: null }) });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _adminDeletePasskey(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      (0, helpers_1.validateUUID)(params.userId);
      (0, helpers_1.validateUUID)(params.passkeyId);
      try {
        await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/passkeys/${params.passkeyId}`, { headers: this.headers, noResolveJson: true });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
  }
  exports2.default = GoTrueAdminApi;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/local-storage.js
var require_local_storage = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.memoryLocalStorageAdapter = memoryLocalStorageAdapter;
  function memoryLocalStorageAdapter(store = {}) {
    return {
      getItem: (key) => {
        return store[key] || null;
      },
      setItem: (key, value) => {
        store[key] = value;
      },
      removeItem: (key) => {
        delete store[key];
      }
    };
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/locks.js
var require_locks = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProcessLockAcquireTimeoutError = exports2.NavigatorLockAcquireTimeoutError = exports2.LockAcquireTimeoutError = exports2.internals = undefined;
  exports2.navigatorLock = navigatorLock;
  exports2.processLock = processLock;
  var helpers_1 = require_helpers();
  exports2.internals = {
    debug: !!(globalThis && (0, helpers_1.supportsLocalStorage)() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
  };

  class LockAcquireTimeoutError extends Error {
    constructor(message) {
      super(message);
      this.isAcquireTimeout = true;
    }
  }
  exports2.LockAcquireTimeoutError = LockAcquireTimeoutError;

  class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {
  }
  exports2.NavigatorLockAcquireTimeoutError = NavigatorLockAcquireTimeoutError;

  class ProcessLockAcquireTimeoutError extends LockAcquireTimeoutError {
  }
  exports2.ProcessLockAcquireTimeoutError = ProcessLockAcquireTimeoutError;
  async function navigatorLock(name, acquireTimeout, fn) {
    if (exports2.internals.debug) {
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    }
    const abortController = new globalThis.AbortController;
    let acquireTimeoutTimer;
    if (acquireTimeout > 0) {
      acquireTimeoutTimer = setTimeout(() => {
        abortController.abort();
        if (exports2.internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
        }
      }, acquireTimeout);
    }
    await Promise.resolve();
    try {
      return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
        mode: "exclusive",
        ifAvailable: true
      } : {
        mode: "exclusive",
        signal: abortController.signal
      }, async (lock) => {
        if (lock) {
          clearTimeout(acquireTimeoutTimer);
          if (exports2.internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
          }
          try {
            return await fn();
          } finally {
            if (exports2.internals.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
            }
          }
        } else {
          if (acquireTimeout === 0) {
            if (exports2.internals.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
            }
            throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
          } else {
            if (exports2.internals.debug) {
              try {
                const result = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
              } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
              }
            }
            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
            clearTimeout(acquireTimeoutTimer);
            return await fn();
          }
        }
      });
    } catch (e) {
      if (acquireTimeout > 0) {
        clearTimeout(acquireTimeoutTimer);
      }
      if (e !== null && typeof e === "object" && "name" in e && e.name === "AbortError" && acquireTimeout > 0) {
        if (abortController.signal.aborted) {
          if (exports2.internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", name);
          }
          console.warn(`@supabase/gotrue-js: Lock "${name}" was not released within ${acquireTimeout}ms. ` + "This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). " + "Forcefully acquiring the lock to recover.");
          return await Promise.resolve().then(() => globalThis.navigator.locks.request(name, {
            mode: "exclusive",
            steal: true
          }, async (lock) => {
            if (lock) {
              if (exports2.internals.debug) {
                console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", name, lock.name);
              }
              try {
                return await fn();
              } finally {
                if (exports2.internals.debug) {
                  console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", name, lock.name);
                }
              }
            } else {
              console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true");
              return await fn();
            }
          }));
        } else {
          if (exports2.internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", name);
          }
          throw new NavigatorLockAcquireTimeoutError(`Lock "${name}" was released because another request stole it`);
        }
      }
      throw e;
    }
  }
  var PROCESS_LOCKS = {};
  async function processLock(name, acquireTimeout, fn) {
    var _a;
    const previousOperation = (_a = PROCESS_LOCKS[name]) !== null && _a !== undefined ? _a : Promise.resolve();
    const previousOperationHandled = (async () => {
      try {
        await previousOperation;
        return null;
      } catch (e) {
        return null;
      }
    })();
    const currentOperation = (async () => {
      let timeoutId = null;
      try {
        const timeoutPromise = acquireTimeout >= 0 ? new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            console.warn(`@supabase/gotrue-js: Lock "${name}" acquisition timed out after ${acquireTimeout}ms. ` + "This may be caused by another operation holding the lock. " + "Consider increasing lockAcquireTimeout or checking for stuck operations.");
            reject(new ProcessLockAcquireTimeoutError(`Acquiring process lock with name "${name}" timed out`));
          }, acquireTimeout);
        }) : null;
        await Promise.race([previousOperationHandled, timeoutPromise].filter((x) => x));
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      } catch (e) {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        if (e instanceof LockAcquireTimeoutError) {
          throw e;
        }
      }
      return await fn();
    })();
    PROCESS_LOCKS[name] = (async () => {
      try {
        return await currentOperation;
      } catch (e) {
        if (e instanceof LockAcquireTimeoutError) {
          try {
            await previousOperation;
          } catch (prevError) {}
          return null;
        }
        throw e;
      }
    })();
    return await currentOperation;
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/polyfills.js
var require_polyfills = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.polyfillGlobalThis = polyfillGlobalThis;
  function polyfillGlobalThis() {
    if (typeof globalThis === "object")
      return;
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch (e) {
      if (typeof self !== "undefined") {
        self.globalThis = self;
      }
    }
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/web3/ethereum.js
var require_ethereum = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.getAddress = getAddress;
  exports2.fromHex = fromHex;
  exports2.toHex = toHex;
  exports2.createSiweMessage = createSiweMessage;
  function getAddress(address) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new Error(`@supabase/auth-js: Address "${address}" is invalid.`);
    }
    return address.toLowerCase();
  }
  function fromHex(hex) {
    return parseInt(hex, 16);
  }
  function toHex(value) {
    const bytes = new TextEncoder().encode(value);
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return "0x" + hex;
  }
  function createSiweMessage(parameters) {
    var _a;
    const { chainId, domain, expirationTime, issuedAt = new Date, nonce, notBefore, requestId, resources, scheme, uri, version: version3 } = parameters;
    {
      if (!Number.isInteger(chainId))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${chainId}`);
      if (!domain)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
      if (nonce && nonce.length < 8)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${nonce}`);
      if (!uri)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
      if (version3 !== "1")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${version3}`);
      if ((_a = parameters.statement) === null || _a === undefined ? undefined : _a.includes(`
`))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${parameters.statement}`);
    }
    const address = getAddress(parameters.address);
    const origin = scheme ? `${scheme}://${domain}` : domain;
    const statement = parameters.statement ? `${parameters.statement}
` : "";
    const prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`;
    let suffix = `URI: ${uri}
Version: ${version3}
Chain ID: ${chainId}${nonce ? `
Nonce: ${nonce}` : ""}
Issued At: ${issuedAt.toISOString()}`;
    if (expirationTime)
      suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
    if (notBefore)
      suffix += `
Not Before: ${notBefore.toISOString()}`;
    if (requestId)
      suffix += `
Request ID: ${requestId}`;
    if (resources) {
      let content = `
Resources:`;
      for (const resource of resources) {
        if (!resource || typeof resource !== "string")
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${resource}`);
        content += `
- ${resource}`;
      }
      suffix += content;
    }
    return `${prefix}
${suffix}`;
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/webauthn.errors.js
var require_webauthn_errors = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WebAuthnUnknownError = exports2.WebAuthnError = undefined;
  exports2.isWebAuthnError = isWebAuthnError;
  exports2.identifyRegistrationError = identifyRegistrationError;
  exports2.identifyAuthenticationError = identifyAuthenticationError;
  var webauthn_1 = require_webauthn();

  class WebAuthnError extends Error {
    constructor({ message, code, cause, name }) {
      var _a;
      super(message, { cause });
      this.__isWebAuthnError = true;
      this.name = (_a = name !== null && name !== undefined ? name : cause instanceof Error ? cause.name : undefined) !== null && _a !== undefined ? _a : "Unknown Error";
      this.code = code;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        code: this.code
      };
    }
  }
  exports2.WebAuthnError = WebAuthnError;

  class WebAuthnUnknownError extends WebAuthnError {
    constructor(message, originalError) {
      super({
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: originalError,
        message
      });
      this.name = "WebAuthnUnknownError";
      this.originalError = originalError;
    }
  }
  exports2.WebAuthnUnknownError = WebAuthnUnknownError;
  function isWebAuthnError(error) {
    return typeof error === "object" && error !== null && "__isWebAuthnError" in error;
  }
  function identifyRegistrationError({ error, options }) {
    var _a, _b, _c;
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Registration ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "ConstraintError") {
      if (((_a = publicKey.authenticatorSelection) === null || _a === undefined ? undefined : _a.requireResidentKey) === true) {
        return new WebAuthnError({
          message: "Discoverable credentials were required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
          cause: error
        });
      } else if (options.mediation === "conditional" && ((_b = publicKey.authenticatorSelection) === null || _b === undefined ? undefined : _b.userVerification) === "required") {
        return new WebAuthnError({
          message: "User verification was required during automatic registration but it could not be performed",
          code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
          cause: error
        });
      } else if (((_c = publicKey.authenticatorSelection) === null || _c === undefined ? undefined : _c.userVerification) === "required") {
        return new WebAuthnError({
          message: "User verification was required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
          cause: error
        });
      }
    } else if (error.name === "InvalidStateError") {
      return new WebAuthnError({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: error
      });
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "NotSupportedError") {
      const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === "public-key");
      if (validPubKeyCredParams.length === 0) {
        return new WebAuthnError({
          message: 'No entry in pubKeyCredParams was of type "public-key"',
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: error
        });
      }
      return new WebAuthnError({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!(0, webauthn_1.isValidDomain)(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rp.id !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rp.id}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "TypeError") {
      if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {
        return new WebAuthnError({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }
  function identifyAuthenticationError({ error, options }) {
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Authentication ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!(0, webauthn_1.isValidDomain)(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rpId !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rpId}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/lib/webauthn.js
var require_webauthn = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WebAuthnApi = exports2.DEFAULT_REQUEST_OPTIONS = exports2.DEFAULT_CREATION_OPTIONS = exports2.webAuthnAbortService = exports2.WebAuthnAbortService = exports2.identifyAuthenticationError = exports2.identifyRegistrationError = exports2.isWebAuthnError = exports2.WebAuthnError = undefined;
  exports2.deserializeCredentialCreationOptions = deserializeCredentialCreationOptions;
  exports2.deserializeCredentialRequestOptions = deserializeCredentialRequestOptions;
  exports2.serializeCredentialCreationResponse = serializeCredentialCreationResponse;
  exports2.serializeCredentialRequestResponse = serializeCredentialRequestResponse;
  exports2.isValidDomain = isValidDomain;
  exports2.browserSupportsWebAuthn = browserSupportsWebAuthn;
  exports2.createCredential = createCredential;
  exports2.getCredential = getCredential;
  exports2.mergeCredentialCreationOptions = mergeCredentialCreationOptions;
  exports2.mergeCredentialRequestOptions = mergeCredentialRequestOptions;
  var tslib_1 = require_tslib();
  var base64url_1 = require_base64url();
  var errors_1 = require_errors();
  var helpers_1 = require_helpers();
  var webauthn_errors_1 = require_webauthn_errors();
  Object.defineProperty(exports2, "identifyAuthenticationError", { enumerable: true, get: function() {
    return webauthn_errors_1.identifyAuthenticationError;
  } });
  Object.defineProperty(exports2, "identifyRegistrationError", { enumerable: true, get: function() {
    return webauthn_errors_1.identifyRegistrationError;
  } });
  Object.defineProperty(exports2, "isWebAuthnError", { enumerable: true, get: function() {
    return webauthn_errors_1.isWebAuthnError;
  } });
  Object.defineProperty(exports2, "WebAuthnError", { enumerable: true, get: function() {
    return webauthn_errors_1.WebAuthnError;
  } });

  class WebAuthnAbortService {
    createNewAbortSignal() {
      if (this.controller) {
        const abortError = new Error("Cancelling existing WebAuthn API call for new one");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
      }
      const newController = new AbortController;
      this.controller = newController;
      return newController.signal;
    }
    cancelCeremony() {
      if (this.controller) {
        const abortError = new Error("Manually cancelling existing WebAuthn API call");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
        this.controller = undefined;
      }
    }
  }
  exports2.WebAuthnAbortService = WebAuthnAbortService;
  exports2.webAuthnAbortService = new WebAuthnAbortService;
  function deserializeCredentialCreationOptions(options) {
    if (!options) {
      throw new Error("Credential creation options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON === "function") {
      return PublicKeyCredential.parseCreationOptionsFromJSON(options);
    }
    const { challenge: challengeStr, user: userOpts, excludeCredentials } = options, restOptions = tslib_1.__rest(options, ["challenge", "user", "excludeCredentials"]);
    const challenge = (0, base64url_1.base64UrlToUint8Array)(challengeStr).buffer;
    const user = Object.assign(Object.assign({}, userOpts), { id: (0, base64url_1.base64UrlToUint8Array)(userOpts.id).buffer });
    const result = Object.assign(Object.assign({}, restOptions), {
      challenge,
      user
    });
    if (excludeCredentials && excludeCredentials.length > 0) {
      result.excludeCredentials = new Array(excludeCredentials.length);
      for (let i = 0;i < excludeCredentials.length; i++) {
        const cred = excludeCredentials[i];
        result.excludeCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: (0, base64url_1.base64UrlToUint8Array)(cred.id).buffer,
          type: cred.type || "public-key",
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function deserializeCredentialRequestOptions(options) {
    if (!options) {
      throw new Error("Credential request options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON === "function") {
      return PublicKeyCredential.parseRequestOptionsFromJSON(options);
    }
    const { challenge: challengeStr, allowCredentials } = options, restOptions = tslib_1.__rest(options, ["challenge", "allowCredentials"]);
    const challenge = (0, base64url_1.base64UrlToUint8Array)(challengeStr).buffer;
    const result = Object.assign(Object.assign({}, restOptions), { challenge });
    if (allowCredentials && allowCredentials.length > 0) {
      result.allowCredentials = new Array(allowCredentials.length);
      for (let i = 0;i < allowCredentials.length; i++) {
        const cred = allowCredentials[i];
        result.allowCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: (0, base64url_1.base64UrlToUint8Array)(cred.id).buffer,
          type: cred.type || "public-key",
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function serializeCredentialCreationResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    return {
      id: credential.id,
      rawId: credential.id,
      response: {
        attestationObject: (0, base64url_1.bytesToBase64URL)(new Uint8Array(credential.response.attestationObject)),
        clientDataJSON: (0, base64url_1.bytesToBase64URL)(new Uint8Array(credential.response.clientDataJSON))
      },
      type: "public-key",
      clientExtensionResults: credential.getClientExtensionResults(),
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== undefined ? _a : undefined
    };
  }
  function serializeCredentialRequestResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    const clientExtensionResults = credential.getClientExtensionResults();
    const assertionResponse = credential.response;
    return {
      id: credential.id,
      rawId: credential.id,
      response: {
        authenticatorData: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.authenticatorData)),
        clientDataJSON: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.clientDataJSON)),
        signature: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.signature)),
        userHandle: assertionResponse.userHandle ? (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.userHandle)) : undefined
      },
      type: "public-key",
      clientExtensionResults,
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== undefined ? _a : undefined
    };
  }
  function isValidDomain(hostname) {
    return hostname === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(hostname);
  }
  function browserSupportsWebAuthn() {
    var _a, _b;
    return !!((0, helpers_1.isBrowser)() && ("PublicKeyCredential" in window) && window.PublicKeyCredential && ("credentials" in navigator) && typeof ((_a = navigator === null || navigator === undefined ? undefined : navigator.credentials) === null || _a === undefined ? undefined : _a.create) === "function" && typeof ((_b = navigator === null || navigator === undefined ? undefined : navigator.credentials) === null || _b === undefined ? undefined : _b.get) === "function");
  }
  async function createCredential(options) {
    try {
      const response = await navigator.credentials.create(options);
      if (!response) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: (0, webauthn_errors_1.identifyRegistrationError)({
          error: err,
          options
        })
      };
    }
  }
  async function getCredential(options) {
    try {
      const response = await navigator.credentials.get(options);
      if (!response) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: (0, webauthn_errors_1.identifyAuthenticationError)({
          error: err,
          options
        })
      };
    }
  }
  exports2.DEFAULT_CREATION_OPTIONS = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: false,
      userVerification: "preferred",
      residentKey: "discouraged"
    },
    attestation: "direct"
  };
  exports2.DEFAULT_REQUEST_OPTIONS = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct"
  };
  function deepMerge(...sources) {
    const isObject2 = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    const isArrayBufferLike = (val) => val instanceof ArrayBuffer || ArrayBuffer.isView(val);
    const result = {};
    for (const source of sources) {
      if (!source)
        continue;
      for (const key in source) {
        const value = source[key];
        if (value === undefined)
          continue;
        if (Array.isArray(value)) {
          result[key] = value;
        } else if (isArrayBufferLike(value)) {
          result[key] = value;
        } else if (isObject2(value)) {
          const existing = result[key];
          if (isObject2(existing)) {
            result[key] = deepMerge(existing, value);
          } else {
            result[key] = deepMerge(value);
          }
        } else {
          result[key] = value;
        }
      }
    }
    return result;
  }
  function mergeCredentialCreationOptions(baseOptions, overrides) {
    return deepMerge(exports2.DEFAULT_CREATION_OPTIONS, baseOptions, overrides || {});
  }
  function mergeCredentialRequestOptions(baseOptions, overrides) {
    return deepMerge(exports2.DEFAULT_REQUEST_OPTIONS, baseOptions, overrides || {});
  }

  class WebAuthnApi {
    constructor(client) {
      this.client = client;
      this.enroll = this._enroll.bind(this);
      this.challenge = this._challenge.bind(this);
      this.verify = this._verify.bind(this);
      this.authenticate = this._authenticate.bind(this);
      this.register = this._register.bind(this);
    }
    async _enroll(params) {
      return this.client.mfa.enroll(Object.assign(Object.assign({}, params), { factorType: "webauthn" }));
    }
    async _challenge({ factorId, webauthn, friendlyName, signal }, overrides) {
      var _a;
      try {
        const { data: challengeResponse, error: challengeError } = await this.client.mfa.challenge({
          factorId,
          webauthn
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const abortSignal = signal !== null && signal !== undefined ? signal : exports2.webAuthnAbortService.createNewAbortSignal();
        if (challengeResponse.webauthn.type === "create") {
          const { user } = challengeResponse.webauthn.credential_options.publicKey;
          if (!user.name) {
            const nameToUse = friendlyName;
            if (!nameToUse) {
              const currentUser = await this.client.getUser();
              const userData = currentUser.data.user;
              const fallbackName = ((_a = userData === null || userData === undefined ? undefined : userData.user_metadata) === null || _a === undefined ? undefined : _a.name) || (userData === null || userData === undefined ? undefined : userData.email) || (userData === null || userData === undefined ? undefined : userData.id) || "User";
              user.name = `${user.id}:${fallbackName}`;
            } else {
              user.name = `${user.id}:${nameToUse}`;
            }
          }
          if (!user.displayName) {
            user.displayName = user.name;
          }
        }
        switch (challengeResponse.webauthn.type) {
          case "create": {
            const options = mergeCredentialCreationOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === undefined ? undefined : overrides.create);
            const { data, error } = await createCredential({
              publicKey: options,
              signal: abortSignal
            });
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
          case "request": {
            const options = mergeCredentialRequestOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === undefined ? undefined : overrides.request);
            const { data, error } = await getCredential(Object.assign(Object.assign({}, challengeResponse.webauthn.credential_options), { publicKey: options, signal: abortSignal }));
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
        }
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in challenge", error)
        };
      }
    }
    async _verify({ challengeId, factorId, webauthn }) {
      return this.client.mfa.verify({
        factorId,
        challengeId,
        webauthn
      });
    }
    async _authenticate({ factorId, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : undefined, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : undefined, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new errors_1.AuthError("rpId is required for WebAuthn authentication")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: challengeResponse, error: challengeError } = await this.challenge({
          factorId,
          webauthn: { rpId, rpOrigins },
          signal
        }, { request: overrides });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const { webauthn } = challengeResponse;
        return this._verify({
          factorId,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            type: webauthn.type,
            rpId,
            rpOrigins,
            credential_response: webauthn.credential_response
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in authenticate", error)
        };
      }
    }
    async _register({ friendlyName, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : undefined, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : undefined, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new errors_1.AuthError("rpId is required for WebAuthn registration")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: factor, error: enrollError } = await this._enroll({
          friendlyName
        });
        if (!factor) {
          await this.client.mfa.listFactors().then((factors) => {
            var _a;
            return (_a = factors.data) === null || _a === undefined ? undefined : _a.all.find((v) => v.factor_type === "webauthn" && v.friendly_name === friendlyName && v.status !== "unverified");
          }).then((factor2) => factor2 ? this.client.mfa.unenroll({ factorId: factor2 === null || factor2 === undefined ? undefined : factor2.id }) : undefined);
          return { data: null, error: enrollError };
        }
        const { data: challengeResponse, error: challengeError } = await this._challenge({
          factorId: factor.id,
          friendlyName: factor.friendly_name,
          webauthn: { rpId, rpOrigins },
          signal
        }, {
          create: overrides
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        return this._verify({
          factorId: factor.id,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            rpId,
            rpOrigins,
            type: challengeResponse.webauthn.type,
            credential_response: challengeResponse.webauthn.credential_response
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in register", error)
        };
      }
    }
  }
  exports2.WebAuthnApi = WebAuthnApi;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/GoTrueClient.js
var require_GoTrueClient = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  var constants_1 = require_constants2();
  var errors_1 = require_errors();
  var fetch_1 = require_fetch();
  var helpers_1 = require_helpers();
  var local_storage_1 = require_local_storage();
  var locks_1 = require_locks();
  var polyfills_1 = require_polyfills();
  var version_1 = require_version2();
  var base64url_1 = require_base64url();
  var ethereum_1 = require_ethereum();
  var webauthn_1 = require_webauthn();
  (0, polyfills_1.polyfillGlobalThis)();
  var DEFAULT_OPTIONS = {
    url: constants_1.GOTRUE_URL,
    storageKey: constants_1.STORAGE_KEY,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: constants_1.DEFAULT_HEADERS,
    flowType: "implicit",
    debug: false,
    hasCustomAuthorizationHeader: false,
    throwOnError: false,
    lockAcquireTimeout: 5000,
    skipAutoInitialize: false,
    experimental: {}
  };
  async function lockNoOp(name, acquireTimeout, fn) {
    return await fn();
  }
  var GLOBAL_JWKS = {};

  class GoTrueClient {
    get jwks() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === undefined ? undefined : _a.jwks) !== null && _b !== undefined ? _b : { keys: [] };
    }
    set jwks(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { jwks: value });
    }
    get jwks_cached_at() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === undefined ? undefined : _a.cachedAt) !== null && _b !== undefined ? _b : Number.MIN_SAFE_INTEGER;
    }
    set jwks_cached_at(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { cachedAt: value });
    }
    constructor(options) {
      var _a, _b, _c, _d;
      this.userStorage = null;
      this.memoryStorage = null;
      this.stateChangeEmitters = new Map;
      this.autoRefreshTicker = null;
      this.autoRefreshTickTimeout = null;
      this.visibilityChangedCallback = null;
      this.refreshingDeferred = null;
      this.initializePromise = null;
      this.detectSessionInUrl = true;
      this.hasCustomAuthorizationHeader = false;
      this.suppressGetSessionWarning = false;
      this.lockAcquired = false;
      this.pendingInLock = [];
      this.broadcastChannel = null;
      this.logger = console.log;
      const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
      this.storageKey = settings.storageKey;
      this.instanceID = (_a = GoTrueClient.nextInstanceID[this.storageKey]) !== null && _a !== undefined ? _a : 0;
      GoTrueClient.nextInstanceID[this.storageKey] = this.instanceID + 1;
      this.logDebugMessages = !!settings.debug;
      if (typeof settings.debug === "function") {
        this.logger = settings.debug;
      }
      if (this.instanceID > 0 && (0, helpers_1.isBrowser)()) {
        const message = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
        console.warn(message);
        if (this.logDebugMessages) {
          console.trace(message);
        }
      }
      this.persistSession = settings.persistSession;
      this.autoRefreshToken = settings.autoRefreshToken;
      this.experimental = (_b = settings.experimental) !== null && _b !== undefined ? _b : {};
      this.admin = new GoTrueAdminApi_1.default({
        url: settings.url,
        headers: settings.headers,
        fetch: settings.fetch,
        experimental: this.experimental
      });
      this.url = settings.url;
      this.headers = settings.headers;
      this.fetch = (0, helpers_1.resolveFetch)(settings.fetch);
      this.lock = settings.lock || lockNoOp;
      this.detectSessionInUrl = settings.detectSessionInUrl;
      this.flowType = settings.flowType;
      this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
      this.throwOnError = settings.throwOnError;
      this.lockAcquireTimeout = settings.lockAcquireTimeout;
      if (settings.lock) {
        this.lock = settings.lock;
      } else if (this.persistSession && (0, helpers_1.isBrowser)() && ((_c = globalThis === null || globalThis === undefined ? undefined : globalThis.navigator) === null || _c === undefined ? undefined : _c.locks)) {
        this.lock = locks_1.navigatorLock;
      } else {
        this.lock = lockNoOp;
      }
      if (!this.jwks) {
        this.jwks = { keys: [] };
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
      }
      this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new webauthn_1.WebAuthnApi(this)
      };
      this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this)
      };
      this.passkey = {
        startRegistration: this._startPasskeyRegistration.bind(this),
        verifyRegistration: this._verifyPasskeyRegistration.bind(this),
        startAuthentication: this._startPasskeyAuthentication.bind(this),
        verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
        list: this._listPasskeys.bind(this),
        update: this._updatePasskey.bind(this),
        delete: this._deletePasskey.bind(this)
      };
      if (this.persistSession) {
        if (settings.storage) {
          this.storage = settings.storage;
        } else {
          if ((0, helpers_1.supportsLocalStorage)()) {
            this.storage = globalThis.localStorage;
          } else {
            this.memoryStorage = {};
            this.storage = (0, local_storage_1.memoryLocalStorageAdapter)(this.memoryStorage);
          }
        }
        if (settings.userStorage) {
          this.userStorage = settings.userStorage;
        }
      } else {
        this.memoryStorage = {};
        this.storage = (0, local_storage_1.memoryLocalStorageAdapter)(this.memoryStorage);
      }
      if ((0, helpers_1.isBrowser)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
        } catch (e) {
          console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
        }
        (_d = this.broadcastChannel) === null || _d === undefined || _d.addEventListener("message", async (event) => {
          this._debug("received broadcast notification from other tab or client", event);
          try {
            await this._notifyAllSubscribers(event.data.event, event.data.session, false);
          } catch (error) {
            this._debug("#broadcastChannel", "error", error);
          }
        });
      }
      if (!settings.skipAutoInitialize) {
        this.initialize().catch((error) => {
          this._debug("#initialize()", "error", error);
        });
      }
    }
    isThrowOnErrorEnabled() {
      return this.throwOnError;
    }
    _returnResult(result) {
      if (this.throwOnError && result && result.error) {
        throw result.error;
      }
      return result;
    }
    _logPrefix() {
      return "GoTrueClient@" + `${this.storageKey}:${this.instanceID} (${version_1.version}) ${new Date().toISOString()}`;
    }
    _debug(...args) {
      if (this.logDebugMessages) {
        this.logger(this._logPrefix(), ...args);
      }
      return this;
    }
    async initialize() {
      if (this.initializePromise) {
        return await this.initializePromise;
      }
      this.initializePromise = (async () => {
        return await this._acquireLock(this.lockAcquireTimeout, async () => {
          return await this._initialize();
        });
      })();
      return await this.initializePromise;
    }
    async _initialize() {
      var _a;
      try {
        let params = {};
        let callbackUrlType = "none";
        if ((0, helpers_1.isBrowser)()) {
          params = (0, helpers_1.parseParametersFromURL)(window.location.href);
          if (this._isImplicitGrantCallback(params)) {
            callbackUrlType = "implicit";
          } else if (await this._isPKCECallback(params)) {
            callbackUrlType = "pkce";
          }
        }
        if ((0, helpers_1.isBrowser)() && this.detectSessionInUrl && callbackUrlType !== "none") {
          const { data, error } = await this._getSessionFromURL(params, callbackUrlType);
          if (error) {
            this._debug("#_initialize()", "error detecting session from URL", error);
            if ((0, errors_1.isAuthImplicitGrantRedirectError)(error)) {
              const errorCode = (_a = error.details) === null || _a === undefined ? undefined : _a.code;
              if (errorCode === "identity_already_exists" || errorCode === "identity_not_found" || errorCode === "single_identity_not_deletable") {
                return { error };
              }
            }
            return { error };
          }
          const { session, redirectType } = data;
          this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
          await this._saveSession(session);
          setTimeout(async () => {
            if (redirectType === "recovery") {
              await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
            } else {
              await this._notifyAllSubscribers("SIGNED_IN", session);
            }
          }, 0);
          return { error: null };
        }
        await this._recoverAndRefresh();
        return { error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ error });
        }
        return this._returnResult({
          error: new errors_1.AuthUnknownError("Unexpected error during initialization", error)
        });
      } finally {
        await this._handleVisibilityChange();
        this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(credentials) {
      var _a, _b, _c;
      try {
        const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data: (_b = (_a = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _a === undefined ? undefined : _a.data) !== null && _b !== undefined ? _b : {},
            gotrue_meta_security: { captcha_token: (_c = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _c === undefined ? undefined : _c.captchaToken }
          },
          xform: fetch_1._sessionResponse
        });
        const { data, error } = res;
        if (error || !data) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signUp(credentials) {
      var _a, _b, _c;
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo,
            body: {
              email,
              password,
              data: (_a = options === null || options === undefined ? undefined : options.data) !== null && _a !== undefined ? _a : {},
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            xform: fetch_1._sessionResponse
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone,
              password,
              data: (_b = options === null || options === undefined ? undefined : options.data) !== null && _b !== undefined ? _b : {},
              channel: (_c = options === null || options === undefined ? undefined : options.channel) !== null && _c !== undefined ? _c : "sms",
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponse
          });
        } else {
          throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error || !data) {
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithPassword(credentials) {
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              email,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponsePassword
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              phone,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponsePassword
          });
        } else {
          throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({
          data: Object.assign({ user: data.user, session: data.session }, data.weak_password ? { weakPassword: data.weak_password } : null),
          error
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithOAuth(credentials) {
      var _a, _b, _c, _d;
      return await this._handleProviderSignIn(credentials.provider, {
        redirectTo: (_a = credentials.options) === null || _a === undefined ? undefined : _a.redirectTo,
        scopes: (_b = credentials.options) === null || _b === undefined ? undefined : _b.scopes,
        queryParams: (_c = credentials.options) === null || _c === undefined ? undefined : _c.queryParams,
        skipBrowserRedirect: (_d = credentials.options) === null || _d === undefined ? undefined : _d.skipBrowserRedirect
      });
    }
    async exchangeCodeForSession(authCode) {
      await this.initializePromise;
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        return this._exchangeCodeForSession(authCode);
      });
    }
    async signInWithWeb3(credentials) {
      const { chain } = credentials;
      switch (chain) {
        case "ethereum":
          return await this.signInWithEthereum(credentials);
        case "solana":
          return await this.signInWithSolana(credentials);
        default:
          throw new Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
      }
    }
    async signInWithEthereum(credentials) {
      var _a, _b, _c, _d, _f, _g, _h, _j, _k, _l, _m;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!(0, helpers_1.isBrowser)()) {
          if (typeof wallet !== "object" || !(options === null || options === undefined ? undefined : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("ethereum" in windowAny && typeof windowAny.ethereum === "object" && "request" in windowAny.ethereum && typeof windowAny.ethereum.request === "function") {
            resolvedWallet = windowAny.ethereum;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === undefined ? undefined : options.url) !== null && _a !== undefined ? _a : window.location.href);
        const accounts = await resolvedWallet.request({
          method: "eth_requestAccounts"
        }).then((accs) => accs).catch(() => {
          throw new Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
        });
        if (!accounts || accounts.length === 0) {
          throw new Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
        }
        const address = (0, ethereum_1.getAddress)(accounts[0]);
        let chainId = (_b = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _b === undefined ? undefined : _b.chainId;
        if (!chainId) {
          const chainIdHex = await resolvedWallet.request({
            method: "eth_chainId"
          });
          chainId = (0, ethereum_1.fromHex)(chainIdHex);
        }
        const siweMessage = {
          domain: url.host,
          address,
          statement,
          uri: url.href,
          version: "1",
          chainId,
          nonce: (_c = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _c === undefined ? undefined : _c.nonce,
          issuedAt: (_f = (_d = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _d === undefined ? undefined : _d.issuedAt) !== null && _f !== undefined ? _f : new Date,
          expirationTime: (_g = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _g === undefined ? undefined : _g.expirationTime,
          notBefore: (_h = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _h === undefined ? undefined : _h.notBefore,
          requestId: (_j = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _j === undefined ? undefined : _j.requestId,
          resources: (_k = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _k === undefined ? undefined : _k.resources
        };
        message = (0, ethereum_1.createSiweMessage)(siweMessage);
        signature = await resolvedWallet.request({
          method: "personal_sign",
          params: [(0, ethereum_1.toHex)(message), address]
        });
      }
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({
            chain: "ethereum",
            message,
            signature
          }, ((_l = credentials.options) === null || _l === undefined ? undefined : _l.captchaToken) ? { gotrue_meta_security: { captcha_token: (_m = credentials.options) === null || _m === undefined ? undefined : _m.captchaToken } } : null),
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithSolana(credentials) {
      var _a, _b, _c, _d, _f, _g, _h, _j, _k, _l, _m, _o;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!(0, helpers_1.isBrowser)()) {
          if (typeof wallet !== "object" || !(options === null || options === undefined ? undefined : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("solana" in windowAny && typeof windowAny.solana === "object" && (("signIn" in windowAny.solana) && typeof windowAny.solana.signIn === "function" || ("signMessage" in windowAny.solana) && typeof windowAny.solana.signMessage === "function")) {
            resolvedWallet = windowAny.solana;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === undefined ? undefined : options.url) !== null && _a !== undefined ? _a : window.location.href);
        if ("signIn" in resolvedWallet && resolvedWallet.signIn) {
          const output = await resolvedWallet.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: new Date().toISOString() }, options === null || options === undefined ? undefined : options.signInWithSolana), {
            version: "1",
            domain: url.host,
            uri: url.href
          }), statement ? { statement } : null));
          let outputToProcess;
          if (Array.isArray(output) && output[0] && typeof output[0] === "object") {
            outputToProcess = output[0];
          } else if (output && typeof output === "object" && "signedMessage" in output && "signature" in output) {
            outputToProcess = output;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
          }
          if ("signedMessage" in outputToProcess && "signature" in outputToProcess && (typeof outputToProcess.signedMessage === "string" || outputToProcess.signedMessage instanceof Uint8Array) && outputToProcess.signature instanceof Uint8Array) {
            message = typeof outputToProcess.signedMessage === "string" ? outputToProcess.signedMessage : new TextDecoder().decode(outputToProcess.signedMessage);
            signature = outputToProcess.signature;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
          }
        } else {
          if (!("signMessage" in resolvedWallet) || typeof resolvedWallet.signMessage !== "function" || !("publicKey" in resolvedWallet) || typeof resolvedWallet !== "object" || !resolvedWallet.publicKey || !("toBase58" in resolvedWallet.publicKey) || typeof resolvedWallet.publicKey.toBase58 !== "function") {
            throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
          }
          message = [
            `${url.host} wants you to sign in with your Solana account:`,
            resolvedWallet.publicKey.toBase58(),
            ...statement ? ["", statement, ""] : [""],
            "Version: 1",
            `URI: ${url.href}`,
            `Issued At: ${(_c = (_b = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _b === undefined ? undefined : _b.issuedAt) !== null && _c !== undefined ? _c : new Date().toISOString()}`,
            ...((_d = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _d === undefined ? undefined : _d.notBefore) ? [`Not Before: ${options.signInWithSolana.notBefore}`] : [],
            ...((_f = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _f === undefined ? undefined : _f.expirationTime) ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : [],
            ...((_g = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _g === undefined ? undefined : _g.chainId) ? [`Chain ID: ${options.signInWithSolana.chainId}`] : [],
            ...((_h = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _h === undefined ? undefined : _h.nonce) ? [`Nonce: ${options.signInWithSolana.nonce}`] : [],
            ...((_j = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _j === undefined ? undefined : _j.requestId) ? [`Request ID: ${options.signInWithSolana.requestId}`] : [],
            ...((_l = (_k = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _k === undefined ? undefined : _k.resources) === null || _l === undefined ? undefined : _l.length) ? [
              "Resources",
              ...options.signInWithSolana.resources.map((resource) => `- ${resource}`)
            ] : []
          ].join(`
`);
          const maybeSignature = await resolvedWallet.signMessage(new TextEncoder().encode(message), "utf8");
          if (!maybeSignature || !(maybeSignature instanceof Uint8Array)) {
            throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
          }
          signature = maybeSignature;
        }
      }
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({ chain: "solana", message, signature: (0, base64url_1.bytesToBase64URL)(signature) }, ((_m = credentials.options) === null || _m === undefined ? undefined : _m.captchaToken) ? { gotrue_meta_security: { captcha_token: (_o = credentials.options) === null || _o === undefined ? undefined : _o.captchaToken } } : null),
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async _exchangeCodeForSession(authCode) {
      const storageItem = await (0, helpers_1.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== undefined ? storageItem : "").split("/");
      try {
        if (!codeVerifier && this.flowType === "pkce") {
          throw new errors_1.AuthPKCECodeVerifierMissingError;
        }
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
          headers: this.headers,
          body: {
            auth_code: authCode,
            code_verifier: codeVerifier
          },
          xform: fetch_1._sessionResponse
        });
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error: invalidTokenError
          });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers(redirectType === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign(Object.assign({}, data), { redirectType: redirectType !== null && redirectType !== undefined ? redirectType : null }), error });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error
          });
        }
        throw error;
      }
    }
    async signInWithIdToken(credentials) {
      try {
        const { options, provider, token, access_token, nonce } = credentials;
        const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          body: {
            provider,
            id_token: token,
            access_token,
            nonce,
            gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
          },
          xform: fetch_1._sessionResponse
        });
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data, error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithOtp(credentials) {
      var _a, _b, _c, _d, _f;
      try {
        if ("email" in credentials) {
          const { email, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          const { error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email,
              data: (_a = options === null || options === undefined ? undefined : options.data) !== null && _a !== undefined ? _a : {},
              create_user: (_b = options === null || options === undefined ? undefined : options.shouldCreateUser) !== null && _b !== undefined ? _b : true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        if ("phone" in credentials) {
          const { phone, options } = credentials;
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              phone,
              data: (_c = options === null || options === undefined ? undefined : options.data) !== null && _c !== undefined ? _c : {},
              create_user: (_d = options === null || options === undefined ? undefined : options.shouldCreateUser) !== null && _d !== undefined ? _d : true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              channel: (_f = options === null || options === undefined ? undefined : options.channel) !== null && _f !== undefined ? _f : "sms"
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === undefined ? undefined : data.message_id },
            error
          });
        }
        throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number.");
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async verifyOtp(params) {
      var _a, _b;
      try {
        let redirectTo = undefined;
        let captchaToken = undefined;
        if ("options" in params) {
          redirectTo = (_a = params.options) === null || _a === undefined ? undefined : _a.redirectTo;
          captchaToken = (_b = params.options) === null || _b === undefined ? undefined : _b.captchaToken;
        }
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/verify`, {
          headers: this.headers,
          body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: captchaToken } }),
          redirectTo,
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data) {
          const tokenVerificationError = new Error("An error occurred on token verification.");
          throw tokenVerificationError;
        }
        const session = data.session;
        const user = data.user;
        if (session === null || session === undefined ? undefined : session.access_token) {
          await this._saveSession(session);
          await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithSSO(params) {
      var _a, _b, _c, _d, _f;
      try {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
        }
        const result = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? { provider_id: params.providerId } : null), "domain" in params ? { domain: params.domain } : null), { redirect_to: (_b = (_a = params.options) === null || _a === undefined ? undefined : _a.redirectTo) !== null && _b !== undefined ? _b : undefined }), ((_c = params === null || params === undefined ? undefined : params.options) === null || _c === undefined ? undefined : _c.captchaToken) ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
          headers: this.headers,
          xform: fetch_1._ssoResponse
        });
        if (((_d = result.data) === null || _d === undefined ? undefined : _d.url) && (0, helpers_1.isBrowser)() && !((_f = params.options) === null || _f === undefined ? undefined : _f.skipBrowserRedirect)) {
          window.location.assign(result.data.url);
        }
        return this._returnResult(result);
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async reauthenticate() {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._reauthenticate();
      });
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError)
            throw sessionError;
          if (!session)
            throw new errors_1.AuthSessionMissingError;
          const { error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/reauthenticate`, {
            headers: this.headers,
            jwt: session.access_token
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async resend(credentials) {
      try {
        const endpoint = `${this.url}/resend`;
        if ("email" in credentials) {
          const { email, type, options } = credentials;
          const { error } = await (0, fetch_1._request)(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              email,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if ("phone" in credentials) {
          const { phone, type, options } = credentials;
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              phone,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === undefined ? undefined : data.message_id },
            error
          });
        }
        throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async getSession() {
      await this.initializePromise;
      const result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return this._useSession(async (result2) => {
          return result2;
        });
      });
      return result;
    }
    async _acquireLock(acquireTimeout, fn) {
      this._debug("#_acquireLock", "begin", acquireTimeout);
      try {
        if (this.lockAcquired) {
          const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
          const result = (async () => {
            await last;
            return await fn();
          })();
          this.pendingInLock.push((async () => {
            try {
              await result;
            } catch (_e) {}
          })());
          return result;
        }
        return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async () => {
          this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
          try {
            this.lockAcquired = true;
            const result = fn();
            this.pendingInLock.push((async () => {
              try {
                await result;
              } catch (e) {}
            })());
            await result;
            while (this.pendingInLock.length) {
              const waitOn = [...this.pendingInLock];
              await Promise.all(waitOn);
              this.pendingInLock.splice(0, waitOn.length);
            }
            return await result;
          } finally {
            this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
            this.lockAcquired = false;
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(fn) {
      this._debug("#_useSession", "begin");
      try {
        const result = await this.__loadSession();
        return await fn(result);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin");
      if (!this.lockAcquired) {
        this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
      }
      try {
        let currentSession = null;
        const maybeSession = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
        this._debug("#getSession()", "session from storage", maybeSession);
        if (maybeSession !== null) {
          if (this._isValidSession(maybeSession)) {
            currentSession = maybeSession;
          } else {
            this._debug("#getSession()", "session from storage is not valid");
            await this._removeSession();
          }
        }
        if (!currentSession) {
          return { data: { session: null }, error: null };
        }
        const hasExpired = currentSession.expires_at ? currentSession.expires_at * 1000 - Date.now() < constants_1.EXPIRY_MARGIN_MS : false;
        this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
        if (!hasExpired) {
          if (this.userStorage) {
            const maybeUser = await (0, helpers_1.getItemAsync)(this.userStorage, this.storageKey + "-user");
            if (maybeUser === null || maybeUser === undefined ? undefined : maybeUser.user) {
              currentSession.user = maybeUser.user;
            } else {
              currentSession.user = (0, helpers_1.userNotAvailableProxy)();
            }
          }
          if (this.storage.isServer && currentSession.user && !currentSession.user.__isUserNotAvailableProxy) {
            const suppressWarningRef = { value: this.suppressGetSessionWarning };
            currentSession.user = (0, helpers_1.insecureUserWarningProxy)(currentSession.user, suppressWarningRef);
            if (suppressWarningRef.value) {
              this.suppressGetSessionWarning = true;
            }
          }
          return { data: { session: currentSession }, error: null };
        }
        const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
        if (error) {
          return this._returnResult({ data: { session: null }, error });
        }
        return this._returnResult({ data: { session }, error: null });
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(jwt) {
      if (jwt) {
        return await this._getUser(jwt);
      }
      await this.initializePromise;
      const result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._getUser();
      });
      if (result.data.user) {
        this.suppressGetSessionWarning = true;
      }
      return result;
    }
    async _getUser(jwt) {
      try {
        if (jwt) {
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt,
            xform: fetch_1._userResponse
          });
        }
        return await this._useSession(async (result) => {
          var _a, _b, _c;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          if (!((_a = data.session) === null || _a === undefined ? undefined : _a.access_token) && !this.hasCustomAuthorizationHeader) {
            return { data: { user: null }, error: new errors_1.AuthSessionMissingError };
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: (_c = (_b = data.session) === null || _b === undefined ? undefined : _b.access_token) !== null && _c !== undefined ? _c : undefined,
            xform: fetch_1._userResponse
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          if ((0, errors_1.isAuthSessionMissingError)(error)) {
            await this._removeSession();
            await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          }
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    async updateUser(attributes, options = {}) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._updateUser(attributes, options);
      });
    }
    async _updateUser(attributes, options = {}) {
      try {
        return await this._useSession(async (result) => {
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            throw sessionError;
          }
          if (!sessionData.session) {
            throw new errors_1.AuthSessionMissingError;
          }
          const session = sessionData.session;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce" && attributes.email != null) {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          const { data, error: userError } = await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/user`, {
            headers: this.headers,
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo,
            body: Object.assign(Object.assign({}, attributes), { code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
            jwt: session.access_token,
            xform: fetch_1._userResponse
          });
          if (userError) {
            throw userError;
          }
          session.user = data.user;
          await this._saveSession(session);
          await this._notifyAllSubscribers("USER_UPDATED", session);
          return this._returnResult({ data: { user: session.user }, error: null });
        });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    async setSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._setSession(currentSession);
      });
    }
    async _setSession(currentSession) {
      try {
        if (!currentSession.access_token || !currentSession.refresh_token) {
          throw new errors_1.AuthSessionMissingError;
        }
        const timeNow = Date.now() / 1000;
        let expiresAt = timeNow;
        let hasExpired = true;
        let session = null;
        const { payload } = (0, helpers_1.decodeJWT)(currentSession.access_token);
        if (payload.exp) {
          expiresAt = payload.exp;
          hasExpired = expiresAt <= timeNow;
        }
        if (hasExpired) {
          const { data: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!refreshedSession) {
            return { data: { user: null, session: null }, error: null };
          }
          session = refreshedSession;
        } else {
          const { data, error } = await this._getUser(currentSession.access_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          session = {
            access_token: currentSession.access_token,
            refresh_token: currentSession.refresh_token,
            user: data.user,
            token_type: "bearer",
            expires_in: expiresAt - timeNow,
            expires_at: expiresAt
          };
          await this._saveSession(session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user: session.user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      }
    }
    async refreshSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._refreshSession(currentSession);
      });
    }
    async _refreshSession(currentSession) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          if (!currentSession) {
            const { data, error: error2 } = result;
            if (error2) {
              throw error2;
            }
            currentSession = (_a = data.session) !== null && _a !== undefined ? _a : undefined;
          }
          if (!(currentSession === null || currentSession === undefined ? undefined : currentSession.refresh_token)) {
            throw new errors_1.AuthSessionMissingError;
          }
          const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!session) {
            return this._returnResult({ data: { user: null, session: null }, error: null });
          }
          return this._returnResult({ data: { user: session.user, session }, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async _getSessionFromURL(params, callbackUrlType) {
      var _a;
      try {
        if (!(0, helpers_1.isBrowser)())
          throw new errors_1.AuthImplicitGrantRedirectError("No browser detected.");
        if (params.error || params.error_description || params.error_code) {
          throw new errors_1.AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
            error: params.error || "unspecified_error",
            code: params.error_code || "unspecified_code"
          });
        }
        switch (callbackUrlType) {
          case "implicit":
            if (this.flowType === "pkce") {
              throw new errors_1.AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
            }
            break;
          case "pkce":
            if (this.flowType === "implicit") {
              throw new errors_1.AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
            }
            break;
          default:
        }
        if (callbackUrlType === "pkce") {
          this._debug("#_initialize()", "begin", "is PKCE flow", true);
          if (!params.code)
            throw new errors_1.AuthPKCEGrantCodeExchangeError("No code detected.");
          const { data: data2, error: error2 } = await this._exchangeCodeForSession(params.code);
          if (error2)
            throw error2;
          const url = new URL(window.location.href);
          url.searchParams.delete("code");
          window.history.replaceState(window.history.state, "", url.toString());
          return {
            data: { session: data2.session, redirectType: (_a = data2.redirectType) !== null && _a !== undefined ? _a : null },
            error: null
          };
        }
        const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
        if (!access_token || !expires_in || !refresh_token || !token_type) {
          throw new errors_1.AuthImplicitGrantRedirectError("No session defined in URL");
        }
        const timeNow = Math.round(Date.now() / 1000);
        const expiresIn = parseInt(expires_in);
        let expiresAt = timeNow + expiresIn;
        if (expires_at) {
          expiresAt = parseInt(expires_at);
        }
        const actuallyExpiresIn = expiresAt - timeNow;
        if (actuallyExpiresIn * 1000 <= constants_1.AUTO_REFRESH_TICK_DURATION_MS) {
          console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
        }
        const issuedAt = expiresAt - expiresIn;
        if (timeNow - issuedAt >= 120) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt, timeNow);
        } else if (timeNow - issuedAt < 0) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", issuedAt, expiresAt, timeNow);
        }
        const { data, error } = await this._getUser(access_token);
        if (error)
          throw error;
        const session = {
          provider_token,
          provider_refresh_token,
          access_token,
          expires_in: expiresIn,
          expires_at: expiresAt,
          refresh_token,
          token_type,
          user: data.user
        };
        window.location.hash = "";
        this._debug("#_getSessionFromURL()", "clearing window.location.hash");
        return this._returnResult({ data: { session, redirectType: params.type }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, redirectType: null }, error });
        }
        throw error;
      }
    }
    _isImplicitGrantCallback(params) {
      if (typeof this.detectSessionInUrl === "function") {
        return this.detectSessionInUrl(new URL(window.location.href), params);
      }
      return Boolean(params.access_token || params.error_description);
    }
    async _isPKCECallback(params) {
      const currentStorageContent = await (0, helpers_1.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      return !!(params.code && currentStorageContent);
    }
    async signOut(options = { scope: "global" }) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._signOut(options);
      });
    }
    async _signOut({ scope } = { scope: "global" }) {
      return await this._useSession(async (result) => {
        var _a;
        const { data, error: sessionError } = result;
        if (sessionError && !(0, errors_1.isAuthSessionMissingError)(sessionError)) {
          return this._returnResult({ error: sessionError });
        }
        const accessToken = (_a = data.session) === null || _a === undefined ? undefined : _a.access_token;
        if (accessToken) {
          const { error } = await this.admin.signOut(accessToken, scope);
          if (error) {
            if (!((0, errors_1.isAuthApiError)(error) && (error.status === 404 || error.status === 401 || error.status === 403) || (0, errors_1.isAuthSessionMissingError)(error))) {
              return this._returnResult({ error });
            }
          }
        }
        if (scope !== "others") {
          await this._removeSession();
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        }
        return this._returnResult({ error: null });
      });
    }
    onAuthStateChange(callback) {
      const id = (0, helpers_1.generateCallbackId)();
      const subscription = {
        id,
        callback,
        unsubscribe: () => {
          this._debug("#unsubscribe()", "state change callback with id removed", id);
          this.stateChangeEmitters.delete(id);
        }
      };
      this._debug("#onAuthStateChange()", "registered callback with id", id);
      this.stateChangeEmitters.set(id, subscription);
      (async () => {
        await this.initializePromise;
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(id);
        });
      })();
      return { data: { subscription } };
    }
    async _emitInitialSession(id) {
      return await this._useSession(async (result) => {
        var _a, _b;
        try {
          const { data: { session }, error } = result;
          if (error)
            throw error;
          await ((_a = this.stateChangeEmitters.get(id)) === null || _a === undefined ? undefined : _a.callback("INITIAL_SESSION", session));
          this._debug("INITIAL_SESSION", "callback id", id, "session", session);
        } catch (err) {
          await ((_b = this.stateChangeEmitters.get(id)) === null || _b === undefined ? undefined : _b.callback("INITIAL_SESSION", null));
          this._debug("INITIAL_SESSION", "callback id", id, "error", err);
          if ((0, errors_1.isAuthSessionMissingError)(err)) {
            console.warn(err);
          } else {
            console.error(err);
          }
        }
      });
    }
    async resetPasswordForEmail(email, options = {}) {
      let codeChallenge = null;
      let codeChallengeMethod = null;
      if (this.flowType === "pkce") {
        [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey, true);
      }
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email,
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod,
            gotrue_meta_security: { captcha_token: options.captchaToken }
          },
          headers: this.headers,
          redirectTo: options.redirectTo
        });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async getUserIdentities() {
      var _a;
      try {
        const { data, error } = await this.getUser();
        if (error)
          throw error;
        return this._returnResult({ data: { identities: (_a = data.user.identities) !== null && _a !== undefined ? _a : [] }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async linkIdentity(credentials) {
      if ("token" in credentials) {
        return this.linkIdentityIdToken(credentials);
      }
      return this.linkIdentityOAuth(credentials);
    }
    async linkIdentityOAuth(credentials) {
      var _a;
      try {
        const { data, error } = await this._useSession(async (result) => {
          var _a2, _b, _c, _d, _f;
          const { data: data2, error: error2 } = result;
          if (error2)
            throw error2;
          const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
            redirectTo: (_a2 = credentials.options) === null || _a2 === undefined ? undefined : _a2.redirectTo,
            scopes: (_b = credentials.options) === null || _b === undefined ? undefined : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === undefined ? undefined : _c.queryParams,
            skipBrowserRedirect: true
          });
          return await (0, fetch_1._request)(this.fetch, "GET", url, {
            headers: this.headers,
            jwt: (_f = (_d = data2.session) === null || _d === undefined ? undefined : _d.access_token) !== null && _f !== undefined ? _f : undefined
          });
        });
        if (error)
          throw error;
        if ((0, helpers_1.isBrowser)() && !((_a = credentials.options) === null || _a === undefined ? undefined : _a.skipBrowserRedirect)) {
          window.location.assign(data === null || data === undefined ? undefined : data.url);
        }
        return this._returnResult({
          data: { provider: credentials.provider, url: data === null || data === undefined ? undefined : data.url },
          error: null
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { provider: credentials.provider, url: null }, error });
        }
        throw error;
      }
    }
    async linkIdentityIdToken(credentials) {
      return await this._useSession(async (result) => {
        var _a;
        try {
          const { error: sessionError, data: { session } } = result;
          if (sessionError)
            throw sessionError;
          const { options, provider, token, access_token, nonce } = credentials;
          const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
            headers: this.headers,
            jwt: (_a = session === null || session === undefined ? undefined : session.access_token) !== null && _a !== undefined ? _a : undefined,
            body: {
              provider,
              id_token: token,
              access_token,
              nonce,
              link_identity: true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponse
          });
          const { data, error } = res;
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          } else if (!data || !data.session || !data.user) {
            return this._returnResult({
              data: { user: null, session: null },
              error: new errors_1.AuthInvalidTokenResponseError
            });
          }
          if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("USER_UPDATED", data.session);
          }
          return this._returnResult({ data, error });
        } catch (error) {
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          throw error;
        }
      });
    }
    async unlinkIdentity(identity) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
            headers: this.headers,
            jwt: (_b = (_a = data.session) === null || _a === undefined ? undefined : _a.access_token) !== null && _b !== undefined ? _b : undefined
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _refreshAccessToken(refreshToken) {
      const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        const startedAt = Date.now();
        return await (0, helpers_1.retryable)(async (attempt) => {
          if (attempt > 0) {
            await (0, helpers_1.sleep)(200 * Math.pow(2, attempt - 1));
          }
          this._debug(debugName, "refreshing attempt", attempt);
          return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
            body: { refresh_token: refreshToken },
            headers: this.headers,
            xform: fetch_1._sessionResponse
          });
        }, (attempt, error) => {
          const nextBackOffInterval = 200 * Math.pow(2, attempt);
          return error && (0, errors_1.isAuthRetryableFetchError)(error) && Date.now() + nextBackOffInterval - startedAt < constants_1.AUTO_REFRESH_TICK_DURATION_MS;
        });
      } catch (error) {
        this._debug(debugName, "error", error);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      } finally {
        this._debug(debugName, "end");
      }
    }
    _isValidSession(maybeSession) {
      const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
      return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
      const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
        redirectTo: options.redirectTo,
        scopes: options.scopes,
        queryParams: options.queryParams
      });
      this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
      if ((0, helpers_1.isBrowser)() && !options.skipBrowserRedirect) {
        window.location.assign(url);
      }
      return { data: { provider, url }, error: null };
    }
    async _recoverAndRefresh() {
      var _a, _b;
      const debugName = "#_recoverAndRefresh()";
      this._debug(debugName, "begin");
      try {
        const currentSession = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
        if (currentSession && this.userStorage) {
          let maybeUser = await (0, helpers_1.getItemAsync)(this.userStorage, this.storageKey + "-user");
          if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !maybeUser) {
            maybeUser = { user: currentSession.user };
            await (0, helpers_1.setItemAsync)(this.userStorage, this.storageKey + "-user", maybeUser);
          }
          currentSession.user = (_a = maybeUser === null || maybeUser === undefined ? undefined : maybeUser.user) !== null && _a !== undefined ? _a : (0, helpers_1.userNotAvailableProxy)();
        } else if (currentSession && !currentSession.user) {
          if (!currentSession.user) {
            const separateUser = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey + "-user");
            if (separateUser && (separateUser === null || separateUser === undefined ? undefined : separateUser.user)) {
              currentSession.user = separateUser.user;
              await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-user");
              await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, currentSession);
            } else {
              currentSession.user = (0, helpers_1.userNotAvailableProxy)();
            }
          }
        }
        this._debug(debugName, "session from storage", currentSession);
        if (!this._isValidSession(currentSession)) {
          this._debug(debugName, "session is not valid");
          if (currentSession !== null) {
            await this._removeSession();
          }
          return;
        }
        const expiresWithMargin = ((_b = currentSession.expires_at) !== null && _b !== undefined ? _b : Infinity) * 1000 - Date.now() < constants_1.EXPIRY_MARGIN_MS;
        this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${constants_1.EXPIRY_MARGIN_MS}s`);
        if (expiresWithMargin) {
          if (this.autoRefreshToken && currentSession.refresh_token) {
            const { error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) {
              console.error(error);
              if (!(0, errors_1.isAuthRetryableFetchError)(error)) {
                this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                await this._removeSession();
              }
            }
          }
        } else if (currentSession.user && currentSession.user.__isUserNotAvailableProxy === true) {
          try {
            const { data, error: userError } = await this._getUser(currentSession.access_token);
            if (!userError && (data === null || data === undefined ? undefined : data.user)) {
              currentSession.user = data.user;
              await this._saveSession(currentSession);
              await this._notifyAllSubscribers("SIGNED_IN", currentSession);
            } else {
              this._debug(debugName, "could not get user data, skipping SIGNED_IN notification");
            }
          } catch (getUserError) {
            console.error("Error getting user data:", getUserError);
            this._debug(debugName, "error getting user data, skipping SIGNED_IN notification", getUserError);
          }
        } else {
          await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        }
      } catch (err) {
        this._debug(debugName, "error", err);
        console.error(err);
        return;
      } finally {
        this._debug(debugName, "end");
      }
    }
    async _callRefreshToken(refreshToken) {
      var _a, _b;
      if (!refreshToken) {
        throw new errors_1.AuthSessionMissingError;
      }
      if (this.refreshingDeferred) {
        return this.refreshingDeferred.promise;
      }
      const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        this.refreshingDeferred = new helpers_1.Deferred;
        const { data, error } = await this._refreshAccessToken(refreshToken);
        if (error)
          throw error;
        if (!data.session)
          throw new errors_1.AuthSessionMissingError;
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
        const result = { data: data.session, error: null };
        this.refreshingDeferred.resolve(result);
        return result;
      } catch (error) {
        this._debug(debugName, "error", error);
        if ((0, errors_1.isAuthError)(error)) {
          const result = { data: null, error };
          if (!(0, errors_1.isAuthRetryableFetchError)(error)) {
            await this._removeSession();
          }
          (_a = this.refreshingDeferred) === null || _a === undefined || _a.resolve(result);
          return result;
        }
        (_b = this.refreshingDeferred) === null || _b === undefined || _b.reject(error);
        throw error;
      } finally {
        this.refreshingDeferred = null;
        this._debug(debugName, "end");
      }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
      const debugName = `#_notifyAllSubscribers(${event})`;
      this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
      try {
        if (this.broadcastChannel && broadcast) {
          this.broadcastChannel.postMessage({ event, session });
        }
        const errors = [];
        const promises = Array.from(this.stateChangeEmitters.values()).map(async (x) => {
          try {
            await x.callback(event, session);
          } catch (e) {
            errors.push(e);
          }
        });
        await Promise.all(promises);
        if (errors.length > 0) {
          for (let i = 0;i < errors.length; i += 1) {
            console.error(errors[i]);
          }
          throw errors[0];
        }
      } finally {
        this._debug(debugName, "end");
      }
    }
    async _saveSession(session) {
      this._debug("#_saveSession()", session);
      this.suppressGetSessionWarning = true;
      await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      const sessionToProcess = Object.assign({}, session);
      const userIsProxy = sessionToProcess.user && sessionToProcess.user.__isUserNotAvailableProxy === true;
      if (this.userStorage) {
        if (!userIsProxy && sessionToProcess.user) {
          await (0, helpers_1.setItemAsync)(this.userStorage, this.storageKey + "-user", {
            user: sessionToProcess.user
          });
        } else if (userIsProxy) {}
        const mainSessionData = Object.assign({}, sessionToProcess);
        delete mainSessionData.user;
        const clonedMainSessionData = (0, helpers_1.deepClone)(mainSessionData);
        await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, clonedMainSessionData);
      } else {
        const clonedSession = (0, helpers_1.deepClone)(sessionToProcess);
        await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, clonedSession);
      }
    }
    async _removeSession() {
      this._debug("#_removeSession()");
      this.suppressGetSessionWarning = false;
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey);
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-code-verifier");
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-user");
      if (this.userStorage) {
        await (0, helpers_1.removeItemAsync)(this.userStorage, this.storageKey + "-user");
      }
      await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const callback = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        if (callback && (0, helpers_1.isBrowser)() && (window === null || window === undefined ? undefined : window.removeEventListener)) {
          window.removeEventListener("visibilitychange", callback);
        }
      } catch (e) {
        console.error("removing visibilitychange callback failed", e);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh();
      this._debug("#_startAutoRefresh()");
      const ticker = setInterval(() => this._autoRefreshTokenTick(), constants_1.AUTO_REFRESH_TICK_DURATION_MS);
      this.autoRefreshTicker = ticker;
      if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") {
        ticker.unref();
      } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
        Deno.unrefTimer(ticker);
      }
      const timeout = setTimeout(async () => {
        await this.initializePromise;
        await this._autoRefreshTokenTick();
      }, 0);
      this.autoRefreshTickTimeout = timeout;
      if (timeout && typeof timeout === "object" && typeof timeout.unref === "function") {
        timeout.unref();
      } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
        Deno.unrefTimer(timeout);
      }
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const ticker = this.autoRefreshTicker;
      this.autoRefreshTicker = null;
      if (ticker) {
        clearInterval(ticker);
      }
      const timeout = this.autoRefreshTickTimeout;
      this.autoRefreshTickTimeout = null;
      if (timeout) {
        clearTimeout(timeout);
      }
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const now = Date.now();
            try {
              return await this._useSession(async (result) => {
                const { data: { session } } = result;
                if (!session || !session.refresh_token || !session.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / constants_1.AUTO_REFRESH_TICK_DURATION_MS);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${constants_1.AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${constants_1.AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                if (expiresInTicks <= constants_1.AUTO_REFRESH_TICK_THRESHOLD) {
                  await this._callRefreshToken(session.refresh_token);
                }
              });
            } catch (e) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e instanceof locks_1.LockAcquireTimeoutError) {
          this._debug("auto refresh token tick lock not available");
        } else {
          throw e;
        }
      }
    }
    async _handleVisibilityChange() {
      this._debug("#_handleVisibilityChange()");
      if (!(0, helpers_1.isBrowser)() || !(window === null || window === undefined ? undefined : window.addEventListener)) {
        if (this.autoRefreshToken) {
          this.startAutoRefresh();
        }
        return false;
      }
      try {
        this.visibilityChangedCallback = async () => {
          try {
            await this._onVisibilityChanged(false);
          } catch (error) {
            this._debug("#visibilityChangedCallback", "error", error);
          }
        };
        window === null || window === undefined || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
        await this._onVisibilityChanged(true);
      } catch (error) {
        console.error("_handleVisibilityChange", error);
      }
    }
    async _onVisibilityChanged(calledFromInitialize) {
      const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
      this._debug(methodName, "visibilityState", document.visibilityState);
      if (document.visibilityState === "visible") {
        if (this.autoRefreshToken) {
          this._startAutoRefresh();
        }
        if (!calledFromInitialize) {
          await this.initializePromise;
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
              return;
            }
            await this._recoverAndRefresh();
          });
        }
      } else if (document.visibilityState === "hidden") {
        if (this.autoRefreshToken) {
          this._stopAutoRefresh();
        }
      }
    }
    async _getUrlForProvider(url, provider, options) {
      const urlParams = [`provider=${encodeURIComponent(provider)}`];
      if (options === null || options === undefined ? undefined : options.redirectTo) {
        urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
      }
      if (options === null || options === undefined ? undefined : options.scopes) {
        urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
      }
      if (this.flowType === "pkce") {
        const [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
        const flowParams = new URLSearchParams({
          code_challenge: `${encodeURIComponent(codeChallenge)}`,
          code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
        });
        urlParams.push(flowParams.toString());
      }
      if (options === null || options === undefined ? undefined : options.queryParams) {
        const query = new URLSearchParams(options.queryParams);
        urlParams.push(query.toString());
      }
      if (options === null || options === undefined ? undefined : options.skipBrowserRedirect) {
        urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
      }
      return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _enroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          const body = Object.assign({ friendly_name: params.friendlyName, factor_type: params.factorType }, params.factorType === "phone" ? { phone: params.phone } : params.factorType === "totp" ? { issuer: params.issuer } : {});
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors`, {
            body,
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          if (params.factorType === "totp" && data.type === "totp" && ((_b = data === null || data === undefined ? undefined : data.totp) === null || _b === undefined ? undefined : _b.qr_code)) {
            data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _verify(params) {
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const body = Object.assign({ challenge_id: params.challengeId }, "webauthn" in params ? {
              webauthn: Object.assign(Object.assign({}, params.webauthn), { credential_response: params.webauthn.type === "create" ? (0, webauthn_1.serializeCredentialCreationResponse)(params.webauthn.credential_response) : (0, webauthn_1.serializeCredentialRequestResponse)(params.webauthn.credential_response) })
            } : { code: params.code });
            const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
              body,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
            });
            if (error) {
              return this._returnResult({ data: null, error });
            }
            await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1000) + data.expires_in }, data));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
            return this._returnResult({ data, error });
          });
        } catch (error) {
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    async _challenge(params) {
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
              body: params,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
            });
            if (response.error) {
              return response;
            }
            const { data } = response;
            if (data.type !== "webauthn") {
              return { data, error: null };
            }
            switch (data.webauthn.type) {
              case "create":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: (0, webauthn_1.deserializeCredentialCreationOptions)(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
              case "request":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: (0, webauthn_1.deserializeCredentialRequestOptions)(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
            }
          });
        } catch (error) {
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    async _challengeAndVerify(params) {
      const { data: challengeData, error: challengeError } = await this._challenge({
        factorId: params.factorId
      });
      if (challengeError) {
        return this._returnResult({ data: null, error: challengeError });
      }
      return await this._verify({
        factorId: params.factorId,
        challengeId: challengeData.id,
        code: params.code
      });
    }
    async _listFactors() {
      var _a;
      const { data: { user }, error: userError } = await this.getUser();
      if (userError) {
        return { data: null, error: userError };
      }
      const data = {
        all: [],
        phone: [],
        totp: [],
        webauthn: []
      };
      for (const factor of (_a = user === null || user === undefined ? undefined : user.factors) !== null && _a !== undefined ? _a : []) {
        data.all.push(factor);
        if (factor.status === "verified") {
          data[factor.factor_type].push(factor);
        }
      }
      return {
        data,
        error: null
      };
    }
    async _getAuthenticatorAssuranceLevel(jwt) {
      var _a, _b, _c, _d;
      if (jwt) {
        try {
          const { payload: payload2 } = (0, helpers_1.decodeJWT)(jwt);
          let currentLevel2 = null;
          if (payload2.aal) {
            currentLevel2 = payload2.aal;
          }
          let nextLevel2 = currentLevel2;
          const { data: { user }, error: userError } = await this.getUser(jwt);
          if (userError) {
            return this._returnResult({ data: null, error: userError });
          }
          const verifiedFactors2 = (_b = (_a = user === null || user === undefined ? undefined : user.factors) === null || _a === undefined ? undefined : _a.filter((factor) => factor.status === "verified")) !== null && _b !== undefined ? _b : [];
          if (verifiedFactors2.length > 0) {
            nextLevel2 = "aal2";
          }
          const currentAuthenticationMethods2 = payload2.amr || [];
          return { data: { currentLevel: currentLevel2, nextLevel: nextLevel2, currentAuthenticationMethods: currentAuthenticationMethods2 }, error: null };
        } catch (error) {
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      }
      const { data: { session }, error: sessionError } = await this.getSession();
      if (sessionError) {
        return this._returnResult({ data: null, error: sessionError });
      }
      if (!session) {
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      }
      const { payload } = (0, helpers_1.decodeJWT)(session.access_token);
      let currentLevel = null;
      if (payload.aal) {
        currentLevel = payload.aal;
      }
      let nextLevel = currentLevel;
      const verifiedFactors = (_d = (_c = session.user.factors) === null || _c === undefined ? undefined : _c.filter((factor) => factor.status === "verified")) !== null && _d !== undefined ? _d : [];
      if (verifiedFactors.length > 0) {
        nextLevel = "aal2";
      }
      const currentAuthenticationMethods = payload.amr || [];
      return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
    }
    async _getAuthorizationDetails(authorizationId) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/oauth/authorizations/${authorizationId}`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _approveAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "approve" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if ((0, helpers_1.isBrowser)() && !(options === null || options === undefined ? undefined : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _denyAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "deny" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if ((0, helpers_1.isBrowser)() && !(options === null || options === undefined ? undefined : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _listOAuthGrants() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _revokeOAuthGrant(options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            query: { client_id: options.clientId },
            noResolveJson: true
          });
          return { data: {}, error: null };
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async fetchJwk(kid, jwks = { keys: [] }) {
      let jwk = jwks.keys.find((key) => key.kid === kid);
      if (jwk) {
        return jwk;
      }
      const now = Date.now();
      jwk = this.jwks.keys.find((key) => key.kid === kid);
      if (jwk && this.jwks_cached_at + constants_1.JWKS_TTL > now) {
        return jwk;
      }
      const { data, error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
        headers: this.headers
      });
      if (error) {
        throw error;
      }
      if (!data.keys || data.keys.length === 0) {
        return null;
      }
      this.jwks = data;
      this.jwks_cached_at = now;
      jwk = data.keys.find((key) => key.kid === kid);
      if (!jwk) {
        return null;
      }
      return jwk;
    }
    async getClaims(jwt, options = {}) {
      try {
        let token = jwt;
        if (!token) {
          const { data, error } = await this.getSession();
          if (error || !data.session) {
            return this._returnResult({ data: null, error });
          }
          token = data.session.access_token;
        }
        const { header, payload, signature, raw: { header: rawHeader, payload: rawPayload } } = (0, helpers_1.decodeJWT)(token);
        if (!(options === null || options === undefined ? undefined : options.allowExpired)) {
          (0, helpers_1.validateExp)(payload.exp);
        }
        const signingKey = !header.alg || header.alg.startsWith("HS") || !header.kid || !(("crypto" in globalThis) && ("subtle" in globalThis.crypto)) ? null : await this.fetchJwk(header.kid, (options === null || options === undefined ? undefined : options.keys) ? { keys: options.keys } : options === null || options === undefined ? undefined : options.jwks);
        if (!signingKey) {
          const { error } = await this.getUser(token);
          if (error) {
            throw error;
          }
          return {
            data: {
              claims: payload,
              header,
              signature
            },
            error: null
          };
        }
        const algorithm = (0, helpers_1.getAlgorithm)(header.alg);
        const publicKey = await crypto.subtle.importKey("jwk", signingKey, algorithm, true, [
          "verify"
        ]);
        const isValid = await crypto.subtle.verify(algorithm, publicKey, signature, (0, base64url_1.stringToUint8Array)(`${rawHeader}.${rawPayload}`));
        if (!isValid) {
          throw new errors_1.AuthInvalidJwtError("Invalid JWT signature");
        }
        return {
          data: {
            claims: payload,
            header,
            signature
          },
          error: null
        };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async signInWithPasskey(credentials) {
      var _a, _b, _c;
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        if (!(0, webauthn_1.browserSupportsWebAuthn)()) {
          return this._returnResult({
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          });
        }
        const { data: options, error: optionsError } = await this._startPasskeyAuthentication({
          options: { captchaToken: (_a = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _a === undefined ? undefined : _a.captchaToken }
        });
        if (optionsError || !options) {
          return this._returnResult({ data: null, error: optionsError });
        }
        const publicKeyOptions = (0, webauthn_1.deserializeCredentialRequestOptions)(options.options);
        const signal = (_c = (_b = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _b === undefined ? undefined : _b.signal) !== null && _c !== undefined ? _c : webauthn_1.webAuthnAbortService.createNewAbortSignal();
        const { data: credential, error: credentialError } = await (0, webauthn_1.getCredential)({
          publicKey: publicKeyOptions,
          signal
        });
        if (credentialError || !credential) {
          return this._returnResult({
            data: null,
            error: credentialError !== null && credentialError !== undefined ? credentialError : new errors_1.AuthUnknownError("WebAuthn ceremony failed", null)
          });
        }
        const serialized = (0, webauthn_1.serializeCredentialRequestResponse)(credential);
        return this._verifyPasskeyAuthentication({
          challengeId: options.challenge_id,
          credential: serialized
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async registerPasskey(credentials) {
      var _a, _b;
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        if (!(0, webauthn_1.browserSupportsWebAuthn)()) {
          return this._returnResult({
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          });
        }
        const { data: options, error: optionsError } = await this._startPasskeyRegistration();
        if (optionsError || !options) {
          return this._returnResult({ data: null, error: optionsError });
        }
        const publicKeyOptions = (0, webauthn_1.deserializeCredentialCreationOptions)(options.options);
        const signal = (_b = (_a = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _a === undefined ? undefined : _a.signal) !== null && _b !== undefined ? _b : webauthn_1.webAuthnAbortService.createNewAbortSignal();
        const { data: credential, error: credentialError } = await (0, webauthn_1.createCredential)({
          publicKey: publicKeyOptions,
          signal
        });
        if (credentialError || !credential) {
          return this._returnResult({
            data: null,
            error: credentialError !== null && credentialError !== undefined ? credentialError : new errors_1.AuthUnknownError("WebAuthn ceremony failed", null)
          });
        }
        const serialized = (0, webauthn_1.serializeCredentialCreationResponse)(credential);
        return this._verifyPasskeyRegistration({
          challengeId: options.challenge_id,
          credential: serialized
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _startPasskeyRegistration() {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
            headers: this.headers,
            jwt: session.access_token,
            body: {}
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _verifyPasskeyRegistration(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
            headers: this.headers,
            jwt: session.access_token,
            body: {
              challenge_id: params.challengeId,
              credential: params.credential
            }
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _startPasskeyAuthentication(params) {
      var _a;
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
          headers: this.headers,
          body: {
            gotrue_meta_security: { captcha_token: (_a = params === null || params === undefined ? undefined : params.options) === null || _a === undefined ? undefined : _a.captchaToken }
          }
        });
        if (error) {
          return this._returnResult({ data: null, error });
        }
        return this._returnResult({ data, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _verifyPasskeyAuthentication(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
          headers: this.headers,
          body: {
            challenge_id: params.challengeId,
            credential: params.credential
          },
          xform: fetch_1._sessionResponse
        });
        if (error) {
          return this._returnResult({ data: null, error });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _listPasskeys() {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const { data, error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/passkeys`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data2) => ({ data: data2, error: null })
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _updatePasskey(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const { data, error } = await (0, fetch_1._request)(this.fetch, "PATCH", `${this.url}/passkeys/${params.passkeyId}`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { friendly_name: params.friendlyName }
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _deletePasskey(params) {
      (0, helpers_1.assertPasskeyExperimentalEnabled)(this.experimental);
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const { error } = await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/passkeys/${params.passkeyId}`, {
            headers: this.headers,
            jwt: session.access_token,
            noResolveJson: true
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          return this._returnResult({ data: null, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
  }
  GoTrueClient.nextInstanceID = {};
  exports2.default = GoTrueClient;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/AuthAdminApi.js
var require_AuthAdminApi = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  var AuthAdminApi = GoTrueAdminApi_1.default;
  exports2.default = AuthAdminApi;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/AuthClient.js
var require_AuthClient = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  var GoTrueClient_1 = tslib_1.__importDefault(require_GoTrueClient());
  var AuthClient = GoTrueClient_1.default;
  exports2.default = AuthClient;
});

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/node_modules/@supabase/auth-js/dist/main/index.js
var require_main3 = __commonJS((exports2) => {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.processLock = exports2.lockInternals = exports2.NavigatorLockAcquireTimeoutError = exports2.navigatorLock = exports2.AuthClient = exports2.AuthAdminApi = exports2.GoTrueClient = exports2.GoTrueAdminApi = undefined;
  var tslib_1 = require_tslib();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  exports2.GoTrueAdminApi = GoTrueAdminApi_1.default;
  var GoTrueClient_1 = tslib_1.__importDefault(require_GoTrueClient());
  exports2.GoTrueClient = GoTrueClient_1.default;
  var AuthAdminApi_1 = tslib_1.__importDefault(require_AuthAdminApi());
  exports2.AuthAdminApi = AuthAdminApi_1.default;
  var AuthClient_1 = tslib_1.__importDefault(require_AuthClient());
  exports2.AuthClient = AuthClient_1.default;
  tslib_1.__exportStar(require_types2(), exports2);
  tslib_1.__exportStar(require_errors(), exports2);
  var locks_1 = require_locks();
  Object.defineProperty(exports2, "navigatorLock", { enumerable: true, get: function() {
    return locks_1.navigatorLock;
  } });
  Object.defineProperty(exports2, "NavigatorLockAcquireTimeoutError", { enumerable: true, get: function() {
    return locks_1.NavigatorLockAcquireTimeoutError;
  } });
  Object.defineProperty(exports2, "lockInternals", { enumerable: true, get: function() {
    return locks_1.internals;
  } });
  Object.defineProperty(exports2, "processLock", { enumerable: true, get: function() {
    return locks_1.processLock;
  } });
});

// src/commands/standup-cli.ts
init_events();
init_properties();

// ../../packages/plugin-common/src/supabase/standup.ts
async function fetchUserTeamAndProfile(supabase, userId, workspaceId, options) {
  const { logger, onError } = options ?? {};
  try {
    logger?.debug("Fetching team and profile for standup", userId, workspaceId);
    const { data: membershipData, error: membershipError } = await supabase.from("team_memberships").select(`
        team_id,
        teams!inner (
          workspace_id
        )
      `).eq("user_id", userId).eq("teams.workspace_id", workspaceId).limit(1).single();
    if (membershipError || !membershipData) {
      logger?.error("Failed to fetch team membership", membershipError);
      if (membershipError) {
        onError?.(new Error(membershipError.message), { endpoint: "team_memberships" });
      }
      return null;
    }
    const { data: profileData, error: profileError } = await supabase.from("profiles").select("slug, timezone").eq("id", userId).single();
    if (profileError || !profileData) {
      logger?.error("Failed to fetch user profile", profileError);
      if (profileError) {
        onError?.(new Error(profileError.message), { endpoint: "profiles" });
      }
      return null;
    }
    return {
      teamId: membershipData.team_id,
      userSlug: profileData.slug,
      timezone: profileData.timezone ?? null
    };
  } catch (error) {
    logger?.error("Error fetching team and profile for standup", error);
    if (error instanceof Error) {
      onError?.(error, { endpoint: "team_memberships" });
    }
    return null;
  }
}
async function fetchAutoRefreshEligibility(supabase, workspaceId, userId, options) {
  const { logger, onError } = options ?? {};
  try {
    logger?.debug("Fetching auto-refresh eligibility", workspaceId, userId);
    const { data, error } = await supabase.rpc("check_auto_refresh_eligibility", {
      p_workspace_id: workspaceId,
      p_user_id: userId
    }).maybeSingle();
    if (error) {
      logger?.error("Failed to fetch auto-refresh eligibility", error);
      onError?.(new Error(error.message), { endpoint: "check_auto_refresh_eligibility" });
      return null;
    }
    return data;
  } catch (error) {
    logger?.error("Error fetching auto-refresh eligibility", error);
    if (error instanceof Error) {
      onError?.(error, { endpoint: "check_auto_refresh_eligibility" });
    }
    return null;
  }
}
async function fetchDefaultStandupPromptId(supabase, workspaceId, options) {
  const { logger, onError } = options ?? {};
  try {
    logger?.debug("Fetching default standup prompt", workspaceId);
    const { data, error } = await supabase.from("custom_prompts").select("id").eq("type", "standup").eq("is_enabled", true).eq("workspace_id", workspaceId).order("is_default", { ascending: false }).order("display_order", { ascending: true }).order("version", { ascending: false }).limit(1).single();
    if (error || !data) {
      logger?.error("Failed to fetch standup prompt", error);
      if (error) {
        onError?.(new Error(error.message), { endpoint: "custom_prompts" });
      }
      return null;
    }
    return data.id;
  } catch (error) {
    logger?.error("Error fetching standup prompt", error);
    if (error instanceof Error) {
      onError?.(error, { endpoint: "custom_prompts" });
    }
    return null;
  }
}

// src/commands/standup-cli.ts
init_src();
init_analytics2();
init_session_manager2();
init_constants();

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/dist/index.mjs
var exports_dist3 = {};
__export(exports_dist3, {
  createClient: () => createClient,
  SupabaseClient: () => SupabaseClient,
  StorageApiError: () => StorageApiError,
  PostgrestError: () => PostgrestError,
  FunctionsRelayError: () => import_functions_js.FunctionsRelayError,
  FunctionsHttpError: () => import_functions_js.FunctionsHttpError,
  FunctionsFetchError: () => import_functions_js.FunctionsFetchError,
  FunctionsError: () => import_functions_js.FunctionsError,
  FunctionRegion: () => import_functions_js.FunctionRegion
});
var import_functions_js = __toESM(require_main(), 1);

// ../../node_modules/.bun/@supabase+postgrest-js@2.105.4/node_modules/@supabase/postgrest-js/dist/index.mjs
var exports_dist = {};
__export(exports_dist, {
  default: () => src_default,
  PostgrestTransformBuilder: () => PostgrestTransformBuilder,
  PostgrestQueryBuilder: () => PostgrestQueryBuilder,
  PostgrestFilterBuilder: () => PostgrestFilterBuilder,
  PostgrestError: () => PostgrestError,
  PostgrestClient: () => PostgrestClient,
  PostgrestBuilder: () => PostgrestBuilder
});
var DEFAULT_MAX_RETRIES = 3;
var getRetryDelay = (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000);
var RETRYABLE_STATUS_CODES = [520, 503];
var RETRYABLE_METHODS = [
  "GET",
  "HEAD",
  "OPTIONS"
];
var PostgrestError = class extends Error {
  constructor(context) {
    super(context.message);
    this.name = "PostgrestError";
    this.details = context.details;
    this.hint = context.hint;
    this.code = context.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
function sleep(ms, signal) {
  return new Promise((resolve) => {
    if (signal === null || signal === undefined ? undefined : signal.aborted) {
      resolve();
      return;
    }
    const id = setTimeout(() => {
      signal === null || signal === undefined || signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    function onAbort() {
      clearTimeout(id);
      resolve();
    }
    signal === null || signal === undefined || signal.addEventListener("abort", onAbort);
  });
}
function shouldRetry(method, status, attemptCount, retryEnabled) {
  if (!retryEnabled || attemptCount >= DEFAULT_MAX_RETRIES)
    return false;
  if (!RETRYABLE_METHODS.includes(method))
    return false;
  if (!RETRYABLE_STATUS_CODES.includes(status))
    return false;
  return true;
}
var PostgrestBuilder = class {
  constructor(builder) {
    var _builder$shouldThrowO, _builder$isMaybeSingl, _builder$shouldStripN, _builder$urlLengthLim, _builder$retry;
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = new Headers(builder.headers);
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== undefined ? _builder$shouldThrowO : false;
    this.signal = builder.signal;
    this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== undefined ? _builder$isMaybeSingl : false;
    this.shouldStripNulls = (_builder$shouldStripN = builder.shouldStripNulls) !== null && _builder$shouldStripN !== undefined ? _builder$shouldStripN : false;
    this.urlLengthLimit = (_builder$urlLengthLim = builder.urlLengthLimit) !== null && _builder$urlLengthLim !== undefined ? _builder$urlLengthLim : 8000;
    this.retryEnabled = (_builder$retry = builder.retry) !== null && _builder$retry !== undefined ? _builder$retry : true;
    if (builder.fetch)
      this.fetch = builder.fetch;
    else
      this.fetch = fetch;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv")
      throw new Error("stripNulls() cannot be used with csv()");
    this.shouldStripNulls = true;
    return this;
  }
  setHeader(name, value) {
    this.headers = new Headers(this.headers);
    this.headers.set(name, value);
    return this;
  }
  retry(enabled) {
    this.retryEnabled = enabled;
    return this;
  }
  then(onfulfilled, onrejected) {
    var _this = this;
    if (this.schema === undefined) {} else if (["GET", "HEAD"].includes(this.method))
      this.headers.set("Accept-Profile", this.schema);
    else
      this.headers.set("Content-Profile", this.schema);
    if (this.method !== "GET" && this.method !== "HEAD")
      this.headers.set("Content-Type", "application/json");
    if (this.shouldStripNulls) {
      const currentAccept = this.headers.get("Accept");
      if (currentAccept === "application/vnd.pgrst.object+json")
        this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped");
      else if (!currentAccept || currentAccept === "application/json")
        this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
    }
    const _fetch = this.fetch;
    const executeWithRetry = async () => {
      let attemptCount = 0;
      while (true) {
        const requestHeaders = new Headers(_this.headers);
        if (attemptCount > 0)
          requestHeaders.set("X-Retry-Count", String(attemptCount));
        let res$1;
        try {
          res$1 = await _fetch(_this.url.toString(), {
            method: _this.method,
            headers: requestHeaders,
            body: JSON.stringify(_this.body, (_, value) => typeof value === "bigint" ? value.toString() : value),
            signal: _this.signal
          });
        } catch (fetchError) {
          if ((fetchError === null || fetchError === undefined ? undefined : fetchError.name) === "AbortError" || (fetchError === null || fetchError === undefined ? undefined : fetchError.code) === "ABORT_ERR")
            throw fetchError;
          if (!RETRYABLE_METHODS.includes(_this.method))
            throw fetchError;
          if (_this.retryEnabled && attemptCount < DEFAULT_MAX_RETRIES) {
            const delay = getRetryDelay(attemptCount);
            attemptCount++;
            await sleep(delay, _this.signal);
            continue;
          }
          throw fetchError;
        }
        if (shouldRetry(_this.method, res$1.status, attemptCount, _this.retryEnabled)) {
          var _res$headers$get, _res$headers;
          const retryAfterHeader = (_res$headers$get = (_res$headers = res$1.headers) === null || _res$headers === undefined ? undefined : _res$headers.get("Retry-After")) !== null && _res$headers$get !== undefined ? _res$headers$get : null;
          const delay = retryAfterHeader !== null ? Math.max(0, parseInt(retryAfterHeader, 10) || 0) * 1000 : getRetryDelay(attemptCount);
          await res$1.text();
          attemptCount++;
          await sleep(delay, _this.signal);
          continue;
        }
        return await _this.processResponse(res$1);
      }
    };
    let res = executeWithRetry();
    if (!this.shouldThrowOnError)
      res = res.catch((fetchError) => {
        var _fetchError$name2;
        let errorDetails = "";
        let hint = "";
        let code = "";
        const cause = fetchError === null || fetchError === undefined ? undefined : fetchError.cause;
        if (cause) {
          var _cause$message, _cause$code, _fetchError$name, _cause$name;
          const causeMessage = (_cause$message = cause === null || cause === undefined ? undefined : cause.message) !== null && _cause$message !== undefined ? _cause$message : "";
          const causeCode = (_cause$code = cause === null || cause === undefined ? undefined : cause.code) !== null && _cause$code !== undefined ? _cause$code : "";
          errorDetails = `${(_fetchError$name = fetchError === null || fetchError === undefined ? undefined : fetchError.name) !== null && _fetchError$name !== undefined ? _fetchError$name : "FetchError"}: ${fetchError === null || fetchError === undefined ? undefined : fetchError.message}`;
          errorDetails += `

Caused by: ${(_cause$name = cause === null || cause === undefined ? undefined : cause.name) !== null && _cause$name !== undefined ? _cause$name : "Error"}: ${causeMessage}`;
          if (causeCode)
            errorDetails += ` (${causeCode})`;
          if (cause === null || cause === undefined ? undefined : cause.stack)
            errorDetails += `
${cause.stack}`;
        } else {
          var _fetchError$stack;
          errorDetails = (_fetchError$stack = fetchError === null || fetchError === undefined ? undefined : fetchError.stack) !== null && _fetchError$stack !== undefined ? _fetchError$stack : "";
        }
        const urlLength = this.url.toString().length;
        if ((fetchError === null || fetchError === undefined ? undefined : fetchError.name) === "AbortError" || (fetchError === null || fetchError === undefined ? undefined : fetchError.code) === "ABORT_ERR") {
          code = "";
          hint = "Request was aborted (timeout or manual cancellation)";
          if (urlLength > this.urlLengthLimit)
            hint += `. Note: Your request URL is ${urlLength} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
        } else if ((cause === null || cause === undefined ? undefined : cause.name) === "HeadersOverflowError" || (cause === null || cause === undefined ? undefined : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
          code = "";
          hint = "HTTP headers exceeded server limits (typically 16KB)";
          if (urlLength > this.urlLengthLimit)
            hint += `. Your request URL is ${urlLength} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
        }
        return {
          success: false,
          error: {
            message: `${(_fetchError$name2 = fetchError === null || fetchError === undefined ? undefined : fetchError.name) !== null && _fetchError$name2 !== undefined ? _fetchError$name2 : "FetchError"}: ${fetchError === null || fetchError === undefined ? undefined : fetchError.message}`,
            details: errorDetails,
            hint,
            code
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    return res.then(onfulfilled, onrejected);
  }
  async processResponse(res) {
    var _this2 = this;
    let error = null;
    let data = null;
    let count = null;
    let status = res.status;
    let statusText = res.statusText;
    if (res.ok) {
      var _this$headers$get2, _res$headers$get2;
      if (_this2.method !== "HEAD") {
        var _this$headers$get;
        const body = await res.text();
        if (body === "") {} else if (_this2.headers.get("Accept") === "text/csv")
          data = body;
        else if (_this2.headers.get("Accept") && ((_this$headers$get = _this2.headers.get("Accept")) === null || _this$headers$get === undefined ? undefined : _this$headers$get.includes("application/vnd.pgrst.plan+text")))
          data = body;
        else
          data = JSON.parse(body);
      }
      const countHeader = (_this$headers$get2 = _this2.headers.get("Prefer")) === null || _this$headers$get2 === undefined ? undefined : _this$headers$get2.match(/count=(exact|planned|estimated)/);
      const contentRange = (_res$headers$get2 = res.headers.get("content-range")) === null || _res$headers$get2 === undefined ? undefined : _res$headers$get2.split("/");
      if (countHeader && contentRange && contentRange.length > 1)
        count = parseInt(contentRange[1]);
      if (_this2.isMaybeSingle && Array.isArray(data))
        if (data.length > 1) {
          error = {
            code: "PGRST116",
            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          };
          data = null;
          count = null;
          status = 406;
          statusText = "Not Acceptable";
        } else if (data.length === 1)
          data = data[0];
        else
          data = null;
    } else {
      const body = await res.text();
      try {
        error = JSON.parse(body);
        if (Array.isArray(error) && res.status === 404) {
          data = [];
          error = null;
          status = 200;
          statusText = "OK";
        }
      } catch (_unused) {
        if (res.status === 404 && body === "") {
          status = 204;
          statusText = "No Content";
        } else
          error = { message: body };
      }
      if (error && _this2.shouldThrowOnError)
        throw new PostgrestError(error);
    }
    return {
      success: error === null,
      error,
      data,
      count,
      status,
      statusText
    };
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var PostgrestTransformBuilder = class extends PostgrestBuilder {
  select(columns) {
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== undefined ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted)
        return "";
      if (c === '"')
        quoted = !quoted;
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.order` : "order";
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === undefined ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(key, `${count}`);
    return this;
  }
  range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
    const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
    const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
    var _this$headers$get;
    const options = [
      analyze ? "analyze" : null,
      verbose ? "verbose" : null,
      settings ? "settings" : null,
      buffers ? "buffers" : null,
      wal ? "wal" : null
    ].filter(Boolean).join("|");
    const forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== undefined ? _this$headers$get : "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
    if (format === "json")
      return this;
    else
      return this;
  }
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(value) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${value}`);
    return this;
  }
};
var PostgrestReservedCharsRegexp = /* @__PURE__ */ new RegExp("[,()]");
var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
  eq(column, value) {
    this.url.searchParams.append(column, `eq.${value}`);
    return this;
  }
  neq(column, value) {
    this.url.searchParams.append(column, `neq.${value}`);
    return this;
  }
  gt(column, value) {
    this.url.searchParams.append(column, `gt.${value}`);
    return this;
  }
  gte(column, value) {
    this.url.searchParams.append(column, `gte.${value}`);
    return this;
  }
  lt(column, value) {
    this.url.searchParams.append(column, `lt.${value}`);
    return this;
  }
  lte(column, value) {
    this.url.searchParams.append(column, `lte.${value}`);
    return this;
  }
  like(column, pattern) {
    this.url.searchParams.append(column, `like.${pattern}`);
    return this;
  }
  likeAllOf(column, patterns) {
    this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
    return this;
  }
  likeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
    return this;
  }
  ilike(column, pattern) {
    this.url.searchParams.append(column, `ilike.${pattern}`);
    return this;
  }
  ilikeAllOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
    return this;
  }
  ilikeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
    return this;
  }
  regexMatch(column, pattern) {
    this.url.searchParams.append(column, `match.${pattern}`);
    return this;
  }
  regexIMatch(column, pattern) {
    this.url.searchParams.append(column, `imatch.${pattern}`);
    return this;
  }
  is(column, value) {
    this.url.searchParams.append(column, `is.${value}`);
    return this;
  }
  isDistinct(column, value) {
    this.url.searchParams.append(column, `isdistinct.${value}`);
    return this;
  }
  in(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `in.(${cleanedValues})`);
    return this;
  }
  notIn(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
    return this;
  }
  contains(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `cs.${value}`);
    else if (Array.isArray(value))
      this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
    else
      this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
    return this;
  }
  containedBy(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `cd.${value}`);
    else if (Array.isArray(value))
      this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
    else
      this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
    return this;
  }
  rangeGt(column, range) {
    this.url.searchParams.append(column, `sr.${range}`);
    return this;
  }
  rangeGte(column, range) {
    this.url.searchParams.append(column, `nxl.${range}`);
    return this;
  }
  rangeLt(column, range) {
    this.url.searchParams.append(column, `sl.${range}`);
    return this;
  }
  rangeLte(column, range) {
    this.url.searchParams.append(column, `nxr.${range}`);
    return this;
  }
  rangeAdjacent(column, range) {
    this.url.searchParams.append(column, `adj.${range}`);
    return this;
  }
  overlaps(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `ov.${value}`);
    else
      this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
    return this;
  }
  textSearch(column, query, { config, type } = {}) {
    let typePart = "";
    if (type === "plain")
      typePart = "pl";
    else if (type === "phrase")
      typePart = "ph";
    else if (type === "websearch")
      typePart = "w";
    const configPart = config === undefined ? "" : `(${config})`;
    this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  match(query) {
    Object.entries(query).filter(([_, value]) => value !== undefined).forEach(([column, value]) => {
      this.url.searchParams.append(column, `eq.${value}`);
    });
    return this;
  }
  not(column, operator, value) {
    this.url.searchParams.append(column, `not.${operator}.${value}`);
    return this;
  }
  or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.or` : "or";
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  filter(column, operator, value) {
    this.url.searchParams.append(column, `${operator}.${value}`);
    return this;
  }
};
var PostgrestQueryBuilder = class {
  constructor(url, { headers = {}, schema, fetch: fetch$1, urlLengthLimit = 8000, retry }) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch$1;
    this.urlLengthLimit = urlLengthLimit;
    this.retry = retry;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(columns, options) {
    const { head = false, count } = options !== null && options !== undefined ? options : {};
    const method = head ? "HEAD" : "GET";
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== undefined ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted)
        return "";
      if (c === '"')
        quoted = !quoted;
      return c;
    }).join("");
    const { url, headers } = this.cloneRequestState();
    url.searchParams.set("select", cleanedColumns);
    if (count)
      headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  insert(values, { count, defaultToNull = true } = {}) {
    var _this$fetch;
    const method = "POST";
    const { url, headers } = this.cloneRequestState();
    if (count)
      headers.append("Prefer", `count=${count}`);
    if (!defaultToNull)
      headers.append("Prefer", `missing=default`);
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== undefined ? _this$fetch : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
    var _this$fetch2;
    const method = "POST";
    const { url, headers } = this.cloneRequestState();
    headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
    if (onConflict !== undefined)
      url.searchParams.set("on_conflict", onConflict);
    if (count)
      headers.append("Prefer", `count=${count}`);
    if (!defaultToNull)
      headers.append("Prefer", "missing=default");
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== undefined ? _this$fetch2 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  update(values, { count } = {}) {
    var _this$fetch3;
    const method = "PATCH";
    const { url, headers } = this.cloneRequestState();
    if (count)
      headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== undefined ? _this$fetch3 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  delete({ count } = {}) {
    var _this$fetch4;
    const method = "DELETE";
    const { url, headers } = this.cloneRequestState();
    if (count)
      headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== undefined ? _this$fetch4 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
    return typeof o$1;
  } : function(o$1) {
    return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if (_typeof(t) != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (_typeof(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return _typeof(i) == "symbol" ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
      _defineProperty(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var PostgrestClient = class PostgrestClient2 {
  constructor(url, { headers = {}, schema, fetch: fetch$1, timeout, urlLengthLimit = 8000, retry } = {}) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.urlLengthLimit = urlLengthLimit;
    const originalFetch = fetch$1 !== null && fetch$1 !== undefined ? fetch$1 : globalThis.fetch;
    if (timeout !== undefined && timeout > 0)
      this.fetch = (input, init) => {
        const controller = new AbortController;
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const existingSignal = init === null || init === undefined ? undefined : init.signal;
        if (existingSignal) {
          if (existingSignal.aborted) {
            clearTimeout(timeoutId);
            return originalFetch(input, init);
          }
          const abortHandler = () => {
            clearTimeout(timeoutId);
            controller.abort();
          };
          existingSignal.addEventListener("abort", abortHandler, { once: true });
          return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, { signal: controller.signal })).finally(() => {
            clearTimeout(timeoutId);
            existingSignal.removeEventListener("abort", abortHandler);
          });
        }
        return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, { signal: controller.signal })).finally(() => clearTimeout(timeoutId));
      };
    else
      this.fetch = originalFetch;
    this.retry = retry;
  }
  from(relation) {
    if (!relation || typeof relation !== "string" || relation.trim() === "")
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new PostgrestQueryBuilder(new URL(`${this.url}/${relation}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  schema(schema) {
    return new PostgrestClient2(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  rpc(fn, args = {}, { head = false, get = false, count } = {}) {
    var _this$fetch;
    let method;
    const url = new URL(`${this.url}/rpc/${fn}`);
    let body;
    const _isObject = (v) => v !== null && typeof v === "object" && (!Array.isArray(v) || v.some(_isObject));
    const _hasObjectArg = head && Object.values(args).some(_isObject);
    if (_hasObjectArg) {
      method = "POST";
      body = args;
    } else if (head || get) {
      method = head ? "HEAD" : "GET";
      Object.entries(args).filter(([_, value]) => value !== undefined).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else {
      method = "POST";
      body = args;
    }
    const headers = new Headers(this.headers);
    if (_hasObjectArg)
      headers.set("Prefer", count ? `count=${count},return=minimal` : "return=minimal");
    else if (count)
      headers.set("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== undefined ? _this$fetch : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
var src_default = {
  PostgrestClient,
  PostgrestQueryBuilder,
  PostgrestFilterBuilder,
  PostgrestTransformBuilder,
  PostgrestBuilder,
  PostgrestError
};

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/dist/index.mjs
var import_realtime_js = __toESM(require_main2(), 1);

// ../../node_modules/.bun/@supabase+storage-js@2.105.4/node_modules/@supabase/storage-js/dist/index.mjs
var exports_dist2 = {};
__export(exports_dist2, {
  isStorageVectorsError: () => isStorageVectorsError,
  isStorageError: () => isStorageError,
  VectorIndexScope: () => VectorIndexScope,
  VectorIndexApi: () => VectorIndexApi,
  VectorDataApi: () => VectorDataApi,
  VectorBucketScope: () => VectorBucketScope,
  VectorBucketApi: () => VectorBucketApi,
  StorageVectorsUnknownError: () => StorageVectorsUnknownError,
  StorageVectorsErrorCode: () => StorageVectorsErrorCode,
  StorageVectorsError: () => StorageVectorsError,
  StorageVectorsClient: () => StorageVectorsClient,
  StorageVectorsApiError: () => StorageVectorsApiError,
  StorageUnknownError: () => StorageUnknownError,
  StorageError: () => StorageError,
  StorageClient: () => StorageClient,
  StorageApiError: () => StorageApiError,
  StorageAnalyticsClient: () => StorageAnalyticsClient
});

// ../../node_modules/.bun/iceberg-js@0.8.1/node_modules/iceberg-js/dist/index.mjs
var IcebergError = class extends Error {
  constructor(message, opts) {
    super(message);
    this.name = "IcebergError";
    this.status = opts.status;
    this.icebergType = opts.icebergType;
    this.icebergCode = opts.icebergCode;
    this.details = opts.details;
    this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function buildUrl(baseUrl, path, query) {
  const url = new URL(path, baseUrl);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        url.searchParams.set(key, value);
      }
    }
  }
  return url.toString();
}
async function buildAuthHeaders(auth) {
  if (!auth || auth.type === "none") {
    return {};
  }
  if (auth.type === "bearer") {
    return { Authorization: `Bearer ${auth.token}` };
  }
  if (auth.type === "header") {
    return { [auth.name]: auth.value };
  }
  if (auth.type === "custom") {
    return await auth.getHeaders();
  }
  return {};
}
function createFetchClient(options) {
  const fetchFn = options.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method,
      path,
      query,
      body,
      headers
    }) {
      const url = buildUrl(options.baseUrl, path, query);
      const authHeaders = await buildAuthHeaders(options.auth);
      const res = await fetchFn(url, {
        method,
        headers: {
          ...body ? { "Content-Type": "application/json" } : {},
          ...authHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      });
      const text = await res.text();
      const isJson = (res.headers.get("content-type") || "").includes("application/json");
      const data = isJson && text ? JSON.parse(text) : text;
      if (!res.ok) {
        const errBody = isJson ? data : undefined;
        const errorDetail = errBody?.error;
        throw new IcebergError(errorDetail?.message ?? `Request failed with status ${res.status}`, {
          status: res.status,
          icebergType: errorDetail?.type,
          icebergCode: errorDetail?.code,
          details: errBody
        });
      }
      return { status: res.status, headers: res.headers, data };
    }
  };
}
function namespaceToPath(namespace) {
  return namespace.join("\x1F");
}
var NamespaceOperations = class {
  constructor(client, prefix = "") {
    this.client = client;
    this.prefix = prefix;
  }
  async listNamespaces(parent) {
    const query = parent ? { parent: namespaceToPath(parent.namespace) } : undefined;
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query
    });
    return response.data.namespaces.map((ns) => ({ namespace: ns }));
  }
  async createNamespace(id, metadata) {
    const request = {
      namespace: id.namespace,
      properties: metadata?.properties
    };
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: request
    });
    return response.data;
  }
  async dropNamespace(id) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
    });
  }
  async loadNamespaceMetadata(id) {
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
    });
    return {
      properties: response.data.properties
    };
  }
  async namespaceExists(id) {
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
      });
      return true;
    } catch (error) {
      if (error instanceof IcebergError && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createNamespaceIfNotExists(id, metadata) {
    try {
      return await this.createNamespace(id, metadata);
    } catch (error) {
      if (error instanceof IcebergError && error.status === 409) {
        return;
      }
      throw error;
    }
  }
};
function namespaceToPath2(namespace) {
  return namespace.join("\x1F");
}
var TableOperations = class {
  constructor(client, prefix = "", accessDelegation) {
    this.client = client;
    this.prefix = prefix;
    this.accessDelegation = accessDelegation;
  }
  async listTables(namespace) {
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
    });
    return response.data.identifiers;
  }
  async createTable(namespace, request) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
      body: request,
      headers
    });
    return response.data.metadata;
  }
  async updateTable(id, request) {
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      body: request
    });
    return {
      "metadata-location": response.data["metadata-location"],
      metadata: response.data.metadata
    };
  }
  async dropTable(id, options) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      query: { purgeRequested: String(options?.purge ?? false) }
    });
  }
  async loadTable(id) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      headers
    });
    return response.data.metadata;
  }
  async tableExists(id) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
        headers
      });
      return true;
    } catch (error) {
      if (error instanceof IcebergError && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createTableIfNotExists(namespace, request) {
    try {
      return await this.createTable(namespace, request);
    } catch (error) {
      if (error instanceof IcebergError && error.status === 409) {
        return await this.loadTable({ namespace: namespace.namespace, name: request.name });
      }
      throw error;
    }
  }
};
var IcebergRestCatalog = class {
  constructor(options) {
    let prefix = "v1";
    if (options.catalogName) {
      prefix += `/${options.catalogName}`;
    }
    const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
    this.client = createFetchClient({
      baseUrl,
      auth: options.auth,
      fetchImpl: options.fetch
    });
    this.accessDelegation = options.accessDelegation?.join(",");
    this.namespaceOps = new NamespaceOperations(this.client, prefix);
    this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
  }
  async listNamespaces(parent) {
    return this.namespaceOps.listNamespaces(parent);
  }
  async createNamespace(id, metadata) {
    return this.namespaceOps.createNamespace(id, metadata);
  }
  async dropNamespace(id) {
    await this.namespaceOps.dropNamespace(id);
  }
  async loadNamespaceMetadata(id) {
    return this.namespaceOps.loadNamespaceMetadata(id);
  }
  async listTables(namespace) {
    return this.tableOps.listTables(namespace);
  }
  async createTable(namespace, request) {
    return this.tableOps.createTable(namespace, request);
  }
  async updateTable(id, request) {
    return this.tableOps.updateTable(id, request);
  }
  async dropTable(id, options) {
    await this.tableOps.dropTable(id, options);
  }
  async loadTable(id) {
    return this.tableOps.loadTable(id);
  }
  async namespaceExists(id) {
    return this.namespaceOps.namespaceExists(id);
  }
  async tableExists(id) {
    return this.tableOps.tableExists(id);
  }
  async createNamespaceIfNotExists(id, metadata) {
    return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
  }
  async createTableIfNotExists(namespace, request) {
    return this.tableOps.createTableIfNotExists(namespace, request);
  }
};

// ../../node_modules/.bun/@supabase+storage-js@2.105.4/node_modules/@supabase/storage-js/dist/index.mjs
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
    return typeof o$1;
  } : function(o$1) {
    return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof2(o);
}
function toPrimitive2(t, r) {
  if (_typeof2(t) != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (_typeof2(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function toPropertyKey2(t) {
  var i = toPrimitive2(t, "string");
  return _typeof2(i) == "symbol" ? i : i + "";
}
function _defineProperty2(e, r, t) {
  return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread22(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r$1) {
      _defineProperty2(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var StorageError = class extends Error {
  constructor(message, namespace = "storage", status, statusCode) {
    super(message);
    this.__isStorageError = true;
    this.namespace = namespace;
    this.name = namespace === "vectors" ? "StorageVectorsError" : "StorageError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function isStorageError(error) {
  return typeof error === "object" && error !== null && "__isStorageError" in error;
}
var StorageApiError = class extends StorageError {
  constructor(message, status, statusCode, namespace = "storage") {
    super(message, namespace, status, statusCode);
    this.name = namespace === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return _objectSpread22({}, super.toJSON());
  }
};
var StorageUnknownError = class extends StorageError {
  constructor(message, originalError, namespace = "storage") {
    super(message, namespace);
    this.name = namespace === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
    this.originalError = originalError;
  }
};
var StorageVectorsError = class extends StorageError {
  constructor(message) {
    super(message, "vectors");
  }
};
function isStorageVectorsError(error) {
  return isStorageError(error) && error["namespace"] === "vectors";
}
var StorageVectorsApiError = class extends StorageApiError {
  constructor(message, status, statusCode) {
    super(message, status, statusCode, "vectors");
  }
};
var StorageVectorsUnknownError = class extends StorageUnknownError {
  constructor(message, originalError) {
    super(message, originalError, "vectors");
  }
};
var StorageVectorsErrorCode = /* @__PURE__ */ function(StorageVectorsErrorCode$1) {
  StorageVectorsErrorCode$1["InternalError"] = "InternalError";
  StorageVectorsErrorCode$1["S3VectorConflictException"] = "S3VectorConflictException";
  StorageVectorsErrorCode$1["S3VectorNotFoundException"] = "S3VectorNotFoundException";
  StorageVectorsErrorCode$1["S3VectorBucketNotEmpty"] = "S3VectorBucketNotEmpty";
  StorageVectorsErrorCode$1["S3VectorMaxBucketsExceeded"] = "S3VectorMaxBucketsExceeded";
  StorageVectorsErrorCode$1["S3VectorMaxIndexesExceeded"] = "S3VectorMaxIndexesExceeded";
  return StorageVectorsErrorCode$1;
}({});
function setHeader(headers, name, value) {
  const result = _objectSpread22({}, headers);
  const nameLower = name.toLowerCase();
  for (const key of Object.keys(result))
    if (key.toLowerCase() === nameLower)
      delete result[key];
  result[nameLower] = value;
  return result;
}
function normalizeHeaders(headers) {
  const result = {};
  for (const [key, value] of Object.entries(headers))
    result[key.toLowerCase()] = value;
  return result;
}
var resolveFetch = (customFetch) => {
  if (customFetch)
    return (...args) => customFetch(...args);
  return (...args) => fetch(...args);
};
var isPlainObject2 = (value) => {
  if (typeof value !== "object" || value === null)
    return false;
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
var recursiveToCamel = (item) => {
  if (Array.isArray(item))
    return item.map((el) => recursiveToCamel(el));
  else if (typeof item === "function" || item !== Object(item))
    return item;
  const result = {};
  Object.entries(item).forEach(([key, value]) => {
    const newKey = key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    result[newKey] = recursiveToCamel(value);
  });
  return result;
};
var isValidBucketName = (bucketName) => {
  if (!bucketName || typeof bucketName !== "string")
    return false;
  if (bucketName.length === 0 || bucketName.length > 100)
    return false;
  if (bucketName.trim() !== bucketName)
    return false;
  if (bucketName.includes("/") || bucketName.includes("\\"))
    return false;
  return /^[\w!.\*'() &$@=;:+,?-]+$/.test(bucketName);
};
var _getErrorMessage = (err) => {
  if (typeof err === "object" && err !== null) {
    const e = err;
    if (typeof e.msg === "string")
      return e.msg;
    if (typeof e.message === "string")
      return e.message;
    if (typeof e.error_description === "string")
      return e.error_description;
    if (typeof e.error === "string")
      return e.error;
    if (typeof e.error === "object" && e.error !== null) {
      const nested = e.error;
      if (typeof nested.message === "string")
        return nested.message;
    }
  }
  return JSON.stringify(err);
};
var handleError = async (error, reject, options, namespace) => {
  if (error !== null && typeof error === "object" && "json" in error && typeof error.json === "function") {
    const responseError = error;
    let status = parseInt(String(responseError.status), 10);
    if (!Number.isFinite(status))
      status = 500;
    responseError.json().then((err) => {
      const statusCode = (err === null || err === undefined ? undefined : err.statusCode) || (err === null || err === undefined ? undefined : err.code) || status + "";
      reject(new StorageApiError(_getErrorMessage(err), status, statusCode, namespace));
    }).catch(() => {
      const statusCode = status + "";
      reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
    });
  } else
    reject(new StorageUnknownError(_getErrorMessage(error), error, namespace));
};
var _getRequestParams = (method, options, parameters, body) => {
  const params = {
    method,
    headers: (options === null || options === undefined ? undefined : options.headers) || {}
  };
  if (method === "GET" || method === "HEAD" || !body)
    return _objectSpread22(_objectSpread22({}, params), parameters);
  if (isPlainObject2(body)) {
    var _contentType;
    const headers = (options === null || options === undefined ? undefined : options.headers) || {};
    let contentType;
    for (const [key, value] of Object.entries(headers))
      if (key.toLowerCase() === "content-type")
        contentType = value;
    params.headers = setHeader(headers, "Content-Type", (_contentType = contentType) !== null && _contentType !== undefined ? _contentType : "application/json");
    params.body = JSON.stringify(body);
  } else
    params.body = body;
  if (options === null || options === undefined ? undefined : options.duplex)
    params.duplex = options.duplex;
  return _objectSpread22(_objectSpread22({}, params), parameters);
};
async function _handleRequest(fetcher, method, url, options, parameters, body, namespace) {
  return new Promise((resolve, reject) => {
    fetcher(url, _getRequestParams(method, options, parameters, body)).then((result) => {
      if (!result.ok)
        throw result;
      if (options === null || options === undefined ? undefined : options.noResolveJson)
        return result;
      if (namespace === "vectors") {
        const contentType = result.headers.get("content-type");
        if (result.headers.get("content-length") === "0" || result.status === 204)
          return {};
        if (!contentType || !contentType.includes("application/json"))
          return {};
      }
      return result.json();
    }).then((data) => resolve(data)).catch((error) => handleError(error, reject, options, namespace));
  });
}
function createFetchApi(namespace = "storage") {
  return {
    get: async (fetcher, url, options, parameters) => {
      return _handleRequest(fetcher, "GET", url, options, parameters, undefined, namespace);
    },
    post: async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "POST", url, options, parameters, body, namespace);
    },
    put: async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "PUT", url, options, parameters, body, namespace);
    },
    head: async (fetcher, url, options, parameters) => {
      return _handleRequest(fetcher, "HEAD", url, _objectSpread22(_objectSpread22({}, options), {}, { noResolveJson: true }), parameters, undefined, namespace);
    },
    remove: async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "DELETE", url, options, parameters, body, namespace);
    }
  };
}
var defaultApi = createFetchApi("storage");
var { get, post, put, head, remove } = defaultApi;
var vectorsApi = createFetchApi("vectors");
var BaseApiClient = class {
  constructor(url, headers = {}, fetch$1, namespace = "storage") {
    this.shouldThrowOnError = false;
    this.url = url;
    this.headers = normalizeHeaders(headers);
    this.fetch = resolveFetch(fetch$1);
    this.namespace = namespace;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(name, value) {
    this.headers = setHeader(this.headers, name, value);
    return this;
  }
  async handleOperation(operation) {
    var _this = this;
    try {
      return {
        data: await operation(),
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var StreamDownloadBuilder = class {
  constructor(downloadFn, shouldThrowOnError) {
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
  }
  then(onfulfilled, onrejected) {
    return this.execute().then(onfulfilled, onrejected);
  }
  async execute() {
    var _this = this;
    try {
      return {
        data: (await _this.downloadFn()).body,
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var _Symbol$toStringTag;
_Symbol$toStringTag = Symbol.toStringTag;
var BlobDownloadBuilder = class {
  constructor(downloadFn, shouldThrowOnError) {
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
    this[_Symbol$toStringTag] = "BlobDownloadBuilder";
    this.promise = null;
  }
  asStream() {
    return new StreamDownloadBuilder(this.downloadFn, this.shouldThrowOnError);
  }
  then(onfulfilled, onrejected) {
    return this.getPromise().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.getPromise().catch(onrejected);
  }
  finally(onfinally) {
    return this.getPromise().finally(onfinally);
  }
  getPromise() {
    if (!this.promise)
      this.promise = this.execute();
    return this.promise;
  }
  async execute() {
    var _this = this;
    try {
      return {
        data: await (await _this.downloadFn()).blob(),
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var StorageFileApi = class extends BaseApiClient {
  constructor(url, headers = {}, bucketId, fetch$1) {
    super(url, headers, fetch$1, "storage");
    this.bucketId = bucketId;
  }
  async uploadOrUpdate(method, path, fileBody, fileOptions) {
    var _this = this;
    return _this.handleOperation(async () => {
      let body;
      const options = _objectSpread22(_objectSpread22({}, DEFAULT_FILE_OPTIONS), fileOptions);
      let headers = _objectSpread22(_objectSpread22({}, _this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
      const metadata = options.metadata;
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData;
        body.append("cacheControl", options.cacheControl);
        if (metadata)
          body.append("metadata", _this.encodeMetadata(metadata));
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        if (!body.has("cacheControl"))
          body.append("cacheControl", options.cacheControl);
        if (metadata && !body.has("metadata"))
          body.append("metadata", _this.encodeMetadata(metadata));
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
        if (metadata)
          headers["x-metadata"] = _this.toBase64(_this.encodeMetadata(metadata));
        if ((typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && ("pipe" in body) && typeof body.pipe === "function") && !options.duplex)
          options.duplex = "half";
      }
      if (fileOptions === null || fileOptions === undefined ? undefined : fileOptions.headers)
        for (const [key, value] of Object.entries(fileOptions.headers))
          headers = setHeader(headers, key, value);
      const cleanPath = _this._removeEmptyFolders(path);
      const _path = _this._getFinalPath(cleanPath);
      const data = await (method == "PUT" ? put : post)(_this.fetch, `${_this.url}/object/${_path}`, body, _objectSpread22({ headers }, (options === null || options === undefined ? undefined : options.duplex) ? { duplex: options.duplex } : {}));
      return {
        path: cleanPath,
        id: data.Id,
        fullPath: data.Key
      };
    });
  }
  async upload(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
  }
  async uploadToSignedUrl(path, token, fileBody, fileOptions) {
    var _this3 = this;
    const cleanPath = _this3._removeEmptyFolders(path);
    const _path = _this3._getFinalPath(cleanPath);
    const url = new URL(_this3.url + `/object/upload/sign/${_path}`);
    url.searchParams.set("token", token);
    return _this3.handleOperation(async () => {
      let body;
      const options = _objectSpread22(_objectSpread22({}, DEFAULT_FILE_OPTIONS), fileOptions);
      let headers = _objectSpread22(_objectSpread22({}, _this3.headers), { "x-upsert": String(options.upsert) });
      const metadata = options.metadata;
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData;
        body.append("cacheControl", options.cacheControl);
        if (metadata)
          body.append("metadata", _this3.encodeMetadata(metadata));
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        if (!body.has("cacheControl"))
          body.append("cacheControl", options.cacheControl);
        if (metadata && !body.has("metadata"))
          body.append("metadata", _this3.encodeMetadata(metadata));
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
        if (metadata)
          headers["x-metadata"] = _this3.toBase64(_this3.encodeMetadata(metadata));
        if ((typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && ("pipe" in body) && typeof body.pipe === "function") && !options.duplex)
          options.duplex = "half";
      }
      if (fileOptions === null || fileOptions === undefined ? undefined : fileOptions.headers)
        for (const [key, value] of Object.entries(fileOptions.headers))
          headers = setHeader(headers, key, value);
      return {
        path: cleanPath,
        fullPath: (await put(_this3.fetch, url.toString(), body, _objectSpread22({ headers }, (options === null || options === undefined ? undefined : options.duplex) ? { duplex: options.duplex } : {}))).Key
      };
    });
  }
  async createSignedUploadUrl(path, options) {
    var _this4 = this;
    return _this4.handleOperation(async () => {
      let _path = _this4._getFinalPath(path);
      const headers = _objectSpread22({}, _this4.headers);
      if (options === null || options === undefined ? undefined : options.upsert)
        headers["x-upsert"] = "true";
      const data = await post(_this4.fetch, `${_this4.url}/object/upload/sign/${_path}`, {}, { headers });
      const url = new URL(_this4.url + data.url);
      const token = url.searchParams.get("token");
      if (!token)
        throw new StorageError("No token returned by API");
      return {
        signedUrl: url.toString(),
        path,
        token
      };
    });
  }
  async update(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
  }
  async move(fromPath, toPath, options) {
    var _this6 = this;
    return _this6.handleOperation(async () => {
      return await post(_this6.fetch, `${_this6.url}/object/move`, {
        bucketId: _this6.bucketId,
        sourceKey: fromPath,
        destinationKey: toPath,
        destinationBucket: options === null || options === undefined ? undefined : options.destinationBucket
      }, { headers: _this6.headers });
    });
  }
  async copy(fromPath, toPath, options) {
    var _this7 = this;
    return _this7.handleOperation(async () => {
      return { path: (await post(_this7.fetch, `${_this7.url}/object/copy`, {
        bucketId: _this7.bucketId,
        sourceKey: fromPath,
        destinationKey: toPath,
        destinationBucket: options === null || options === undefined ? undefined : options.destinationBucket
      }, { headers: _this7.headers })).Key };
    });
  }
  async createSignedUrl(path, expiresIn, options) {
    var _this8 = this;
    return _this8.handleOperation(async () => {
      let _path = _this8._getFinalPath(path);
      const hasTransform = typeof (options === null || options === undefined ? undefined : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0;
      let data = await post(_this8.fetch, `${_this8.url}/object/sign/${_path}`, _objectSpread22({ expiresIn }, hasTransform ? { transform: options.transform } : {}), { headers: _this8.headers });
      const query = new URLSearchParams;
      if (options === null || options === undefined ? undefined : options.download)
        query.set("download", options.download === true ? "" : options.download);
      if ((options === null || options === undefined ? undefined : options.cacheNonce) != null)
        query.set("cacheNonce", String(options.cacheNonce));
      const queryString = query.toString();
      return { signedUrl: encodeURI(`${_this8.url}${data.signedURL}${queryString ? `&${queryString}` : ""}`) };
    });
  }
  async createSignedUrls(paths, expiresIn, options) {
    var _this9 = this;
    return _this9.handleOperation(async () => {
      const data = await post(_this9.fetch, `${_this9.url}/object/sign/${_this9.bucketId}`, {
        expiresIn,
        paths
      }, { headers: _this9.headers });
      const query = new URLSearchParams;
      if (options === null || options === undefined ? undefined : options.download)
        query.set("download", options.download === true ? "" : options.download);
      if ((options === null || options === undefined ? undefined : options.cacheNonce) != null)
        query.set("cacheNonce", String(options.cacheNonce));
      const queryString = query.toString();
      return data.map((datum) => _objectSpread22(_objectSpread22({}, datum), {}, { signedUrl: datum.signedURL ? encodeURI(`${_this9.url}${datum.signedURL}${queryString ? `&${queryString}` : ""}`) : null }));
    });
  }
  download(path, options, parameters) {
    const renderPath = typeof (options === null || options === undefined ? undefined : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0 ? "render/image/authenticated" : "object";
    const query = new URLSearchParams;
    if (options === null || options === undefined ? undefined : options.transform)
      this.applyTransformOptsToQuery(query, options.transform);
    if ((options === null || options === undefined ? undefined : options.cacheNonce) != null)
      query.set("cacheNonce", String(options.cacheNonce));
    const queryString = query.toString();
    const _path = this._getFinalPath(path);
    const downloadFn = () => get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString ? `?${queryString}` : ""}`, {
      headers: this.headers,
      noResolveJson: true
    }, parameters);
    return new BlobDownloadBuilder(downloadFn, this.shouldThrowOnError);
  }
  async info(path) {
    var _this10 = this;
    const _path = _this10._getFinalPath(path);
    return _this10.handleOperation(async () => {
      return recursiveToCamel(await get(_this10.fetch, `${_this10.url}/object/info/${_path}`, { headers: _this10.headers }));
    });
  }
  async exists(path) {
    var _this11 = this;
    const _path = _this11._getFinalPath(path);
    try {
      await head(_this11.fetch, `${_this11.url}/object/${_path}`, { headers: _this11.headers });
      return {
        data: true,
        error: null
      };
    } catch (error) {
      if (_this11.shouldThrowOnError)
        throw error;
      if (isStorageError(error)) {
        var _error$originalError;
        const status = error instanceof StorageApiError ? error.status : error instanceof StorageUnknownError ? (_error$originalError = error.originalError) === null || _error$originalError === undefined ? undefined : _error$originalError.status : undefined;
        if (status !== undefined && [400, 404].includes(status))
          return {
            data: false,
            error
          };
      }
      throw error;
    }
  }
  getPublicUrl(path, options) {
    const _path = this._getFinalPath(path);
    const query = new URLSearchParams;
    if (options === null || options === undefined ? undefined : options.download)
      query.set("download", options.download === true ? "" : options.download);
    if (options === null || options === undefined ? undefined : options.transform)
      this.applyTransformOptsToQuery(query, options.transform);
    if ((options === null || options === undefined ? undefined : options.cacheNonce) != null)
      query.set("cacheNonce", String(options.cacheNonce));
    const queryString = query.toString();
    const renderPath = typeof (options === null || options === undefined ? undefined : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}`) + (queryString ? `?${queryString}` : "") } };
  }
  async remove(paths) {
    var _this12 = this;
    return _this12.handleOperation(async () => {
      return await remove(_this12.fetch, `${_this12.url}/object/${_this12.bucketId}`, { prefixes: paths }, { headers: _this12.headers });
    });
  }
  async list(path, options, parameters) {
    var _this13 = this;
    return _this13.handleOperation(async () => {
      const body = _objectSpread22(_objectSpread22(_objectSpread22({}, DEFAULT_SEARCH_OPTIONS), options), {}, { prefix: path || "" });
      return await post(_this13.fetch, `${_this13.url}/object/list/${_this13.bucketId}`, body, { headers: _this13.headers }, parameters);
    });
  }
  async listV2(options, parameters) {
    var _this14 = this;
    return _this14.handleOperation(async () => {
      const body = _objectSpread22({}, options);
      return await post(_this14.fetch, `${_this14.url}/object/list-v2/${_this14.bucketId}`, body, { headers: _this14.headers }, parameters);
    });
  }
  encodeMetadata(metadata) {
    return JSON.stringify(metadata);
  }
  toBase64(data) {
    if (typeof Buffer !== "undefined")
      return Buffer.from(data).toString("base64");
    return btoa(data);
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(query, transform) {
    if (transform.width)
      query.set("width", transform.width.toString());
    if (transform.height)
      query.set("height", transform.height.toString());
    if (transform.resize)
      query.set("resize", transform.resize);
    if (transform.format)
      query.set("format", transform.format);
    if (transform.quality)
      query.set("quality", transform.quality.toString());
    return query;
  }
};
var version2 = "2.105.4";
var DEFAULT_HEADERS = { "X-Client-Info": `storage-js/${version2}` };
var StorageBucketApi = class extends BaseApiClient {
  constructor(url, headers = {}, fetch$1, opts) {
    const baseUrl = new URL(url);
    if (opts === null || opts === undefined ? undefined : opts.useNewHostname) {
      if (/supabase\.(co|in|red)$/.test(baseUrl.hostname) && !baseUrl.hostname.includes("storage.supabase."))
        baseUrl.hostname = baseUrl.hostname.replace("supabase.", "storage.supabase.");
    }
    const finalUrl = baseUrl.href.replace(/\/$/, "");
    const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), headers);
    super(finalUrl, finalHeaders, fetch$1, "storage");
  }
  async listBuckets(options) {
    var _this = this;
    return _this.handleOperation(async () => {
      const queryString = _this.listBucketOptionsToQueryString(options);
      return await get(_this.fetch, `${_this.url}/bucket${queryString}`, { headers: _this.headers });
    });
  }
  async getBucket(id) {
    var _this2 = this;
    return _this2.handleOperation(async () => {
      return await get(_this2.fetch, `${_this2.url}/bucket/${id}`, { headers: _this2.headers });
    });
  }
  async createBucket(id, options = { public: false }) {
    var _this3 = this;
    return _this3.handleOperation(async () => {
      return await post(_this3.fetch, `${_this3.url}/bucket`, {
        id,
        name: id,
        type: options.type,
        public: options.public,
        file_size_limit: options.fileSizeLimit,
        allowed_mime_types: options.allowedMimeTypes
      }, { headers: _this3.headers });
    });
  }
  async updateBucket(id, options) {
    var _this4 = this;
    return _this4.handleOperation(async () => {
      return await put(_this4.fetch, `${_this4.url}/bucket/${id}`, {
        id,
        name: id,
        public: options.public,
        file_size_limit: options.fileSizeLimit,
        allowed_mime_types: options.allowedMimeTypes
      }, { headers: _this4.headers });
    });
  }
  async emptyBucket(id) {
    var _this5 = this;
    return _this5.handleOperation(async () => {
      return await post(_this5.fetch, `${_this5.url}/bucket/${id}/empty`, {}, { headers: _this5.headers });
    });
  }
  async deleteBucket(id) {
    var _this6 = this;
    return _this6.handleOperation(async () => {
      return await remove(_this6.fetch, `${_this6.url}/bucket/${id}`, {}, { headers: _this6.headers });
    });
  }
  listBucketOptionsToQueryString(options) {
    const params = {};
    if (options) {
      if ("limit" in options)
        params.limit = String(options.limit);
      if ("offset" in options)
        params.offset = String(options.offset);
      if (options.search)
        params.search = options.search;
      if (options.sortColumn)
        params.sortColumn = options.sortColumn;
      if (options.sortOrder)
        params.sortOrder = options.sortOrder;
    }
    return Object.keys(params).length > 0 ? "?" + new URLSearchParams(params).toString() : "";
  }
};
var StorageAnalyticsClient = class extends BaseApiClient {
  constructor(url, headers = {}, fetch$1) {
    const finalUrl = url.replace(/\/$/, "");
    const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), headers);
    super(finalUrl, finalHeaders, fetch$1, "storage");
  }
  async createBucket(name) {
    var _this = this;
    return _this.handleOperation(async () => {
      return await post(_this.fetch, `${_this.url}/bucket`, { name }, { headers: _this.headers });
    });
  }
  async listBuckets(options) {
    var _this2 = this;
    return _this2.handleOperation(async () => {
      const queryParams = new URLSearchParams;
      if ((options === null || options === undefined ? undefined : options.limit) !== undefined)
        queryParams.set("limit", options.limit.toString());
      if ((options === null || options === undefined ? undefined : options.offset) !== undefined)
        queryParams.set("offset", options.offset.toString());
      if (options === null || options === undefined ? undefined : options.sortColumn)
        queryParams.set("sortColumn", options.sortColumn);
      if (options === null || options === undefined ? undefined : options.sortOrder)
        queryParams.set("sortOrder", options.sortOrder);
      if (options === null || options === undefined ? undefined : options.search)
        queryParams.set("search", options.search);
      const queryString = queryParams.toString();
      const url = queryString ? `${_this2.url}/bucket?${queryString}` : `${_this2.url}/bucket`;
      return await get(_this2.fetch, url, { headers: _this2.headers });
    });
  }
  async deleteBucket(bucketName) {
    var _this3 = this;
    return _this3.handleOperation(async () => {
      return await remove(_this3.fetch, `${_this3.url}/bucket/${bucketName}`, {}, { headers: _this3.headers });
    });
  }
  from(bucketName) {
    var _this4 = this;
    if (!isValidBucketName(bucketName))
      throw new StorageError("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const catalog = new IcebergRestCatalog({
      baseUrl: this.url,
      catalogName: bucketName,
      auth: {
        type: "custom",
        getHeaders: async () => _this4.headers
      },
      fetch: this.fetch
    });
    const shouldThrowOnError = this.shouldThrowOnError;
    return new Proxy(catalog, { get(target, prop) {
      const value = target[prop];
      if (typeof value !== "function")
        return value;
      return async (...args) => {
        try {
          return {
            data: await value.apply(target, args),
            error: null
          };
        } catch (error) {
          if (shouldThrowOnError)
            throw error;
          return {
            data: null,
            error
          };
        }
      };
    } });
  }
};
var VectorIndexApi = class extends BaseApiClient {
  constructor(url, headers = {}, fetch$1) {
    const finalUrl = url.replace(/\/$/, "");
    const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
    super(finalUrl, finalHeaders, fetch$1, "vectors");
  }
  async createIndex(options) {
    var _this = this;
    return _this.handleOperation(async () => {
      return await vectorsApi.post(_this.fetch, `${_this.url}/CreateIndex`, options, { headers: _this.headers }) || {};
    });
  }
  async getIndex(vectorBucketName, indexName) {
    var _this2 = this;
    return _this2.handleOperation(async () => {
      return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetIndex`, {
        vectorBucketName,
        indexName
      }, { headers: _this2.headers });
    });
  }
  async listIndexes(options) {
    var _this3 = this;
    return _this3.handleOperation(async () => {
      return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListIndexes`, options, { headers: _this3.headers });
    });
  }
  async deleteIndex(vectorBucketName, indexName) {
    var _this4 = this;
    return _this4.handleOperation(async () => {
      return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteIndex`, {
        vectorBucketName,
        indexName
      }, { headers: _this4.headers }) || {};
    });
  }
};
var VectorDataApi = class extends BaseApiClient {
  constructor(url, headers = {}, fetch$1) {
    const finalUrl = url.replace(/\/$/, "");
    const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
    super(finalUrl, finalHeaders, fetch$1, "vectors");
  }
  async putVectors(options) {
    var _this = this;
    if (options.vectors.length < 1 || options.vectors.length > 500)
      throw new Error("Vector batch size must be between 1 and 500 items");
    return _this.handleOperation(async () => {
      return await vectorsApi.post(_this.fetch, `${_this.url}/PutVectors`, options, { headers: _this.headers }) || {};
    });
  }
  async getVectors(options) {
    var _this2 = this;
    return _this2.handleOperation(async () => {
      return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectors`, options, { headers: _this2.headers });
    });
  }
  async listVectors(options) {
    var _this3 = this;
    if (options.segmentCount !== undefined) {
      if (options.segmentCount < 1 || options.segmentCount > 16)
        throw new Error("segmentCount must be between 1 and 16");
      if (options.segmentIndex !== undefined) {
        if (options.segmentIndex < 0 || options.segmentIndex >= options.segmentCount)
          throw new Error(`segmentIndex must be between 0 and ${options.segmentCount - 1}`);
      }
    }
    return _this3.handleOperation(async () => {
      return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectors`, options, { headers: _this3.headers });
    });
  }
  async queryVectors(options) {
    var _this4 = this;
    return _this4.handleOperation(async () => {
      return await vectorsApi.post(_this4.fetch, `${_this4.url}/QueryVectors`, options, { headers: _this4.headers });
    });
  }
  async deleteVectors(options) {
    var _this5 = this;
    if (options.keys.length < 1 || options.keys.length > 500)
      throw new Error("Keys batch size must be between 1 and 500 items");
    return _this5.handleOperation(async () => {
      return await vectorsApi.post(_this5.fetch, `${_this5.url}/DeleteVectors`, options, { headers: _this5.headers }) || {};
    });
  }
};
var VectorBucketApi = class extends BaseApiClient {
  constructor(url, headers = {}, fetch$1) {
    const finalUrl = url.replace(/\/$/, "");
    const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
    super(finalUrl, finalHeaders, fetch$1, "vectors");
  }
  async createBucket(vectorBucketName) {
    var _this = this;
    return _this.handleOperation(async () => {
      return await vectorsApi.post(_this.fetch, `${_this.url}/CreateVectorBucket`, { vectorBucketName }, { headers: _this.headers }) || {};
    });
  }
  async getBucket(vectorBucketName) {
    var _this2 = this;
    return _this2.handleOperation(async () => {
      return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectorBucket`, { vectorBucketName }, { headers: _this2.headers });
    });
  }
  async listBuckets(options = {}) {
    var _this3 = this;
    return _this3.handleOperation(async () => {
      return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectorBuckets`, options, { headers: _this3.headers });
    });
  }
  async deleteBucket(vectorBucketName) {
    var _this4 = this;
    return _this4.handleOperation(async () => {
      return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteVectorBucket`, { vectorBucketName }, { headers: _this4.headers }) || {};
    });
  }
};
var StorageVectorsClient = class extends VectorBucketApi {
  constructor(url, options = {}) {
    super(url, options.headers || {}, options.fetch);
  }
  from(vectorBucketName) {
    return new VectorBucketScope(this.url, this.headers, vectorBucketName, this.fetch);
  }
  async createBucket(vectorBucketName) {
    var _superprop_getCreateBucket = () => super.createBucket, _this = this;
    return _superprop_getCreateBucket().call(_this, vectorBucketName);
  }
  async getBucket(vectorBucketName) {
    var _superprop_getGetBucket = () => super.getBucket, _this2 = this;
    return _superprop_getGetBucket().call(_this2, vectorBucketName);
  }
  async listBuckets(options = {}) {
    var _superprop_getListBuckets = () => super.listBuckets, _this3 = this;
    return _superprop_getListBuckets().call(_this3, options);
  }
  async deleteBucket(vectorBucketName) {
    var _superprop_getDeleteBucket = () => super.deleteBucket, _this4 = this;
    return _superprop_getDeleteBucket().call(_this4, vectorBucketName);
  }
};
var VectorBucketScope = class extends VectorIndexApi {
  constructor(url, headers, vectorBucketName, fetch$1) {
    super(url, headers, fetch$1);
    this.vectorBucketName = vectorBucketName;
  }
  async createIndex(options) {
    var _superprop_getCreateIndex = () => super.createIndex, _this5 = this;
    return _superprop_getCreateIndex().call(_this5, _objectSpread22(_objectSpread22({}, options), {}, { vectorBucketName: _this5.vectorBucketName }));
  }
  async listIndexes(options = {}) {
    var _superprop_getListIndexes = () => super.listIndexes, _this6 = this;
    return _superprop_getListIndexes().call(_this6, _objectSpread22(_objectSpread22({}, options), {}, { vectorBucketName: _this6.vectorBucketName }));
  }
  async getIndex(indexName) {
    var _superprop_getGetIndex = () => super.getIndex, _this7 = this;
    return _superprop_getGetIndex().call(_this7, _this7.vectorBucketName, indexName);
  }
  async deleteIndex(indexName) {
    var _superprop_getDeleteIndex = () => super.deleteIndex, _this8 = this;
    return _superprop_getDeleteIndex().call(_this8, _this8.vectorBucketName, indexName);
  }
  index(indexName) {
    return new VectorIndexScope(this.url, this.headers, this.vectorBucketName, indexName, this.fetch);
  }
};
var VectorIndexScope = class extends VectorDataApi {
  constructor(url, headers, vectorBucketName, indexName, fetch$1) {
    super(url, headers, fetch$1);
    this.vectorBucketName = vectorBucketName;
    this.indexName = indexName;
  }
  async putVectors(options) {
    var _superprop_getPutVectors = () => super.putVectors, _this9 = this;
    return _superprop_getPutVectors().call(_this9, _objectSpread22(_objectSpread22({}, options), {}, {
      vectorBucketName: _this9.vectorBucketName,
      indexName: _this9.indexName
    }));
  }
  async getVectors(options) {
    var _superprop_getGetVectors = () => super.getVectors, _this10 = this;
    return _superprop_getGetVectors().call(_this10, _objectSpread22(_objectSpread22({}, options), {}, {
      vectorBucketName: _this10.vectorBucketName,
      indexName: _this10.indexName
    }));
  }
  async listVectors(options = {}) {
    var _superprop_getListVectors = () => super.listVectors, _this11 = this;
    return _superprop_getListVectors().call(_this11, _objectSpread22(_objectSpread22({}, options), {}, {
      vectorBucketName: _this11.vectorBucketName,
      indexName: _this11.indexName
    }));
  }
  async queryVectors(options) {
    var _superprop_getQueryVectors = () => super.queryVectors, _this12 = this;
    return _superprop_getQueryVectors().call(_this12, _objectSpread22(_objectSpread22({}, options), {}, {
      vectorBucketName: _this12.vectorBucketName,
      indexName: _this12.indexName
    }));
  }
  async deleteVectors(options) {
    var _superprop_getDeleteVectors = () => super.deleteVectors, _this13 = this;
    return _superprop_getDeleteVectors().call(_this13, _objectSpread22(_objectSpread22({}, options), {}, {
      vectorBucketName: _this13.vectorBucketName,
      indexName: _this13.indexName
    }));
  }
};
var StorageClient = class extends StorageBucketApi {
  constructor(url, headers = {}, fetch$1, opts) {
    super(url, headers, fetch$1, opts);
  }
  from(id) {
    return new StorageFileApi(this.url, this.headers, id, this.fetch);
  }
  get vectors() {
    return new StorageVectorsClient(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new StorageAnalyticsClient(this.url + "/iceberg", this.headers, this.fetch);
  }
};

// ../../node_modules/.bun/@supabase+supabase-js@2.105.4/node_modules/@supabase/supabase-js/dist/index.mjs
var import_auth_js = __toESM(require_main3(), 1);
__reExport(exports_dist3, __toESM(require_main2(), 1));
__reExport(exports_dist3, __toESM(require_main3(), 1));
var version3 = "2.105.4";
var JS_ENV = "";
if (typeof Deno !== "undefined")
  JS_ENV = "deno";
else if (typeof document !== "undefined")
  JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative")
  JS_ENV = "react-native";
else
  JS_ENV = "node";
var DEFAULT_HEADERS2 = { "X-Client-Info": `supabase-js-${JS_ENV}/${version3}` };
var DEFAULT_GLOBAL_OPTIONS = { headers: DEFAULT_HEADERS2 };
var DEFAULT_DB_OPTIONS = { schema: "public" };
var DEFAULT_AUTH_OPTIONS = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
var DEFAULT_REALTIME_OPTIONS = {};
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
    return typeof o$1;
  } : function(o$1) {
    return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof3(o);
}
function toPrimitive3(t, r) {
  if (_typeof3(t) != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (_typeof3(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function toPropertyKey3(t) {
  var i = toPrimitive3(t, "string");
  return _typeof3(i) == "symbol" ? i : i + "";
}
function _defineProperty3(e, r, t) {
  return (r = toPropertyKey3(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread23(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r$1) {
      _defineProperty3(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var resolveFetch2 = (customFetch) => {
  if (customFetch)
    return (...args) => customFetch(...args);
  return (...args) => fetch(...args);
};
var resolveHeadersConstructor = () => {
  return Headers;
};
var fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
  const fetch$1 = resolveFetch2(customFetch);
  const HeadersConstructor = resolveHeadersConstructor();
  return async (input, init) => {
    var _await$getAccessToken;
    const accessToken = (_await$getAccessToken = await getAccessToken()) !== null && _await$getAccessToken !== undefined ? _await$getAccessToken : supabaseKey;
    let headers = new HeadersConstructor(init === null || init === undefined ? undefined : init.headers);
    if (!headers.has("apikey"))
      headers.set("apikey", supabaseKey);
    if (!headers.has("Authorization"))
      headers.set("Authorization", `Bearer ${accessToken}`);
    return fetch$1(input, _objectSpread23(_objectSpread23({}, init), {}, { headers }));
  };
};
function ensureTrailingSlash(url) {
  return url.endsWith("/") ? url : url + "/";
}
function applySettingDefaults(options, defaults) {
  var _DEFAULT_GLOBAL_OPTIO, _globalOptions$header;
  const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
  const { db: DEFAULT_DB_OPTIONS$1, auth: DEFAULT_AUTH_OPTIONS$1, realtime: DEFAULT_REALTIME_OPTIONS$1, global: DEFAULT_GLOBAL_OPTIONS$1 } = defaults;
  const result = {
    db: _objectSpread23(_objectSpread23({}, DEFAULT_DB_OPTIONS$1), dbOptions),
    auth: _objectSpread23(_objectSpread23({}, DEFAULT_AUTH_OPTIONS$1), authOptions),
    realtime: _objectSpread23(_objectSpread23({}, DEFAULT_REALTIME_OPTIONS$1), realtimeOptions),
    storage: {},
    global: _objectSpread23(_objectSpread23(_objectSpread23({}, DEFAULT_GLOBAL_OPTIONS$1), globalOptions), {}, { headers: _objectSpread23(_objectSpread23({}, (_DEFAULT_GLOBAL_OPTIO = DEFAULT_GLOBAL_OPTIONS$1 === null || DEFAULT_GLOBAL_OPTIONS$1 === undefined ? undefined : DEFAULT_GLOBAL_OPTIONS$1.headers) !== null && _DEFAULT_GLOBAL_OPTIO !== undefined ? _DEFAULT_GLOBAL_OPTIO : {}), (_globalOptions$header = globalOptions === null || globalOptions === undefined ? undefined : globalOptions.headers) !== null && _globalOptions$header !== undefined ? _globalOptions$header : {}) }),
    accessToken: async () => ""
  };
  if (options.accessToken)
    result.accessToken = options.accessToken;
  else
    delete result.accessToken;
  return result;
}
function validateSupabaseUrl(supabaseUrl) {
  const trimmedUrl = supabaseUrl === null || supabaseUrl === undefined ? undefined : supabaseUrl.trim();
  if (!trimmedUrl)
    throw new Error("supabaseUrl is required.");
  if (!trimmedUrl.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(ensureTrailingSlash(trimmedUrl));
  } catch (_unused) {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var SupabaseAuthClient = class extends import_auth_js.AuthClient {
  constructor(options) {
    super(options);
  }
};
var SupabaseClient = class {
  constructor(supabaseUrl, supabaseKey, options) {
    var _settings$auth$storag, _settings$global$head;
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    const baseUrl = validateSupabaseUrl(supabaseUrl);
    if (!supabaseKey)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", baseUrl);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", baseUrl);
    this.storageUrl = new URL("storage/v1", baseUrl);
    this.functionsUrl = new URL("functions/v1", baseUrl);
    const defaultStorageKey = `sb-${baseUrl.hostname.split(".")[0]}-auth-token`;
    const DEFAULTS = {
      db: DEFAULT_DB_OPTIONS,
      realtime: DEFAULT_REALTIME_OPTIONS,
      auth: _objectSpread23(_objectSpread23({}, DEFAULT_AUTH_OPTIONS), {}, { storageKey: defaultStorageKey }),
      global: DEFAULT_GLOBAL_OPTIONS
    };
    const settings = applySettingDefaults(options !== null && options !== undefined ? options : {}, DEFAULTS);
    this.storageKey = (_settings$auth$storag = settings.auth.storageKey) !== null && _settings$auth$storag !== undefined ? _settings$auth$storag : "";
    this.headers = (_settings$global$head = settings.global.headers) !== null && _settings$global$head !== undefined ? _settings$global$head : {};
    if (!settings.accessToken) {
      var _settings$auth;
      this.auth = this._initSupabaseAuthClient((_settings$auth = settings.auth) !== null && _settings$auth !== undefined ? _settings$auth : {}, this.headers, settings.global.fetch);
    } else {
      this.accessToken = settings.accessToken;
      this.auth = new Proxy({}, { get: (_, prop) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
      } });
    }
    this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
    this.realtime = this._initRealtimeClient(_objectSpread23({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, settings.realtime));
    if (this.accessToken)
      Promise.resolve(this.accessToken()).then((token) => this.realtime.setAuth(token)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e));
    this.rest = new PostgrestClient(new URL("rest/v1", baseUrl).href, {
      headers: this.headers,
      schema: settings.db.schema,
      fetch: this.fetch,
      timeout: settings.db.timeout,
      urlLengthLimit: settings.db.urlLengthLimit
    });
    this.storage = new StorageClient(this.storageUrl.href, this.headers, this.fetch, options === null || options === undefined ? undefined : options.storage);
    if (!settings.accessToken)
      this._listenForAuthEvents();
  }
  get functions() {
    return new import_functions_js.FunctionsClient(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  from(relation) {
    return this.rest.from(relation);
  }
  schema(schema) {
    return this.rest.schema(schema);
  }
  rpc(fn, args = {}, options = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(fn, args, options);
  }
  channel(name, opts = { config: {} }) {
    return this.realtime.channel(name, opts);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(channel) {
    return this.realtime.removeChannel(channel);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var _this = this;
    var _data$session$access_, _data$session;
    if (_this.accessToken)
      return await _this.accessToken();
    const { data } = await _this.auth.getSession();
    return (_data$session$access_ = (_data$session = data.session) === null || _data$session === undefined ? undefined : _data$session.access_token) !== null && _data$session$access_ !== undefined ? _data$session$access_ : _this.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError, experimental, lockAcquireTimeout, skipAutoInitialize }, headers, fetch$1) {
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new SupabaseAuthClient({
      url: this.authUrl.href,
      headers: _objectSpread23(_objectSpread23({}, authHeaders), headers),
      storageKey,
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      storage,
      userStorage,
      flowType,
      lock,
      debug,
      throwOnError,
      experimental,
      fetch: fetch$1,
      lockAcquireTimeout,
      skipAutoInitialize,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((key) => key.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(options) {
    return new import_realtime_js.RealtimeClient(this.realtimeUrl.href, _objectSpread23(_objectSpread23({}, options), {}, { params: _objectSpread23(_objectSpread23({}, { apikey: this.supabaseKey }), options === null || options === undefined ? undefined : options.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((event, session) => {
      this._handleTokenChanged(event, "CLIENT", session === null || session === undefined ? undefined : session.access_token);
    });
  }
  _handleTokenChanged(event, source, token) {
    if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
      this.changedAccessToken = token;
      this.realtime.setAuth(token);
    } else if (event === "SIGNED_OUT") {
      this.realtime.setAuth();
      if (source == "STORAGE")
        this.auth.signOut();
      this.changedAccessToken = undefined;
    }
  }
};
var createClient = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
function shouldShowDeprecationWarning() {
  if (typeof window !== "undefined")
    return false;
  const _process = globalThis["process"];
  if (!_process)
    return false;
  const processVersion = _process["version"];
  if (processVersion === undefined || processVersion === null)
    return false;
  const versionMatch = processVersion.match(/^v(\d+)\./);
  if (!versionMatch)
    return false;
  return parseInt(versionMatch[1], 10) <= 18;
}
if (shouldShowDeprecationWarning())
  console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");

// src/supabase/client.ts
init_events();
init_analytics2();
init_session_manager2();
init_constants();
init_daemon_manager();
init_logger2();

// src/supabase/session-storage-adapter.ts
init_events();
init_properties();
init_analytics2();
init_session_manager2();
init_constants();
init_file_lock2();
init_fs_utils2();
import { readFile as readFile4, unlink as unlink5, writeFile as writeFile4 } from "node:fs/promises";
import { dirname as dirname6 } from "node:path";

// src/utils/jwt.ts
function decodeJwtPayload(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3)
      return;
    return JSON.parse(Buffer.from(parts[1], "base64url").toString());
  } catch {
    return;
  }
}
function getJwtExpiresAt(token) {
  const payload = decodeJwtPayload(token);
  return payload && typeof payload.exp === "number" ? payload.exp : undefined;
}
function getJwtIssuer(token) {
  const payload = decodeJwtPayload(token);
  return payload && typeof payload.iss === "string" ? payload.iss : undefined;
}
function validateJwtIssuer(token, supabaseUrl) {
  const issuer = getJwtIssuer(token);
  if (!issuer)
    return { valid: true };
  const expected = `${supabaseUrl}/auth/v1`;
  if (issuer === expected)
    return { valid: true };
  return { valid: false, actual: issuer, expected };
}

// src/supabase/session-storage-adapter.ts
init_logger2();
var consecutiveWriteFailures = 0;
function createSessionStorageAdapter(isRemovalAllowed) {
  return {
    async getItem(key) {
      if (key.endsWith("-code-verifier")) {
        return null;
      }
      try {
        const content = await readFile4(SESSION_FILE, "utf-8");
        const session = JSON.parse(content);
        if (!isSessionStructureValid(session)) {
          logger2.warn("Storage adapter: invalid session structure, clearing corrupt file");
          await clearSession();
          return null;
        }
        if (isRefreshTokenExpired(session)) {
          logger2.warn("Storage adapter: refresh token expired");
          return null;
        }
        if (SUPABASE_URL) {
          const issuerCheck = validateJwtIssuer(session.accessToken, SUPABASE_URL);
          if (!issuerCheck.valid) {
            logger2.warn(`Storage adapter: session token issued by ${issuerCheck.actual}, expected ${issuerCheck.expected} — clearing mismatched session`);
            await clearSession();
            return null;
          }
        }
        const expiresAt = getJwtExpiresAt(session.accessToken);
        const now = Math.floor(Date.now() / 1000);
        const effectiveExpiresAt = expiresAt ?? 0;
        const gotrueSession = {
          access_token: session.accessToken,
          refresh_token: session.refreshToken,
          expires_at: effectiveExpiresAt,
          expires_in: expiresAt ? Math.max(0, expiresAt - now) : 0,
          token_type: "bearer",
          user: {
            id: session.userId,
            email: session.email,
            app_metadata: {},
            user_metadata: {},
            aud: "authenticated",
            created_at: ""
          }
        };
        return JSON.stringify(gotrueSession);
      } catch (error) {
        if (error.code === "ENOENT") {
          return null;
        }
        if (error instanceof SyntaxError) {
          logger2.warn("Storage adapter: corrupt session.json, clearing");
          await clearSession().catch(() => {});
          return null;
        }
        logger2.error("Storage adapter: failed to read session", error);
        if (error instanceof Error) {
          captureException(error, SUPABASE_SESSION_READ_FAILED, "session-storage-adapter", {
            ...buildFileSystemProperties({
              filePath: SESSION_FILE,
              operation: "read",
              errnoCode: error.code
            })
          });
        }
        return null;
      }
    },
    async setItem(key, value) {
      if (key.endsWith("-code-verifier")) {
        return;
      }
      try {
        const gotrueSession = JSON.parse(value);
        if (!gotrueSession.access_token || !gotrueSession.refresh_token || !gotrueSession.user?.id) {
          logger2.warn("Storage adapter: invalid GoTrueClient session structure, skipping write");
          return;
        }
        await withFileLock(SESSION_FILE, async () => {
          let workspaceId;
          let workspaceName;
          let existingRefreshToken;
          let refreshTokenExpiresAt;
          let existingEmail;
          try {
            const existingContent = await readFile4(SESSION_FILE, "utf-8");
            const existing = JSON.parse(existingContent);
            workspaceId = existing.workspaceId;
            workspaceName = existing.workspaceName;
            existingRefreshToken = existing.refreshToken;
            refreshTokenExpiresAt = existing.refreshTokenExpiresAt;
            existingEmail = existing.email;
          } catch (error) {
            const isFirstLogin = error.code === "ENOENT";
            if (!isFirstLogin) {
              logger2.warn("Storage adapter: failed to read existing session for metadata preservation", error);
              captureException(error instanceof Error ? error : new Error("Session file read failed during token refresh"), AUTH_SESSION_METADATA_LOST, "session-storage-adapter", { operation: "read", file: "session.json" });
            }
          }
          const tokenRotated = existingRefreshToken && existingRefreshToken !== gotrueSession.refresh_token;
          const updatedSession = {
            accessToken: gotrueSession.access_token,
            refreshToken: gotrueSession.refresh_token,
            refreshTokenExpiresAt: tokenRotated ? undefined : refreshTokenExpiresAt,
            userId: gotrueSession.user.id,
            email: gotrueSession.user.email || existingEmail || "",
            workspaceId,
            workspaceName
          };
          await ensureDirectory2(dirname6(SESSION_FILE));
          await writeFile4(SESSION_FILE, JSON.stringify(updatedSession, null, 2), {
            encoding: "utf-8",
            mode: 384
          });
          logger2.debug("Storage adapter: session persisted via setItem");
        });
        consecutiveWriteFailures = 0;
      } catch (error) {
        consecutiveWriteFailures++;
        logger2.error("Storage adapter: failed to write session", error);
        if (consecutiveWriteFailures >= 3) {
          logger2.warn(`Storage adapter: ${consecutiveWriteFailures} consecutive write failures — session may not survive daemon restart`);
        }
        if (error instanceof Error) {
          captureException(error, SUPABASE_SESSION_WRITE_FAILED, "session-storage-adapter", {
            ...buildFileSystemProperties({
              filePath: SESSION_FILE,
              operation: "write",
              errnoCode: error.code
            }),
            consecutive_failures: consecutiveWriteFailures
          });
        }
      }
    },
    async removeItem(key) {
      if (key.endsWith("-code-verifier")) {
        return;
      }
      if (isRemovalAllowed && !isRemovalAllowed()) {
        logger2.debug("Storage adapter: removal blocked (preserving tokens for recovery)");
        return;
      }
      try {
        await unlink5(SESSION_FILE);
        logger2.debug("Storage adapter: session removed via removeItem");
      } catch (error) {
        if (error.code === "ENOENT") {
          return;
        }
        logger2.error("Storage adapter: failed to remove session", error);
      }
    }
  };
}

// src/supabase/client.ts
function createSupabaseClientInstance(config) {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: config.autoRefreshToken,
      detectSessionInUrl: false,
      storage: config.storage
    }
  });
}
function isUnrecoverableRefreshError(error) {
  return error.code === "refresh_token_not_found" || error.code === "session_not_found" || error.message?.includes("Invalid Refresh Token: Refresh Token Not Found") === true;
}
async function createOnDemandClient() {
  let dispose;
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      logger2.warn("Supabase configuration missing (URL or anon key)");
      return null;
    }
    const storage = createSessionStorageAdapter(() => false);
    const client = createSupabaseClientInstance({
      autoRefreshToken: false,
      storage
    });
    dispose = async () => {
      try {
        await client.removeAllChannels();
      } catch (error) {
        logger2.warn(`Error removing on-demand channels: ${error.message}`);
      }
      logger2.debug("On-demand Supabase client disposed");
    };
    const {
      data: { session }
    } = await client.auth.getSession();
    if (!session) {
      await dispose();
      return null;
    }
    const now = Math.floor(Date.now() / 1000);
    if (session.expires_at != null && session.expires_at < now) {
      const freshSession = await loadSessionFile();
      if (freshSession && freshSession.accessToken !== session.access_token) {
        logger2.debug("On-demand client: daemon already refreshed, reloading session");
        await client.auth.setSession({
          access_token: freshSession.accessToken,
          refresh_token: freshSession.refreshToken
        });
        return { client, dispose };
      }
      const daemonPid = await getDaemonPid();
      if (daemonPid) {
        await new Promise((resolve) => setTimeout(() => resolve(), 200));
        const retrySession = await loadSessionFile();
        if (retrySession && retrySession.accessToken !== session.access_token) {
          logger2.debug("On-demand client: daemon refreshed during wait, reloading session");
          await client.auth.setSession({
            access_token: retrySession.accessToken,
            refresh_token: retrySession.refreshToken
          });
          return { client, dispose };
        }
      }
      const { data: refreshData, error: refreshError } = await client.auth.refreshSession();
      if (refreshError || !refreshData.session) {
        if (refreshError && isUnrecoverableRefreshError(refreshError)) {
          logger2.warn(`On-demand client: refresh token not found on server, clearing invalid session (${refreshError.code})`);
          await clearSession();
          await dispose();
          return null;
        }
        const recoverySession = await loadSessionFile();
        if (recoverySession && recoverySession.accessToken !== session.access_token) {
          logger2.debug("On-demand client: refresh failed but daemon wrote new tokens, recovering");
          await client.auth.setSession({
            access_token: recoverySession.accessToken,
            refresh_token: recoverySession.refreshToken
          });
          return { client, dispose };
        }
        logger2.warn(`On-demand client: access token expired and refresh failed${refreshError ? `: ${refreshError.message}` : ""}`);
        await dispose();
        return null;
      }
    }
    logger2.debug("On-demand Supabase client created");
    return { client, dispose };
  } catch (error) {
    if (dispose)
      await dispose();
    logger2.error("Failed to create on-demand Supabase client", error);
    if (error instanceof Error) {
      captureException(error, SUPABASE_CLIENT_INIT_FAILED, "supabase/client", {
        has_supabase_url: Boolean(SUPABASE_URL),
        has_anon_key: Boolean(SUPABASE_ANON_KEY),
        client_type: "on_demand"
      });
    }
    return null;
  }
}
async function withSupabaseClient(fn) {
  const onDemand = await createOnDemandClient();
  if (!onDemand)
    return null;
  try {
    return await fn(onDemand.client);
  } finally {
    await onDemand.dispose();
  }
}

// src/commands/standup-cli.ts
init_logger2();
async function main() {
  try {
    const session = await getValidSession();
    if (!session) {
      console.log("❌ Not authenticated - use /zest:login first");
      return;
    }
    if (!session.workspaceId) {
      console.log("❌ No workspace selected - run /zest:workspace first");
      return;
    }
    const { userId, workspaceId } = session;
    const result = await withSupabaseClient(async (supabase) => {
      const teamAndProfile = await fetchUserTeamAndProfile(supabase, userId, workspaceId, {
        logger: logger2,
        onError: (error2, { endpoint }) => captureException(error2, API_STANDUP_TEAM_FETCH_FAILED, "commands/standup-cli", {
          ...buildApiProperties({ endpoint })
        })
      });
      if (!teamAndProfile) {
        console.log("❌ No team found for your workspace");
        return;
      }
      const { teamId, userSlug, timezone } = teamAndProfile;
      const promptId = await fetchDefaultStandupPromptId(supabase, workspaceId, {
        logger: logger2,
        onError: (error2, { endpoint }) => captureException(error2, API_STANDUP_PROMPT_FETCH_FAILED, "commands/standup-cli", {
          ...buildApiProperties({ endpoint })
        })
      });
      if (!promptId) {
        console.log("❌ No standup prompt configured for this workspace");
        return;
      }
      const eligibility = await fetchAutoRefreshEligibility(supabase, workspaceId, userId, {
        logger: logger2
      });
      if (eligibility) {
        const totalNewData = eligibility.new_sessions_count + eligibility.new_messages_count + eligibility.new_events_count;
        if (totalNewData === 0) {
          console.log("ℹ️  No new coding sessions found for today — nothing to analyze");
          return;
        }
      }
      const tz = resolveTimezone(timezone);
      const { dateFrom, dateTo } = calculateDayDateRangeFromDate(tz);
      console.log("\uD83D\uDD04 Generating standup...");
      const { data, error } = await supabase.functions.invoke("analyze-sessions", {
        body: {
          model: DEFAULT_STANDUP_MODEL,
          workspaceId,
          userId,
          teamId,
          promptId,
          dateFrom,
          dateTo,
          isAutoGenerated: false
        },
        signal: AbortSignal.timeout(130000)
      });
      if (error) {
        if (error.message?.includes("409") || error.status === 409) {
          console.log("⏳ A standup is already being generated for today");
          return;
        }
        logger2.error("Edge function error", error);
        captureException(error instanceof Error ? error : new Error(String(error)), API_STANDUP_GENERATION_FAILED, "commands/standup-cli", {
          ...buildApiProperties({
            endpoint: "analyze-sessions",
            responseMessage: error.message
          })
        });
        console.log(`❌ Failed to generate standup: ${error.message || "Unknown error"}`);
        return;
      }
      if (data?.backgrounded === true || data?.status === "generating") {
        console.log("⏳ Standup generation is still running and will continue in the background");
        console.log(`${WEB_APP_URL}/users/${userSlug}#standup`);
        return;
      }
      const standupUrl = `${WEB_APP_URL}/users/${userSlug}#standup`;
      console.log("✅ Standup generated successfully!");
      console.log(standupUrl);
    });
    if (result === null) {
      console.log("❌ Failed to connect to Zest");
    }
  } catch (error) {
    logger2.error("Standup generation failed with exception", error);
    console.error("❌ Standup generation failed: " + (error instanceof Error ? error.message : "Unknown error"));
    process.exit(1);
  }
}
main();
