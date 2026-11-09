import type { APIRoute } from 'astro';

// Universal Links for the Cinefolio iOS app (bundle com.garrygrewal.reellog, team 322J2292F8).
// iOS fetches this from https://www.grewal.design/.well-known/apple-app-site-association
// (through Apple's CDN) when the app is installed, and then opens matching links in the app.
//
// It's an endpoint rather than a file in public/ because the path has no extension:
// a static file would be served as application/octet-stream, and Apple wants application/json.
// It must be served directly, with a 200 and no redirect. Don't move or rename it.
// See "Cinefolio" in the README.

export const prerender = false;

const association = {
  applinks: {
    details: [
      {
        appIDs: ['322J2292F8.com.garrygrewal.reellog'],
        components: [
          {
            '/': '/cinefolio/invite/*',
            comment: 'Cinefolio friend invites',
          },
        ],
      },
    ],
  },
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(association), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
