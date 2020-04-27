import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import DragDropDemo from "../DragDropDemo";

const App = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={DragDropDemo} />
    </Switch>
  );
};

export default App;
