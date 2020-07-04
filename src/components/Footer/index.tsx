import cx from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  dark?: boolean;
}

export const Footer = ({ dark }: Props = { dark: false }) => (
  <div
    className={cx({
      [styles.footer]: true,
      [styles.dark]: dark,
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
