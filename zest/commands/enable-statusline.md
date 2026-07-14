---
description: Enable Zest plugin update notifications in Claude Code's status line
allowed-tools: Bash
---

Execute the Zest status line configuration script:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command enable-statusline
```

To force replacement of existing status line configuration without prompting:

```bash
${CLAUDE_PLUGIN_ROOT}/bin/zest command enable-statusline --force
```

Show the complete output to the user.
