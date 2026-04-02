// src/utils/jwt.ts
function getJwtExpiresAt(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3)
      return;
    const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString());
    return typeof payload.exp === "number" ? payload.exp : undefined;
  } catch {
    return;
  }
}
export {
  getJwtExpiresAt
};
