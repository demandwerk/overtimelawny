import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Title tag for search results, when it should differ from the page title
    // (" | Romero Law Group" is added when it fits in 60 characters).
    seoTitle: z.string().optional(),
    // On-page heading, when it should differ from the page title (nav and
    // sitemap links keep using `title`).
    h1: z.string().optional(),
    description: z.string(),
    // practice = practice-area page (lives in practice-areas/), es = Spanish page (lives in es/), location = area-served page (lives in areas-we-serve/)
    kind: z.enum(['page', 'practice', 'location', 'es']),
    // Optional banner photo; the Manhattan skyline is used otherwise.
    hero: image().optional(),
    heroPosition: z.string().optional(), // CSS object-position, e.g. '50% 75%'
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Title tag for search results, when it should differ from the post title.
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    // Optional featured image: the post's banner and its social-share picture.
    image: image().optional(),
    // Blog topic (see src/data/topics.ts): sets the post's tab and topic page.
    topic: z.enum(['wages', 'discrimination', 'harassment', 'retaliation', 'leave', 'rights']),
  }),
});

export const collections = { pages, posts };
