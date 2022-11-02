import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './tailwind.css' // 引入tailwind指令，

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
