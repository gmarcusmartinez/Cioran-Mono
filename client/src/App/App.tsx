import React from 'react';
import { connect } from 'react-redux';
import '../styles/main.scss';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Project from '../pages/Project/Project';
import Dashboard from '../pages/Dashboard/Dashboard';
import { getCurrentUser } from '../store/actions';

interface AppProps {
  getCurrentUser: Function;
}

const App: React.FC<AppProps> = ({ getCurrentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/project/:id' component={Project} />
    </Switch>
  );
};

export default connect(null, { getCurrentUser })(App);
