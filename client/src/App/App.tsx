import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import '../styles/main.scss';
import Landing from 'pages/Landing';
import Project from 'pages/Project';
import Dashboard from 'pages/Dashboard';

import Modal from 'components/common/Modal';
import Alert from 'components/common/Alert/AlertContainer';
import { getCurrentUser, ICurrentUser } from 'store/actions';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

interface AppProps {
  displayModal: boolean;
  getCurrentUser: Function;
  user: ICurrentUser;
}

const App: React.FC<AppProps> = ({ getCurrentUser, user, displayModal }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <>
      <Alert />
      <Switch>
        <Route exact path='/' render={() => <Landing user={user} />} />
        <ProtectedRoute path='/dashboard' user={user} component={Dashboard} />
        <Route path='/project/:id' component={Project} />
      </Switch>
      {displayModal ? <Modal /> : null}
    </>
  );
};

interface IState {
  auth: { currentUser: ICurrentUser };
  modal: { displayModal: boolean };
}
const mapStateToProps = (state: IState) => ({
  user: state.auth.currentUser,
  displayModal: state.modal.displayModal,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
