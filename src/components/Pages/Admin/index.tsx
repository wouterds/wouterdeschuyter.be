import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import withAuth from 'hocs/withAuth';
import React from 'react';

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const Admin = (props: Props) => {
  const { user } = props;

  return (
    <Layout>
      <Meta
        title="Admin"
        extra={<meta key="robots" name="robots" content="noindex, follow" />}
      />
      <Header />
      <Layout.Content editorial>
        <h1>Admin</h1>
        <p>Hi, {user.name}</p>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default withAuth(Admin as any);
