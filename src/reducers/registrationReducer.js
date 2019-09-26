import { LOG_IN, LOG_OUT } from "../actions/registrationActions";

const initialState = {
  isRegistered: localStorage.getItem("isRegistered"),
  showErrorMessage: false
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      if (
        action.payload.email === "test@test.ru" &&
        action.payload.password === "test@test.ru"
      ) {
        if (action.payload.rememberMe) {
          localStorage.setItem("isRegistered", true);
        }
        return {
          isRegistered: true,
          showErrorMessage: false
        };
      } else
        return {
          isRegistered: false,
          showErrorMessage: true
        };
    }
    case LOG_OUT: {
      localStorage.removeItem("isRegistered");
      return {
        isRegistered: false,
        showErrorMessage: false
      };
    }

    default:
      return state;
  }
}
