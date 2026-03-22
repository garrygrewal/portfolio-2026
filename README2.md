# README.md

# grewaldesign.com (Astro)

Portfolio site for Garry Grewal.

## Site structure

Pages
- `/` (Home)
- `/about`
- `/mariana-tek-appointments`
- `/mariana-tek-year-in-motion`
- `/xplor-rec-mobile`
- `/q4-capital-connect`

Header
- “Garry Grewal” (links to `/`)
- “About” (links to `/about`)

Footer
- “Garry Grewal” (links to `/`)
- “garrygrewal22@gmail.com” (mailto link)

## Content inputs

Global
- Name: Garry Grewal
- Short bio: I’m a product designer.

Case study content per project
- Hero image
- Tagline (short description)
- Year
- Role
- Tools
- Overview (description)
- Metrics (up to 3)
- Process highlights
- More images (with captions)

## Styling rules (high level)

- Fonts: Playfair Display (display), Darker Grotesque (body)
- Colors:
  - Background: #ffffff
  - Text: #000000
  - Link: #999999
- Spacing: 8px grid (allow 2px and 4px increments when needed)
- Cards: 0 radius, no border, no shadow
- Grid: 2 columns desktop, 1 column mobile

## Motion rules

- Honor prefers-reduced-motion.
- Prefer CSS. Avoid main-thread JS animations where possible.
- Prefer animating opacity and transform only.
- Never transition: all
- Animations should be input-driven when possible. Avoid autoplay.
- Subtle scroll fade-ins are allowed, but must be disabled with reduced motion.

## Definition of done

- Every page matches the wireframe layout.
- Typography and spacing are consistent site-wide.
- Links have clear hover and focus states.
- All images have alt text. Captions are used where helpful.