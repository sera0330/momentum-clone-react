import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  padding: 0 15px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 60px;
`;

export const Icon = styled.div`
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
