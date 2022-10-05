import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

import "./i18n";
import store from "./store";

import { App } from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
