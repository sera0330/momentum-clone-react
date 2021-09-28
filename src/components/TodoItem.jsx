import React, { useRef } from "react";
import * as S from "./TodoItem.style";
import { KEY_ENTER } from "../constants/etc";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { RiPencilFill } from "react-icons/ri";

const TodoItem = ({ todoItem, itemIndex, todoList, setTodoList }) => {
  const todoTitleRef = useRef();

  const handleCheckTodo = (changedIndex) => {
    setTodoList(
      todoList.map((todo, index) =>
        index === changedIndex ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handelClickEdit = (editableIndex) => {
    // edit 모드로 전환
    setTodoList(
      todoList.map((todo, index) =>
        index === editableIndex ? { ...todo, editable: true } : todo
      )
    );
  };

  const handleEnterEdit = (event, editedIndex) => {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      updateTodo(event, editedIndex);
    }
  };

  const handleBlurEdit = (event, editedIndex) => {
    updateTodo(event, editedIndex);
  };

  const updateTodo = (event, editedIndex) => {
    setTodoList(
      todoList.map((todo, index) =>
        index === editedIndex
          ? { ...todo, value: event.target.innerHTML, editable: false }
          : todo
      )
    );
  };

  const handelClickDelete = (clickedIndex) => {
    setTodoList(todoList.filter((todo, index) => index !== clickedIndex));
  };

  return (
    <S.TodoItem>
      <S.TodoLabel>
        <S.TodoCheckboxWrapper>
          <S.TodoCheckbox
            defaultChecked={todoItem.checked}
            onChange={() => handleCheckTodo(itemIndex)}
          />
          {todoItem.checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline />}
        </S.TodoCheckboxWrapper>
      </S.TodoLabel>
      <S.TodoTitle
        isChecked={todoItem.checked}
        editable={todoItem.editable}
        onKeyPress={(event) => handleEnterEdit(event, itemIndex)}
        onBlur={(event) => handleBlurEdit(event, itemIndex)}
        ref={todoTitleRef}
      >
        {todoItem.value}
      </S.TodoTitle>
      <S.TodoControl>
        <S.IconWrapper onClick={() => handelClickEdit(itemIndex)} title="Edit">
          <RiPencilFill />
        </S.IconWrapper>
        <S.IconWrapper
          onClick={() => handelClickDelete(itemIndex)}
          title="Delete"
        >
          <CgClose />
        </S.IconWrapper>
      </S.TodoControl>
    </S.TodoItem>
  );
};

export default TodoItem;
