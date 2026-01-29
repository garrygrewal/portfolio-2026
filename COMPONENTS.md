# COMPONENTS.md

# Components

Build these components and reuse them. Do not invent new layout patterns unless necessary.

## Layout

Layout.astro
- Wraps every page.
- Includes global header and footer.
- Imports global CSS once.
- Sets page container width and padding.

Header.astro
- Matches wireframe:
  - Left: “Garry Grewal” linking to /
  - Center: “About” linking to /about
  - Right: optional empty spacer to keep center alignment stable
- Desktop: 3-column grid is preferred for alignment.
- Mobile: left and right can collapse, About can move to right if needed.

Footer.astro
- Left: “Garry Grewal” linking to /
- Right: email mailto link

## Home

ProjectGrid.astro
- Desktop: 2 columns
- Mobile: 1 column
- Supports tile variants to match the wireframe:
  - wide (spans both columns)
  - tall (portrait)
  - square
- Places Title left and Subtext right under each image.

ProjectTile.astro
Props
- title (string)
- subtext (string)
- href (string)
- imageSrc (string)
- imageAlt (string)
- variant ("wide" | "tall" | "square")

Behavior
- Entire tile is clickable.
- Hover state affects text color only (no border/shadow).

## About

AboutLayout.astro (or AboutGrid.astro)
- Two columns desktop, one column mobile.
- Left column: LinkList
- Right column: BioBlock

LinkList.astro
- Renders email, LinkedIn, GitHub, resume

## Case Study

CaseStudyLayout.astro
Props
- title
- tagline
- year
- platform
- roles
- tools
- heroImageSrc
- heroImageAlt
- metrics (array of up to 3 items)

Structure
- Hero image
- Intro row:
  - Left: Title + overview/tagline
  - Right: metadata columns (Platform, Roles, Year, Tools)
- Divider
- MetricsRow
- Divider
- Content blocks slot

MetricsRow.astro
- 1–3 columns desktop
- stacked on mobile
- Each metric: value + label

CaseStudyBlock.astro
- A flexible section wrapper that supports:
  - single column text
  - 2-column image layouts
  - alternating image sizes like the wireframe

Figure.astro
Props
- src
- alt
- caption (optional)
Rules
- Caption uses muted text color.
- Caption spacing is tight and consistent.

Callout.astro
- Minimal styling, no border/shadow/radius.
- Uses spacing and typography to stand out.
- Intended for key constraints, decisions, or results.

## Motion helpers

RevealOnScroll (optional)
- Implementation rule:
  - default: CSS class + IntersectionObserver to toggle “is-visible”
  - reduced motion: disabled, content is visible immediately
- Animate only opacity and transform
- No autoplay beyond subtle reveal