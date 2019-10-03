import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './styles';

const Error = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Oh darn!</h1>
          <p>It looks like something went wrong 😢...</p>

          <img src="/static/error.gif" alt="error.gif" />
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Error;
