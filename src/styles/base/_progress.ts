import { css } from 'styled-components';

export default css`
  #nprogress {
    pointer-events: none;

    .bar {
      background: linear-gradient(90deg, #ef50ae, #5783d8);
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
  }
`;
