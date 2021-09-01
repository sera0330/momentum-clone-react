
import React from "react";
import styled from "styled-components";

const TextInput = ({ size, onKeyPress }) => {
  const TextInput = styled.input.attrs(props => ({
    type: "text",
  }))`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #fff;
    background-color: transparent;
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-size: ${props => props.size};
    &:hover, &:focus {
      outline: none;
    }
  `

  return (
    <TextInput size={size} onKeyPress={onKeyPress} />
  );
}

export default TextInput;