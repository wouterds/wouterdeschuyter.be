import styled, { css } from 'styled-components';

export const Container = styled.div<{ backgroundColor?: string }>`
  background: var(--color-background);
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--color-text);
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

  blockquote {
    position: relative;
    font-style: italic;
    padding: 0.25em 1em;
    opacity: 0.75;

    p:last-child {
      margin: 0;
    }

    &:before {
      content: '';
      display: block;
      width: 4px;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background: #e1e1e8;
      border-radius: 2px;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.75em;
    font-weight: 600;
    color: var(--color-text-dark);
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
  ul,
  blockquote {
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
    color: var(--color-tint);

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
