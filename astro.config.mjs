import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://lariojapark.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  integrations: site ? [sitemap({filter: page => !page.endsWith('/404/')})] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
