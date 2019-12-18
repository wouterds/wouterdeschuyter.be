import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import { Container } from './styles';

export const config = { amp: 'hybrid' };

const Experiments = () => {
  return (
    <Layout>
      <Meta
        title="Experiments - Wouter De Schuyter"
        description="Not sure what this is, a collection of random things. Let's call them experiments!"
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Experiments</h1>
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Experiments;
