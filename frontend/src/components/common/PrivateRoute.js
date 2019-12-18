import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({
  component: Component,
  isLoading,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoading) {
          return <h2>Loading...</h2>;
        } else if (!isAuthenticated) {
          return <Redirect to="/login/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
