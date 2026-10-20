import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages serves the production site on its custom domain at the root.
  // A repository subpath here would break canonical URLs, assets, and links.
  site: 'https://www.colegiojjr.com.br',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/admin/'),
    }),
  ],
});
