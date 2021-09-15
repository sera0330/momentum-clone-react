import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const TodoToggle = styled.span`
  padding: 0 15px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 60px;
  // padding-right: var(--dash-side-margin);
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
