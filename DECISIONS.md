# DECISIONS.md

# Decisions Log

Use this file to lock decisions so the site stays consistent.

## Locked decisions

Navigation
- Header: “Garry Grewal” (/) and “About” (/about)
- Footer: “Garry Grewal” (/) and email mailto

URLs
- /about
- /casestudy1
- /casestudy2
- /casestudy3
- /casestudy4

Visual system
- Background: #ffffff
- Text: #000000
- Links: #999999
- Fonts: Playfair Display (display), Darker Grotesque (body)
- Cards: no border, no radius, no shadow
- Grid: 2 columns desktop, 1 column mobile
- Spacing: 8px grid, allow 2 and 4 for fine-tuning

Motion
- Respect prefers-reduced-motion
- Animate opacity and transform only
- Never transition: all
- Scroll reveal is subtle and optional, must be disabled for reduced motion

## Open questions

- Final max-width value (pick one and lock it):
  - 1040px, 1120px, or 1200px
- Underline behavior for links:
  - never, hover-only, or always

## Change log

Add entries here whenever you change something global (fonts, spacing, nav, link style, layout).