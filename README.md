# 2026 Portfolio

<img width="1920" height="929" alt="Screenshot 2026-03-30 at 7 48 29 PM" src="https://github.com/user-attachments/assets/6e23a170-de62-4382-a6dd-a9b47c97f9c9" />

## Cinefolio links: keep these through any redesign

Two routes here belong to Cinefolio, Garry's iOS film-logging app, not to the portfolio. A redesign must keep them at exactly these paths:

- `src/pages/.well-known/apple-app-site-association.ts` serves `/.well-known/apple-app-site-association`. iOS reads it to open `https://www.grewal.design/cinefolio/invite/...` links in the app (Universal Links). It must stay JSON (`Content-Type: application/json`) with a 200 and no redirect. It's an endpoint, not a file in `public/`, because a static file with no extension isn't served as JSON. If it disappears, invite links and QR codes open this website instead of the app.
- `src/pages/cinefolio/invite/[token].astro` serves `/cinefolio/invite/<token>`, the page people see when they don't have the app yet. Invites already sent by text or QR code point here, so moving it breaks them. It never looks the token up.

Keep both on `www.grewal.design`. The app's Associated Domains entry is `applinks:www.grewal.design`, and the bare domain only redirects. Any new redirect, middleware or `trailingSlash` setting must leave these paths alone.
