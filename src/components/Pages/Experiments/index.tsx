import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

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
        <div>
          <h1>Experiments 🧪</h1>
          <p>
            Just a bunch of random things and experiments, work in progress 🚧!
          </p>
          <br />
        </div>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Experiments;
