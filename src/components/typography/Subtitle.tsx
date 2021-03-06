import styled from 'styled-components';

interface SubtitleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fontWeight?: 'semi-bold';
    fontSize?: 'medium';
    color?: string;
}

//PATINHO FEIO
function getFontSize(size?: string) {
    console.log({size})
    switch (size) {
      case "undefined-mobile":
        return "12px";
      case "medium":
      default:
        return "24px";
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
    color: ${({color}) =>  color || '#1E2A32'};
    font-family: 'Work Sans', sans-serif;
    display: inline;

    @media screen and (max-width: 593px){
        font-size: ${({fontSize}) => getFontSize(`${fontSize}-mobile`)};
    }
`


export default Subtitle;