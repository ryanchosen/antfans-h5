import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { test } from "@/utils/index";
console.warn("🚀 调试 test", test);
// import viteSvg from '~/vite.svg'
import  "./App.scss";
import { Button } from "antd-mobile";
import FixedBottom from "@/components/Global/FixedBottom";
function App() {
  const [count, setCount] = useState(0);

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
      <p className="aaa">
        Click on the Vite and React logos to learn more
      </p>
      <Button>123</Button>
      <FixedBottom></FixedBottom>
      <div className="test2">我的</div>
    </div>
  );
}

export default App;
