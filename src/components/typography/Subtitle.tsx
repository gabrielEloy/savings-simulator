import screenSizes from 'constants/screenSizes';
import styled from 'styled-components';

interface SubtitleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fontWeight?: 'semi-bold';
    fontSize?: 'medium';
    color?: string;
}

function getFontSize(size: string = 'medium') {
    switch (size) {
      case "medium-mobile":
        return "0.75rem";
      case "medium":
      default:
        return "1.5rem";
    }
  }


function getFontWeight(weight?: string){
    switch(weight){
        case 'semi-bold':
            return 600;
        default:
            return 400;
    }
}

const Subtitle = styled.h2<SubtitleProps>`
    font-weight: ${({fontWeight}) => getFontWeight(fontWeight)};
    font-size: ${({fontSize}) => getFontSize(fontSize)};
    color: ${({ color, theme }) => color || theme.bluegrayDark};
    font-family: 'Work Sans', sans-serif;
    display: inline;

    @media screen and (max-width: ${screenSizes.MOBILE}){
        font-size: ${({fontSize = 'medium'}) => getFontSize(`${fontSize}-mobile`)};
    }
`


export default Subtitle;