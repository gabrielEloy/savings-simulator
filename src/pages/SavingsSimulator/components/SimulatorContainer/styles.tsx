import screenSizes from "constants/screenSizes";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 11.25rem);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  .simulator-container {
    background: white;
    width: 35rem;
    min-height: 31.9375rem;
    align-self: center;
    justify-self: center;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 2.1875rem 2.5rem 2.5rem 2.5rem;
    box-shadow: 0 1rem 2rem rgba(30, 42, 50, 0.08);

    .title {
      display: flex;
      margin-bottom: 1.75rem;
      .text {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .header-text {
          margin-bottom: 0.625rem;
        }
      }

      svg {
        width: 5rem;
      }
    }

    .data-inputs {
      display: flex;
      .total {
        flex: 6;
      }

      .months {
        flex: 4;
        margin-left: 1rem;
      }
    }

    .monthly-amount-container {
      margin-top: 1.5rem;
      border: 1px solid ${({theme}) => theme.border};
      border-radius: 8px;
      overflow: hidden;

      .values {
        padding: 1.5rem 2rem 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .desc {
        background: ${({ theme }) => theme.background};
        padding: 1.625rem 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }

    .confirm-button-container {
      margin-top: 1.75rem;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: ${screenSizes.MOBILE}) {
    min-height: calc(100vh - 3.5rem);
    .simulator-container {
      width: 100%;
      min-width: unset;
      margin-bottom: 3.9375rem;
      .data-inputs {
        flex-direction: column;
        .months {
          margin: 1rem 0 0 0;
        }
      }

      .monthly-amount-container {
        .values {
          padding: 1.6875rem 1.5rem 1.5625rem 1.5rem;
        }
      }
    }
  }
`;


export default Wrapper;