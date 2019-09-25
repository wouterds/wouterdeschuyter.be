import '@fortawesome/fontawesome-svg-core/styles.css';
import { createGlobalStyle } from 'styled-components';
import reset from './_reset';
import progress from './_progress';
import core from './_core';

export default createGlobalStyle`
  ${reset}
  ${core}
  ${progress}
`;
