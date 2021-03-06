import styled from "styled-components";

const CurrencyInputWrapper = styled.div`
  width: 100%;
  .label{
    margin-bottom: 10px;
    display: block;
  }
  
  .input-container {
    border: solid 1px black;
    display: flex;
    border: 1px solid #e9eef2;
    border-radius: 4px;
    overflow: hidden;
    .preffix-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;
      font-size: 24px;
    }
    input {
      border: none;
      width: 100%;
      font-size: 24px;
      color: ${({theme}) => theme.blueGrayLight};
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      padding: 15px;
      height: 100%;
      :focus {
        outline: none;
      }
    }
  }

  :focus-within{
    .label{
      color: ${({theme}) => theme.bradColorSecundary};
      transition: .3s;
    }
  }
`;

export default CurrencyInputWrapper;
