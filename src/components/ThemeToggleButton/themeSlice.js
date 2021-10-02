import { createSlice } from "@reduxjs/toolkit";
import { THEME_LIGHT, THEME_DARK } from "../../constants/etc";

const initialState = THEME_LIGHT;

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
