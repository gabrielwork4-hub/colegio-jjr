import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Use the apex domain as the canonical production origin.
  site: 'https://colegiojjr.com.br',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/admin/'),
    }),
  ],
});
