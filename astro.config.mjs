// @ts-check
import { defineConfig } from 'astro/config';

// This site is deployed as a GitHub Pages *personal site*
// (repo: chithmipeiris.github.io), so it is served from the root path.
//
// If you ever move it to a *project* repo (e.g. github.com/chithmipeiris/portfolio,
// served at chithmipeiris.github.io/portfolio/), also set:
//   base: '/portfolio',
// and the site will keep working — all internal links use Astro's base-aware helpers.
export default defineConfig({
  site: 'https://chithmipeiris.github.io',
});
