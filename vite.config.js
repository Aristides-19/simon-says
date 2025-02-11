import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/simon-says/',
  server: {
    host: true,
  },
});
