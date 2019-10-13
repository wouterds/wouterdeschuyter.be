import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*

  github.com style (c) Vasily Polovnyov <vast@whiteants.net>

  */

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  @media (prefers-color-scheme: dark) {
    /*

    Dracula Theme v1.2.0

    https://github.com/zenorocha/dracula-theme

    Copyright 2015, All rights reserved

    Code licensed under the MIT license
    http://zenorocha.mit-license.org

    @author Éverton Ribeiro <nuxlli@gmail.com>
    @author Zeno Rocha <hi@zenorocha.com>

    */

    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      background: #282a36;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-section,
    .hljs-link {
      color: #8be9fd;
    }

    .hljs-function .hljs-keyword {
      color: #ff79c6;
    }

    .hljs,
    .hljs-subst {
      color: #f8f8f2;
    }

    .hljs-string,
    .hljs-title,
    .hljs-name,
    .hljs-type,
    .hljs-attribute,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-tag,
    .hljs-template-variable {
      color: #f1fa8c;
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-deletion,
    .hljs-meta {
      color: #6272a4;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-title,
    .hljs-section,
    .hljs-doctag,
    .hljs-type,
    .hljs-name,
    .hljs-strong {
      font-weight: bold;
    }

    .hljs-emphasis {
      font-style: italic;
    }
  }
`;
