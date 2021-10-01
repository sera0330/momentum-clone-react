import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/UserForm/userSlice";
import focusReducer from "../components/Focus/focusSlice";
import themeReducer from "../components/ThemeToggleButton/themeSlice";
import todosReducer from "../components/Todo/todosSlice";
import { loadState, saveState } from "../common/localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    user: userReducer,
    focus: focusReducer,
    theme: themeReducer,
    todos: todosReducer,
  },
  persistedState,
});

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
      focus: store.getState().focus,
      theme: store.getState().theme,
      todos: store.getState().todos,
    });
  }, 1000)
);

export default store;
