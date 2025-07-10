import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/home/',
  plugins: [react()],
  build: {
    target: 'esnext',             // mejor soporte moderno
    minify: 'esbuild',            // más rápido y eficiente que terser
    sourcemap: false,             // reduce tamaño en producción
    chunkSizeWarningLimit: 500,  // útil si usas muchas librerías
    assetsInlineLimit: 4096       // optimiza imágenes pequeñas
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://tciconsultoria.com/TCIWEB',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
