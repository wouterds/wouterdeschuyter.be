import cx from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  editorial?: boolean;
  dark?: boolean;
  fullWidth?: boolean;
}

const Content = (props: Props) => {
  const { children, editorial, dark, fullWidth = false } = props;

  return (
    <section
      role="main"
      className={cx({
        [styles.content]: true,
        [styles.editorial]: editorial,
        [styles.dark]: dark,
        [styles.fullWidth]: fullWidth,
      })}
    >
      {children}
    </section>
  );
};

export default Content;
