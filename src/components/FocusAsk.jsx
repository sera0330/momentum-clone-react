import React from "react";
import * as S from "./Focus.style";
import Span from "./Span";
import TextInput from "./TextInput";
import { MSG_ASK_FOCUS } from "../constants/message";
import {
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  CHECKED_FALSE,
} from "../constants/localStorage";

const FocusAsk = ({ setFocus }) => {
  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      initFocus(event.target.value);
    }
  };

  const initFocus = (input) => {
    setFocus(input);
    localStorage.setItem(LS_FOCUS_CHECKED, CHECKED_FALSE);
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
