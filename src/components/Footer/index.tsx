import cx from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  dark?: boolean;
  fullWidth?: boolean;
}

export const Footer = (
  { dark, fullWidth }: Props = { dark: false, fullWidth: false },
) => (
  <div
    className={cx({
      [styles.footer]: true,
      [styles.dark]: dark,
      [styles.fullWidth]: fullWidth,
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
