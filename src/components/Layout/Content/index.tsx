import cx from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  editorial?: boolean;
}

const Content = (props: Props) => {
  const { children, editorial } = props;

  return (
    <section
      role="main"
      className={cx({
        [styles.content]: true,
        [styles.editorial]: editorial,
      })}
    >
      {children}
    </section>
  );
};

export default Content;
