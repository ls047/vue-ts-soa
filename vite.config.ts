import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-router': 'vue-router/dist/vue-router.esm-bundler.js',
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
})
