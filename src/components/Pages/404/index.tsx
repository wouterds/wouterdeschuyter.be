import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const E404 = () => (
  <Layout dark>
    <Meta
      title="Not found"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Header dark />
    <Layout.Content editorial dark>
      <div className={styles.E404}>
        <h1>Not found</h1>
        <p>The page you were looking for could not be found.</p>

        <img src="/static/error.gif" alt="error.gif" />
      </div>
    </Layout.Content>
    <Footer dark />
  </Layout>
);

export default E404;
