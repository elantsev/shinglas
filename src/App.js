import React from "react";
import "./App.css";
import Calculations from "./components/Calculations";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <PrivateRoute
            path="/Calculations/"
            component={Calculations}
            isAuth={true}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
