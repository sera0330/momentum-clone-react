import styled from "styled-components";

export const FocusContainer = styled.div`
  position: relative;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0 40px;
  top: -8px;
  width: 100%;
`;

export const FocusTitle = styled.h3`
  margin: 17px 0 3px;
  font-size: 100%;
  line-height: 120%;
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColor};
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const FocusContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FocusText = styled.span`
  color: ${(props) => props.theme.fontColor};
  text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  opacity: ${(props) => (props.checked ? 0.7 : 1)};
`;

export const OpacitySpan = styled.span`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.75;
  font-size: 130%;
  line-height: 1.2;
  margin: 0 10px;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${FocusContent}:hover & {
    display: flex;
  }
`;

export const SideDiv = styled.div`
  flex: 1 0 50px;
  display: inline-flex;
  align-items: center;
  justify-content: ${(props) =>
    props.side === "left" ? "flex-end" : "flex-start"};
`;

export const MoreContainer = styled.div`
  position: relative;
  display: flex;
`;

export const MoreIconWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  top: 100%;
  z-index: 100;
  text-align: left;
  background: ${(props) => props.theme.appBackground};
  border-radius: 5px;
  box-shadow: 0 1px 8px rgb(0 0 0 / 25%);
  transition: transform 0.25s ease, height 0.25s ease;

  :before {
    content: "";
    position: absolute;
    top: -10px;
    left: 25%;
    transform: translateX(-50%);
    z-index: 1;
    border: 5px solid;
    border-color: transparent transparent
      ${(props) => props.theme.appBackground} transparent;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 6px 0;
  position: relative;
  z-index: 0;
  transition: transform 0.25s ease, height 0.25s ease;
  color: ${(props) => props.theme.appFontColor};
`;

export const Li = styled.li`
  max-width: 280px;
  padding: 6px calc(21px - 6px);
  display: flex;
  align-items: center;
  position: relative;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.appBackgroundHover};
  }
`;

// FocusAsk
export const FocusAsk = styled.div`
  position: relative;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0 40px;
  top: -8px;
`;

// FocusDropdownItem
export const ItemContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;

export const ItemIconWrapper = styled.div`
  width: 15px;
  margin-left: -1px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;
