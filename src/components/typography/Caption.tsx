import styled from 'styled-components';

interface ICaption{
    fontSize?: string;
    color?: string;
}


const Caption = styled.span<ICaption>`
color: ${({color, theme}) => color || theme.bluegrayDark};
font-size: ${({fontSize}) => fontSize || '0.75rem'};
font-weight: 400;
font-family: 'Work Sans', sans-serif;
`



export default Caption;