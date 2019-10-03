import React from 'react';
import { NextPageContext } from 'next';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './styles';

const Detail = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content centered editorial>
        <Container></Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

Detail.getInitialProps = ({ query }: NextPageContext) => {
  const { slug } = query;

  return { slug };
};

export default Detail;
