import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { ICurrentUser } from '../../../store/actions';

export interface ProtectedRouteProps extends RouteProps {
  currentUser: ICurrentUser;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = '';
  if (!props.currentUser) redirectPath = '/';

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
