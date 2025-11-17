/**
 * Vite Configuration
 * Framework: React 18 + TypeScript
 * Build Tool: Vite 5
 * Styling: Tailwind CSS 3.4 (via PostCSS)
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
