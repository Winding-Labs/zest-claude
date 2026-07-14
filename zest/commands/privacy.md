---
description: View or configure privacy settings for sensitive data redaction
allowed-tools: Bash
---

Execute the Zest privacy settings command:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command privacy
```

To view help and available options:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command privacy --help
```

To change privacy approach (detection, encryption, or hybrid):

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command privacy --approach=detection
```

To enable aggressive detection mode:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command privacy --aggressive=true
```

To add a custom file exclusion pattern:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command privacy --exclude="*.secret.js"
```

Show the complete output to the user.
