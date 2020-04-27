import '@fortawesome/fontawesome-svg-core/styles.css';

import { createGlobalStyle } from 'styled-components';

import core from './_core';
import progress from './_progress';
import reset from './_reset';
import toastify from './_toastify';
import variables from './_variables';

export default createGlobalStyle`
  ${reset}
  ${variables}
  ${core}
  ${progress}
  ${toastify}
`;
