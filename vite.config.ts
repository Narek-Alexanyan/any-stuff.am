// /* eslint-disable import/no-extraneous-dependencies */
// /// <reference types="vitest" />
// /// <reference types="vite/client" />

import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: ['./src/setupTests.ts'],
  // },
});
