import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://overtimelawny.com',
  trailingSlash: 'always', // match the old WordPress URLs
  // The thank-you page is noindex, so keep it out of the XML sitemap too.
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks-for-reaching-out/') })],
});
