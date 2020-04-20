import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default App;
