import styled from "styled-components";

const DateSelectWraper = styled.div`
  min-width: 11.875rem;
  .label {
    margin-bottom: 0.625rem;
    display: block;
  }
  .date-selector-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #e9eef2;
    border-radius: 4px;
    overflow: hidden;
    .controls {
      flex: 1;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      cursor: pointer;
      :disabled{
        opacity: .6;
        cursor: default;
        :hover{
          fill: red;
        }
      }

      :focus, :hover:not([disabled]){
        outline: none;
        path{
          fill: ${({theme}) => theme.bradColorSecundary};
          transition: .3s;
        }
      } 
    }
    .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      flex: 3;
      border: none;
      padding: 0.6875rem 0;
    }

  }

  :focus-within{
    outline: none;
      
    .label{
      color: ${({theme}) => theme.bradColorSecundary};
      transition: .3s;
    }
  
  }
`;

export default DateSelectWraper;
