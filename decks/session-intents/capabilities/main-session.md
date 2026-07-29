---
id: main-session
title: "Main Session"
summary: "Keep the current agent as a coordinator and delegate every bounded long task to subagents."
deck: session-intents
game: session
role: control/guard
duration: until-clear
accepts: ["hacp/content", "hacp/result"]
produces: session-intents/control-state
wave: 1
provider: agent-delegation
---

# Main Session

**ID:** `session-intents/main-session`\
**HACP:** `0.4`\
**Kind:** `control`\
**Mode:** `guard`\
**Traits:** `session-control`, `delegation-policy`, `main-session`\
**Default Binding:** session\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-intents/control-state`\
**Duration:** `until-clear`

**Effect:** Keep the current agent as a coordinator and delegate every bounded long task to subagents.

**Limits:** Do not delegate conversation, tiny local checks, approvals, or work that cannot be delegated. Delegation never expands authority.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **MAIN-SESSION**` when used alone. Append
`→ 🃏 **MAIN-SESSION**` when another Card precedes it.
