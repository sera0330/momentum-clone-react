import styled from "styled-components";

export const Wrapper = styled.div`
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
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Between = styled.div`
  flex: 1 1 50%;
  display: flex;
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

export const FocusOuterWrapper = styled.div`
  width: 100%;
`;

export const FocusContainer = styled.div`
  width: 100%;
  position: relative;
  vertical-align: top;
`;

export const FocusWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Prompt = styled.div`
  padding-bottom: 0.5em;
  max-width: 87.5%;
`;
