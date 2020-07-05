import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import withAuth from 'hocs/withAuth';
import React from 'react';

const Admin = () => {
  return (
    <Layout>
      <Meta
        title="Admin"
        extra={<meta key="robots" name="robots" content="noindex, follow" />}
      />
      <Header />
      <Layout.Content editorial>
        <h1>Admin</h1>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default withAuth(Admin);
