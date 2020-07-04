import cx from 'classnames';
import React, { ReactNode } from 'react';
import Twemoji from 'react-twemoji';

import Content from './Content';
import styles from './styles.module.css';

interface Props {
  dark?: boolean;
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { dark = false, children } = props;

  return (
    <Twemoji options={{ className: styles.twemoji }} noWrapper>
      <div
        className={cx({
          [styles.layout]: true,
          [styles.dark]: dark,
        })}
      >
        {children}
      </div>
    </Twemoji>
  );
};

Layout.Content = Content;

export default Layout;
