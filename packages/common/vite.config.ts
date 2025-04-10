import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        common: resolve(__dirname, 'src/main.ts'),
        'schemas/index': resolve(__dirname, 'src/schemas/index.ts'),
        'helpers/index': resolve(__dirname, 'src/helpers/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['zod'],
    },
  },
  resolve: {
    alias: {
      src: resolve('src/'),
    },
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      outDir: 'dist',
      compilerOptions: {
        declarationMap: true,
      },
    }),
  ],
});
