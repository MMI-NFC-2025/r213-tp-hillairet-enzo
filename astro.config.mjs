import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // On passe de "static" à "server"
  adapter: node({
    mode: 'standalone',
  }),
  base: '/site', // Ton chemin d'accès
});