import "./App.scss";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </Provider>
  );
}

export default App;
