import React from "react";
import styled from "styled-components";

const Span = ({ text, size }) => {
  const Span = styled.span`
    color: #fff;
    text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
    font-size: ${props => props.size};
    font-weight: 400;
    cursor: default;
    padding-bottom: 15px;
  `
  return (
    <Span size={size}>{text}</Span>
  );
}

export default Span;