import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TE4_25-26_SITE/',
  plugins: [react(), tailwindcss()],
})
