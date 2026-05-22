# Explorations Page Design

## Goal

Build an `Explorations` section for smaller, experimental, or unfinished projects. The page should feel more playful than the main case studies while still matching the portfolio's dark editorial visual system, typography, spacing, and minimal card styling.

## Routes

- `/explorations` renders the explorations landing page.
- `/explorations/[slug]` renders placeholder detail pages for each exploration.

The detail route should use Astro `getStaticPaths()` with shared project data so future projects can be added by editing one data file.

## Data Model

Create a project data module, likely `src/data/explorations.ts`, with about 8 placeholder projects.

Each project should include:

- `title`
- `slug`
- `description`
- `year`
- `medium` or `platform`
- `status`
- `size`: `large`, `medium`, or `small`
- `accent`
- `heroImageSrc` or placeholder visual metadata
- short placeholder body content

The data should be plain and easy to replace later.

## Landing Page

The landing page uses the existing `Layout.astro` shell and global tokens.

The hero text is:

> A collection of half-baked (some fully-baked) projects that I've explored over the years.

The hero should be centered in the first viewport, set in the existing display style already used on the current explorations page, and remain the visual priority.

Behind the hero text, render eight project tiles as scattered background cards. The tiles should be clickable and navigate to their detail pages.

## Tile Placement

Use a curated random scatter:

- Define safe placement zones around the text.
- Assign each project to a zone on the client.
- Randomize position, rotation, and small offsets within those zones on each page load.
- Keep tiles behind the copy with lower opacity and subtle blur or contrast control.
- Keep hit targets usable without letting tiles overpower the text.

Randomization should happen client-side after page load to avoid Astro hydration mismatch issues.

On smaller screens, simplify the scatter so the text remains readable. It is acceptable to use fewer visible background tiles in the first viewport and reveal the full list below.

## Scroll Motion

As the user scrolls:

- Some hero-background tiles fade and drift out.
- Other tiles fade and drift in.
- Motion should use opacity and transform only.
- The effect should feel quiet and deliberate, not chaotic.

Implementation can use a small inline script or imported client script with `requestAnimationFrame`-throttled scroll progress. Avoid animation libraries.

## Reduced Motion

If `prefers-reduced-motion: reduce` is enabled:

- Disable hero text pulsing.
- Disable scroll-based fades and drifting.
- Render tiles in stable positions with readable opacity.
- Keep all links accessible.

## Components

Likely new components:

- `ExplorationsHero.astro`: hero text, tile layer, and client-side scatter script.
- `ExplorationTile.astro`: one clickable tile, with size and visual metadata.

Reuse existing layout, typography, link behavior, and case study content classes where possible. Avoid introducing card borders, shadows, or rounded decoration that conflicts with the current design system.

## Detail Pages

Each placeholder detail page should feel related to the existing case study pages:

- Use `CaseStudyLayout.astro`.
- Provide title, description, metadata, and a placeholder hero visual.
- Add a few short placeholder content blocks using existing content block classes and `Figure.astro` where helpful.

The copy should be clearly placeholder but polished enough to keep the portfolio feeling intentional.

## Verification

After implementation:

- Run `npm run build`.
- Start the local Astro dev server.
- Verify `/explorations` and at least one `/explorations/[slug]` detail page in a browser.
- Check desktop and mobile viewports.
- Confirm hero copy remains readable.
- Confirm tile links work.
- Confirm reduced-motion CSS/JS path keeps content stable.
