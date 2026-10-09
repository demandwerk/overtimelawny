import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://overtimelawny.com',
  trailingSlash: 'always', // match the old WordPress URLs
  integrations: [sitemap()],
});
