import screenSizes from "constants/screenSizes";
import styled from "styled-components";

function getFontSize(size?: string) {
  switch (size) {
    case "medium-mobile":
      return "0.9375rem";
    case "medium":
      return "2rem";
    case "small":
    default:
      return "1.5rem";
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

  @media screen and (max-width: ${screenSizes.MOBILE}){
    font-size: ${({ size }) => getFontSize(`${size}-mobile`)};
  }
`;

export default HeadingSmall;
