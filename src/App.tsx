import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Ledger} from "./ledger.ts";

export function Test() {
    return (
        <button
            onClick={async () => {
                try {
                    const { app } = await Ledger.initialise("dot");
                    console.log("fuck world", app);
                    const result = await Ledger.getVersion(app);
                    console.log("result", result);
                } catch (e) {
                    console.error(e);
                    await Ledger.ensureClosed();
                }
            }}
        >ledger</button>
    );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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
        <Test />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
