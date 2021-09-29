import { createSlice } from "@reduxjs/toolkit";
import {
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  CHECKED_FALSE,
} from "../../constants/localStorage";

export const focusSlice = createSlice({
  name: "focus",
  initialState: {
    value: localStorage.getItem(LS_FOCUS),
  },
  reducers: {
    init: (state, action) => {
      state.value = action.payload;
      localStorage.setItem(LS_FOCUS, action.payload);
      localStorage.setItem(LS_FOCUS_CHECKED, CHECKED_FALSE);
    },
    update: (state, action) => {
      state.value = action.payload;
      localStorage.setItem(LS_FOCUS, action.payload);
    },
    clear: (state) => {
      state.value = "";
      localStorage.removeItem(LS_FOCUS);
      localStorage.removeItem(LS_FOCUS_CHECKED);
    },
    editMode: (state) => {
      state.value = "";
    },
  },
});

export const { init, update, clear, editMode } = focusSlice.actions;

export default focusSlice.reducer;
