import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
