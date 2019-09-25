import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        true ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
}

export default PrivateRoute;
