import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoObj = {
        id: uuidv4(),
        value: action.payload,
        checked: false,
        editable: false,
      };

      state.push(todoObj);
    },
    checkTodo: (state, action) => {
      const index = state.findIndex((state) => state.id === action.payload);

      state[index].checked = !state[index].checked;
    },
    editModeTodo: (state, action) => {
      const index = state.findIndex((state) => state.id === action.payload);

      state[index].editable = true;
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((state) => state.id === action.payload.id);
      const value = action.payload.value;

      state[index].value = value;
      state[index].editable = false;
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((state) => state.id === action.payload);

      state.splice(index, 1);
    },
    clearTodos: (state) => (state = []),
  },
});

export const {
  addTodo,
  checkTodo,
  editModeTodo,
  updateTodo,
  removeTodo,
  clearTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
