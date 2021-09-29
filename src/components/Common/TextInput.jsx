import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input.attrs((props) => ({
  type: "text",
  defaultValue: props.defaultValue,
}))`
  width: 100%;
  padding-top: 4px;
  border: 0;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: ${(props) => props.size};

  &:hover,
  &:focus {
    outline: none;
  }
`;

const TextInput = ({ size, onKeyPress, defaultValue }) => {
  return (
    <StyledTextInput
      size={size}
      onKeyPress={onKeyPress}
      defaultValue={defaultValue}
    />
  );
};

export default TextInput;
