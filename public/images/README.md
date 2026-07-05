# Images

Drop image files here and reference them from content by their path under `/`.

Examples:
- A project cover: put `microbial-pigments.jpg` here, then set
  `cover: '/images/microbial-pigments.jpg'` in that project's markdown front-matter.
- The hero background / portrait: `hero.jpg`, `portrait.jpg` (referenced from the pages).
- Certification badges: set `image: '/images/cert-1.png'` in `src/data/certifications.ts`.

Any file in the `public/` folder is served at the site root, so
`public/images/foo.jpg` is available at `/images/foo.jpg`.

Recommended: use optimized JP/WebP images, roughly 1600px wide for covers and
2000px wide for the hero background, to keep the site fast.
