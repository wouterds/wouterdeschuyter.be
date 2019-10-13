import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: relative;
  z-index: 1;
  overflow: hidden;

  a:hover {
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  mask: url('/static/logo.svg') no-repeat center;
  mask-size: cover;
  width: 1em;
  height: 1.91em;
  margin: 0 0.525em;
  background: var(--color-text-dark);
  display: inline-block;
`;

export const Title = styled.div<{ transparent: boolean }>`
  padding: 1.3em;

  a {
    border: 0;
    padding: 0;
    display: inline-block;
    line-height: 1;

    h1 {
      color: var(--color-text-dark);
      transition: color ease-in-out 200ms;
    }

    ${Logo} {
      background: var(--color-text-dark);
      transition: background ease-in-out 200ms;
    }

    ${({ transparent }) =>
      transparent &&
      css`
        h1 {
          color: rgba(255, 255, 255, 0.9);
        }

        ${Logo} {
          background: rgba(255, 255, 255, 0.9);
        }
      `}
  }

  h1 {
    font-size: 1.8em;
    line-height: 1;
    font-weight: 500;
    padding: 0.25em 0.525em;
    margin: 0;
    display: inline-block;
  }

  ${Logo} {
    display: none;
  }

  @media (max-width: 640px) {
    margin-top: 0.3em;
    align-self: center;

    h1 {
      display: none;
    }

    ${Logo} {
      display: inline-block;
    }
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
    color: var(--color-alternative-link);
    transition: color ease-in-out 200ms;

    ${({ transparent }) =>
      transparent &&
      css`
        color: rgba(255, 255, 255, 0.8);
      `}

    &.active,
    &:hover {
      color: var(--color-text-dark);
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
