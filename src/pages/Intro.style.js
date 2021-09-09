import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled(FlexBox)`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const MiddleWrapper = styled(Wrapper)`
  justify-content: center;
  z-index: 3;
`;

export const IntroWrapper = styled(FlexBox)`
  max-width: 100%;
  padding: 0 40px;
  position: relative;
  top: -8px;
`;
