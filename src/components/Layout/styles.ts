import styled, { css } from 'styled-components';

export const Container = styled.div<{ backgroundColor?: string }>`
  background: #fff;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #3b454e;
  flex: 1;

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

  a {
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 2px solid #e1e1e1;
    color: #30373d;
    transition: border ease-in-out 200ms;

    &:hover {
      border-color: #ef50ae;
      outline: 0;
    }

    &:focus {
      border-color: #5783d8;
      outline: 0;
    }
  }
`;
