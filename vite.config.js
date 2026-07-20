import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config. React plugin enables JSX + fast refresh.
export default defineConfig({
  plugins: [react()],
})
