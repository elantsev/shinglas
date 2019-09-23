import React from "react";
import style from "./RegistrationForm.module.css";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core";

function RegistrationForm({ className }) {
  const classes = classNames(style.registrationForm, className);

  return (
    <div className={classes}>
      <img src="" alt="" />
      <h3>Вход в аккаунт</h3>
      <TextField
        required
        id="outlined-required"
        label="Почта"
        plaseholder="Почта"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Пароль"
        plaseholder="Пароль"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="password"
      />
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
          />
        }
        label="Запомнить меня"
      />

      <Button variant="contained" color="primary" className={classes.button}>
        Войти в аккаунт
      </Button>
      <div>
        <Link>Забыли пароль?</Link>
        <Link>Ещё нет аккаунта? Регистрация</Link>
      </div>

      <p>Copyright© Ваш сайт 2019.</p>
    </div>
  );
}

export default RegistrationForm;

// RegistrationForm.propTypes = {
//   id: PropTypes.number,
//   onDeleteItem: PropTypes.func
// };
