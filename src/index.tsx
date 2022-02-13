import React from "react";
import ReactDOM from "react-dom";
import { MLMB } from "./components/MLMB";
import reportWebVitals from "./reportWebVitals";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { Provider } from "./components/Provider";

initializeIcons(/* optional base url */);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <MLMB />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
