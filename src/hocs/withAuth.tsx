import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import gql from 'graphql-tag';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import Cookie from 'services/cookie';
import Network from 'services/network';

const ME = gql`
  query {
    me {
      id
    }
  }
`;

const withAuth = (Component: NextComponentType) => {
  const WrappedComponent = (originalProps: any) => {
    const { user } = originalProps;

    if (!user) {
      return (
        <Layout>
          <Meta
            title="Authentication required"
            extra={
              <meta key="robots" name="robots" content="noindex, follow" />
            }
          />
          <Header />
          <Layout.Content editorial>
            <h1>Authentication required</h1>
            <p>To be able to view this page you need to be authenticated.</p>
          </Layout.Content>
          <Footer />
        </Layout>
      );
    }

    return <Component {...originalProps} />;
  };

  WrappedComponent.getInitialProps = async (ctx: NextPageContext) => {
    Cookie.init(ctx);

    const { res } = ctx;

    let user = null;
    try {
      const { data } = await Network.apollo.query({ query: ME });
      user = data?.me || null;
    } catch (e) {
      return res?.writeHead(302, { Location: '/admin/authenticate' }).end();
    }

    if (!user) {
      return res?.writeHead(302, { Location: '/admin/authenticate' }).end();
    }

    const initialProps = Component?.getInitialProps
      ? await Component?.getInitialProps(ctx)
      : {};

    return {
      user,
      ...initialProps,
    };
  };

  return WrappedComponent;
};

export default withAuth;
