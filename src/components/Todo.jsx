import React, { useState } from "react";
import * as S from "./Todo.style";

const Todo = () => {
  const DISPLAY_BLOCK = "block";
  const DISPLAY_NONE = "none";

  const [todoToggle, setTodoToggle] = useState(false);

  const handleClickTodoToggle = () => {
    setTodoToggle(!todoToggle);
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
            <S.Li>
              <S.TodoItem>
                <S.TodoLabel>
                  <S.TodoCheckbox />
                </S.TodoLabel>
                <S.TodoTitle>item</S.TodoTitle>
              </S.TodoItem>
            </S.Li>
            <S.Li>
              <S.TodoItem>
                <S.TodoLabel>
                  <S.TodoCheckbox />
                </S.TodoLabel>
                <S.TodoTitle>item</S.TodoTitle>
              </S.TodoItem>
            </S.Li>
            <S.Li>
              <S.TodoItem>
                <S.TodoLabel>
                  <S.TodoCheckbox />
                </S.TodoLabel>
                <S.TodoTitle>item</S.TodoTitle>
              </S.TodoItem>
            </S.Li>
          </S.Ol>
          <S.TodoFooter>
            <S.TodoInput />
          </S.TodoFooter>
        </S.Dropdown>
      </S.DropdownWrapper>
      <S.TodoToggle onClick={handleClickTodoToggle}>Todo</S.TodoToggle>
    </S.TodoContainer>
  );
};

export default Todo;
