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

export const FocusContainer = styled.div`
  position: relative;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0 40px;
  top: -8px;
`;

export const H3 = styled.h3`
  margin: 17px 0 3px;
  font-size: 100%;
  line-height: 120%;
  text-transform: uppercase;
  color: #fff;
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const Footer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
