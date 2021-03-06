import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layouts from "@layouts/Layouts";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import stores from "@stores/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <Layouts />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
