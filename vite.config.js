import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',  // ← This tells Vite to build to /docs folder
    emptyOutDir: true
  },
  base: '/portfolio-izza/'
})