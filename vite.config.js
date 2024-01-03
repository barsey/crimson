/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/theming': path.resolve(__dirname, './src/theming'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    include: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    globals: true,
    setupFiles: ['src/vitest.setup.ts'],
    coverage: {
      include: ['src/**/?*.ts?(x)'],
      exclude: [
        'src/**/?(*.)+(story|stories|d).ts?(x)',
        'src/**/*index.ts',
        'src/**/*types.ts',
        'src/index.ts',
        'src/stories/**',
        'src/components/Icons/**',
      ],
    },
  },
});
