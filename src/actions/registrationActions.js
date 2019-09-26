export const REG_FORM_SUBMIT = "REG_FORM_SUBMIT";
export const LOG_OUT = "LOG_OUT";

export const registration = payload => ({
  type: REG_FORM_SUBMIT,
  payload
});

export const logOut = () => ({
  type: LOG_OUT
});
