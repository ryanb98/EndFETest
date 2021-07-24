import styled from 'styled-components';

export const StyledimageColumn = styled.div`
  grid-column: span 3 / auto;
  display: grid;
  grid-auto-flow: row;
  gap: 8px 20px;
  grid-auto-rows: auto;
  max-width: 100%;

  div {
   display: flex;
   flex-direction: column;
   min-height: 0;
    img {
      width: 90%;
      max-width: 90%%;
      height: 100%
    }
    span {
      letter-spacing: 0.025rem;
      line-height: 1.3rem;
      font-weight: normal;
      padding: 8px 0px;
      margin-left: 10px;
    }
  }
`;