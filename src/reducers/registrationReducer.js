import { REG_FORM_SUBMIT } from "../actions/registrationActions";

const initialState = false;

export function registration(state = initialState, action) {
  switch (action.type) {
    case REG_FORM_SUBMIT: {
      if (
        action.payload.email === "pasha02@list.ru" &&
        action.payload.password === "123456"
      ) {
        console.log(state);

        return true;
      }
    }

    default:
      return state;
  }
}
