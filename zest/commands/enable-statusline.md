---
description: Enable Zest plugin update notifications in Claude Code's status line
allowed-tools: Bash
---

Execute the Zest status line configuration script:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/enable-statusline-cli.js
```

To force replacement of existing status line configuration without prompting:

```bash
node ${CLAUDE_PLUGIN_ROOT}/dist/commands/enable-statusline-cli.js --force
```

Show the complete output to the user.
