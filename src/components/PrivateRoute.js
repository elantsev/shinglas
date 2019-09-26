import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, registration, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        registration ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    registration: state.registration.isRegistered
  };
};

export default connect(mapStateToProps)(PrivateRoute);
