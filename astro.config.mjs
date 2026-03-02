import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Crucial : on passe en mode serveur
  adapter: node({
    mode: 'standalone',
  }),
  base: '/site',
});