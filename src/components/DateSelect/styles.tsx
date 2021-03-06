import styled from "styled-components";

const DateSelectWraper = styled.div`
  min-width: 190px;
  .label {
    margin-bottom: 10px;
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
      :focus {
        outline: none;
      }
    }
    .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      flex: 3;
      border: none;
      padding: 11px 25px;    
    }

  }

  :focus{
    outline: none;
      
    .label{
      color: #0079FF;
      transition: .3s;
    }
    

  }
`;

export default DateSelectWraper;
