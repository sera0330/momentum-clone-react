import { createSlice } from "@reduxjs/toolkit";
import { LS_THEME } from "../../constants/localStorage";
import { THEME_LIGHT, THEME_DARK } from "../../constants/etc";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: localStorage.getItem(LS_THEME),
  },
  reducers: {
    init: (state) => {
      state.value = THEME_LIGHT;
      localStorage.setItem(LS_THEME, THEME_LIGHT);
    },
    toggle: (state) => {
      if (state.value === THEME_LIGHT) {
        state.value = THEME_DARK;
      } else {
        state.value = THEME_LIGHT;
      }

      localStorage.setItem(LS_THEME, state.value);
    },
  },
});

export const { init, toggle } = themeSlice.actions;

export default themeSlice.reducer;
