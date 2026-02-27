// src/utils/string-utils.ts
function toWellFormed(str) {
  return str.toWellFormed?.() ?? str;
}
export {
  toWellFormed
};
