import styled from 'styled-components';

const PillButton = styled.button`
color: white;
background: #1B31A8 ;
border-radius: 32px;
font-family: 'Work Sans', sans-serif;
font-size: 16px;
padding: 18px;
width: 100%;
cursor: pointer;
border: none;
font-weight: 600;

:focus, :hover{
    outline: none;
    box-shadow: 0 0 0 0px #ffffff, 0 0 3px 5px #1b30a847;
}
`

export default PillButton;