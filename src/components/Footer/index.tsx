import cx from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  dark?: boolean;
  fullWidth?: boolean;
  responsiveBig?: boolean;
}

export const Footer = (
  { dark, fullWidth, responsiveBig }: Props = {
    dark: false,
    fullWidth: false,
    responsiveBig: false,
  },
) => (
  <div
    className={cx({
      [styles.footer]: true,
      [styles.dark]: dark,
      [styles.fullWidth]: fullWidth,
      [styles.responsiveBig]: responsiveBig,
    })}
  >
    <p>
      &copy; Copyright {new Date().getFullYear()} Wouter De Schuyter,
      BE0745.964.642
    </p>
    <p className={styles.separator}> | </p>
    <p>Made in TypeScript using Next.js, GraphQL and a few other packages ✨</p>
  </div>
);

export default Footer;
