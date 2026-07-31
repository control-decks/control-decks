---
id: park-session
title: "Park Session"
summary: "Preserve a compact handoff and leave the current task resumable without closing it."
deck: session-hygiene
game: session
role: operation/artifact
duration: until-confirmed
accepts: ["hacp/content", "hacp/result"]
produces: session-hygiene/parking-handoff
wave: 0
provider: any
---

# Park Session

**ID:** `session-hygiene/park-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `artifact`\
**Traits:** `artifact`, `task-metadata`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-hygiene/parking-handoff`\
**Duration:** `until-confirmed`

**Effect:** Preserve a compact handoff and leave the current task resumable without closing it.

**Limits:** Do not archive, close, or mutate a Site.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **PARK-SESSION**` when used alone. Append
`→ 🃏 **PARK-SESSION**` when another Card precedes it.
