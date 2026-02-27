import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import node from '@astrojs/node';

export default defineConfig({
  output: 'server', 
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});