# Zest for Claude Code

A Claude Code usage tracker for you and your team. Zest records your Claude Code
sessions, tokens, models and cost and shows them in a usage dashboard, with
automatic standups and a picture of how your team actually works across every
AI tool.

## Install

    /plugin marketplace update zest-marketplace
    /plugin install zest

Then run `/zest:login` inside a Claude Code session.

Full instructions: https://meetzest.com/docs/plugins/claude-code/?utm_source=github.com&utm_medium=referral&utm_campaign=plugin-readme

## What it captures

Sessions, messages, tool calls, models, per-turn token usage and context
pressure. Everything is redacted on your machine before it is sent, using
the same privacy pipeline every Zest plugin uses.

## Commands

| Command | What it does |
|---|---|
| `/zest:login` | Connect this machine to your Zest workspace |
| `/zest:logout` | Sign out of Zest |
| `/zest:status` | Auth, workspace, sync state, daemon and hook health |
| `/zest:sync` | Force a sync now |
| `/zest:standup` | Generate today's standup |
| `/zest:enable` | Enable remote sync of sessions to Zest |
| `/zest:disable` | Disable remote sync (keep capturing locally only) |
| `/zest:enable-notify` | Enable status line notifications |
| `/zest:disable-notify` | Disable status line notifications |
| `/zest:enable-statusline` | Enable plugin update notifications in status line |
| `/zest:workspace` | View or switch workspace |
| `/zest:privacy` | View or configure privacy redaction |
| `/zest:ignore` | Stop tracking the current folder |
| `/zest:unignore` | Resume tracking the current folder |

## Notes

Source lives in the Zest monorepo; this repository is the distribution
mirror and is regenerated on every release.

## License

Proprietary — see LICENSE.md. Third-party components included in this
distribution are listed in THIRD-PARTY-NOTICES.md.

Questions: support@winding.ai
