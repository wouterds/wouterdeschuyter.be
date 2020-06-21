import cx from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  centered?: boolean;
}

export const Footer = (props: Props) => {
  const { centered = false } = props;

  return (
    <div
      className={cx({
        [styles.footer]: true,
        [styles.centered]: centered,
      })}
    >
      <p>
        &copy; Copyright {new Date().getFullYear()} Wouter De Schuyter -
        BE0745.964.642
      </p>
      <p>
        Made in TypeScript using Next.js, GraphQL and a few other packages ✨
      </p>
    </div>
  );
};

export default Footer;
