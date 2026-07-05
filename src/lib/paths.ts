// Base-path aware URL helper. Works whether the site is served at "/"
// (personal site) or under "/repo" (project site) — just set `base` in
// astro.config.mjs and all links keep resolving.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(href: string): string {
  const joined = `${base}/${href}`.replace(/\/{2,}/g, '/');
  return joined || '/';
}

// Resolve a /public asset path (e.g. cover images) against the base.
export function asset(path?: string): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path; // external URL
  return withBase(path);
}
