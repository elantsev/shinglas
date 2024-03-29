import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";
import PrivateRoute from "./components/PrivateRoute";
import Calculations from "./components/calculations/Calculations";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <PrivateRoute path="/Calculations/" component={Calculations} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
