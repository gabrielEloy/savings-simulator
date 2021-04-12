import styled from "styled-components";

const SavingCardWrapper = styled.div`
  width: 320px;
  height: 248px;
  border-radius: 8px;
  background: ${({theme}) => theme.cardBackground};
  box-shadow: 0px 8px 24px rgba(30, 42, 50, 0.08);
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .saving-desc{
    margin-top: 56px;
    .icon{
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
    }
  }


  .edit{
    margin-left: 4px;
  }
  .saving-desc.has-goal{
    margin-top: 24px;
  }
  .setup-goal-button{
    margin-top: 56px;
    margin-bottom: 24px;
    padding: 10px 0;
  }

  .edit-goal-button{
    margin-bottom: 24px;
  }

  .goal-preview{
    margin: 8px 0 16px 0;
  }
`;

export default SavingCardWrapper;
