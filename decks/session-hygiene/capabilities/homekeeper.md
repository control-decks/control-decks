---
id: homekeeper
title: "Homekeeper"
summary: "Maintain local Home, Desk, and task metadata while other sessions stay focused on their own work."
deck: session-hygiene
game: session
role: control/guard
duration: until-clear
accepts: ["hacp/content", "hacp/result"]
produces: session-hygiene/control-state
wave: 1
provider: endroit-home
---

# Homekeeper

**ID:** `session-hygiene/homekeeper`\
**HACP:** `0.4`\
**Kind:** `control`\
**Mode:** `guard`\
**Traits:** `session-control`, `role-policy`, `homekeeper`\
**Default Binding:** current-home\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-hygiene/control-state`\
**Duration:** `until-clear`

**Effect:** Maintain local Home, Desk, and task metadata while other sessions stay focused on their own work.

**Limits:** May edit and commit Home, Desk, and task metadata only. Never mutate Sites, push, publish, permanently delete, or handle secrets.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **HOMEKEEPER**` when used alone. Append
`→ 🃏 **HOMEKEEPER**` when another Card precedes it.
