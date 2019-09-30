import React, { ReactNode } from 'react';
import Twemoji from 'react-twemoji';
import { Container } from './styles';
import Modal from './Modal';
import Content from './Content';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

const Layout = (props: Props) => {
  const { children, backgroundColor } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <Twemoji options={{ className: 'twemoji', noWrapper: false }}>
        {children}
      </Twemoji>
    </Container>
  );
};

Layout.Modal = Modal;
Layout.Content = Content;

export default Layout;
