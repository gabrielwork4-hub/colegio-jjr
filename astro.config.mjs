import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const githubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: githubPages ? 'https://gabrielwork4-hub.github.io' : 'https://colegiojjr.com.br',
  base: githubPages ? '/colegio-jjr' : undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/admin/'),
    }),
  ],
});
