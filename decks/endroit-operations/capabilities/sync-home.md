---
id: sync-home
title: "Sync Home"
summary: "Rebuild provider projections from canonical Home and Desk sources."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/sync-result
wave: 0
provider: endroit-home
---

# Sync Home

**ID:** `endroit-operations/sync-home`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `mutation`, `home-metadata`\
**Default Binding:** current-home\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/sync-result`\
**Duration:** `once`

**Effect:** Rebuild provider projections from canonical Home and Desk sources.

**Limits:** Do not publish, push, mutate Sites, or edit generated projections as source.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SYNC-HOME**` when used alone. Append
`→ 🃏 **SYNC-HOME**` when another Card precedes it.
