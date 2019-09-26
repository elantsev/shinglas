import React from "react";
import style from "./LogOut.module.css";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { logOut } from "../actions/registrationActions";

function LogOut({ className, logOut }) {
  const classes = classNames(style.logOut, className);

  return (
    <Button
      onClick={logOut}
      type="textSecondary"
      variant="outlined"
      color="primary"
      className={classes.button}
    >
      выйти
    </Button>
  );
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registration.isRegistered,
    showErrorMessage: state.registration.showErrorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
