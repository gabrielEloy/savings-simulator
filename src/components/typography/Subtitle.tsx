import styled from 'styled-components';

interface SubtitleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fontWeight?: 'semi-bold';
    color?: string;
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
    font-size: 24px;
    color: ${({color}) =>  color || '#1E2A32'};
    font-family: 'Work Sans', sans-serif;
    display: inline;
`


export default Subtitle;