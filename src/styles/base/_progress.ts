import { css } from 'styled-components';

export default css`
  #nprogress {
    pointer-events: none;

    .bar {
      background: #db2756;
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
  }
`;
