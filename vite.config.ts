import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
})
