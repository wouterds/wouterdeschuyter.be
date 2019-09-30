import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Landing = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content centered>
        <h1>Hello world!</h1>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Landing;
