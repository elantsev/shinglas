import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default PrivateRoute;
