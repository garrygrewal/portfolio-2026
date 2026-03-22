---
name: start-localhost
description: Starts the local development server for previewing the site. Use when the user wants to preview the site, start localhost, run the dev server, or view the site locally.
---

# Start Localhost

## Instructions

When the user wants to preview their site locally:

1. **Check if already running**: Inspect the terminals folder for an active dev server (e.g. `astro dev`, `vite`, `next dev`). If one is running, tell the user the URL and that it's ready.

2. **Start the dev server**: Run the project's dev script from the workspace root:
   ```bash
   nvm use
   npm run dev
   ```
   Use `yarn dev` or `pnpm dev` if the project uses those package managers.

3. **Run in background**: The dev server is long-running. Use `is_background: true` when executing the command so the terminal stays available.

4. **Share the URL**: After starting, tell the user where to preview. Common defaults:
   - Astro: http://localhost:4321
   - Vite: http://localhost:5173
   - Next.js: http://localhost:3000

## Framework detection

Check `package.json` scripts to confirm the dev command. The `dev` script typically runs the framework's dev server.
