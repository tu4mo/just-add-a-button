import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./i18n";
import store from "./store";

import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
