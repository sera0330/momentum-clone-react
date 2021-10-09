import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { editModeTodo, updateTodo, removeTodo, checkTodo } from "./todosSlice";
import * as S from "./TodoItem.style";
import { KEY_ENTER } from "../../constants/etc";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { RiPencilFill } from "react-icons/ri";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const todoTitleRef = useRef();

  const handleCheckTodo = (id) => {
    dispatch(checkTodo(id));
  };

  const handelClickEdit = (id) => {
    dispatch(editModeTodo(id));
  };

  const handleKeyPressEnter = (event, id) => {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      editTodo(event, id);
    }
  };

  const handleBlurEdit = (event, id) => {
    editTodo(event, id);
  };

  const editTodo = (event, id) => {
    const todoObj = {
      id: id,
      value: event.target.innerHTML,
    };

    dispatch(updateTodo(todoObj));
  };

  const handelClickRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <S.TodoItem>
      <S.TodoLabel>
        <S.TodoCheckboxWrapper>
          <S.TodoCheckbox
            defaultChecked={todoItem.checked}
            onChange={() => handleCheckTodo(todoItem.id)}
          />
          {todoItem.checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline />}
        </S.TodoCheckboxWrapper>
      </S.TodoLabel>
      <S.TodoTitle
        isChecked={todoItem.checked}
        editable={todoItem.editable}
        onKeyPress={(event) => handleKeyPressEnter(event, todoItem.id)}
        onBlur={(event) => handleBlurEdit(event, todoItem.id)}
        ref={todoTitleRef}
      >
        {todoItem.value}
      </S.TodoTitle>
      <S.TodoControl>
        <S.IconWrapper
          onClick={() => handelClickEdit(todoItem.id)}
          title="Edit"
        >
          <RiPencilFill />
        </S.IconWrapper>
        <S.IconWrapper
          onClick={() => handelClickRemove(todoItem.id)}
          title="Remove"
        >
          <CgClose />
        </S.IconWrapper>
      </S.TodoControl>
    </S.TodoItem>
  );
};

export default TodoItem;
