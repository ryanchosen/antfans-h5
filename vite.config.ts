// 修改vite.config.ts并不需要重启
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.join(__dirname, './src'),
    },
    // 不需要配置【想要省略的扩展名列表】因为已是默认内置的了
    // extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  css: {
    postcss: { // 注册postcss插件库中用到的插件
      plugins: [
        autoprefixer,
        tailwindcss
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/styles/index.scss';"
      }
    }
  },
  plugins: [react()]
})
