import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import '../styles/main.scss';
import Landing from '../pages/Landing/Landing';
import Project from '../pages/Project';
import Dashboard from '../pages/Dashboard/Dashboard';
import Alert from '../components/common/Alert/Alert';
import { getCurrentUser, ICurrentUser } from '../store/actions';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

interface AppProps {
  getCurrentUser: Function;
  currentUser: ICurrentUser;
}

const App: React.FC<AppProps> = ({ getCurrentUser, currentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <>
      <Alert />
      <Switch>
        <Route exact path='/' render={() => <Landing user={currentUser} />} />
        <ProtectedRoute
          path='/dashboard'
          component={Dashboard}
          currentUser={currentUser}
        />
        <Route path='/project/:id' component={Project} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
