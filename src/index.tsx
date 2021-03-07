import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import main from "./themes/main";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
