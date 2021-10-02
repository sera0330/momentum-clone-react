import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
      const index = action.payload;

      return state.map((todo, i) => {
        if (i !== index) return todo;

        return {
          ...todo,
          checked: !todo.checked,
        };
      });
    },
    editModeTodo: (state, action) => {
      const index = action.payload;

      return state.map((todo, i) => {
        if (i !== index) return todo;

        return {
          ...todo,
          editable: true,
        };
      });
    },
    updateTodo: (state, action) => {
      const index = action.payload.index;
      const value = action.payload.value;

      return state.map((todo, i) => {
        if (i !== index) return todo;

        return {
          ...todo,
          value: value,
          editable: false,
        };
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo, i) => i !== action.payload);
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
