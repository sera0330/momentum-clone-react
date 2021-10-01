import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { editModeTodo, updateTodo, removeTodo, checkTodo } from "./todosSlice";
import * as S from "./TodoItem.style";
import { KEY_ENTER } from "../../constants/etc";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { RiPencilFill } from "react-icons/ri";

const TodoItem = ({ todoItem, itemIndex }) => {
  const dispatch = useDispatch();
  const todoTitleRef = useRef();

  const handleCheckTodo = (index) => {
    dispatch(checkTodo(index));
  };

  const handelClickEdit = (index) => {
    dispatch(editModeTodo(index));
  };

  const handleEnterEdit = (event, index) => {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      editTodo(event, index);
    }
  };

  const handleBlurEdit = (event, index) => {
    editTodo(event, index);
  };

  const editTodo = (event, index) => {
    const todoObj = {
      index: index,
      value: event.target.innerHTML,
    };

    dispatch(updateTodo(todoObj));
  };

  const handelClickRemove = (index) => {
    dispatch(removeTodo(index));
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
          onClick={() => handelClickRemove(itemIndex)}
          title="Delete"
        >
          <CgClose />
        </S.IconWrapper>
      </S.TodoControl>
    </S.TodoItem>
  );
};

export default TodoItem;
