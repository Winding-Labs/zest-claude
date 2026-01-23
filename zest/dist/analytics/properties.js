// src/analytics/properties.ts
import { basename } from "node:path";
function buildAuthProperties(options) {
  return {
    auth_method: options.authMethod,
    ...options.responseStatus !== undefined && { response_status: options.responseStatus },
    ...options.timeUntilExpiry !== undefined && { time_until_expiry: options.timeUntilExpiry }
  };
}
function buildSyncProperties(options) {
  return {
    ...options.syncErrorType && { sync_error_type: options.syncErrorType },
    ...options.eventsAttempted !== undefined && { events_attempted: options.eventsAttempted },
    ...options.sessionsAttempted !== undefined && {
      sessions_attempted: options.sessionsAttempted
    },
    ...options.messagesAttempted !== undefined && {
      messages_attempted: options.messagesAttempted
    },
    ...options.retryAttempt !== undefined && { retry_attempt: options.retryAttempt }
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
function buildDaemonProperties(options) {
  return {
    daemon_operation: options.operation,
    ...options.pid !== undefined && { daemon_pid: options.pid }
  };
}
function buildApiProperties(options) {
  return {
    ...options.endpoint && { api_endpoint: options.endpoint },
    ...options.responseStatus !== undefined && { response_status: options.responseStatus },
    ...options.responseMessage && { response_message: options.responseMessage }
  };
}
export {
  buildSyncProperties,
  buildFileSystemProperties,
  buildDaemonProperties,
  buildAuthProperties,
  buildApiProperties
};
