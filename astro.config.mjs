import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Única fuente de verdad para el dominio público.
// Dejá SITE_URL vacío hasta definir el dominio real.
const configuredSite = process.env.SITE_URL?.trim();
const site = configuredSite ? configuredSite : undefined;

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
