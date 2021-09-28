import styled, { css } from "styled-components";

export const Quote = styled.div`
  position: relative;
  height: 58px;
  width: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
  text-align: center;
  box-sizing: content-box;
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const QuoteCopied = styled.span`
  display: block;
  position: relative;
  margin-bottom: 5px;
  font-size: 0.5rem;
  color: white;
  line-height: 1;
  visibility: hidden;
  opacity: 0;
  transition-duration: 250ms;
  transition-property: visibility, opacity;

  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      opacity: 0.7;
    `}
`;

export const QuoteContent = styled.span`
  display: block;
  position: relative;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.2;
`;

export const QuoteAuthor = styled.span`
  display: block;
  position: relative;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
`;
