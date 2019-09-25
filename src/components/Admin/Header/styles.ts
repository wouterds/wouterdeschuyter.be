import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: 2px solid #e6ecf1;
  height: 100px;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 25px;

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    word-spacing: 0.1em;
    font-size: 1em;
    line-height: 1;
    font-weight: 700;
    color: #fff;
    background: #000;
    margin: 0;
    padding: 8px 10px;
  }
`;

export const NavItem = styled.li<{ active?: boolean }>`
  display: inline-block;

  + li {
    margin-left: 20px;
  }

  a {
    border-bottom: 2px solid transparent;
    padding: 10px 5px;
    font-weight: 600;
    font-size: 0.8em;
    letter-spacing: 0.025em;
    word-spacing: 0.025em;
    text-transform: uppercase;
    color: #2b2f33;
    transition: color ease-in-out 200ms, border ease-in-out 200ms;
  }

  ${({ active }) =>
    active &&
    css`
      a {
        color: #ef50ae;
        border-bottom-color: #ef50ae;
      }
    `}
`;

export const Nav = styled.ul`
  position: absolute;
  left: 20px;
  bottom: 6px;
  height: 25px;

  &:hover ${NavItem} a {
    color: #2b2f33;
    border-bottom-color: transparent;

    &:hover {
      color: #ef50ae;
      border-bottom-color: #ef50ae;

      &:active {
        color: #5783d8;
        border-bottom-color: #5783d8;
      }
    }
  }
`;

export const User = styled.ul`
  position: absolute;
  top: 20px;
  right: 25px;
  font-weight: 500;
  font-size: 1em;
`;
