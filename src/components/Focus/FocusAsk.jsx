import React from "react";
import { useDispatch } from "react-redux";
import { setFocus } from "./focusSlice";
import * as S from "./Focus.style";
import Span from "../Common/Span";
import TextInput from "../Common/TextInput";
import { MSG_ASK_FOCUS } from "../../constants/message";
import { LS_FOCUS } from "../../constants/localStorage";

const FocusAsk = () => {
  const dispatch = useDispatch();

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(setFocus(event.target.value));
    }
  };

  return (
    <S.FocusAsk>
      <Span size="2.1875em" weight="400" text={MSG_ASK_FOCUS} />
      <TextInput
        size="2.25em"
        defaultValue={localStorage.getItem(LS_FOCUS)}
        onKeyPress={handleEnterKeyPress}
      />
    </S.FocusAsk>
  );
};

export default FocusAsk;
