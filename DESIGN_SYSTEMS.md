# DESIGN_SYSTEM.md

# Design System

This file is the single source of truth for visual rules. Follow it exactly.

## Visual intent

- Editorial, minimal, lots of whitespace.
- Black on white.
- Display type for titles, clean grotesque for reading.
- No card decoration: no border, no radius, no shadow.

## Tokens

Colors
- Background: #ffffff
- Text: #000000
- Links: #999999
- Link hover: #000000
- Dividers: #000000 (use 1px or 2px depending on scale)
- Muted text: use #999999

Typography
- Display font: "Playfair Display"
- Body font: "Darker Grotesque"

Recommended usage
- Site name (header, footer): Playfair Display
- Project titles (case study H1): Darker Grotesque, bold
- Body copy: Darker Grotesque, regular

Type scale (desktop targets, adjust slightly for mobile)
- H1 (case study title): 48–56px, bold, tight line height
- H2: 28–34px, bold
- H3: 18–22px, bold
- Body: 18–20px
- Small/meta: 14–16px

Spacing scale
- Base grid: 8px
- Allowed: 2px, 4px for fine-tuning
- Common spacing:
  - Header and footer padding: 32–48px
  - Section spacing: 64–96px
  - Between title and tagline: 8–16px
  - Between paragraphs: 16–24px

Layout
- Max width: constrain content to a readable column (target 1040–1200px)
- Outer page padding: 32px mobile, 48–64px desktop
- Use large vertical rhythm, avoid dense stacking

Grid rules (matches wireframes)
- Desktop: 2-column grid for project tiles and content blocks
- Mobile: 1-column stack, preserve ordering

Cards
- 0px radius
- No border
- No shadow
- The image defines the card
- Title and subtext sit below image, aligned to edges

Dividers
- Use full-width within content column
- Single rule between major sections on case study pages (as in wireframe)

Links and states
- Default link: #999999
- Hover: #000000
- Focus: visible outline using #000000, 2px
- Underline behavior: keep simple and consistent. If using underline, apply on hover and focus, not always.

Images
- Responsive, never overflow container
- Captions:
  - Use small/meta sizing
  - #999999 by default
  - Left aligned to image edge unless the layout calls for center

## Motion and interaction rules

Respect prefers-reduced-motion
- If reduced motion is enabled, disable scroll reveal and transitions beyond instant state changes.

Preferred techniques
- CSS first
- If scroll fade-in is used, implement with minimal JS to toggle a class via IntersectionObserver.
- Avoid heavy libraries.

Performance
- Animate opacity and transform only
- Avoid width, height, top, left
- Avoid layout thrash
- Never transition: all

Animation design
- Use motion only when it clarifies cause and effect or adds deliberate delight.
- Keep scroll fades subtle:
  - small translateY (like 6–12px) plus opacity
  - quick duration
  - easy easing
- Interruptible: user input cancels or overrides.

SVG transforms
- Apply transforms to <g> wrappers when needed.
- Use transform-box: fill-box and transform-origin: center.