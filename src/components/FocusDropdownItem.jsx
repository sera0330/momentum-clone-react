import React from "react";
import styled from "styled-components";
import { ROLE_ADD, ROLE_CLEAR, ROLE_EDIT } from "../constants/etc";
import { CgClose, CgMathPlus, CgMoreAlt } from "react-icons/cg";
import { RiPencilFill } from "react-icons/ri";

const LABEL_NEW = "New";
const LABEL_EDIT = "Edit";
const LABEL_CLEAR = "Clear";

const ItemContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;

const ItemIconWrapper = styled.div`
  width: 15px;
  margin-left: -1px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;

const FocusDropdownItem = ({ role, setFocus, clearFocus }) => {
  const handleClickClear = () => {
    clearFocus();
  };

  const handleClickEdit = () => {
    setFocus("");
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
    <ItemContainer
      onClick={role === ROLE_EDIT ? handleClickEdit : handleClickClear}
    >
      <ItemIconWrapper>{icon}</ItemIconWrapper>
      <span>{label}</span>
    </ItemContainer>
  );
};

export default FocusDropdownItem;
