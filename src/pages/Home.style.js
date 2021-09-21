import styled from "styled-components";

export const HomeContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  // justify-content: space-between;
  justify-content: flex-end;
`;

export const Between = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0 40px;
  position: relative;
`;

export const Footer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const BottomLeft = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 0 0 188px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 0;
  flex: 1 1 auto;
`;

export const BottomRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  // flex: 0 0 var(--bottom-side-width);
  flex: 0 0 188px;
`;

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
