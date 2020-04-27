import { css } from 'styled-components';

export default css`
  #__next {
    min-height: 100%;
    display: flex;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-size: 1rem;
  }

  body {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;
  }

  code,
  pre {
    font-family: 'Source Code Pro', Hack, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
