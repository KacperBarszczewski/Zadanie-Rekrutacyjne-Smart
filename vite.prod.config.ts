import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Zadanie-Rekrutacyjne-Smart/',
  plugins: [react()],
  build: {
    sourcemap: false
  }
})