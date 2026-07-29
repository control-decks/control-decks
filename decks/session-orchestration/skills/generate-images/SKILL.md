---
name: generate-images
description: "Generate the requested count of images from the bound visual brief. Use only when the human explicitly invokes generate-images."
---

# Generate Images

**ID:** `session-orchestration/generate-images`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `generation`, `external-effect`, `image`\
**Default Binding:** current-visual-brief\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/visual-brief`, `hacp/user-authorized-scope`\
**Produces:** `session-orchestration/image-results`\
**Duration:** `once`

**Effect:** Generate the requested count of images from the bound visual brief.

**Limits:** Require an explicit positive count and visual brief; return blocked when image generation is unavailable.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **GENERATE-IMAGES**` when used alone. Append
`→ 🃏 **GENERATE-IMAGES**` when another Card precedes it.

