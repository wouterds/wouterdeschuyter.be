import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const Error = () => (
  <Layout dark>
    <Meta
      title="Whoops!"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Header dark />
    <Layout.Content editorial dark>
      <div className={styles.error}>
        <h1>Whoops!</h1>
        <p>It looks like something went wrong 😢...</p>

        <img src="/static/error.gif" alt="error.gif" />
      </div>
    </Layout.Content>
    <Footer dark />
  </Layout>
);

export default Error;
