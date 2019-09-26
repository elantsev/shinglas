import React from "react";
import style from "./LogOut.module.css";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { onLogOut } from "../actions/registrationActions";

function LogOut({ className, onLogOut }) {
  const classes = classNames(style.logOut, className);

  return (
    <Button
      onClick={onLogOut}
      type="button"
      variant="outlined"
      color="primary"
      className={classes.button}
    >
      выйти
    </Button>
  );
}

export default connect(
  null,
  { onLogOut }
)(LogOut);
