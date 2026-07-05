import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// PROJECTS — each markdown file becomes both a card on /projects
// and its own detail page at /projects/<filename>.
// The section navigation on the detail page is generated automatically
// from the `##` headings in the markdown body.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Short blurb shown under the title on the card + detail header.
    summary: z.string(),
    // Longer description shown in the card body (supports 1–2 paragraphs).
    excerpt: z.string().optional(),
    // Path (relative to /public) to a cover image; omit to show a placeholder.
    cover: z.string().optional(),
    // Controls ordering (lower = earlier). Also used for "Read Next".
    order: z.number().default(0),
    // Optional tags shown on the card.
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// PUBLICATIONS — each markdown file becomes a card on /publications.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Where "Go to Publication" points (DOI, journal, PDF, etc.).
    link: z.string().optional(),
    cover: z.string().optional(),
    // e.g. journal name / venue and year.
    venue: z.string().optional(),
    year: z.number().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, publications };
