import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',       // You can also use 'brotliCompress'
      ext: '.gz',              // File extension
      deleteOriginFile: false, // Keep original files
    })
  ],
})
