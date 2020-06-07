import cx from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  centered?: boolean;
  editorial?: boolean;
}

const Content = (props: Props) => {
  const { children, centered, editorial } = props;

  return (
    <section
      role="main"
      className={cx({
        [styles.content]: true,
        [styles.centered]: centered,
        [styles.editorial]: editorial,
      })}
    >
      {children}
    </section>
  );
};

export default Content;
