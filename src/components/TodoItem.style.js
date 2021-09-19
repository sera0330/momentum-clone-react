import styled from "styled-components";

export const TodoItem = styled.span`
  padding: 6px 0;
  display: flex;
  align-items: center;

  &:hover {
    background: #ededed;
  }
`;

export const TodoLabel = styled.label`
  // padding-left: var(--app-padding);
  padding-left: 21px;
  padding-right: 8px;
  position: relative;
  top: 1px;
  z-index: 10;
  display: flex;
  opacity: 1;
  font-size: 1rem;
`;

export const TodoCheckboxWrapper = styled.div`
  display: flex;
  opacity: 0.5;
`;

export const TodoCheckbox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  display: none;
`;

export const TodoTitle = styled.span.attrs((props) =>
  props.editable
    ? {
        contentEditable: true,
        suppressContentEditableWarning: true,
      }
    : { contentEditable: false, suppressContentEditableWarning: false }
)`
  display: block;
  cursor: default;
  outline: 0;
  word-wrap: break-word;
  flex: 1 1 auto;
  min-width: 0;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  opacity: ${(props) => (props.checked ? "0.5" : "1")};
`;

export const TodoControl = styled.div`
  display: none;
  padding-right: 21px;
  position: relative;
  top: 1px;

  ${TodoItem}:hover & {
    display: flex;
  }
`;

export const IconWrapper = styled.div`
  width: 15px;
  margin-left: -1px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;
