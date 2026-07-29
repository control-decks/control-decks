---
id: doctor-home
title: "Doctor Home"
summary: "Inspect the current Home and return blocking, warning, and advisory findings."
deck: hairness-operations
game: hairness-home
role: operation/annotate
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/result
wave: 0
provider: hairness-home
---

# Doctor Home

**ID:** `hairness-operations/doctor-home`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `annotate`\
**Traits:** `read-only`, `evidence-annotation`, `hairness-context`\
**Default Binding:** current-home\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/result`\
**Duration:** `once`

**Effect:** Inspect the current Home and return blocking, warning, and advisory findings.

**Limits:** Remain read-only and do not repair findings.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **DOCTOR-HOME**` when used alone. Append
`→ 🃏 **DOCTOR-HOME**` when another Card precedes it.
