import React, { ReactNode } from 'react';
import Twemoji from 'react-twemoji';

import Content from './Content';
import Modal from './Modal';
import { Container } from './styles';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

const Layout = (props: Props) => {
  const { children, backgroundColor } = props;

  return (
    <Twemoji options={{ className: 'twemoji' }} noWrapper>
      <Container backgroundColor={backgroundColor}>{children}</Container>
    </Twemoji>
  );
};

Layout.Modal = Modal;
Layout.Content = Content;

export default Layout;
