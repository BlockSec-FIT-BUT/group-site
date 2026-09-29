import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import process from 'node:process';
import { markdownProcessor } from './src/lib/markdown';

const base = process.env.SITE_BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  // GitHub Actions supplies these for both project sites and custom domains.
  site: process.env.SITE_URL || undefined,
  base,
  trailingSlash: 'always',
  redirects: { '/research/': `${base.replace(/\/$/, '')}/projects/` },
  markdown: { processor: markdownProcessor(base) },
  vite: { plugins: [tailwindcss()] },
});
