---
description: View or configure privacy settings for sensitive data redaction
allowed-tools: Bash
---

Execute the Zest privacy settings command:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/privacy-cli.js
```

To view help and available options:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/privacy-cli.js --help
```

To change privacy approach (detection, encryption, or hybrid):

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/privacy-cli.js --approach=detection
```

To enable aggressive detection mode:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/privacy-cli.js --aggressive=true
```

To add a custom file exclusion pattern:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/privacy-cli.js --exclude="*.secret.js"
```

Show the complete output to the user.
