import React from "react";
import Span from "../Common/Span";
import { MSG_ASK_LOGOUT } from "../../constants/message";

const Greeting = ({ user, setUser }) => {
  const handleGreetingClick = () => {
    if (window.confirm(MSG_ASK_LOGOUT)) {
      logout();
    }
  };

  const logout = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <div onClick={handleGreetingClick}>
      <Span size="337.5%" weight="500" text={`Hello, ` + user + `.`} />
    </div>
  );
};

export default Greeting;
