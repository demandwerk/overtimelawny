import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // practice = practice-area page, es = Spanish page, location = area-served page
    kind: z.enum(['page', 'practice', 'location', 'es']),
    // Optional banner photo; the Manhattan skyline is used otherwise.
    hero: image().optional(),
    heroPosition: z.string().optional(), // CSS object-position, e.g. '50% 75%'
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { pages, posts };
