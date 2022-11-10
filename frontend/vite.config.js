import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/slow': 'http://localhost:5005',
      '/forecast': 'http://localhost:5005',
    },
  },
});
