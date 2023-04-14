import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'zustand-action',
      fileName: 'zustand-action',
    },
  },
});
