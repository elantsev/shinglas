import React from "react";
import style from "./RegistrationForm.module.css";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registration } from "../actions/registrationActions";
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
  registration,
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
          let payload = values;
          setTimeout(() => {
            registration(payload);
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
              label="Почта"
              plaseholder="Почта"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={values.email}
              autoComplete="email"
            />
            {errors.email && touched.email && errors.email}
            <TextField
              name="password"
              type="password"
              error={errors.password && touched.password}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              label="Пароль"
              plaseholder="Пароль"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={values.password}
              autoComplete="current-password"
            />
            {errors.password && touched.password && errors.password}
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
            {showErrorMessage && <p>Пароль или логин введен не верно</p>}
          </form>
        )}
      </Formik>
      <div>
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

const mapDispatchToProps = dispatch => {
  return {
    registration: payload => dispatch(registration(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
