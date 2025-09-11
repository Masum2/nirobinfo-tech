import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  
  //for live
  // base: process.env.VITE_BASE_PATH || "/nirobinfo-tech/" 
   base: process.env.VITE_BASE_PATH || "/" //for local
})
