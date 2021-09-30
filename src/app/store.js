import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/UserForm/userSlice";
import focusReducer from "../components/Focus/focusSlice";
import themeReducer from "../components/ThemeToggleButton/themeSlice";
import todoListReducer from "../components/Todo/todoListSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    focus: focusReducer,
    theme: themeReducer,
    todoList: todoListReducer,
  },
});

export default store;
