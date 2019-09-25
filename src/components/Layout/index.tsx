import React, { ReactNode } from 'react';
import { Container, Content } from './styles';
import Modal from './Modal';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

const Layout = (props: Props) => {
  const { children, backgroundColor } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <Content>{children}</Content>
    </Container>
  );
};

Layout.Modal = Modal;

export default Layout;
