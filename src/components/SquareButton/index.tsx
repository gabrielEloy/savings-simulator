import styled from "styled-components";

const SquareButton = styled.button`
  color: ${({ theme }) => theme.bradColorSecundary};
  background: ${({ theme }) => theme.secondaryGray};
  border-radius: 8px;
  text-transform: uppercase;
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  padding: 13px 0;
  width: 100%;
  cursor: pointer;
  border: none;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 0px #ffffff, 0 0 3px 5px #1b30a847;
  }
`;

export default SquareButton;
