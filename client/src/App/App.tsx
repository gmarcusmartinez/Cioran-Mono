import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'styles/main.scss';
import { ProtectedRoute } from 'components/common/ProtectedRoute';
import Modal from 'components/common/Modal';
import Alert from 'components/common/Alert/AlertContainer';
import Landing from 'pages/Landing';
import Project from 'pages/Project';
import Dashboard from 'pages/Dashboard';
import { IUser } from 'interfaces';
import { getCurrentUser } from 'store/actions';
import { IState } from 'interfaces/state';
import { selectCurrentUser } from 'store/selectors/auth';
import { selectDisplayModal } from 'store/selectors/modal';

interface AppProps {
  displayModal: boolean;
  getCurrentUser: Function;
  user: IUser;
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

const mapStateToProps = (state: IState) => ({
  user: selectCurrentUser(state),
  displayModal: selectDisplayModal(state),
});

export default connect(mapStateToProps, { getCurrentUser })(App);
