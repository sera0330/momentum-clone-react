import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 11px 20px 10px 10px;
  text-align: right;
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const Temperature = styled.span`
  font-size: 1.625rem;
  font-weight: 400;
`;

export const Description = styled.span`
  opacity: 0.85;
  font-size: 0.8125rem;
  line-height: 1.2;
`;

export const Location = styled.span`
  opacity: 0.85;
  font-size: 0.8125rem;
  line-height: 1.2;
`;
