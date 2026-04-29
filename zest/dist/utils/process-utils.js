// src/utils/process-utils.ts
function isProcessDead(pid) {
  try {
    process.kill(pid, 0);
    return false;
  } catch (err) {
    const code = err.code;
    return code === "ESRCH";
  }
}
export {
  isProcessDead
};
