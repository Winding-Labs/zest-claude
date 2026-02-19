// ../../packages/privacy-redaction/src/config/defaults.ts
var DEFAULT_MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
var DEFAULT_PRIVACY_CONFIG = {
  approach: "detection",
  aggressiveMode: false,
  enabledPatterns: [],
  enableGitignore: true,
  enableZestRules: true,
  customExclusionPatterns: [],
  maxFileSizeBytes: DEFAULT_MAX_FILE_SIZE_BYTES
};
function createPrivacyConfig(partial) {
  if (!partial) {
    return { ...DEFAULT_PRIVACY_CONFIG };
  }
  return {
    ...DEFAULT_PRIVACY_CONFIG,
    ...partial,
    enabledPatterns: partial.enabledPatterns ?? DEFAULT_PRIVACY_CONFIG.enabledPatterns,
    customExclusionPatterns: partial.customExclusionPatterns ?? DEFAULT_PRIVACY_CONFIG.customExclusionPatterns
  };
}
// ../../packages/privacy-redaction/src/detection/cache.ts
class DetectionCache {
  cache = new Map;
  maxEntries;
  ttlMs;
  constructor(options = {}) {
    this.maxEntries = options.maxEntries ?? 1000;
    this.ttlMs = options.ttlMs ?? 5 * 60 * 1000;
  }
  get(key) {
    const entry = this.cache.get(key);
    if (!entry) {
      return;
    }
    if (Date.now() - entry.timestamp > this.ttlMs) {
      this.cache.delete(key);
      return;
    }
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
  set(key, value) {
    if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  has(key) {
    return this.get(key) !== undefined;
  }
  delete(key) {
    return this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  prune() {
    const now = Date.now();
    let pruned = 0;
    const keysToDelete = [];
    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp > this.ttlMs) {
        keysToDelete.push(key);
      }
    });
    for (const key of keysToDelete) {
      this.cache.delete(key);
      pruned++;
    }
    return pruned;
  }
}
function computeContentHash(content) {
  let hash = 0;
  for (let i = 0;i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}
function generateCacheKey(content, context) {
  const contentHash = computeContentHash(content);
  if (context) {
    const contextHash = computeContentHash(context);
    return `${contentHash}:${contextHash}`;
  }
  return contentHash;
}
// ../../packages/privacy-redaction/src/patterns/sensitive-patterns.ts
function createPattern(name, description, regex, category, options = {}) {
  return {
    name,
    description,
    regex,
    category,
    redactionStrategy: options.redactionStrategy ?? "full",
    aggressiveOnly: options.aggressiveOnly ?? false,
    highlySensitive: options.highlySensitive ?? false,
    priority: options.priority ?? 50
  };
}
var SENSITIVE_DATA_PATTERNS = [
  createPattern("api_key", "API keys and access keys (quoted)", /(?:api[_-]?key|apikey|access[_-]?key|secret[_-]?key)["\s]*[:=]["\s]*["']([^"']{16,})["']/gi, "api_keys", { redactionStrategy: "partial", priority: 60 }),
  createPattern("api_key_unquoted", "API keys and access keys (unquoted)", /(?:api[_-]?key|apikey|access[_-]?key|secret[_-]?key)["\s]*(?:[:=]|is)["\s]*([a-zA-Z0-9_\-=+/]{16,})(?=\s|$|[^\w\-=+/])/gi, "api_keys", { redactionStrategy: "partial", priority: 55 }),
  createPattern("jwt_token", "JWT tokens", /eyJ[a-zA-Z0-9_\-]*\.eyJ[a-zA-Z0-9_\-]*\.[a-zA-Z0-9_\-]*/g, "api_keys", { redactionStrategy: "partial", priority: 70 }),
  createPattern("generic_secret", "Generic secrets and passwords", /(?:password|passwd|pwd|secret|token|key)["\s]*[:=]["\s]*["']([^"'\s]{8,})["']/gi, "generic", { redactionStrategy: "full", highlySensitive: true, priority: 40 }),
  createPattern("generic_secret_unquoted", "Generic secrets and passwords (unquoted)", /(?:password|passwd|pwd)["\s]*[:=]["\s]*([^\s"']{6,})/gi, "generic", { redactionStrategy: "full", highlySensitive: true, priority: 45 }),
  createPattern("aws_access_key", "AWS access keys", /AKIA[0-9A-Z]{16}/g, "cloud_services", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("aws_secret_key", "AWS secret access keys", /(?:aws[_-]?secret[_-]?access[_-]?key)["\s]*[:=]["\s]*([a-zA-Z0-9/+=]{40})/gi, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("github_token", "GitHub personal access tokens", /gh[pousr]_[A-Za-z0-9_]{36,255}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("github_app_token", "GitHub App installation access tokens", /ghs_[A-Za-z0-9_]{36}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("github_oauth_token", "GitHub OAuth access tokens", /gho_[A-Za-z0-9_]{36}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("gitlab_token", "GitLab personal access tokens", /glpat-[A-Za-z0-9_\-]{20}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("bitbucket_token", "Bitbucket app passwords", /ATB[A-Za-z0-9]{95}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("atlassian_token", "Atlassian API tokens", /ATATT[A-Za-z0-9\-_]{60}/g, "api_keys", {
    redactionStrategy: "full",
    priority: 80
  }),
  createPattern("slack_token", "Slack API tokens", /xox[baprs]-[A-Za-z0-9\-]+/g, "communication", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 80
  }),
  createPattern("discord_token", "Discord bot tokens", /[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g, "communication", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("stripe_key", "Stripe live secret keys", /sk_live_[A-Za-z0-9]{24}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 95
  }),
  createPattern("stripe_publishable_key", "Stripe live publishable keys", /pk_live_[A-Za-z0-9]{24}/g, "payment", { redactionStrategy: "partial", priority: 70 }),
  createPattern("paypal_client_id", "PayPal client IDs", /A[A-Za-z0-9\-_]{79}/g, "payment", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 75,
    aggressiveOnly: true
  }),
  createPattern("square_token", "Square access tokens", /sq0atp-[A-Za-z0-9\-_]{22}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("shopify_token", "Shopify access tokens", /shpat_[a-fA-F0-9]{32}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("shopify_secret", "Shopify shared secrets", /shpss_[a-fA-F0-9]{32}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("twilio_token", "Twilio auth tokens", /SK[a-f0-9]{32}/g, "communication", {
    redactionStrategy: "full",
    priority: 75,
    aggressiveOnly: true
  }),
  createPattern("sendgrid_key", "SendGrid API keys", /SG\.[A-Za-z0-9\-_]{22}\.[A-Za-z0-9\-_]{43}/g, "communication", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("mailgun_key", "Mailgun API keys", /key-[a-f0-9]{32}/g, "communication", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 80
  }),
  createPattern("firebase_key", "Firebase API keys", /AIza[A-Za-z0-9\-_]{35}/g, "cloud_services", {
    redactionStrategy: "partial",
    priority: 75
  }),
  createPattern("google_api_key", "Google Cloud API keys", /AIza[A-Za-z0-9\-_]{35}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 80 }),
  createPattern("azure_storage_key", "Azure Storage account keys", /[A-Za-z0-9+/]{88}==/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 70, aggressiveOnly: true }),
  createPattern("heroku_key", "Heroku API keys", /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 50, aggressiveOnly: true }),
  createPattern("digitalocean_token", "DigitalOcean personal access tokens", /dop_v1_[a-f0-9]{64}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("cloudflare_token", "Cloudflare API tokens (generic pattern)", /[A-Za-z0-9\-_]{40}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 30, aggressiveOnly: true }),
  createPattern("npm_token", "npm authentication tokens", /npm_[A-Za-z0-9]{36}/g, "api_keys", {
    redactionStrategy: "full",
    priority: 80
  }),
  createPattern("docker_token", "Docker Hub personal access tokens", /dckr_pat_[A-Za-z0-9\-_]{36}/g, "api_keys", { redactionStrategy: "full", priority: 80 }),
  createPattern("vercel_token", "Vercel access tokens", /vercel_[A-Za-z0-9]{24}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("netlify_token", "Netlify access tokens", /netlify_[A-Za-z0-9\-_]{64}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("railway_token", "Railway API tokens", /railway_[A-Za-z0-9]{40}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("openai_key", "OpenAI API keys", /sk-[A-Za-z0-9]{48}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("openai_project_key", "OpenAI project API keys", /sk-proj-[A-Za-z0-9\-_]{40,}/g, "api_keys", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("anthropic_key", "Anthropic API keys", /sk-ant-[A-Za-z0-9\-_]{80,}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("auth0_secret", "Auth0 client secrets (generic pattern)", /[A-Za-z0-9\-_]{64}/g, "api_keys", { redactionStrategy: "full", highlySensitive: true, priority: 25, aggressiveOnly: true }),
  createPattern("okta_token", "Okta API tokens", /00[A-Za-z0-9]{38}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 70,
    aggressiveOnly: true
  }),
  createPattern("planetscale_password", "PlanetScale database passwords", /pscale_pw_[A-Za-z0-9\-_]{32}/g, "database", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("mongodb_atlas", "MongoDB Atlas connection strings", /mongodb\+srv:\/\/[^:\s]+:[^@\s]+@[^\/\s]+\.mongodb\.net\/[^\s]*/gi, "database", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("mongodb_connection", "MongoDB connection strings with credentials", /mongodb(?:\+srv)?:\/\/[^:\s]+:[^@\s]+@[^\s"']+/gi, "database", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("supabase_key", "Supabase service role keys (JWT format)", /eyJ[A-Za-z0-9\-_]*\.eyJ[A-Za-z0-9\-_]*\.[A-Za-z0-9\-_]*/g, "database", { redactionStrategy: "full", highlySensitive: true, priority: 65 }),
  createPattern("db_connection", "Database connection strings", /(?:mongodb|mysql|postgresql|postgres|redis|sqlite):\/\/[^\s\n"']+/gi, "database", { redactionStrategy: "partial", highlySensitive: true, priority: 80 }),
  createPattern("private_key", "Private keys in PEM format", /-----BEGIN\s+(?:RSA\s+|EC\s+|OPENSSH\s+|DSA\s+)?PRIVATE\s+KEY-----[\s\S]*?-----END\s+(?:RSA\s+|EC\s+|OPENSSH\s+|DSA\s+)?PRIVATE\s+KEY-----/gi, "cryptographic", { redactionStrategy: "full", highlySensitive: true, priority: 100 }),
  createPattern("email_in_config", "Email addresses in configuration", /(?:email|user|username|admin)["\s]*[:=]["\s]*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, "pii", { redactionStrategy: "partial", priority: 60, aggressiveOnly: true }),
  createPattern("credit_card", "Credit card numbers (continuous digits)", /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3[0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})/g, "pii", { redactionStrategy: "full", highlySensitive: true, priority: 95 }),
  createPattern("credit_card_formatted", "Credit card numbers (with dashes or spaces)", /(?:4[0-9]{3}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|5[1-5][0-9]{2}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|3[47][0-9]{2}[-\s]?[0-9]{6}[-\s]?[0-9]{5})/g, "pii", { redactionStrategy: "full", highlySensitive: true, priority: 95 }),
  createPattern("ssn", "Social Security Numbers", /\b\d{3}-\d{2}-\d{4}\b/g, "pii", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 95
  }),
  createPattern("private_ip", "Private IP addresses", /\b(?:10\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|172\.(?:1[6-9]|2[0-9]|3[01])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|192\.168\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\b/g, "network", { redactionStrategy: "partial", priority: 50, aggressiveOnly: true })
];
var HIGHLY_SENSITIVE_PATTERN_NAMES = [
  "private_key",
  "aws_access_key",
  "aws_secret_key",
  "azure_storage_key",
  "google_api_key",
  "credit_card",
  "credit_card_formatted",
  "stripe_key",
  "paypal_client_id",
  "square_token",
  "ssn",
  "mongodb_atlas",
  "mongodb_connection",
  "planetscale_password",
  "supabase_key",
  "db_connection",
  "openai_key",
  "openai_project_key",
  "anthropic_key",
  "auth0_secret",
  "okta_token",
  "generic_secret",
  "generic_secret_unquoted",
  "slack_token",
  "discord_token",
  "github_token",
  "github_app_token",
  "github_oauth_token",
  "gitlab_token",
  "bitbucket_token",
  "shopify_token",
  "shopify_secret",
  "sendgrid_key",
  "mailgun_key",
  "heroku_key",
  "digitalocean_token",
  "cloudflare_token",
  "vercel_token",
  "netlify_token",
  "railway_token"
];

// ../../packages/privacy-redaction/src/patterns/categories.ts
function getAllPatterns() {
  return SENSITIVE_DATA_PATTERNS;
}
function getPatternsByNames(names) {
  const nameSet = new Set(names);
  return SENSITIVE_DATA_PATTERNS.filter((pattern) => nameSet.has(pattern.name));
}
function getNonAggressivePatterns() {
  return SENSITIVE_DATA_PATTERNS.filter((pattern) => !pattern.aggressiveOnly);
}
function isHighlySensitivePattern(patternName) {
  return HIGHLY_SENSITIVE_PATTERN_NAMES.includes(patternName);
}
function selectPatterns(aggressiveMode, enabledPatterns) {
  if (enabledPatterns.length > 0) {
    return getPatternsByNames(enabledPatterns);
  }
  if (aggressiveMode) {
    return getAllPatterns();
  }
  return getNonAggressivePatterns();
}
// ../../packages/privacy-redaction/src/detection/detector.ts
class SensitiveDataDetector {
  patterns;
  config;
  cache;
  stats;
  constructor(options) {
    this.config = options.config;
    this.patterns = selectPatterns(options.config.aggressiveMode, options.config.enabledPatterns);
    if (options.enableCache !== false) {
      this.cache = new DetectionCache({
        maxEntries: options.maxCacheEntries ?? 1000,
        ttlMs: options.cacheTtlMs ?? 5 * 60 * 1000
      });
    } else {
      this.cache = null;
    }
    this.stats = this.createEmptyStats();
  }
  createEmptyStats() {
    return {
      totalDetections: 0,
      byPattern: {},
      byCategory: {},
      contentScanned: 0,
      cacheHits: 0
    };
  }
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.patterns = selectPatterns(this.config.aggressiveMode, this.config.enabledPatterns);
    this.cache?.clear();
  }
  getConfig() {
    return { ...this.config };
  }
  scanContent(content, context) {
    if (this.cache) {
      const cacheKey = generateCacheKey(content, context);
      const cached = this.cache.get(cacheKey);
      if (cached) {
        this.stats.cacheHits++;
        return { ...cached, fromCache: true };
      }
    }
    const detections = this.performScan(content);
    const deduplicatedDetections = this.deduplicateDetections(detections);
    this.stats.contentScanned++;
    this.stats.totalDetections += deduplicatedDetections.length;
    for (const detection of deduplicatedDetections) {
      this.stats.byPattern[detection.pattern] = (this.stats.byPattern[detection.pattern] || 0) + 1;
      this.stats.byCategory[detection.category] = (this.stats.byCategory[detection.category] || 0) + 1;
    }
    const result = {
      hasSensitiveData: deduplicatedDetections.length > 0,
      detections: deduplicatedDetections,
      fromCache: false
    };
    if (this.cache) {
      const cacheKey = generateCacheKey(content, context);
      this.cache.set(cacheKey, result);
    }
    return result;
  }
  performScan(content) {
    const detections = [];
    for (const pattern of this.patterns) {
      pattern.regex.lastIndex = 0;
      const matches = Array.from(content.matchAll(pattern.regex));
      for (const match of matches) {
        if (match.index === undefined)
          continue;
        let start = match.index;
        let end = match.index + match[0].length;
        let matchedText = match[0];
        if (match[1] !== undefined) {
          const sensitiveValue = match[1];
          const sensitiveStartInMatch = match[0].indexOf(sensitiveValue);
          if (sensitiveStartInMatch !== -1) {
            start = match.index + sensitiveStartInMatch;
            end = start + sensitiveValue.length;
            matchedText = sensitiveValue;
          }
        }
        detections.push({
          pattern: pattern.name,
          description: pattern.description,
          position: { start, end },
          matchedText,
          redactionStrategy: pattern.redactionStrategy,
          category: pattern.category,
          highlySensitive: pattern.highlySensitive
        });
      }
    }
    return detections;
  }
  deduplicateDetections(detections) {
    if (detections.length <= 1) {
      return detections;
    }
    const sorted = [...detections].sort((a, b) => {
      if (a.position.start !== b.position.start) {
        return a.position.start - b.position.start;
      }
      return this.getPatternPriority(b.pattern) - this.getPatternPriority(a.pattern);
    });
    const deduplicated = [];
    for (const detection of sorted) {
      const overlappingIndex = deduplicated.findIndex((existing) => detection.position.start < existing.position.end && detection.position.end > existing.position.start);
      if (overlappingIndex === -1) {
        deduplicated.push(detection);
      } else {
        const existing = deduplicated[overlappingIndex];
        const existingPriority = this.getPatternPriority(existing.pattern);
        const newPriority = this.getPatternPriority(detection.pattern);
        if (newPriority > existingPriority) {
          deduplicated[overlappingIndex] = detection;
        }
      }
    }
    return deduplicated;
  }
  getPatternPriority(patternName) {
    const pattern = this.patterns.find((p) => p.name === patternName);
    return pattern?.priority ?? 50;
  }
  hasHighlySensitiveData(detections) {
    return detections.some((d) => d.highlySensitive || isHighlySensitivePattern(d.pattern));
  }
  getStats() {
    return { ...this.stats };
  }
  clearStats() {
    this.stats = this.createEmptyStats();
  }
  clearCache() {
    this.cache?.clear();
  }
  clearAll() {
    this.clearStats();
    this.clearCache();
  }
  getCacheSize() {
    return this.cache?.size ?? 0;
  }
  getActivePatterns() {
    return [...this.patterns];
  }
  getActivePatternCount() {
    return this.patterns.length;
  }
}
// ../../packages/privacy-redaction/src/exclusion/built-in-rules.ts
var SENSITIVE_FILE_RULES = [
  { pattern: "*.env*", category: "sensitive_files", description: "Environment files" },
  { pattern: "*.key", category: "sensitive_files", description: "Key files" },
  { pattern: "*.pem", category: "sensitive_files", description: "PEM certificate files" },
  { pattern: "*.p12", category: "sensitive_files", description: "PKCS#12 files" },
  { pattern: "*.pfx", category: "sensitive_files", description: "PFX certificate files" },
  { pattern: "*.jks", category: "sensitive_files", description: "Java keystore files" },
  { pattern: "*.keystore", category: "sensitive_files", description: "Keystore files" }
];
var SENSITIVE_DIRECTORY_RULES = [
  { pattern: "**/secrets/**", category: "sensitive_directories", description: "Secrets directory" },
  {
    pattern: "**/credentials/**",
    category: "sensitive_directories",
    description: "Credentials directory"
  },
  { pattern: "**/private/**", category: "sensitive_directories", description: "Private directory" },
  { pattern: "**/.ssh/**", category: "sensitive_directories", description: "SSH directory" },
  { pattern: "**/.aws/**", category: "sensitive_directories", description: "AWS credentials" },
  { pattern: "**/.gcp/**", category: "sensitive_directories", description: "GCP credentials" }
];
var BUILD_ARTIFACT_RULES = [
  { pattern: "**/node_modules/**", category: "build_artifacts", description: "Node.js modules" },
  { pattern: "**/.git/**", category: "build_artifacts", description: "Git directory" },
  { pattern: "**/dist/**", category: "build_artifacts", description: "Distribution folder" },
  { pattern: "**/build/**", category: "build_artifacts", description: "Build folder" },
  { pattern: "**/out/**", category: "build_artifacts", description: "Output folder" },
  { pattern: "**/*.min.js", category: "build_artifacts", description: "Minified JavaScript" },
  { pattern: "**/*.min.css", category: "build_artifacts", description: "Minified CSS" },
  { pattern: "**/coverage/**", category: "build_artifacts", description: "Coverage reports" },
  { pattern: "**/.nyc_output/**", category: "build_artifacts", description: "NYC coverage output" },
  { pattern: "**/logs/**", category: "build_artifacts", description: "Log directory" },
  { pattern: "**/*.log", category: "build_artifacts", description: "Log files" },
  { pattern: "**/tmp/**", category: "build_artifacts", description: "Temp directory" },
  { pattern: "**/temp/**", category: "build_artifacts", description: "Temp directory" },
  { pattern: "**/.cache/**", category: "build_artifacts", description: "Cache directory" },
  { pattern: "**/.DS_Store", category: "build_artifacts", description: "macOS metadata" },
  { pattern: "**/Thumbs.db", category: "build_artifacts", description: "Windows thumbnails" }
];
var LOCK_FILE_RULES = [
  { pattern: "**/package-lock.json", category: "lock_files", description: "npm lock file" },
  { pattern: "**/yarn.lock", category: "lock_files", description: "Yarn lock file" },
  { pattern: "**/pnpm-lock.yaml", category: "lock_files", description: "pnpm lock file" },
  { pattern: "**/bun.lockb", category: "lock_files", description: "Bun lock file (binary)" },
  { pattern: "**/bun.lock", category: "lock_files", description: "Bun lock file" },
  { pattern: "**/poetry.lock", category: "lock_files", description: "Poetry lock file" },
  { pattern: "**/Pipfile.lock", category: "lock_files", description: "Pipenv lock file" },
  { pattern: "**/requirements.lock", category: "lock_files", description: "Requirements lock" },
  { pattern: "**/Gemfile.lock", category: "lock_files", description: "Bundler lock file" },
  { pattern: "**/composer.lock", category: "lock_files", description: "Composer lock file" },
  { pattern: "**/Cargo.lock", category: "lock_files", description: "Cargo lock file" },
  { pattern: "**/go.sum", category: "lock_files", description: "Go checksum file" },
  { pattern: "**/packages.lock.json", category: "lock_files", description: ".NET lock file" },
  { pattern: "**/project.assets.json", category: "lock_files", description: ".NET assets" },
  { pattern: "**/pubspec.lock", category: "lock_files", description: "Pub lock file" },
  { pattern: "**/mix.lock", category: "lock_files", description: "Mix lock file" },
  { pattern: "**/Package.resolved", category: "lock_files", description: "Swift PM lock" },
  { pattern: "**/gradle.lockfile", category: "lock_files", description: "Gradle lock file" },
  { pattern: "**/gradle/dependencies.lock", category: "lock_files", description: "Gradle deps" },
  { pattern: "**/renv.lock", category: "lock_files", description: "renv lock file" },
  { pattern: "**/packrat/packrat.lock", category: "lock_files", description: "Packrat lock" },
  { pattern: "**/cabal.project.freeze", category: "lock_files", description: "Cabal freeze" },
  { pattern: "**/stack.yaml.lock", category: "lock_files", description: "Stack lock file" },
  { pattern: "**/Manifest.toml", category: "lock_files", description: "Julia manifest" },
  { pattern: "**/.terraform.lock.hcl", category: "lock_files", description: "Terraform lock" },
  { pattern: "**/flake.lock", category: "lock_files", description: "Nix flake lock" },
  { pattern: "**/npm-shrinkwrap.json", category: "lock_files", description: "npm shrinkwrap" }
];
var BINARY_MEDIA_RULES = [
  { pattern: "**/*.exe", category: "binary_media", description: "Windows executable" },
  { pattern: "**/*.dll", category: "binary_media", description: "Windows library" },
  { pattern: "**/*.so", category: "binary_media", description: "Shared object" },
  { pattern: "**/*.dylib", category: "binary_media", description: "macOS library" },
  { pattern: "**/*.bin", category: "binary_media", description: "Binary file" },
  { pattern: "**/*.obj", category: "binary_media", description: "Object file" },
  { pattern: "**/*.o", category: "binary_media", description: "Object file" },
  { pattern: "**/*.a", category: "binary_media", description: "Static library" },
  { pattern: "**/*.lib", category: "binary_media", description: "Library file" },
  { pattern: "**/*.jar", category: "binary_media", description: "Java archive" },
  { pattern: "**/*.war", category: "binary_media", description: "Web archive" },
  { pattern: "**/*.ear", category: "binary_media", description: "Enterprise archive" },
  { pattern: "**/*.class", category: "binary_media", description: "Java class" },
  { pattern: "**/*.pyc", category: "binary_media", description: "Python bytecode" },
  { pattern: "**/*.pyo", category: "binary_media", description: "Python optimized" },
  { pattern: "**/*.wasm", category: "binary_media", description: "WebAssembly" },
  { pattern: "**/*.vsix", category: "binary_media", description: "VS Code extension" },
  { pattern: "**/*.jpg", category: "binary_media", description: "JPEG image" },
  { pattern: "**/*.jpeg", category: "binary_media", description: "JPEG image" },
  { pattern: "**/*.png", category: "binary_media", description: "PNG image" },
  { pattern: "**/*.gif", category: "binary_media", description: "GIF image" },
  { pattern: "**/*.bmp", category: "binary_media", description: "Bitmap image" },
  { pattern: "**/*.ico", category: "binary_media", description: "Icon file" },
  { pattern: "**/*.webp", category: "binary_media", description: "WebP image" },
  { pattern: "**/*.tiff", category: "binary_media", description: "TIFF image" },
  { pattern: "**/*.psd", category: "binary_media", description: "Photoshop file" },
  { pattern: "**/*.mp4", category: "binary_media", description: "MP4 video" },
  { pattern: "**/*.avi", category: "binary_media", description: "AVI video" },
  { pattern: "**/*.mov", category: "binary_media", description: "QuickTime video" },
  { pattern: "**/*.wmv", category: "binary_media", description: "WMV video" },
  { pattern: "**/*.flv", category: "binary_media", description: "Flash video" },
  { pattern: "**/*.webm", category: "binary_media", description: "WebM video" },
  { pattern: "**/*.mkv", category: "binary_media", description: "Matroska video" },
  { pattern: "**/*.mp3", category: "binary_media", description: "MP3 audio" },
  { pattern: "**/*.wav", category: "binary_media", description: "WAV audio" },
  { pattern: "**/*.ogg", category: "binary_media", description: "Ogg audio" },
  { pattern: "**/*.flac", category: "binary_media", description: "FLAC audio" },
  { pattern: "**/*.aac", category: "binary_media", description: "AAC audio" },
  { pattern: "**/*.m4a", category: "binary_media", description: "M4A audio" },
  { pattern: "**/*.zip", category: "binary_media", description: "ZIP archive" },
  { pattern: "**/*.tar", category: "binary_media", description: "TAR archive" },
  { pattern: "**/*.gz", category: "binary_media", description: "Gzip archive" },
  { pattern: "**/*.bz2", category: "binary_media", description: "Bzip2 archive" },
  { pattern: "**/*.xz", category: "binary_media", description: "XZ archive" },
  { pattern: "**/*.rar", category: "binary_media", description: "RAR archive" },
  { pattern: "**/*.7z", category: "binary_media", description: "7-Zip archive" },
  { pattern: "**/*.tgz", category: "binary_media", description: "Tarball" },
  { pattern: "**/*.pdf", category: "binary_media", description: "PDF document" },
  { pattern: "**/*.doc", category: "binary_media", description: "Word document" },
  { pattern: "**/*.docx", category: "binary_media", description: "Word document" },
  { pattern: "**/*.xls", category: "binary_media", description: "Excel spreadsheet" },
  { pattern: "**/*.xlsx", category: "binary_media", description: "Excel spreadsheet" },
  { pattern: "**/*.ppt", category: "binary_media", description: "PowerPoint" },
  { pattern: "**/*.pptx", category: "binary_media", description: "PowerPoint" },
  { pattern: "**/*.woff", category: "binary_media", description: "WOFF font" },
  { pattern: "**/*.woff2", category: "binary_media", description: "WOFF2 font" },
  { pattern: "**/*.ttf", category: "binary_media", description: "TrueType font" },
  { pattern: "**/*.otf", category: "binary_media", description: "OpenType font" },
  { pattern: "**/*.eot", category: "binary_media", description: "EOT font" },
  { pattern: "**/*.db", category: "binary_media", description: "Database file" },
  { pattern: "**/*.sqlite", category: "binary_media", description: "SQLite database" },
  { pattern: "**/*.sqlite3", category: "binary_media", description: "SQLite database" }
];
var ALL_BUILT_IN_RULES = [
  ...SENSITIVE_FILE_RULES,
  ...SENSITIVE_DIRECTORY_RULES,
  ...BUILD_ARTIFACT_RULES,
  ...LOCK_FILE_RULES,
  ...BINARY_MEDIA_RULES
];
function getBuiltInPatterns() {
  return new Set(ALL_BUILT_IN_RULES.map((rule) => rule.pattern));
}
// ../../packages/privacy-redaction/src/exclusion/gitignore-parser.ts
function parseGitignoreLine(line) {
  let pattern = line.trim();
  if (!pattern || pattern.startsWith("#")) {
    return null;
  }
  pattern = pattern.replace(/\\(\s)$/, "$1");
  const negated = pattern.startsWith("!");
  if (negated) {
    pattern = pattern.substring(1);
  }
  const directoryOnly = pattern.endsWith("/");
  if (directoryOnly) {
    pattern = pattern.slice(0, -1);
  }
  const original = line.trim();
  let glob = pattern;
  if (glob.startsWith("/")) {
    glob = glob.substring(1);
  } else if (!glob.includes("/")) {
    glob = `**/${glob}`;
  }
  if (directoryOnly) {
    glob = `${glob}/**`;
  }
  return {
    original,
    glob,
    negated,
    directoryOnly
  };
}
function parseGitignoreContent(content) {
  const lines = content.split(`
`);
  const patterns = [];
  for (const line of lines) {
    const parsed = parseGitignoreLine(line);
    if (parsed) {
      patterns.push(parsed);
    }
  }
  return patterns;
}
function createGitignoreResult(filePath, content) {
  const directory = filePath.replace(/[/\\][^/\\]*$/, "");
  const patterns = parseGitignoreContent(content);
  const globs = patterns.filter((p) => !p.negated).map((p) => p.glob);
  return {
    filePath,
    directory,
    patterns,
    globs
  };
}
function mergeGitignorePatterns(results) {
  const patternMap = new Map;
  for (const result of results) {
    for (const glob of result.globs) {
      patternMap.set(glob, result.directory);
    }
  }
  return patternMap;
}

// ../../packages/privacy-redaction/src/exclusion/glob-matcher.ts
function normalizePath(filePath) {
  return filePath.replace(/\\/g, "/");
}
function globToRegex(pattern) {
  let normalized = normalizePath(pattern);
  let regexPattern = normalized.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "§DOUBLESTAR§").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]");
  regexPattern = regexPattern.replace(/§DOUBLESTAR§\//g, "(?:.*/)?").replace(/\/§DOUBLESTAR§/g, "(?:/.*)?").replace(/§DOUBLESTAR§/g, ".*");
  return new RegExp(`^${regexPattern}$`, "i");
}
function matchesGlob(filePath, pattern, workspaceRoot) {
  const normalizedPath = normalizePath(filePath);
  const regex = globToRegex(pattern);
  if (regex.test(normalizedPath)) {
    return true;
  }
  if (!pattern.includes("/")) {
    const fileName = normalizedPath.split("/").pop() || "";
    if (regex.test(fileName)) {
      return true;
    }
  }
  if (workspaceRoot) {
    const normalizedRoot = normalizePath(workspaceRoot);
    if (normalizedPath.startsWith(normalizedRoot)) {
      let relativePath = normalizedPath.substring(normalizedRoot.length);
      if (relativePath.startsWith("/")) {
        relativePath = relativePath.substring(1);
      }
      if (regex.test(relativePath)) {
        return true;
      }
    }
  }
  return false;
}
function matchesGlobRelative(filePath, pattern, baseDir) {
  const normalizedPath = normalizePath(filePath);
  const normalizedBase = normalizePath(baseDir);
  if (!normalizedPath.startsWith(normalizedBase)) {
    return false;
  }
  let relativePath = normalizedPath.substring(normalizedBase.length);
  if (relativePath.startsWith("/")) {
    relativePath = relativePath.substring(1);
  }
  return matchesGlob(relativePath, pattern);
}
function findMatchingPattern(filePath, patterns, workspaceRoot) {
  for (const pattern of patterns) {
    if (matchesGlob(filePath, pattern, workspaceRoot)) {
      return pattern;
    }
  }
  return null;
}
function findMatchingPatternWithBase(filePath, patternMap) {
  for (const [pattern, baseDir] of patternMap) {
    if (matchesGlobRelative(filePath, pattern, baseDir)) {
      return { pattern, baseDir };
    }
  }
  return null;
}

// ../../packages/privacy-redaction/src/exclusion/zest-rules-parser.ts
var ZEST_RULES_FILENAME = ".zest.rules";
function parseZestRulesContent(content) {
  return parseGitignoreContent(content);
}
function createZestRulesResult(filePath, content) {
  const directory = filePath.replace(/[/\\][^/\\]*$/, "");
  const patterns = parseZestRulesContent(content);
  const globs = patterns.filter((p) => !p.negated).map((p) => p.glob);
  return {
    filePath,
    directory,
    patterns,
    globs
  };
}
function mergeZestRulesPatterns(results) {
  const patterns = new Set;
  for (const result of results) {
    for (const glob of result.globs) {
      patterns.add(glob);
    }
  }
  return patterns;
}

// ../../packages/privacy-redaction/src/exclusion/exclusion-service.ts
class FileExclusionService {
  config;
  fs;
  builtInPatterns;
  gitignorePatterns;
  zestRulesPatterns;
  customPatterns;
  excludedFiles;
  initialized;
  constructor(options) {
    this.config = options.config;
    this.fs = options.fs;
    this.builtInPatterns = getBuiltInPatterns();
    this.gitignorePatterns = new Map;
    this.zestRulesPatterns = new Set;
    this.customPatterns = new Set(options.config.customExclusionPatterns);
    this.excludedFiles = new Map;
    this.initialized = false;
  }
  async initialize() {
    await this.refreshPatterns();
    this.initialized = true;
  }
  async refreshPatterns() {
    if (this.config.enableGitignore) {
      await this.loadGitignorePatterns();
    } else {
      this.gitignorePatterns.clear();
    }
    if (this.config.enableZestRules) {
      await this.loadZestRulesPatterns();
    } else {
      this.zestRulesPatterns.clear();
    }
    this.customPatterns = new Set(this.config.customExclusionPatterns);
    this.excludedFiles.clear();
  }
  async loadGitignorePatterns() {
    this.gitignorePatterns.clear();
    const workspaceRoot = this.fs.getWorkspaceRoot();
    if (!workspaceRoot)
      return;
    const results = [];
    const rootGitignore = `${workspaceRoot}/.gitignore`;
    try {
      if (await this.fs.fileExists(rootGitignore)) {
        const content = await this.fs.readFile(rootGitignore);
        results.push(createGitignoreResult(rootGitignore, content));
      }
    } catch {}
    this.gitignorePatterns = mergeGitignorePatterns(results);
  }
  async loadZestRulesPatterns() {
    this.zestRulesPatterns.clear();
    const workspaceRoot = this.fs.getWorkspaceRoot();
    if (!workspaceRoot)
      return;
    const results = [];
    const rootZestRules = `${workspaceRoot}/${ZEST_RULES_FILENAME}`;
    try {
      if (await this.fs.fileExists(rootZestRules)) {
        const content = await this.fs.readFile(rootZestRules);
        results.push(createZestRulesResult(rootZestRules, content));
      }
    } catch {}
    this.zestRulesPatterns = mergeZestRulesPatterns(results);
  }
  async updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    await this.refreshPatterns();
  }
  getConfig() {
    return { ...this.config };
  }
  shouldExcludeFile(filePath) {
    const workspaceRoot = this.fs.getWorkspaceRoot();
    const builtInMatch = findMatchingPattern(filePath, this.builtInPatterns, workspaceRoot);
    if (builtInMatch) {
      const result = {
        excluded: true,
        reason: "built_in_rule",
        matchedRule: builtInMatch
      };
      this.trackExclusion(filePath, result);
      return result;
    }
    if (this.config.enableGitignore && this.gitignorePatterns.size > 0) {
      const gitignoreMatch = findMatchingPatternWithBase(filePath, this.gitignorePatterns);
      if (gitignoreMatch) {
        const result = {
          excluded: true,
          reason: "gitignore",
          matchedRule: gitignoreMatch.pattern
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    if (this.config.enableZestRules && this.zestRulesPatterns.size > 0) {
      const zestMatch = findMatchingPattern(filePath, this.zestRulesPatterns, workspaceRoot);
      if (zestMatch) {
        const result = {
          excluded: true,
          reason: "zest_rules",
          matchedRule: zestMatch
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    if (this.customPatterns.size > 0) {
      const customMatch = findMatchingPattern(filePath, this.customPatterns, workspaceRoot);
      if (customMatch) {
        const result = {
          excluded: true,
          reason: "custom_pattern",
          matchedRule: customMatch
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    return { excluded: false };
  }
  isFileTooLarge(fileSizeBytes) {
    return fileSizeBytes > this.config.maxFileSizeBytes;
  }
  isBinaryFile(filePath) {
    const binaryExtensions = [
      ".exe",
      ".dll",
      ".so",
      ".dylib",
      ".bin",
      ".obj",
      ".o",
      ".a",
      ".lib",
      ".jar",
      ".war",
      ".class",
      ".pyc",
      ".wasm",
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".ico",
      ".webp",
      ".mp4",
      ".avi",
      ".mov",
      ".wmv",
      ".mkv",
      ".mp3",
      ".wav",
      ".zip",
      ".tar",
      ".gz",
      ".rar",
      ".7z",
      ".pdf",
      ".woff",
      ".woff2",
      ".ttf",
      ".otf",
      ".eot",
      ".db",
      ".sqlite",
      ".sqlite3"
    ];
    const lowerPath = filePath.toLowerCase();
    return binaryExtensions.some((ext) => lowerPath.endsWith(ext));
  }
  trackExclusion(filePath, result) {
    if (result.excluded && result.reason && result.matchedRule) {
      this.excludedFiles.set(filePath, {
        filePath,
        reason: result.reason,
        matchedRule: result.matchedRule
      });
    }
  }
  getExcludedFiles() {
    return Array.from(this.excludedFiles.values());
  }
  getStats() {
    const byReason = {
      built_in_rule: 0,
      gitignore: 0,
      zest_rules: 0,
      custom_pattern: 0,
      file_size: 0,
      binary_file: 0
    };
    for (const excluded of this.excludedFiles.values()) {
      byReason[excluded.reason]++;
    }
    return {
      totalExcluded: this.excludedFiles.size,
      byReason,
      gitignorePatternCount: this.gitignorePatterns.size,
      zestRulesPatternCount: this.zestRulesPatterns.size,
      builtInPatternCount: this.builtInPatterns.size
    };
  }
  clearExclusions() {
    this.excludedFiles.clear();
  }
  clearExclusionForFile(filePath) {
    this.excludedFiles.delete(filePath);
  }
  isInitialized() {
    return this.initialized;
  }
  getPatternCounts() {
    const counts = {
      builtIn: this.builtInPatterns.size,
      gitignore: this.gitignorePatterns.size,
      zestRules: this.zestRulesPatterns.size,
      custom: this.customPatterns.size,
      total: 0
    };
    counts.total = counts.builtIn + counts.gitignore + counts.zestRules + counts.custom;
    return counts;
  }
}
// ../../packages/privacy-redaction/src/redaction/strategies.ts
function simpleHash(text) {
  let hash = 0;
  for (let i = 0;i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0").substring(0, 8);
}
function fullRedact(_text) {
  return "[REDACTED]";
}
function partialRedact(text) {
  if (text.length <= 8) {
    return "[REDACTED]";
  }
  const visibleChars = Math.max(2, Math.floor(text.length * 0.2));
  const start = text.substring(0, visibleChars);
  const end = text.substring(text.length - visibleChars);
  const middleLength = text.length - 2 * visibleChars;
  return `${start}${"*".repeat(Math.min(middleLength, 8))}${end}`;
}
function hashRedact(text) {
  return `[HASH:${simpleHash(text)}]`;
}
function encryptRedact(text) {
  const contentHash = simpleHash(text);
  const encryptedHash = simpleHash(text + "salt");
  return `[ENCRYPTED:${encryptedHash}...${contentHash}]`;
}
function applyRedactionStrategy(text, strategy) {
  switch (strategy) {
    case "full":
      return fullRedact(text);
    case "partial":
      return partialRedact(text);
    case "hash":
      return hashRedact(text);
    case "encrypt":
      return encryptRedact(text);
    default:
      return fullRedact(text);
  }
}

// ../../packages/privacy-redaction/src/redaction/redactor.ts
function redactContent(content, detections, config, options = {}) {
  const approach = options.approach ?? config.approach;
  const encryptHighlySensitive = options.encryptHighlySensitive ?? true;
  if (detections.length === 0) {
    return {
      redactedContent: content,
      detections: [],
      stats: {
        totalDetections: 0,
        byPattern: {}
      },
      wasRedacted: false
    };
  }
  const sortedDetections = [...detections].sort((a, b) => b.position.start - a.position.start);
  let redactedContent = content;
  const patternCounts = {};
  for (const detection of sortedDetections) {
    const originalText = content.substring(detection.position.start, detection.position.end);
    const strategy = determineStrategy(detection, approach, encryptHighlySensitive);
    const redactedText = applyRedactionStrategy(originalText, strategy);
    redactedContent = redactedContent.substring(0, detection.position.start) + redactedText + redactedContent.substring(detection.position.end);
    patternCounts[detection.pattern] = (patternCounts[detection.pattern] || 0) + 1;
  }
  return {
    redactedContent,
    detections,
    stats: {
      totalDetections: detections.length,
      byPattern: patternCounts
    },
    wasRedacted: true
  };
}
function determineStrategy(detection, approach, encryptHighlySensitive) {
  switch (approach) {
    case "encryption":
      return "encrypt";
    case "hybrid":
      if (encryptHighlySensitive && isHighlySensitive(detection)) {
        return "encrypt";
      }
      return detection.redactionStrategy;
    case "detection":
    default:
      return detection.redactionStrategy;
  }
}
function isHighlySensitive(detection) {
  return detection.highlySensitive || isHighlySensitivePattern(detection.pattern);
}
// ../../packages/privacy-redaction/src/privacy-service.ts
class PrivacyService {
  config;
  detector;
  exclusionService;
  filesProcessed;
  constructor(options) {
    this.config = createPrivacyConfig(options.config);
    const detectorOptions = {
      config: this.config,
      enableCache: options.enableCache ?? true,
      maxCacheEntries: options.maxCacheEntries,
      cacheTtlMs: options.cacheTtlMs
    };
    this.detector = new SensitiveDataDetector(detectorOptions);
    const exclusionOptions = {
      config: this.config,
      fs: options.fs
    };
    this.exclusionService = new FileExclusionService(exclusionOptions);
    this.filesProcessed = 0;
  }
  async initialize() {
    await this.exclusionService.initialize();
  }
  isInitialized() {
    return this.exclusionService.isInitialized();
  }
  processContent(content, filePath, options) {
    const scanResult = this.detector.scanContent(content, filePath);
    if (!scanResult.hasSensitiveData) {
      this.filesProcessed++;
      return {
        content,
        detections: [],
        hasSensitiveData: false,
        wasRedacted: false
      };
    }
    const redactionResult = redactContent(content, scanResult.detections, this.config, options);
    this.filesProcessed++;
    return {
      content: redactionResult.redactedContent,
      detections: redactionResult.detections,
      hasSensitiveData: true,
      wasRedacted: redactionResult.wasRedacted
    };
  }
  processContentIfNotExcluded(content, filePath, options) {
    const exclusion = this.shouldExcludeFile(filePath);
    if (exclusion.excluded) {
      return null;
    }
    return this.processContent(content, filePath, options);
  }
  scanContent(content, context) {
    const result = this.detector.scanContent(content, context);
    return result.detections;
  }
  hasSensitiveData(content) {
    const result = this.detector.scanContent(content);
    return result.hasSensitiveData;
  }
  hasHighlySensitiveData(content) {
    const result = this.detector.scanContent(content);
    if (!result.hasSensitiveData)
      return false;
    return this.detector.hasHighlySensitiveData(result.detections);
  }
  shouldExcludeFile(filePath) {
    return this.exclusionService.shouldExcludeFile(filePath);
  }
  isFileTooLarge(fileSizeBytes) {
    return this.exclusionService.isFileTooLarge(fileSizeBytes);
  }
  isBinaryFile(filePath) {
    return this.exclusionService.isBinaryFile(filePath);
  }
  async updateConfig(partial) {
    this.config = { ...this.config, ...partial };
    this.detector.updateConfig(partial);
    await this.exclusionService.updateConfig(partial);
  }
  getConfig() {
    return { ...this.config };
  }
  getStats() {
    const detectionStats = this.detector.getStats();
    const exclusionStats = this.exclusionService.getStats();
    return {
      detection: detectionStats,
      filesExcluded: exclusionStats.totalExcluded,
      filesProcessed: this.filesProcessed
    };
  }
  getExcludedFiles() {
    return this.exclusionService.getExcludedFiles();
  }
  clearAll() {
    this.detector.clearAll();
    this.exclusionService.clearExclusions();
    this.filesProcessed = 0;
  }
  clearCache() {
    this.detector.clearCache();
  }
  clearStats() {
    this.detector.clearStats();
    this.filesProcessed = 0;
  }
  clearExclusions() {
    this.exclusionService.clearExclusions();
  }
  async refreshExclusionPatterns() {
    await this.exclusionService.refreshPatterns();
  }
  getActivePatternCount() {
    return this.detector.getActivePatternCount();
  }
  getExclusionPatternCounts() {
    return this.exclusionService.getPatternCounts();
  }
  getCacheSize() {
    return this.detector.getCacheSize();
  }
}
// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/log-rotation.ts
import { readdir, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
var CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
var CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
var CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
var QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
var LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
var STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
var DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
var SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
var STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
var SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

// src/utils/log-rotation.ts
var CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
var lastCleanupTime = {};
function getDateString() {
  return new Date().toISOString().split("T")[0];
}
function getDatedLogPath(logPrefix) {
  const dateStr = getDateString();
  return join2(LOGS_DIR, `${logPrefix}-${dateStr}.log`);
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
async function cleanupStaleLogs(logPrefix) {
  const now = Date.now();
  const lastCleanup = lastCleanupTime[logPrefix] || 0;
  if (now - lastCleanup < CLEANUP_THROTTLE_MS) {
    return;
  }
  lastCleanupTime[logPrefix] = now;
  try {
    await ensureDirectory(LOGS_DIR);
    const files = await readdir(LOGS_DIR);
    const cutoffDate = new Date(now - LOG_RETENTION_DAYS * 24 * 60 * 60 * 1000);
    for (const file of files) {
      const fileDate = parseDateFromFilename(file, logPrefix);
      if (fileDate && fileDate < cutoffDate) {
        const filePath = join2(LOGS_DIR, file);
        try {
          await unlink(filePath);
        } catch (error) {
          logger.error(`Failed to delete old log file ${file}`, error);
        }
      }
    }
  } catch (error) {
    logger.error("Failed to cleanup old logs", error);
  }
}

// src/utils/logger.ts
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
      const logFilePath = getDatedLogPath(this.logPrefix);
      await ensureDirectory(dirname(logFilePath));
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
      console.error(`[Zest:Error] ${message}`, error);
      this.writeToFile(`ERROR: ${message} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    }
  }
}
var logger = new Logger;

// src/privacy/node-fs-adapter.ts
import { readFile, readdir as readdir2, stat as stat2 } from "node:fs/promises";
function createNodeFsAdapter(workspaceRoot) {
  return {
    async readFile(path) {
      return readFile(path, "utf-8");
    },
    async fileExists(path) {
      try {
        await stat2(path);
        return true;
      } catch {
        return false;
      }
    },
    async readDir(path) {
      return readdir2(path);
    },
    getWorkspaceRoot() {
      return workspaceRoot;
    }
  };
}

// src/privacy/privacy-manager.ts
var DEFAULT_PRIVACY_SETTINGS = {
  approach: "detection",
  aggressiveMode: false,
  enableGitignore: true,
  enableZestRules: true,
  customExclusionPatterns: []
};
var privacyManagerInstance = null;

class PrivacyManager {
  service = null;
  initialized = false;
  projectDir;
  async initialize(projectDir, settings) {
    if (this.initialized && this.projectDir === projectDir) {
      logger.debug("Privacy manager already initialized for this project");
      return;
    }
    this.projectDir = projectDir;
    const config = this.settingsToConfig(settings);
    this.service = new PrivacyService({
      config,
      fs: createNodeFsAdapter(projectDir),
      enableCache: true
    });
    await this.service.initialize();
    this.initialized = true;
    logger.debug("Privacy manager initialized", {
      projectDir,
      patternCount: this.service.getActivePatternCount(),
      exclusionCounts: this.service.getExclusionPatternCounts()
    });
  }
  isInitialized() {
    return this.initialized && this.service !== null;
  }
  processContent(content, filePath) {
    if (!this.service || !this.initialized) {
      return {
        content,
        detections: [],
        hasSensitiveData: false,
        wasRedacted: false
      };
    }
    return this.service.processContent(content, filePath);
  }
  redactMessage(content) {
    if (!this.service || !this.initialized) {
      return content;
    }
    const result = this.service.processContent(content);
    if (result.wasRedacted) {
      logger.debug("Redacted sensitive data from message", {
        detections: result.detections.length,
        patterns: result.detections.map((d) => d.pattern)
      });
    }
    return result.content;
  }
  redactDiff(diff, filePath) {
    if (!this.service || !this.initialized) {
      return diff;
    }
    const result = this.service.processContent(diff, filePath);
    if (result.wasRedacted) {
      logger.debug("Redacted sensitive data from diff", {
        filePath,
        detections: result.detections.length
      });
    }
    return result.content;
  }
  shouldExcludeFile(filePath) {
    if (!this.service || !this.initialized) {
      return false;
    }
    const result = this.service.shouldExcludeFile(filePath);
    if (result.excluded) {
      logger.debug("File excluded from telemetry", {
        filePath,
        reason: result.reason,
        matchedRule: result.matchedRule
      });
    }
    return result.excluded;
  }
  async updateSettings(settings) {
    if (!this.service) {
      logger.warn("Cannot update settings: Privacy manager not initialized");
      return;
    }
    const config = this.settingsToConfig(settings);
    await this.service.updateConfig(config);
    logger.debug("Privacy settings updated", settings);
  }
  getStats() {
    if (!this.service || !this.initialized) {
      return null;
    }
    const stats = this.service.getStats();
    return {
      totalDetections: stats.detection.totalDetections,
      filesProcessed: stats.filesProcessed,
      filesExcluded: stats.filesExcluded
    };
  }
  reset() {
    if (this.service) {
      this.service.clearAll();
    }
    this.initialized = false;
    this.projectDir = undefined;
    logger.debug("Privacy manager reset");
  }
  settingsToConfig(settings) {
    if (!settings) {
      return {};
    }
    return {
      approach: settings.approach,
      aggressiveMode: settings.aggressiveMode,
      enableGitignore: settings.enableGitignore,
      enableZestRules: settings.enableZestRules,
      customExclusionPatterns: settings.customExclusionPatterns
    };
  }
}
function getPrivacyManager() {
  if (!privacyManagerInstance) {
    privacyManagerInstance = new PrivacyManager;
  }
  return privacyManagerInstance;
}
function resetPrivacyManager() {
  if (privacyManagerInstance) {
    privacyManagerInstance.reset();
    privacyManagerInstance = null;
  }
}
export {
  resetPrivacyManager,
  getPrivacyManager,
  PrivacyManager,
  DEFAULT_PRIVACY_SETTINGS
};
