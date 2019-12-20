import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import DataFooter from 'components/DataFooter';
import { Container } from './styles';

export const config = { amp: 'hybrid' };

const Experiments = () => {
  return (
    <Layout>
      <Meta
        title="Experiments 🧪"
        description="Yo, not sure what this is. Just a bunch of random things and experiments 🤪!"
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Experiments 🧪</h1>
          <p>
            Yo, not sure what this is. Just a bunch of random things and
            experiments 🤪!
          </p>
        </Container>
      </Layout.Content>
      <Footer centered />
      <DataFooter />
    </Layout>
  );
};

export default Experiments;
