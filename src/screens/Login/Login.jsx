import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  UserLoginAction,
  UserLoginEmptyMsg,
} from "../../store/actions/UserAction/UserAuthAction";

const Login = () => {
  const dispatch = useDispatch();
  const { UserLoginData, UserLoginMessage, UserLoginError, UserLoginLoading } =
    useSelector((state) => state.userLoginReducer);
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const loginHandler = () => {
    const userObj = {
      email,
      password,
    };
    dispatch(UserLoginAction(userObj));
  };
  useEffect(() => {
    if (UserLoginMessage) {
      alert("UserLoginMessage");
      dispatch(UserLoginEmptyMsg());
    }
    if (UserLoginError) {
      alert(UserLoginError);
      dispatch(UserLoginEmptyMsg());
    }
  }, [UserLoginError, UserLoginMessage]);
  return (
    <div>
      <h1>Login Screen</h1>

      <div>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />{" "}
        <br />
        <input
          type="text"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Email"
        />{" "}
        <br />
        <button onClick={loginHandler}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
