import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../UserForm/userSlice";
import Span from "../Common/Span";
import { MSG_ASK_LOGOUT } from "../../constants/message";

const Greeting = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleGreetingClick = () => {
    if (window.confirm(MSG_ASK_LOGOUT)) {
      logout();
    }
  };

  const logout = () => {
    dispatch(clear());
  };

  return (
    <div onClick={handleGreetingClick}>
      <Span size="337.5%" weight="500" text={`Hello, ` + user + `.`} />
    </div>
  );
};

export default Greeting;
