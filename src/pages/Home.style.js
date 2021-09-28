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
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 188px;
`;

export const BottomCenter = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

export const BottomRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  // flex: 0 0 var(--bottom-side-width);
  flex: 0 0 188px;
`;
