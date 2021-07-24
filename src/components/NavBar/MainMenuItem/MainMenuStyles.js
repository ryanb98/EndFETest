import styled from "styled-components";

export const StyledMainMenuItem = styled.li`
  list-style: none;
  padding: 12px 16px;
  cursor:pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;

  .active {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #000;
      margin-top: 3px;
    }
  }
  .active, &:hover {
    background:#ffffff;
  }
`

export const StyledNavLink = styled.a`
  display:inline-block;
  text-decoration: none;
  text-decoration: underline;
  font-size: 14px;
  line-height: 10px;
  font-weight: 700;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:hover, &:focus {
    &:hover {
      width: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: black;
    transition: width 0.4s ease-in-out;
    margin-top: 3px;
  }

`;