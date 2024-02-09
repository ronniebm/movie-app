import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/movie-details': {
        target: 'https://deploy-preview-5--movie-app-ronnie.netlify.app',
        rewrite: (path) => path.replace(/^\/movie-details/, ''),
      },
    },
  },
})
