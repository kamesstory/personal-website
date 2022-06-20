import React, { FunctionComponent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </>
  );
};

export default App;
