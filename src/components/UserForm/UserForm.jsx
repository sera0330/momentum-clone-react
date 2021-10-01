import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import * as S from "./UserForm.style";
import Span from "../Common/Span";
import TextInput from "../Common/TextInput";
import { MSG_ASK_NAME } from "../../constants/message";
import { KEY_ENTER } from "../../constants/etc";

const UserForm = () => {
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === KEY_ENTER) {
      dispatch(setUser(event.target.value));
    }
  };

  return (
    <S.UserForm>
      <Span size="300%" weight="500" text={MSG_ASK_NAME} />
      <TextInput size="270%" onKeyPress={handleKeyPress} />
    </S.UserForm>
  );
};

export default UserForm;
