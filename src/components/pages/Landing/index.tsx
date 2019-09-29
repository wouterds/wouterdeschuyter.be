import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';

const Landing = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content centered>
        <h1>Hello world!</h1>
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
