import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      tsconfigPaths(),
  ],
  preview: {
    port: 3000,
  },
  build: {
    outDir: 'dist/k92ebc3e719eda',
  },
});
