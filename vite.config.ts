import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
  },
  resolve: {
    // 配置别名
    alias: {
      '@': path.join(__dirname, './src'),
    },
    // extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
