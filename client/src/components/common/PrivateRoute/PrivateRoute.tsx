import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute = ({ component, auth: { currentUser }, ...rest }: any) => {
  const routeComponent = (props: any) =>
    currentUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(PrivateRoute);
