import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingHeader from './Header';

const Landing = () => {
  return (
    <Layout>
      <Header hideLogo />
      <Layout.Content centered>
        <LandingHeader />
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Landing;
