import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mediapipe/tasks-vision', 'hls.js']
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['@mediapipe/tasks-vision', 'hls.js']
    }
  },
  resolve: {
    alias: {
      'three-stdlib': 'three-stdlib/dist/three-stdlib.module.js'
    }
  },
  // Disable source maps for problematic dependencies
  css: {
    devSourcemap: false
  },
  server: {
    sourcemap: {
      suppressSourcemapWarning: true
    }
  }
})
