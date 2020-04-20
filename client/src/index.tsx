import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GloablStyles, theme } from "./styles";

import App from "./pages/App/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./core/service-worker";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GloablStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
