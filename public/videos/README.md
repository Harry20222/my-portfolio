# Portfolio intro footage

The included `death-stranding-bt-intro.mp4` is a 5.8-second silent edit of actual Death Stranding gameplay: a porter is consumed by a BT and the scene washes white. It uses H.264, yuv420p, 30 fps, and fast-start metadata. The retrieved source is native 640x360; the finished file is approximately 347 KB and may look soft on large screens. A higher-resolution retrieval was unavailable, so the clip was not upscaled. No replacement animation or artificial flash is included.

The file lives at `public/videos/death-stranding-bt-intro.mp4` (served as `/videos/death-stranding-bt-intro.mp4`). Include it in the deployment and use a fresh browser-tab session to preview it. If it is missing or cannot play, the homepage remains visible and the intro bypasses.

## Required edit

### Verified source

[Porter NPC gets hunted and eaten by a BT Causing a Voidout](https://www.youtube.com/watch?v=sOqwxK5yErY), uploaded by Ndubuisi "Jkid" Okeh, mirrors the original Reddit reference. Its 23.081-second video was visually inspected on October 8, 2026: the BT consumes the porter around 12 seconds, the blast washes out the scene around 14 seconds, and the frame is white by 15 seconds.

Use **9.5–15.3 seconds** for a **5.8-second** edit ending on the natural white hold. These cut points were verified against the actual player, rather than inferred from the title. The source includes native gameplay HUD and cargo labels; preserve the consumption when considering any crop.

- Use actual Death Stranding gameplay showing a porter being consumed by a BT, with [this Reddit post](https://www.reddit.com/r/DeathStranding/comments/e44omw/i_just_witnessed_a_porter_npc_get_eaten_by_a_bt/) as the reference.
- Use the verified cut above, or inspect any replacement source before choosing cut points.
- Trim to approximately 5–6 seconds, centered on the consumption and its final visual beat. Remove or crop out the gameplay HUD during editing when possible.
- Export MP4 with H.264 video, yuv420p pixel format, fast-start metadata, and no audio track. Preserve native resolution; prefer a 720p or 1080p source if available. Aim for 24–30 fps and a small file, balancing visual quality with quick startup.
- Keep the important action within the frame. The website uses `object-fit: contain`, including on mobile, so it preserves the entire image with black letterboxing rather than cutting off the subject.

The integration uses a restrained 400 ms dissolve over the final portion of the clip. A clip that naturally ends in a bright wash will dissolve from that footage into the light homepage; no artificial flash is added. Inspect this transition with the actual edit before publishing.

The seven-second limit includes loading and the dissolve. The playback budget is 6.8 seconds to reserve a small margin for browser scheduling and rendering. Preparation is invisible and times out after 1.2 seconds; playback without progress bypasses within about one second. Long clips are cut short to reserve the dissolve. Reduced motion, storage restrictions, hash deep links, and initial entries to other pages bypass playback. The first entry is recorded in session storage, including failed attempts, so internal navigation and same-tab reloads do not replay it.
