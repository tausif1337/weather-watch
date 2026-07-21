import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config. React plugin enables JSX + fast refresh.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
