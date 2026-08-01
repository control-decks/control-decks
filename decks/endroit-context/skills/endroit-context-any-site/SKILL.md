---
name: endroit-context-any-site
description: "Enumerate known Endroit Sites and select the unique semantic match for the current subject. Use only when the human explicitly invokes endroit-context-any-site."
---

# Any Site Context

**ID:** `endroit-context/endroit-context-any-site`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `site-context`\
**Default Binding:** known-sites\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Enumerate known Endroit Sites and select the unique semantic match for the current subject.

**Limits:** Ask when multiple Sites remain plausible; never search outside the Home to compensate.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-ANY-SITE**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-ANY-SITE**` when another Card precedes it.
