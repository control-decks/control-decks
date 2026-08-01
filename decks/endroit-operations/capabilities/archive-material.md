---
id: archive-material
title: "Archive Material"
summary: "Archive current Material inside its owning Room."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/archive-result
wave: 0
provider: endroit-home
---

# Archive Material

**ID:** `endroit-operations/archive-material`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `mutation`, `material-transition`\
**Default Binding:** current-material\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/archive-result`\
**Duration:** `once`

**Effect:** Ask Endroit to archive the current Material inside its owning Room.

**Limits:** Use Endroit's existing archive transition. Preserve history, never delete the Material, and require an explicitly resolved item and owner.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ARCHIVE-MATERIAL**` when used alone. Append
`→ 🃏 **ARCHIVE-MATERIAL**` when another Card precedes it.
