import styled from "styled-components";

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
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
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
