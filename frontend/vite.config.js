import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    open: true,
  },
  server: {
    open: true,
    proxy: {
      '/api/users': 'http://localhost:5000',
      '/api/goals': 'http://localhost:5000',
    },
  },
})
