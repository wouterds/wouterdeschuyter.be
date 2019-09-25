import React, { ReactNode } from 'react';
import { Container, backgroundColor, Footer } from './styles';
import Layout from 'components/Layout';

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
