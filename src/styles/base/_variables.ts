import { css } from 'styled-components';

export default css`
  :root {
    --color-tint: #db2756;
    --color-background: #fff;
    --color-text-lightest: #bbc4c9;
    --color-text-lighter: #74818b;
    --color-text-light: #48545e;
    --color-text: #3b454e;
    --color-text-dark: #2b2f33;
    --color-alternative-link: #939aa3;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-tint: #f75c8a;
      --color-background: #1a202b;
      --color-text-lightest: #3d4554;
      --color-text-lighter: #5b697a;
      --color-text-light: #738191;
      --color-text: #a0acba;
      --color-text-dark: #e2e8f0;
      --color-alternative-link: #637082;
    }
  }
`;
