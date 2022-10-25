import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
  },
  resolve: {
    // 配置别名
    alias: {
      '@': path.join(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/styles/index.scss';"
      }
    }
  },
  plugins: [react()]
})
