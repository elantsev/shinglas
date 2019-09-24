import React from "react";
import style from "./RegistrationForm.module.css";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Не корректный email")
    .required("Обязательное поле!"),
  password: Yup.string().required("Обязательное поле!")
});

function RegistrationForm({ className }) {
  const classes = classNames(style.registrationForm, className);

  return (
    <div className={classes}>
      <img src="" alt="" />
      <h3>Вход в аккаунт</h3>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: "", password: "", rememberMe: true }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className={style.registrationForm__form}
          >
            <TextField
              id="outlined-required"
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
            />
            {errors.email && touched.email && errors.email}
            <TextField
              id="outlined-required"
              name="password"
              error={errors.password && touched.password}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              label="Пароль"
              plaseholder="Пароль"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="password"
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <FormControlLabel
              name="checkedB"
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange("checkedB")}
                  checked={values.rememberMe}
                  onChange={handleChange}
                  color="primary"
                  name="rememberMe"
                />
              }
              label="Запомнить меня"
            />
            <Button
              onSubmit={() => handleSubmit()}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Войти в аккаунт
            </Button>
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

export default RegistrationForm;

// RegistrationForm.propTypes = {
//   id: PropTypes.number,
//   onDeleteItem: PropTypes.func
// };