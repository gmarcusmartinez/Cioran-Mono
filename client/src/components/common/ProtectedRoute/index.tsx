import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { IUser } from 'interfaces';

export interface IProps extends RouteProps {
  user: IUser;
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
