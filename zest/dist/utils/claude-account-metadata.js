// ../../packages/plugin-common/src/extractors/claude-account-metadata.ts
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_CONFIG_FILE = process.env.CLAUDE_CONFIG_FILE || join(homedir(), ".claude.json");
function objectField(value, key) {
  if (!value || typeof value !== "object") {
    return null;
  }
  const field = value[key];
  return field && typeof field === "object" ? field : null;
}
function stringField(value, key) {
  if (!value || typeof value !== "object") {
    return;
  }
  const field = value[key];
  return typeof field === "string" && field.trim().length > 0 ? field.trim() : undefined;
}
function booleanField(value, key) {
  if (!value || typeof value !== "object") {
    return;
  }
  const field = value[key];
  return typeof field === "boolean" ? field : undefined;
}
function normalizeClaudeTier(value) {
  if (!value) {
    return;
  }
  const normalized = value.toLowerCase().replace(/^claude_/, "");
  const tierMatch = normalized.match(/(?:^|_)claude_((?:max|pro|team|enterprise)(?:_\d+x)?)/) ?? normalized.match(/^((?:max|pro|team|enterprise)(?:_\d+x)?)/);
  return tierMatch?.[1] ?? normalized;
}
function inferBillingMode(value) {
  if (!value) {
    return "unknown";
  }
  const normalized = value.toLowerCase();
  if (normalized.includes("subscription")) {
    return "subscription";
  }
  if (normalized.includes("api")) {
    return "api";
  }
  return "unknown";
}
function hasAvailableOverageCredit(cache) {
  if (!cache || typeof cache !== "object") {
    return;
  }
  for (const entry of Object.values(cache)) {
    const info = objectField(entry, "info");
    if (booleanField(info, "available") === true || booleanField(info, "granted") === true) {
      return true;
    }
  }
  return;
}
function extractClaudeAccountMetadataFromConfig(config) {
  const oauthAccount = objectField(config, "oauthAccount") ?? {};
  const tier = normalizeClaudeTier(stringField(oauthAccount, "subscriptionType") ?? stringField(config, "subscriptionType") ?? stringField(oauthAccount, "organizationType") ?? stringField(config, "organizationType") ?? stringField(oauthAccount, "organizationRateLimitTier") ?? stringField(config, "organizationRateLimitTier") ?? stringField(oauthAccount, "rateLimitTier") ?? stringField(config, "rateLimitTier"));
  const billingType = stringField(oauthAccount, "billingType") ?? stringField(config, "billingType");
  const overage = booleanField(oauthAccount, "hasExtraUsageEnabled") ?? booleanField(config, "hasExtraUsageEnabled") ?? hasAvailableOverageCredit(config?.overageCreditGrantCache);
  const billingMode = inferBillingMode(billingType);
  const metadata = {
    ...tier ? { plan: `anthropic:${tier}` } : {},
    ...billingType || tier || overage !== undefined ? { billing_mode: billingMode } : {},
    ...overage !== undefined ? { overage } : {}
  };
  return Object.keys(metadata).length > 0 ? metadata : null;
}
async function readClaudeAccountMetadata(configFile = CLAUDE_CONFIG_FILE) {
  try {
    return extractClaudeAccountMetadataFromConfig(JSON.parse(await readFile(configFile, "utf-8")));
  } catch {
    return null;
  }
}
export {
  readClaudeAccountMetadata,
  extractClaudeAccountMetadataFromConfig
};
