import { configureStore } from "@reduxjs/toolkit";
import focusReducer from "../components/Focus/focusSlice";

export default configureStore({
  reducer: {
    focus: focusReducer,
  },
});
