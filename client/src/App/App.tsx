import React from 'react';
import '../styles/main.scss';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import Project from '../pages/Project/Project';
import Landing from '../pages/Landing/Landing';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/project/:id' component={Project} />
    </Switch>
  );
};

export default App;
