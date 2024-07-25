import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: process.env.GENERATE_SOURCEMAP === 'true',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
