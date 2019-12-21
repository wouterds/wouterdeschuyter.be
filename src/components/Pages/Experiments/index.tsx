import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Sensors from './Sensors';
import { Container } from './styles';

export const config = { amp: 'hybrid' };

const Experiments = () => {
  return (
    <Layout>
      <Meta
        title="Experiments 🧪"
        description="Yo, not sure what this is. Just a bunch of random things and experiments 🤪!"
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Experiments 🧪</h1>
          <p>
            Yo, not sure what this is. Just a bunch of random things and
            experiments 🤪!
          </p>

          <Sensors />

          <img
            src="https://media2.giphy.com/media/J2CA80sYEpeLgsDqCr/giphy.gif?cid=790b76111c5e9c0de363262200178be2e73c45efc95d737e&rid=giphy.gif"
            width="100%"
          />
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Experiments;
