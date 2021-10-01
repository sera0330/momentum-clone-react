import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../UserForm/userSlice";
import { clearTodos } from "../Todo/todosSlice";
import Span from "../Common/Span";
import { MSG_ASK_LOGOUT } from "../../constants/message";
import { clearFocus } from "../Focus/focusSlice";
import { clearTheme } from "../ThemeToggleButton/themeSlice";

const Greeting = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleGreetingClick = () => {
    if (window.confirm(MSG_ASK_LOGOUT)) {
      logout();
    }
  };

  const logout = () => {
    dispatch(clearUser());
    dispatch(clearFocus());
    dispatch(clearTheme());
    dispatch(clearTodos());
  };

  return (
    <div onClick={handleGreetingClick}>
      <Span size="337.5%" weight="500" text={`Hello, ` + user + `.`} />
    </div>
  );
};

export default Greeting;
