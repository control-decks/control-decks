---
id: endroit-context-pick-site
title: "Pick Site Context"
summary: "Select one known Endroit Site and load only its current inspectable context."
deck: endroit-context
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 1
provider: endroit-home
---

# Pick Site Context

**ID:** `endroit-context/endroit-context-pick-site`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `site-context`\
**Default Binding:** current-site\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one known Endroit Site and load only its current inspectable context.

**Limits:** Require an explicit or uniquely resolvable Site; never guess a repository or mutate it.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-PICK-SITE**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-PICK-SITE**` when another Card precedes it.
