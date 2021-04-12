import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(272px, 320px));
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: space-between;
`;

const SavingsListWrapper = styled.div`
  padding: 0 9.5rem;
  .title-text {
    padding: 2.4375rem 0 1.5rem 0;
    display: block;
  }
  ${GridWrapper}
`;

export default SavingsListWrapper;
