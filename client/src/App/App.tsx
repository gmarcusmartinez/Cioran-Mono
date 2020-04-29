import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import Project from '../pages/Project/Project';

const App = () => {
  return (
    <Switch>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/project/:id' component={Project} />
    </Switch>
  );
};

export default App;
