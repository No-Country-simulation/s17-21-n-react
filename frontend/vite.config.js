import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin': fileURLToPath(new URL('./src/admin', import.meta.url)),
      '@students': fileURLToPath(new URL('./src/students', import.meta.url)),
      '@teachers': fileURLToPath(new URL('./src/teachers', import.meta.url)),
      '@public': fileURLToPath(new URL('./src/public', import.meta.url)),
    },
  },
});
