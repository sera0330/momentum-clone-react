import React from "react";
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

  let icon, label;

  if (role === ROLE_ADD) {
    icon = <CgMathPlus />;
    label = LABEL_NEW;
  } else if (role === ROLE_CLEAR) {
    icon = <CgClose />;
    label = LABEL_CLEAR;
  } else if (role === ROLE_EDIT) {
    icon = <RiPencilFill />;
    label = LABEL_EDIT;
  }

  return (
    <S.ItemContainer
      onClick={role === ROLE_EDIT ? handleClickEdit : handleClickClear}
    >
      <S.ItemIconWrapper>{icon}</S.ItemIconWrapper>
      <span>{label}</span>
    </S.ItemContainer>
  );
};

export default FocusDropdownItem;
