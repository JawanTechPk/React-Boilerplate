import ActionType from "../../Constants/constants";
const UserSignupAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.USER_SIGNUP_REQ,
    });
    console.log("action obj", data);
    const user = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = user.findIndex((indexNumber) => {
      return indexNumber.email === data.email;
    });

    if (userIndex === -1) {
      user.push(data);
      localStorage.setItem("users", JSON.stringify(user));
      dispatch({
        type: ActionType.USER_SIGNUP_SUCCESS,
        payload: "USER SUCCESSFULLY SIGNUP",
      });
    } else {
      dispatch({
        type: ActionType.USER_SIGNUP_FAIL,
        payload: "USER ALREADY EXIST",
      });
    }
  };
};

const UserLoginAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.USER_LOGIN_REQ,
    });
    console.log("action obj", data);
    const user = JSON.parse(localStorage.getItem("users")) || [];

    const checkUser = user.find((storeValue) => {
      return (
        storeValue.email === data.email && storeValue.password === data.password
      );
    });

    if (checkUser) {
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: "USER SUCCESSFULLY LOGIN",
      });
    } else {
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload: "Invalid credentials",
      });
    }
  };
};

const UserSigupEmptyMsg = () => {
  return (dispatch) => {
    dispatch({
      type: ActionType.USER_SIGNUP_EMPTY_MESSAGE,
    });
  };
};
const UserLoginEmptyMsg = () => {
  return (dispatch) => {
    dispatch({
      type: ActionType.USER_LOGIN_EMPTY_MESSAGE,
    });
  };
};

export {
  UserSignupAction,
  UserSigupEmptyMsg,
  UserLoginAction,
  UserLoginEmptyMsg,
};
