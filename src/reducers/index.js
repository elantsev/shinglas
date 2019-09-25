import { combineReducers } from "redux";
import { orderData } from "./orderDataReducer";
import { registration } from "./registrationReducer";

export const rootReducer = combineReducers({
  orderData,
  registration
});
