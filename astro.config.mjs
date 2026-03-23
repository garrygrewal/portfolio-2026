// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  redirects: {
    '/casestudy1': '/mariana-tek-appointments',
    '/casestudy2': '/mariana-tek-year-in-motion',
    '/casestudy3': '/xplor-rec-mobile',
    '/casestudy4': '/q4-capital-connect',
  },
});
