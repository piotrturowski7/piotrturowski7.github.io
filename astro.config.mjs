// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import polishTypography from './integrations/polish-typography.mjs';

export default defineConfig({
  site: 'https://www.everhome.com.pl',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // Strona podziękowania ma noindex, więc nie trafia do mapy strony.
      filter: (page) => !page.includes('/dziekujemy'),
    }),
    polishTypography(),
  ],
  vite: { plugins: [tailwindcss()] },
});
