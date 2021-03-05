import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/Store";
import "./CSS/style.css";

import App from "./Container";


const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
