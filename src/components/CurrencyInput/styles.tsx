import styled from "styled-components";

const CurrencyInputWrapper = styled.div`
  border: solid 1px black;
  display: flex;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  overflow: hidden;
  :focus{
    outline: 4px solid black;
    border: 4px solid red;
  }
  .preffix-container{
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
    color: #4d6475;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    padding: 15px;
    height: 100%;
    :focus{
      outline: none;
    }
  }


`;

export default CurrencyInputWrapper;
