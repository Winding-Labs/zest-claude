# Zest for Claude Code

Track your Claude Code sessions in Zest: automatic standups, token and cost
analytics, and a picture of how your team actually works across every AI tool.

## Install

    /plugin marketplace update zest-marketplace
    /plugin install zest

Then run `/login` inside a Claude Code session.

Full instructions: https://app.meetzest.com/docs/install/claude-code

## What it captures

Sessions, messages, tool calls, models, per-turn token usage and context
pressure. Everything is redacted on your machine before it is sent, using
the same privacy pipeline every Zest plugin uses.

## Commands

| Command | What it does |
|---|---|
| `/login` | Connect this machine to your Zest workspace |
| `/logout` | Sign out of Zest |
| `/status` | Auth, workspace, sync state, daemon and hook health |
| `/sync` | Force a sync now |
| `/standup` | Generate today's standup |
| `/enable` | Enable remote sync of sessions to Zest |
| `/disable` | Disable remote sync (keep capturing locally only) |
| `/enable-notify` | Enable status line notifications |
| `/disable-notify` | Disable status line notifications |
| `/enable-statusline` | Enable plugin update notifications in status line |
| `/workspace` | View or switch workspace |
| `/privacy` | View or configure privacy redaction |
| `/ignore` | Stop tracking the current folder |
| `/unignore` | Resume tracking the current folder |
| `/refresh-token` | Manually refresh authentication token (debug) |

## Notes

Source lives in the Zest monorepo; this repository is the distribution
mirror and is regenerated on every release.

## License

Proprietary — see LICENSE.md. Third-party components included in this
distribution are listed in THIRD-PARTY-NOTICES.md.

Questions: hi@winding.ai
