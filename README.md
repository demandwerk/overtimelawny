# Romero Law Group website

The website for overtimelawny.com, built with [Astro](https://astro.build) as a fast static site. Deploys to Netlify.

## Editing

| What | Where |
| --- | --- |
| Phone, offices, social links, nav menu | `src/site.ts` |
| Practice-area cards, testimonials, team bios | `src/site.ts` |
| Practice-area, location and Spanish pages | `src/content/pages/*.md` |
| Blog posts | `src/content/posts/*.md` (add a new file to publish a post) |
| Homepage layout | `src/pages/index.astro` |
| Colors and fonts | `src/styles/global.css` (`:root` variables) |

Every page keeps its old WordPress URL (`/<slug>/`), so search rankings and links carry over.

A new blog post looks like this:

```md
---
title: "Post title"
description: "One or two sentences for Google and the blog list."
date: 2026-10-09
---
Post body in Markdown…
```

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying (Netlify)

Connect this repo in Netlify; `netlify.toml` sets the build. The consultation form uses Netlify Forms: submissions appear under **Forms** in the Netlify dashboard, where you can turn on email notifications.

## Migration scripts

- `npm run import:wp -- export.xml` converted the WordPress export into `src/content/`. It was a one-time step; content has been hand-edited since, so re-running it would overwrite those edits.
- `npm run fetch:uploads` copies the few images and PDFs still referenced by old posts from the live WordPress site into `public/`. Run it once before switching DNS.
