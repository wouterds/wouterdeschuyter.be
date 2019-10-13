import '@fortawesome/fontawesome-svg-core/styles.css';
import { createGlobalStyle } from 'styled-components';
import reset from './_reset';
import progress from './_progress';
import toastify from './_toastify';
import variables from './_variables';
import core from './_core';

export default createGlobalStyle`
  ${reset}
  ${variables}
  ${core}
  ${progress}
  ${toastify}
`;
