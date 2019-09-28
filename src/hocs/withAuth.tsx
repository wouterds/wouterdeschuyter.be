import React from 'react';
import { NextContext } from 'next';
import Router from 'next/router';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import Layout from 'components/Layout';
import Link from 'next/link';

export interface AuthProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface Context extends NextContext {
  apolloClient: ApolloClient<any>;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
const withAuth = (WrappedComponent: any) => {
  const Component = (props: AuthProps) => {
    const { user } = props;

    if (!user) {
      return (
        <Layout.Modal>
          <h2>Not authenticated</h2>
          <p>
            You can sign in{' '}
            <Link href="/admin/sign-in" prefetch>
              <a>here</a>
            </Link>
            .
          </p>
        </Layout.Modal>
      );
    }

    return <WrappedComponent {...(props as any)} />;
  };

  Component.getInitialProps = async (ctx: Context) => {
    const failed = () => {
      const route = '/admin/sign-in';

      if (ctx.res) {
        ctx.res.writeHead && ctx.res.writeHead(302, { Location: route });
        ctx.res.end && ctx.res.end();
        return {};
      }

      Router.push(route);
      return {};
    };

    const ME = gql`
      {
        me {
          firstName
          lastName
          email
        }
      }
    `;

    const { apolloClient } = ctx;
    const user = await new Promise(resolve => {
      apolloClient
        .query({ query: ME })
        .then(({ data }) => resolve(data.me))
        .catch(() => resolve(null));
    });

    if (!user) {
      return failed();
    }

    let pageProps = {};
    if (WrappedComponent.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { ...pageProps, user };
  };

  return Component;
};

export default withAuth;
