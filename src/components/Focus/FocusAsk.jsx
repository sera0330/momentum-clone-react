import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFocus } from "./focusSlice";
import * as S from "./Focus.style";
import Span from "../Common/Span";
import TextInput from "../Common/TextInput";
import { MSG_ASK_FOCUS } from "../../constants/message";
import { KEY_ENTER } from "../../constants/etc";

const FocusAsk = () => {
  const focus = useSelector((state) => state.focus.value);
  const dispatch = useDispatch();

  const handleEnterKeyPress = (event) => {
    if (event.key === KEY_ENTER) {
      dispatch(setFocus(event.target.value));
    }
  };

  return (
    <S.FocusAsk>
      <Span size="2.1875em" weight="400" text={MSG_ASK_FOCUS} />
      <TextInput
        size="2.25em"
        defaultValue={focus}
        onKeyPress={handleEnterKeyPress}
      />
    </S.FocusAsk>
  );
};

export default FocusAsk;
