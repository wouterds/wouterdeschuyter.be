import cx from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  editorial?: boolean;
  dark?: boolean;
}

const Content = (props: Props) => {
  const { children, editorial, dark } = props;

  return (
    <section
      role="main"
      className={cx({
        [styles.content]: true,
        [styles.editorial]: editorial,
        [styles.dark]: dark,
      })}
    >
      {children}
    </section>
  );
};

export default Content;
