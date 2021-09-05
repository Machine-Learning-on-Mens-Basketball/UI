import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="badge">
          <h1 className="logo">MLMB</h1>
          {/* <p className="logo-sub">Machine Learning on Men&apos;s Basketball</p> */}
        </div>
        {/* <img
          src={logo}
          className="w-64 h-64 bg-white invert border border-8 rounded-md animate-bounce"
          alt="logo"
        /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
