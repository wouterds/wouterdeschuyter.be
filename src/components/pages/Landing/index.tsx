import React from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';
import { useCookie, Cookies } from 'hooks/cookie';

const Index = () => {
  const [jwt] = useCookie(Cookies.JWT);

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

      {jwt && (
        <>
          <br />
          <br />
          <br />

          <h2>JWT token detected:</h2>
          <p>{jwt}</p>
        </>
      )}
    </Layout>
  );
};

export default Index;
