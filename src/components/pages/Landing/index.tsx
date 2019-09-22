import React from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <Link href="/admin/sign-in">
        <a>Sign in</a>
      </Link>
      {' or '}
      <Link href="/admin/sign-up">
        <a>Sign up</a>
      </Link>
    </Layout>
  );
};

export default Index;
