# Zest - Claude Code CLI Plugin Marketplace

This repository hosts the Zest plugin for Claude Code CLI, enabling automatic tracking of coding sessions and file changes for comprehensive productivity insights.

## For Users

### Installation & Quick Start

**Requirements**: Node.js version 20 or higher

1. **Add the marketplace**:
   ```bash
   /plugin marketplace add https://github.com/Winding-Labs/zest-claude
   ```

2. **Install the plugin**:
   ```bash
   /plugin install zest
   ```

3. **Authenticate with Zest**:
   ```bash
   /zest:login
   ```

4. **Start coding!** The plugin works automatically in the background

### Updating the Plugin

To update Zest to the latest version:

1. **Update the marketplace**:
   ```bash
   /plugin marketplace update zest-marketplace
   ```

2. **Uninstall and update**:
   ```bash
   /plugin uninstall zest
   ```
   Then choose **"Update now"** from the options

3. **Restart Claude Code** to complete the update

### Available Commands

- `/zest:login` - Authenticate with Zest (opens browser)
- `/zest:logout` - Sign out from Zest
- `/zest:status` - View authentication and sync status
- `/zest:sync` - Manually trigger immediate sync
- `/zest:enable` - Enable remote persistence (syncing)
- `/zest:disable` - Disable remote persistence (local only)
- `/zest:workspace` - Configure workspace settings

### Features

- ✨ **Automatic Session Tracking**: Captures all Claude Code chat sessions
- 📝 **File Change Monitoring**: Tracks file modifications with full diffs
- 💾 **Queue-First Architecture**: Never lose data - queues locally before syncing
- 🌐 **Offline Support**: Works offline, syncs when reconnected
- 🔒 **Privacy Focused**: Respects .gitignore and exclusion rules
- 🚀 **Zero Manual Intervention**: Set it and forget it

### How It Works

1. Plugin starts tracking immediately upon installation
2. Data is queued locally in `~/.claude-zest/queue/`
3. After authentication (`/zest:login`), data syncs automatically every 60 seconds
4. Background daemon runs continuously (auto-starts, auto-restarts)
5. All your coding activity is captured for analysis in Zest

### Troubleshooting

**Plugin not working?**
```bash
/plugin list                    # Check if installed
/plugin uninstall zest          # Uninstall
/plugin install zest            # Reinstall
```

**Authentication issues?**
```bash
/zest:status                    # Check current status
/zest:logout                    # Sign out
/zest:login                     # Sign back in
```

**Data not syncing?**
```bash
/zest:status                    # Check daemon status
/zest:sync                      # Try manual sync
```

Check logs if issues persist:
- Plugin logs: `~/.claude-zest/logs/plugin.log`
- Sync logs: `~/.claude-zest/logs/sync.log`
