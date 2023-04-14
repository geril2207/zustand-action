import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'zustand-toolkit',
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'zustand', 'immer'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          zustand: 'zustand',
          immer: 'immer',
        },
      },
    },
  },
});
