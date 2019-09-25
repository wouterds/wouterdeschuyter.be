import React from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';

const Landing = () => {
  return (
    <Layout>
      <Layout.Content>
        <h1>Hello world!</h1>
        <p>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </p>
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
