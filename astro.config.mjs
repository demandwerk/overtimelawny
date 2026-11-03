import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://overtimelawny.com';

// Blog posts carry their publish date as the sitemap's <lastmod>, so crawlers can
// tell which URLs are new and skip re-fetching the rest. Other pages get none
// rather than a made-up date.
const postDates = new Map(
  readdirSync('./src/content/posts')
    .filter((f) => f.endsWith('.md'))
    .map((f) => [`${site}/${f.slice(0, -3)}/`, readFileSync(`./src/content/posts/${f}`, 'utf8').match(/^date: (\S+)/m)?.[1]])
    .filter(([, date]) => date),
);

export default defineConfig({
  site,
  trailingSlash: 'always', // match the old WordPress URLs
  integrations: [
    sitemap({
      // Leave out the noindex thank-you page and the numbered blog and topic
      // pages (/blog/2/, /blog/topic/wages/2/ …); the posts are listed individually.
      filter: (page) => !page.includes('/thanks-for-reaching-out/') && !/\/blog\/(topic\/[^/]+\/)?\d+\/$/.test(page),
      serialize: (item) => (postDates.has(item.url) ? { ...item, lastmod: new Date(postDates.get(item.url)).toISOString() } : item),
    }),
  ],
});
