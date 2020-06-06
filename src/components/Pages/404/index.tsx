import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import { Container } from './styles';

const E404 = () => (
  <Layout>
    <Meta
      title="Not found"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Header />
    <Layout.Content centered editorial>
      <Container>
        <h1>Not found</h1>
        <p>The page you were looking for could not be found.</p>

        <img src="/static/error.gif" alt="error.gif" />
      </Container>
    </Layout.Content>
    <Footer centered />
  </Layout>
);

export default E404;
