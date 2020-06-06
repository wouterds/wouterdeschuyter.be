import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import NextError from 'next/error';
import React from 'react';

import { Container } from './styles';

const Error = () => (
  <Layout>
    <Meta
      title="Something went wrong"
      extra={<meta name="robots" content="noindex, follow" />}
    />
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

Error.getInitialProps = NextError.getInitialProps;

export default Error;
