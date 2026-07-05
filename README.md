# Chithmi Tharika Peiris — Portfolio

A fast, static portfolio website built with [Astro](https://astro.build) and deployed to
GitHub Pages. Content lives in simple data/markdown files, so adding a new project or
publication is one file — no HTML editing required.

Palette: white / black / green (all defined as CSS variables in
`src/styles/global.css`).

---

## Prerequisites

- [Node.js](https://nodejs.org) **18 or newer** (see `.nvmrc` → Node 20 recommended).
  Check with `node -v`.

## Run it locally (preview)

```bash
npm install        # once, to install dependencies
npm run dev        # start the dev server with hot-reload
```

Then open **http://localhost:4321** in your browser. Edits to any file update the page
live.

To preview the exact production build (what GitHub Pages will serve):

```bash
npm run build      # outputs the static site to ./dist
npm run preview    # serves ./dist locally
```

---

## Editing content

Everything is placeholder content right now. Here's where to change things:

| What | Where |
|------|-------|
| Name, role, intro/bio, research interests, social links, résumé path, images | `src/data/site.ts` |
| "The Journey" timeline (About page) | `src/data/journey.ts` |
| "Certifications" carousel (About page) | `src/data/certifications.ts` |
| Projects (list **and** detail pages) | `src/data/projects/*.md` — add/edit a file |
| Publications | `src/data/publications/*.md` — add/edit a file |
| Résumé PDF | replace `public/resume.pdf` |
| Images | drop files in `public/images/` (see `public/images/README.md`) |
| Colours / fonts | `src/styles/global.css` (the `:root` variables at the top) |

### Adding a project

Create a new file, e.g. `src/data/projects/my-project.md`:

```markdown
---
title: 'My Project Title'
summary: 'One-line summary shown on the card and detail header.'
excerpt: 'A slightly longer blurb for the card body.'
order: 4                       # controls ordering + "Read Next"
tags: ['Marine Microbiology']
cover: '/images/my-project.jpg'  # optional; omit for a placeholder box
---

## Overview
Write the project story in markdown. Each `##` heading automatically
becomes an entry in the sticky "On this page" navigation.

## Methods
...
```

It instantly appears on `/projects` and gets its own page at `/projects/my-project`.

### Adding a publication

Create `src/data/publications/my-paper.md`:

```markdown
---
title: 'Paper title'
summary: 'Abstract / short description shown on the card.'
venue: 'Journal Name'
year: 2025
link: 'https://doi.org/...'    # "Go to Publication" target
order: 3
---
```

> Tip: set `draft: true` in the front-matter to hide a project/publication without
> deleting it.

---

## Deploying to GitHub Pages

This repo is set up as a **personal site** (served at the root).

1. Create a GitHub repository named **`chithmipeiris.github.io`**.
2. Push this project to its `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. That's it. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
   the site and publishes it. The live URL will be **https://chithmipeiris.github.io**.

### Using a project repo instead

If you'd rather host it under a normal repo (e.g. `chithmipeiris.github.io/portfolio/`),
edit `astro.config.mjs` and add `base: '/portfolio'` (matching the repo name). All
internal links are already base-path aware, so nothing else needs to change.

---

## Project structure

```
public/                 static assets served at the root
  favicon.svg
  resume.pdf            ← replace with the real CV
  images/               ← drop images here
src/
  components/           Nav, Footer, cards, Timeline, CertCarousel, icons
  content.config.ts     content collection schemas (projects, publications)
  data/
    site.ts, journey.ts, certifications.ts
    projects/*.md       one file per project
    publications/*.md   one file per publication
  layouts/BaseLayout.astro
  lib/paths.ts          base-path helpers
  pages/                index, about, projects/, publications/
  styles/global.css     design tokens + base styles
.github/workflows/deploy.yml   GitHub Pages CI
astro.config.mjs

Note: the markdown collections live in src/data/ (not src/content/) on purpose —
a glob-loader base inside the reserved src/content/ dir makes Astro load every
file twice ("Duplicate id" warnings).
```
