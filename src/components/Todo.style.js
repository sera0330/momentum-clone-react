import styled, { css } from "styled-components";

export const TodoContainer = styled.div`
  display: inline-block;
  position: relative;
  text-align: right;
`;

export const TodoToggle = styled.span`
  display: inline-block;
  padding: 0 15px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  font-weight: 500;
  line-height: 60px;
  padding-right: 20px;

  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const DropdownWrapper = styled.div`
  display: block;
  position: relative;
`;

export const Dropdown = styled.div`
  display: block;
  position: absolute;
  width: 320px;
  text-align: left;
  bottom: 0;
  right: 7px;
  max-height: 100vh;
  max-width: 100vw;
  min-width: 200px;
  background: ${(props) => props.theme.appBackground};
  border-radius: 5px;
  box-shadow: 0 1px 8px rgb(0 0 0 / 25%);
  visibility: hidden;
  opacity: 0;
  transition-duration: 250ms;
  transition-property: visibility, opacity;
  transition-timing-function: ease-out;

  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      opacity: 0.9;
    `}

  :before {
    content: "";
    position: absolute;
    bottom: -16px;
    right: 25px;
    z-index: 1;
    border: 8px solid;
    border-color: ${(props) => props.theme.appBackground} transparent
      transparent transparent;
  }
`;

export const TodoHeader = styled.div`
  height: 50px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.appFontColor};
`;

export const HeaderTitleWrapper = styled.div`
  min-width: 0;
  padding-top: 7px;
  padding-left: 21px;
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
`;

export const TodoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
`;

export const TodoInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "New Todo",
}))`
  width: 100%;
  --app-padding: 21px;
  padding: 7px var(--app-padding) calc(var(--app-padding) - 3px);
  display: block;
  border: none;
  font-size: 1rem;
  opacity: 0.75;
  overflow: hidden;

  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-radius: 0;
  outline: 0;
  background: 0 0;
  color: ${(props) => props.theme.appFontColor};
`;

export const Ol = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity 0.2s ease;
`;

export const Li = styled.li`
  width: 100%;
  display: inline-block;
  visibility: visible;
  opacity: 1;
  position: relative;
  font-size: 1rem;
  line-height: 1.1875;
`;
