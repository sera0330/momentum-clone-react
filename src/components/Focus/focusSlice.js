import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "", checked: false, editable: true };

export const focusSlice = createSlice({
  name: "focus",
  initialState: initialState,
  reducers: {
    setFocus: (state, action) => {
      state.value = action.payload;
      state.editable = false;
    },
    checkFocus: (state) => {
      state.checked = !state.checked;
    },
    focusEditModeOn: (state) => {
      state.editable = true;
    },
    focusEditModeOff: (state) => {
      state.editable = false;
    },
    clearFocus: (state) => {
      state.value = "";
      state.checked = false;
      state.editable = true;
    },
  },
});

export const {
  setFocus,
  checkFocus,
  focusEditModeOn,
  focusEditModeOff,
  clearFocus,
} = focusSlice.actions;

export default focusSlice.reducer;
