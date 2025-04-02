import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      styles: path.resolve(__dirname, './src/styles'),
      hooks: path.resolve(__dirname, './src/hooks'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      pages: path.resolve(__dirname, './src/pages'),
      storage: path.resolve(__dirname, './src/storage'),
    },
  },
});
