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
    background: #2b2f33;
    margin: 0;
    padding: 9px 10px;
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
        color: #db2756;
        border-bottom-color: #db2756;
      }
    `}
`;

export const Nav = styled.ul`
  position: absolute;
  left: 20px;
  bottom: 8px;
  height: 25px;

  &:hover ${NavItem} a {
    color: #2b2f33;
    border-bottom-color: transparent;

    &:hover {
      color: #db2756;
      border-bottom-color: #db2756;

      &:active {
        color: #2b2f33;
        border-bottom-color: #2b2f33;
      }
    }
  }
`;

export const User = styled.ul`
  position: absolute;
  top: 20px;
  right: 25px;
  font-weight: 500;
  font-size: 0.9em;

  div {
    display: inline-block;
    cursor: pointer;
    background: #fff;
    padding: 6px 12px;
    text-align: right;

    span {
      font-size: 0.9em;
      margin-left: 7px;
    }

    &:hover a {
      display: block;
    }

    a {
      display: none;
      border: 0;
      color: rgba(43, 47, 51, 0.5);
      padding: 5px;
      margin: 0 -5px -5px;

      &:hover {
        color: #db2756;

        &:active {
          color: #2b2f33;
        }
      }
    }
  }
`;
