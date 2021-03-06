import styled from "styled-components";

function getFontSize(size?: string) {
  switch (size) {
    case "medium-mobile":
      return "15px";
    case "medium":
      return "32px";
    case "small":
    default:
      return "24px";
  }
}

interface HeadingSmallProps {
  size?: 'medium' | 'small';
  color?: string;
}

const HeadingSmall = styled.h3<HeadingSmallProps>`
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color, theme }) => color || theme.bluegrayDark};
  font-family: "Rubik", sans-serif;
  display: inline;
  font-weight: 500;

  @media screen and (max-width: 593px){
    font-size: ${({ size }) => getFontSize(`${size}-mobile`)};
  }
`;

export default HeadingSmall;
