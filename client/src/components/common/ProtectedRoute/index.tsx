import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { ICurrentUser } from '../../../store/actions';

export interface IProps extends RouteProps {
  user: ICurrentUser;
}

export const ProtectedRoute: React.FC<IProps> = (props) => {
  let redirectPath = '';
  if (!props.user) redirectPath = '/';

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
