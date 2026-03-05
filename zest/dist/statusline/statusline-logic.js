// src/statusline/statusline-logic.ts
function shouldShowDaemonError({
  hasSyncError,
  daemonRunning,
  daemonWarmingUpUntil,
  now = Date.now()
}) {
  const daemonWarmingUp = daemonWarmingUpUntil != null && daemonWarmingUpUntil > now;
  return !hasSyncError && !daemonRunning && !daemonWarmingUp;
}
export {
  shouldShowDaemonError
};
