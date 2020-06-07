import React, { ReactNode } from 'react';
import Twemoji from 'react-twemoji';

import Content from './Content';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <Twemoji options={{ className: styles.twemoji }} noWrapper>
      <div className={styles.layout}>{children}</div>
    </Twemoji>
  );
};

Layout.Content = Content;

export default Layout;
