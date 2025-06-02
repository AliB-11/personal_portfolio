import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal_portfolio/",
  server: {
    host: '0.0.0.0',  // ← this allows access from other devices on your network
    port: 5173        // ← make sure to match this with the URL you use on your phone
  }
})