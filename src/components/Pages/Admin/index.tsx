import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import withAuth from 'hocs/withAuth';
import React from 'react';

import styles from './styles.module.css';

const Admin = () => (
  <Layout>
    <Meta
      title="Admin"
      extra={<meta key="robots" name="robots" content="noindex, follow" />}
    />
    <Header />
    <Layout.Content fullWidth>
      <div className={styles.admin}>
        <nav className={styles.nav}>
          <a href="#">Dashboard</a>
          <a href="#">Users</a>
          <a href="#">Media assets</a>
          <a href="#">Posts</a>
          <a href="#">Post aliases</a>
          <a href="#">Authentication requests</a>
          <a href="#">Access tokens</a>
          <a href="#">Sensors</a>
        </nav>
      </div>
    </Layout.Content>
    <Footer fullWidth />
  </Layout>
);

export default withAuth(Admin as any);
