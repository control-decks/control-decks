---
name: main-session
description: "Keep the current agent as a coordinator and delegate every bounded long task to subagents. Use only when the human explicitly invokes main-session."
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

