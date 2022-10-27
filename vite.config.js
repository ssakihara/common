/* eslint-disable */
const { resolve } = require('path');
const { defineConfig } = require('vite');

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
  },
});
