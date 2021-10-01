import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../common/localStorage";
import {
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  CHECKED_FALSE,
} from "../../constants/localStorage";

const initialState = loadState().focus === undefined ? "" : loadState().focus;

export const focusSlice = createSlice({
  name: "focus",
  initialState: initialState,
  reducers: {
    setFocus: (state, action) => {
      state = action.payload;
      localStorage.setItem(LS_FOCUS, action.payload);
      localStorage.setItem(LS_FOCUS_CHECKED, CHECKED_FALSE);
      return state;
    },
    updateFocus: (state, action) => {
      state = action.payload;
      localStorage.setItem(LS_FOCUS, action.payload);
      return state;
    },
    clearFocus: (state) => {
      state = "";
      localStorage.removeItem(LS_FOCUS);
      localStorage.removeItem(LS_FOCUS_CHECKED);
      return state;
    },
    editModeFocus: (state) => {
      state = "";
      return state;
    },
  },
});

export const { setFocus, updateFocus, clearFocus, editModeFocus } =
  focusSlice.actions;

export default focusSlice.reducer;
