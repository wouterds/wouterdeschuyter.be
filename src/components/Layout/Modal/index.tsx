import React, { ReactNode } from 'react';
import { Container, backgroundColor } from './styles';
import Layout from 'components/Layout';

interface Props {
  children: ReactNode;
}

const SignIn = (props: Props) => {
  const { children } = props;

  return (
    <Layout backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </Layout>
  );
};

export default SignIn;
