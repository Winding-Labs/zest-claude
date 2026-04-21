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
export {
  validateJwtIssuer,
  getJwtIssuer,
  getJwtExpiresAt
};
