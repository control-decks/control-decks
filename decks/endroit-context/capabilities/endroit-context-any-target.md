---
id: endroit-context-any-target
title: "Any Target Context"
summary: "Enumerate known Endroit Targets and select the unique semantic match for the current subject."
deck: endroit-context
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 1
provider: endroit-home
---

# Any Target Context

**ID:** `endroit-context/endroit-context-any-target`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `target-context`\
**Default Binding:** known-targets\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Enumerate known Endroit Targets and select the unique semantic match for the current subject.

**Limits:** Ask when multiple Targets remain plausible; never search outside the Home to compensate.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-ANY-TARGET**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-ANY-TARGET**` when another Card precedes it.
