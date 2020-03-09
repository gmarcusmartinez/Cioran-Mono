import "./App.scss";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Alert from "./components/Common/Alert/Alert";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dash/Dash";

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dash" component={Dashboard} />
      </Switch>
    </Provider>
  );
}

export default App;
