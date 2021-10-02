import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../components/UserForm/userSlice";
import focusReducer from "../components/Focus/focusSlice";
import themeReducer from "../components/ThemeToggleButton/themeSlice";
import todosReducer from "../components/Todo/todosSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  user: userReducer,
  focus: focusReducer,
  theme: themeReducer,
  todos: todosReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default { store, persistor };
