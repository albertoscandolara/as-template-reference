import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// Constants
import { APPLICATION_NAME } from './src/library/constants/application.constant';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/library/main.ts'),
      name: APPLICATION_NAME,
      formats: ['es', 'umd'],
      fileName: (format) => `as-const-lib.${format}.js`,
    },
    outDir: 'dist',
  },
  resolve: { alias: { src: resolve('src/library') } },
  test: {
    setupFiles: [],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },
  plugins: [
    dts({
      entryRoot: 'src/library',
      outDir: 'dist/types',
    }),
  ],
});
