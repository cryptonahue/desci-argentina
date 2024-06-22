import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig , squooshImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://desci.ar',
  integrations: [mdx(), sitemap()],
  image: {
    service: squooshImageService(),
    },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
