import styled from "styled-components";

export const StyledSubMenuContainer = styled.div`
  display: ${({ showSubNav }) => showSubNav ? 'flex' : 'none'};
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  flex-direction: column;
  align-items:center;
  width: 100%;
  min-height: 400px;
  background: #ffff;
  padding: 40px 32px;
  box-sizing: border-box;
`;

export const StyledSubMenuContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: left;
`;

export const StyledColumn = styled.div`
  grid-column: span 3 / auto;
  display: grid;
  grid-auto-flow: row;
  gap: 8px 20px;
  grid-auto-rows: 25px;
  max-width: 100%;
  grid-template-rows: 38px;
`;

export const StyledSubNavLink = styled.a`
  display:flex;
  flex-direction:row;
  text-decoration: none;
  text-decoration: underline;
  font-size: 14px;
  line-height: 10px;
  font-weight: 700;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #808080
  }
`;