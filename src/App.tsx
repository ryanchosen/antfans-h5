import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import {test} from '@/utils/index'
import {test as test1} from '@/utils'
// import viteSvg from '~/vite.svg'
import  style from './App.module.scss'
import { Button } from 'antd-mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style.aaa}>
        Click on the Vite and React logos to learn more
      </p>
      <Button>123</Button>
    </div>
  )
}

export default App
