import React from "react";
import style from "./RegistrationForm.module.css";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { onLogIn } from "../actions/registrationActions";
import { Redirect } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Не корректный email")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(6, ({ min }) => `Пароль должен быть больше ${min} символов`)
    .required("Обязательное поле!")
});

function RegistrationForm({
  className,
  onLogIn,
  isRegistered,
  showErrorMessage
}) {
  const classes = classNames(style.registrationForm, className);

  if (isRegistered) {
    return <Redirect to="/calculations" />;
  }
  return (
    <div className={classes}>
      <p className={style.registrationForm__hint}>
        email === "test@test.ru"; <br />
        password === "test@test.ru"
      </p>
      <img src="" alt="" />
      <h3>Вход в аккаунт</h3>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: "", password: "", rememberMe: true }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onLogIn(values);
            setSubmitting(false);
          }, 800);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form
            onSubmit={handleSubmit}
            className={style.registrationForm__form}
          >
            <TextField
              name="email"
              required
              error={errors.email && touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              plaseholder="Почта"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={values.email}
              autoComplete="email"
            />
            {errors.email && touched.email && (
              <p className={style.registrationForm__error_message}>
                {errors.email}
              </p>
            )}
            <TextField
              name="password"
              type="password"
              error={errors.password && touched.password}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              plaseholder="Пароль"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={values.password}
              autoComplete="current-password"
            />
            {errors.password && touched.password && (
              <p className={style.registrationForm__error_message}>
                {errors.password}
              </p>
            )}
            <FormControlLabel
              name="checkedB"
              control={
                <Checkbox
                  checked={values.rememberMe}
                  onChange={handleChange}
                  color="primary"
                  name="rememberMe"
                />
              }
              label="Запомнить меня"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Войти в аккаунт
            </Button>
            {showErrorMessage && (
              <p className={style.registrationForm__error_message}>
                Пароль или логин введен не верно
              </p>
            )}
          </form>
        )}
      </Formik>
      <div className={style.registrationForm__links}>
        <Link>Забыли пароль?</Link>
        <Link>Ещё нет аккаунта? Регистрация</Link>
      </div>

      <p>Copyright© Ваш сайт 2019.</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registration.isRegistered,
    showErrorMessage: state.registration.showErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { onLogIn }
)(RegistrationForm);
