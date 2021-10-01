import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../common/localStorage";

const initialState = loadState().todos === undefined ? [] : loadState().todos;

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoObj = {
        value: action.payload,
        checked: false,
        editable: false,
      };

      state.push(todoObj);
    },
    checkTodo: (state, action) => {
      const changedIndex = action.payload;

      state.map((todo, index) =>
        index === changedIndex ? { ...todo, checked: !todo.checked } : todo
      );
    },
    editModeTodo: (state, action) => {
      const editableIndex = action.payload;

      state.map((todo, index) =>
        index === editableIndex ? { ...todo, editable: true } : todo
      );
    },
    updateTodo: (state, action) => {
      const editedIndex = action.payload.index;
      const editedValue = action.payload.value;

      state.map((todo, index) =>
        index === editedIndex
          ? { ...todo, value: editedValue, editable: false }
          : todo
      );
    },
    removeTodo: (state, action) => {
      const clickedIndex = action.payload;

      state.filter((todo, index) => index !== clickedIndex);
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
