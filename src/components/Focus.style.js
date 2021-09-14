import styled from "styled-components";

export const StyledFocus = styled.div`
  display: flex;
  justify-content: center;
`;

export const FocusText = styled.span`
  color: #fff;
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
  color: #fff;
  opacity: 0.75;
  font-size: 130%;
  line-height: 1.2;
  margin: 0 10px;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${StyledFocus}:hover & {
    display: flex;
  }
`;

export const SideDiv = styled.div`
  justify-content: center;
  flex: 1 0 50px;
  display: inline-flex;
  align-items: center;
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
  background: #fff;
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
    border-color: transparent transparent #fff transparent;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 6px 0;
  position: relative;
  z-index: 0;
  transition: transform 0.25s ease, height 0.25s ease;
  color: #222;
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
    background: #ededed;
  }
`;

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
