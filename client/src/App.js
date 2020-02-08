import "./App.scss";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dash/Dash";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dash" component={Dashboard} />
      </Switch>
    </Provider>
  );
}

export default App;
