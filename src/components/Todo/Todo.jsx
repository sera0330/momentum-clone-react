import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import * as S from "./Todo.style";
import TodoItem from "./TodoItem";
import { KEY_ENTER } from "../../constants/etc";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [visible, setVisible] = useState(false);

  const handleClickTodoToggle = () => {
    setVisible(!visible);
  };

  const handleEnterAdd = (event) => {
    if (event.key === KEY_ENTER) {
      addNewTodo(event.target.value);
      event.target.value = ""; // clear input
    }
  };

  const addNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <S.TodoContainer>
      <S.DropdownWrapper>
        <S.Dropdown visible={visible}>
          <S.TodoHeader>
            <S.HeaderTitleWrapper>
              <S.HeaderTitle>Today</S.HeaderTitle>
            </S.HeaderTitleWrapper>
          </S.TodoHeader>
          <S.Ol>
            {todos.map((todo, index) => (
              <S.Li key={index}>
                <TodoItem todoItem={todo} />
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
