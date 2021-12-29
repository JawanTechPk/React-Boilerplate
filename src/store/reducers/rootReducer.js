import { combineReducers } from "redux";
import {
  userLoginReducer,
  userSignupReducer,
} from "./AuthReducer";

const rootReducer = combineReducers({
  userSignupReducer,
  userLoginReducer,
});

export default rootReducer;
