import React from "react";
import Span from "./Span";
import { askLogout } from "../constants/message";

const Greeting = ({ user, setUser, clearFocus }) => {
  const handleGreetingClick = () => {
    if (window.confirm(askLogout)) {
      logout();
    }
  };

  const logout = () => {
    clearFocus();
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
