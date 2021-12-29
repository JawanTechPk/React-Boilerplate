import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { UserSignupAction, UserSigupEmptyMsg } from "../../store/actions/UserAction/UserAuthAction";

const Signup = () => {
  const dispatch = useDispatch();
  const {
    UserSignUpData,
    UserSignUpMessage,
    UserSignUpError,
    UserSignUpLoading,
  } = useSelector((state) => state.userSignupReducer);

  const [name, setName] = useState(null);
  const [password, setpassword] = useState(null);
  const [number, setnumber] = useState(null);
  const [email, setemail] = useState(null);

  const signupHandler = () => {
    const userObj = {
      name,
      password,
      number,
      email,
    };
    dispatch(UserSignupAction(userObj));
  };

  useEffect(() => {
    if (UserSignUpMessage) {
      alert(UserSignUpMessage);
      dispatch(UserSigupEmptyMsg())
    }
    if (UserSignUpError) {
      alert(UserSignUpError);
      dispatch(UserSigupEmptyMsg())

    }
  }, [UserSignUpError, UserSignUpMessage]);

  return (
    <div>
      <Navbar />
      <h1>Signup Screen</h1>

      <div>
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="ENTER EMAIL"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="ENTER password"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setnumber(e.target.value)}
          placeholder="ENTER number"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="ENTER NAme"
        />
        <br />

        <button onClick={signupHandler}>signupHandler</button>
      </div>
    </div>
  );
};

export default Signup;
