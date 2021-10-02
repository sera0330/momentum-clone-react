import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "", checked: false, editable: true };

export const focusSlice = createSlice({
  name: "focus",
  initialState: initialState,
  reducers: {
    setFocus: (state, action) => {
      return {
        ...state,
        value: action.payload,
        editable: false,
      };
    },
    checkFocus: (state) => {
      return {
        ...state,
        checked: !state.checked,
      };
    },
    focusEditModeOn: (state) => {
      return {
        ...state,
        editable: true,
      };
    },
    focusEditModeOff: (state) => {
      return {
        ...state,
        editable: false,
      };
    },
    clearFocus: (state) => {
      return initialState;
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
