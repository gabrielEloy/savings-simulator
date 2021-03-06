import styled from "styled-components";

interface ParagraphProps {
    fontWeight?: 'semi-bold';
    color?: string;
}

function getFontWeight(weight?: string) {
  switch (weight) {
    case "semi-bold":
      return 600;
    default:
      return 400;
  }
}

const Paragraph = styled.p<ParagraphProps>`
  color: ${({color}) =>  color || '#708797'};
  font-size: 16px;
  font-weight: ${({fontWeight}) => getFontWeight(fontWeight)};
`;

export default Paragraph;
