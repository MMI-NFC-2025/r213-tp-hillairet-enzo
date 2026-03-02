import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Change l'import

export default defineConfig({
  output: 'server', // Change "static" en "server"
  adapter: node({
    mode: 'standalone',
  }),
  base: '/site', // Garde bien ton base path
});