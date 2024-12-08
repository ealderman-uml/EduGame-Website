import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/EduGame-Website",
  plugins: [react()],
  assetsInclude: ['**/*.pdf', '**/*.br', 'src/assets/WebGL_Build/Build/WebGL Build.framework.js.br'],
})
