import styled, { css } from 'styled-components';

export const Container = styled.div<{ backgroundColor?: string }>`
  background: #fff;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #3b454e;
  flex: 1;
  display: flex;
  flex-direction: column;

  img.twemoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.15em;
  }

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  input,
  textarea,
  button,
  select {
    font-size: inherit;
    line-height: 1;
  }

  textarea {
    line-height: 1.4;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 0.75em;
    font-weight: 600;
    color: #2b2f33;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 0.25em;
  }

  p + p {
    margin-top: 1em;
  }

  a {
    text-decoration: none;
    padding-bottom: 0.09em;
    border-bottom: 0.12em solid #e1e1e1;
    color: #30373d;
    transition: border ease-in-out 200ms;

    &:hover {
      border-color: #db2756;
      outline: 0;
    }

    &:focus {
      border-color: #2b2f33;
      outline: 0;
    }
  }
`;
