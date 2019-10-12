import styled, { css } from 'styled-components';

export const Container = styled.div<{ backgroundColor?: string }>`
  background: #fff;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #3b454e;
  flex: 1;
  width: 100%;
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

  strong {
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.75em;
    font-weight: 600;
    color: #2b2f33;
    line-height: 1.2;
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

  h4 {
    font-size: 1.2em;
    margin-bottom: 0.1em;
  }

  p,
  pre,
  ul {
    & + h1,
    & + h2,
    & + h3,
    & + h4,
    & + p {
      margin-top: 1em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    & + img,
    & + ul,
    & + pre {
      margin-top: 1em;
    }
  }

  a {
    text-decoration: none;
    color: #db2756;
    outline-color: #db2756;

    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    border: 0;
    border-top: 1px solid #ebeef0;
    margin: 1em 0;
  }
`;
