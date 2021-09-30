import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const todoObj = {
        value: action.payload,
        checked: false,
        editable: false,
      };

      state.value = [...state.value, todoObj];
    },
  },
});

export const { add } = todoListSlice.actions;

export default todoListSlice.reducer;
