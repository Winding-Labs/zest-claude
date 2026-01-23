// src/analytics/events.ts
var AUTH_DEVICE_CODE_INITIATION_FAILED = "auth_device_code_initiation_failed";
var AUTH_DEVICE_CODE_POLLING_FAILED = "auth_device_code_polling_failed";
var AUTH_TOKEN_REFRESH_FAILED = "auth_token_refresh_failed";
var AUTH_SESSION_LOAD_FAILED = "auth_session_load_failed";
var AUTH_SESSION_SAVE_FAILED = "auth_session_save_failed";
var SYNC_NOT_AUTHENTICATED = "sync_not_authenticated";
var SYNC_EVENTS_UPLOAD_FAILED = "sync_events_upload_failed";
var SYNC_EVENTS_RETRY_EXHAUSTED = "sync_events_upload_retry_exhausted";
var SYNC_CHAT_UPLOAD_FAILED = "sync_chat_upload_failed";
var SYNC_NETWORK_ERROR = "sync_network_error";
var QUEUE_READ_CORRUPTED = "queue_read_corrupted";
var QUEUE_WRITE_FAILED = "queue_write_failed";
var FILE_LOCK_TIMEOUT = "file_lock_timeout";
var DAEMON_START_FAILED = "daemon_start_failed";
var DAEMON_RESTART_FAILED = "daemon_restart_failed";
var DAEMON_SYNC_CYCLE_FAILED = "daemon_sync_cycle_failed";
var API_WORKSPACE_FETCH_FAILED = "api_workspace_fetch_failed";
var API_PROFILE_UPDATE_FAILED = "api_profile_update_failed";
function getErrorCategory(errorType) {
  if (errorType.startsWith("auth_"))
    return "auth";
  if (errorType.startsWith("sync_"))
    return "sync";
  if (errorType.startsWith("queue_") || errorType.startsWith("file_"))
    return "filesystem";
  if (errorType.startsWith("daemon_"))
    return "daemon";
  if (errorType.startsWith("api_"))
    return "api";
  return "api";
}
export {
  getErrorCategory,
  SYNC_NOT_AUTHENTICATED,
  SYNC_NETWORK_ERROR,
  SYNC_EVENTS_UPLOAD_FAILED,
  SYNC_EVENTS_RETRY_EXHAUSTED,
  SYNC_CHAT_UPLOAD_FAILED,
  QUEUE_WRITE_FAILED,
  QUEUE_READ_CORRUPTED,
  FILE_LOCK_TIMEOUT,
  DAEMON_SYNC_CYCLE_FAILED,
  DAEMON_START_FAILED,
  DAEMON_RESTART_FAILED,
  AUTH_TOKEN_REFRESH_FAILED,
  AUTH_SESSION_SAVE_FAILED,
  AUTH_SESSION_LOAD_FAILED,
  AUTH_DEVICE_CODE_POLLING_FAILED,
  AUTH_DEVICE_CODE_INITIATION_FAILED,
  API_WORKSPACE_FETCH_FAILED,
  API_PROFILE_UPDATE_FAILED
};
