import React from 'react';
import { NextContext } from 'next';
import Router from 'next/router';
import Cookie, { Cookies } from 'services/cookie';
import { ServerResponse } from 'http';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

export interface AuthProps {
  jwt: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
const withAuth = (WrappedComponent: any) => {
  const Component = (props: AuthProps) => {
    return <WrappedComponent {...(props as any)} />;
  };

  Component.getInitialProps = async (ctx: NextContext) => {
    const jwt = Cookie.getClient().get(Cookies.JWT);

    let pageProps = {};
    if (WrappedComponent.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const failed = () => {
      const route = '/admin/sign-in';

      if (ctx.res) {
        (ctx.res as ServerResponse).writeHead(302, {
          Location: route,
        });
        (ctx.res as ServerResponse).end();
      } else {
        Router.push(route);
      }

      return pageProps;
    };

    if (!jwt) {
      return failed();
    }

    const { apolloClient } = (ctx as any) as {
      apolloClient: ApolloClient<any>;
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

    const user = await new Promise(resolve => {
      apolloClient
        .query({ query: ME })
        .then(({ data }) => resolve(data.me))
        .catch(() => resolve(null));
    });

    if (!user) {
      return failed();
    }

    return { ...pageProps, jwt, user };
  };

  return Component;
};

export default withAuth;
