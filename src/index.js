import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./GlobalStyles";
import StateProvider from "./ContextApi/StateProvider";
import reducer, { initialState } from "./ContextApi/reducer";

ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyles />
      <App />
    </StateProvider>
  </>,

  document.getElementById("root")
);
