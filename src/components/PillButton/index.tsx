import screenSizes from "constants/screenSizes";
import styled from "styled-components";

const PillButton = styled.button`
  color: white;
  background: ${({ theme }) => theme.brandColorPrimary};
  border-radius: 2rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  padding: 1.125rem 0;
  width: 100%;
  cursor: pointer;
  border: none;
  font-weight: 600;

  :focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 0px #ffffff, 0 0 3px 5px #1b30a847;
  }

  @media screen and (max-width: ${screenSizes.MOBILE_SMALL}){
    padding: 1.125rem 4rem;
  }
`;

export default PillButton;
