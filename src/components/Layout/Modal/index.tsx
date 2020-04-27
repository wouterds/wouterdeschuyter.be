import Layout from 'components/Layout';
import React, { ReactNode } from 'react';

import { backgroundColor, Container, Footer } from './styles';

interface Props {
  children: ReactNode;
  footer?: ReactNode;
}

const Modal = (props: Props) => {
  const { children, footer } = props;

  return (
    <Layout backgroundColor={backgroundColor}>
      <Container>{children}</Container>
      {footer && <Footer>{footer}</Footer>}
    </Layout>
  );
};

export default Modal;
