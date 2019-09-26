export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const onLogIn = payload => ({
  type: LOG_IN,
  payload
});

export const onLogOut = () => ({
  type: LOG_OUT
});
