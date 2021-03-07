import styled from "styled-components";

const Wrapper = styled.div`
  .subtitle{
    display: block;
    text-align: center;
    padding: 48px 0 24px 0;
  }
  .content {
    display: flex;
    min-height: calc(100vh - 176px);
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    .simulator-container {
      background: white;
      min-width: 560px;
      min-height: 511px;
      align-self: center;
      justify-self: center;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 35px 40px 40px 40px;
      box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);

      .title {
        display: flex;
        margin-bottom: 28px;
        .text {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .header-text {
            margin-bottom: 10px;
          }
        }

        img {
          width: 80px;
        }
      }

      .data-inputs {
        display: flex;
        .total {
          flex: 6;
        }

        .months {
          flex: 4;
          margin-left: 16px;
        }
      }

      .montly-amout-container {
        margin-top: 24px;
        border: 1px solid #e9eef2;
        border-radius: 8px;
        overflow: hidden;

        .values {
          padding: 24px 32px 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desc {
          background: ${({theme}) => theme.background};
          padding: 26px 32px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }

      .confirm-button-container {
        margin-top: 28px;
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 593px) {
    .subtitle{
      display: block;
      margin-bottom: 20px;
      font-size: 18px !important;
      text-align: center;
    }
    .content {
      min-height: calc(100vh - 56px);
      .simulator-container {
        width: 100%;
        min-width: unset;
        margin-bottom: 63px;
        .data-inputs {
          flex-direction: column;
          .months {
            margin: 16px 0 0 0;
          }
        }

        .montly-amout-container{
          .values{
            padding: 27px 24px 25px 24px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
