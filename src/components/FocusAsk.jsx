import React from "react";
import styled from "styled-components";
import Span from "./Span";
import TextInput from "./TextInput";
import { askFocus } from "../constants/message";
import {
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  CHECKED_FALSE,
} from "../constants/localStorage";

const StyledFocusAsk = styled.div`
  position: relative;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0 40px;
  top: -8px;
`;

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
    <StyledFocusAsk>
      <Span size="2.1875em" weight="400" text={askFocus} />
      <TextInput
        size="2.25em"
        defaultValue={localStorage.getItem(LS_FOCUS)}
        onKeyPress={handleEnterKeyPress}
      />
    </StyledFocusAsk>
  );
};

export default FocusAsk;
