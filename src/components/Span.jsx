import styled from "styled-components";

const StyledSpan = styled.span`
  color: #fff;
  text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  cursor: default;
  font-family: -apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`

const Span = ({ text, size, weight }) => {
  return (
    <StyledSpan size={size} weight={weight}>{text}</StyledSpan>
  );
}

export default Span;