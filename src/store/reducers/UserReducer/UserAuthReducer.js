import ActionType from "../../Constants/constants";

const INITIAL_STATE = {
  //USER AUTH
  UserSignUpData: [],
  UserSignUpMessage: "",
  UserSignUpError: "",
  UserSignUpLoading: false,

  UserLoginData: [],
  UserLoginMessage: "",
  UserLoginError: "",
  UserLoginLoading: false,


};

const userSignupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.USER_SIGNUP_REQ:
      return {
        ...state,
        UserSignUpLoading: true,
      };
    case ActionType.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        UserSignUpLoading: false,
        UserSignUpData: action.payload,
        UserSignUpMessage: action.payload,
      };
    case ActionType.USER_SIGNUP_FAIL:
      return {
        ...state,
        UserSignUpError: action.payload,
        UserSignUpLoading: false,
      };

    case ActionType.USER_SIGNUP_EMPTY_MESSAGE:
      return {
        ...state,
        UserSignUpMessage: "",
        UserSignUpError: "",
      };
    default:
      return state;
  }
};

const userLoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ActionType.USER_LOGIN_REQ:
        return {
          ...state,
          UserLoginLoading: true,
        };
      case ActionType.USER_LOGIN_SUCCESS:
        return {
          ...state,
          UserLoginLoading: false,
          UserLoginData: action.payload,
          UserLoginMessage: action.payload,
        };
      case ActionType.USER_LOGIN_FAIL:
        return {
          ...state,
          UserLoginError: action.payload,
          UserLoginLoading: false,
        };
  
      case ActionType.USER_LOGIN_EMPTY_MESSAGE:
        return {
          ...state,
          UserLoginMessage: "",
          UserLoginError: "",
        };
      default:
        return state;
    }
  };
  


export { userSignupReducer ,userLoginReducer };
