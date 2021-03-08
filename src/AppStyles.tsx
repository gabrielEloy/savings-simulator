import styled from "styled-components";
import screensizes from 'constants/screenSizes';

const Wrapper = styled.div`
  .subtitle{
    display: block;
    text-align: center;
    padding: 3rem 0 1.5rem 0;
  }
  

  @media screen and (max-width: ${screensizes.MOBILE}) {
    h2.subtitle{
      display: block;
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      text-align: center;
    }
  }
`;

export default Wrapper;
