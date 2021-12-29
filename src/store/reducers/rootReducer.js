import { combineReducers } from "redux";
import {
  userLoginReducer,
  userSignupReducer,
} from "./UserReducer/UserAuthReducer";

const rootReducer = combineReducers({
  userSignupReducer,
  userLoginReducer,
});

export default rootReducer;
