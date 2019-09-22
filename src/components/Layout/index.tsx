import React, { ReactNode } from 'react';
import { Container, Content } from './styles';

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
