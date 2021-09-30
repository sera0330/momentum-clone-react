import { createSlice } from "@reduxjs/toolkit";
import { THEME_LIGHT } from "../../constants/etc";
import { LS_USER, LS_FOCUS, LS_THEME } from "../../constants/localStorage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem(LS_USER),
  },
  reducers: {
    init: (state, action) => {
      state.value = action.payload;
      localStorage.setItem(LS_USER, action.payload);
      localStorage.setItem(LS_FOCUS, "");
      localStorage.setItem(LS_THEME, THEME_LIGHT);
    },
    clear: (state) => {
      state.value = "";
      localStorage.clear();
    },
  },
});

export const { init, clear } = userSlice.actions;

export default userSlice.reducer;
