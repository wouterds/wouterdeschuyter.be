import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: relative;
  z-index: 1;

  a:hover {
    text-decoration: none;
  }
`;

export const Title = styled.div<{ transparent: boolean }>`
  padding: 1.3em;

  a {
    border: 0;
    padding: 0;
    display: inline-block;

    &:hover h1 {
      color: #000;

      ${({ transparent }) =>
        transparent &&
        css`
          color: #fff;
        `}
    }

    h1 {
      color: #2b2f33;
      transition: color ease-in-out 200ms;

      ${({ transparent }) =>
        transparent &&
        css`
          color: rgba(255, 255, 255, 0.9);
        `}
    }
  }

  h1 {
    font-size: 1.8em;
    line-height: 1;
    font-weight: 500;
    padding: 0.25em 0.525em;
    margin: 0;
    display: inline-block;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Nav = styled.nav<{ transparent: boolean }>`
  padding: 1.3em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  flex: 1;

  a {
    padding: 0.525em;
    border: 0;
    color: #888;
    transition: color ease-in-out 200ms;

    ${({ transparent }) =>
      transparent &&
      css`
        color: rgba(255, 255, 255, 0.8);
      `}

    &.active,
    &:hover {
      color: #2b2f33;
      ${({ transparent }) =>
        transparent &&
        css`
          color: #fff;
        `}
    }

    + a {
      margin-left: 10px;
    }
  }
`;
