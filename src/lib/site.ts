// Single source of truth for the site's public URL.
// Swap NEXT_PUBLIC_SITE_URL in Vercel project settings once a real domain is attached —
// everything (sitemap, robots.txt, Open Graph tags) reads from here.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://finetiks-security-page.vercel.app";
