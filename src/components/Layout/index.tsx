import React, { ReactNode } from 'react';
import { Container } from './styles';

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Layout;
