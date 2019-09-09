import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: inside;
    list-style-type: none;
  }

  input,
  textarea,
  button,
  select {
    -webkit-appearance: none;
    border-radius: 0;
    outline: 0;
    font-family: inherit;

    &[type=checkbox] {
      -webkit-appearance: checkbox;
    }
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    min-height: 100%;
    height: 100%;
  }

  #__next {
    min-height: 100%;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-size: 1rem;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  }
`;
