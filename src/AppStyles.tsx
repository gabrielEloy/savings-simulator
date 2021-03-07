import styled from "styled-components";

const Wrapper = styled.div`
  .subtitle{
    display: block;
    text-align: center;
    padding: 48px 0 24px 0;
  }
  

  @media screen and (max-width: 593px) {
    .subtitle{
      display: block;
      margin-bottom: 20px;
      font-size: 18px !important;
      text-align: center;
    }
  }
`;

export default Wrapper;
