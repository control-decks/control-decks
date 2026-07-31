---
id: endroit-context-pick-meeting
title: "Pick Meeting Context"
summary: "Select one active Endroit Meeting and load only its bounded hot context."
deck: endroit-context
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: endroit-home
---

# Pick Meeting Context

**ID:** `endroit-context/endroit-context-pick-meeting`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `meeting-context`\
**Default Binding:** current-meeting\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one active Endroit Meeting and load only its bounded hot context.

**Limits:** Require an explicit or uniquely resolvable active Meeting; never create or retain one implicitly.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-PICK-MEETING**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-PICK-MEETING**` when another Card precedes it.
