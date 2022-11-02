import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "./App.scss";
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
      <p className="aaa">Click on the Vite and React logos to learn more</p>
      <Button>123</Button>
      <FixedBottom></FixedBottom>
      <div className="test2">我的</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={reactLogo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
