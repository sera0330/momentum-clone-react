import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { focusEditModeOn, clearFocus } from "./focusSlice";
import * as S from "./Focus.style";
import { ROLE_ADD, ROLE_CLEAR, ROLE_EDIT } from "../../constants/etc";
import { CgClose, CgMathPlus } from "react-icons/cg";
import { RiPencilFill } from "react-icons/ri";

const LABEL_NEW = "New";
const LABEL_EDIT = "Edit";
const LABEL_CLEAR = "Clear";

const FocusDropdownItem = ({ role }) => {
  const dispatch = useDispatch();

  const handleClickClear = () => {
    dispatch(clearFocus());
  };

  const handleClickEdit = () => {
    dispatch(focusEditModeOn());
  };

  const icon = useRef();
  const label = useRef();

  if (role === ROLE_ADD) {
    icon.current = <CgMathPlus />;
    label.current = LABEL_NEW;
  } else if (role === ROLE_CLEAR) {
    icon.current = <CgClose />;
    label.current = LABEL_CLEAR;
  } else if (role === ROLE_EDIT) {
    icon.current = <RiPencilFill />;
    label.current = LABEL_EDIT;
  }

  return (
    <S.ItemContainer
      onClick={role === ROLE_EDIT ? handleClickEdit : handleClickClear}
    >
      <S.ItemIconWrapper>{icon.current}</S.ItemIconWrapper>
      <span>{label.current}</span>
    </S.ItemContainer>
  );
};

export default FocusDropdownItem;
