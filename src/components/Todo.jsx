import React, { useEffect, useState } from "react";
import * as S from "./Todo.style";
import TodoItem from "./TodoItem";
import { DISPLAY_BLOCK, DISPLAY_NONE } from "../constants/css";
import { LS_TODO_LIST } from "../constants/localStorage";
import { KEY_ENTER } from "../constants/keyboard";

const Todo = () => {
  const [todoToggle, setTodoToggle] = useState(false);

  const savedTodoList = JSON.parse(localStorage.getItem(LS_TODO_LIST));
  const [todoList, setTodoList] = useState(savedTodoList || []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_LIST, JSON.stringify(todoList));
  }, [todoList]);

  const handleClickTodoToggle = () => {
    setTodoToggle(!todoToggle);
  };

  const handleEnterAdd = (event) => {
    if (event.key === KEY_ENTER) {
      addNewTodo(event.target.value);
      event.target.value = ""; // clear input
    }
  };

  const addNewTodo = (todo) => {
    const todoObj = {
      value: todo,
      checked: false,
      editable: false,
    };

    setTodoList([...todoList, todoObj]);
  };

  return (
    <S.TodoContainer>
      <S.DropdownWrapper display={todoToggle ? DISPLAY_BLOCK : DISPLAY_NONE}>
        <S.Dropdown>
          <S.TodoHeader>
            <S.HeaderTitleWrapper>
              <S.HeaderTitle>Today</S.HeaderTitle>
            </S.HeaderTitleWrapper>
          </S.TodoHeader>
          <S.Ol>
            {todoList.map((todo, index) => (
              <S.Li key={index}>
                <TodoItem
                  todoItem={todo}
                  itemIndex={index}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              </S.Li>
            ))}
          </S.Ol>
          <S.TodoFooter>
            <S.TodoInput onKeyPress={handleEnterAdd} />
          </S.TodoFooter>
        </S.Dropdown>
      </S.DropdownWrapper>
      <S.TodoToggle onClick={handleClickTodoToggle}>Todo</S.TodoToggle>
    </S.TodoContainer>
  );
};

export default Todo;
