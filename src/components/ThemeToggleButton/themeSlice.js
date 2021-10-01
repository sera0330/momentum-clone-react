import { createSlice } from "@reduxjs/toolkit";
import { THEME_LIGHT, THEME_DARK } from "../../constants/etc";
import { loadState } from "../../common/localStorage";

const initialState =
  loadState().theme === undefined ? THEME_LIGHT : loadState().theme;

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => (state === THEME_LIGHT ? THEME_DARK : THEME_LIGHT),
    clearTheme: (state) => THEME_LIGHT,
  },
});

export const { toggleTheme, clearTheme } = themeSlice.actions;

export default themeSlice.reducer;
