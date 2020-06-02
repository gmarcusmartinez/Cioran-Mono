import React from 'react';
import { Redirect, Route } from 'react-router';
import { ICurrentUser } from '../../../store/actions';

export interface ProtectedRouteProps {
  component: any;
  currentUser: ICurrentUser;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  currentUser,
}) => {
  const routeComponent = () =>
    currentUser ? (
      React.createElement(component)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  return <Route render={routeComponent} />;
};

export default ProtectedRoute;
