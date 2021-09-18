import React, { useEffect, useState } from "react";
import * as S from "./Todo.style";
import { LS_TODO_LIST } from "../constants/localStorage";

const DISPLAY_BLOCK = "block";
const DISPLAY_NONE = "none";

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

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      addNewTodo(event.target.value);
      event.target.value = ""; // clear input
    }
  };

  const addNewTodo = (todo) => {
    const todoObj = {
      value: todo,
      checked: false,
    };

    setTodoList([...todoList, todoObj]);
  };

  const handleCheckTodo = (changedIndex) => {
    setTodoList(
      todoList.map((todo, index) =>
        index === changedIndex ? { ...todo, checked: !todo.checked } : todo
      )
    );
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
                <S.TodoItem>
                  <S.TodoLabel>
                    <S.TodoCheckbox
                      defaultChecked={todo.checked}
                      onChange={() => handleCheckTodo(index)}
                    />
                  </S.TodoLabel>
                  <S.TodoTitle checked={todo.checked}>{todo.value}</S.TodoTitle>
                </S.TodoItem>
              </S.Li>
            ))}
          </S.Ol>
          <S.TodoFooter>
            <S.TodoInput onKeyPress={handlePressEnter} />
          </S.TodoFooter>
        </S.Dropdown>
      </S.DropdownWrapper>
      <S.TodoToggle onClick={handleClickTodoToggle}>Todo</S.TodoToggle>
    </S.TodoContainer>
  );
};

export default Todo;
