import styled from "styled-components";

const PillButton = styled.button`
  color: white;
  background: ${({ theme }) => theme.brandColorPrimary};
  border-radius: 32px;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  padding: 18px 0;
  padding-inline: clamp(5.75em,128px,128px);
  cursor: pointer;
  border: none;
  font-weight: 600;

  :focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 0px #ffffff, 0 0 3px 5px #1b30a847;
  }
`;

export default PillButton;
