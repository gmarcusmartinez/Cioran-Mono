import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store/store";
import App from "./pages/App/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./core/service-worker";
import { GloablStyles, theme } from "./styles";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GloablStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
