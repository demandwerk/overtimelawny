// Blog helpers shared by the blog pages and post cards.
import { getCollection } from 'astro:content';

export const POSTS_PER_PAGE = 12;

/** All posts, newest first. */
export const getPosts = async () =>
  (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** Reading time at about 230 words a minute, at least one minute. */
export const readMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 230));
