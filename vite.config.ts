import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served at https://w1teen8.github.io/future-3d-construction/ (a project
  // page, not a user/org page), so asset URLs need this path prefix.
  base: '/future-3d-construction/',
})
