import React from 'react';
import { NextContext } from 'next';
import Router from 'next/router';
import Cookie, { Cookies } from 'services/cookie';
import { ServerResponse } from 'http';
import ApolloClient from 'apollo-client';

interface Props {
  jwt: string;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
const withAuth = (WrappedComponent: any) => {
  const Component = (props: Props) => {
    return <WrappedComponent {...(props as any)} />;
  };

  Component.getInitialProps = async (ctx: NextContext) => {
    const jwt = Cookie.getClient().get(Cookies.JWT);

    let pageProps = {};
    if (WrappedComponent.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!jwt) {
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
    }

    const { apolloClient } = (ctx as any) as {
      apolloClient: ApolloClient<any>;
    };

    console.log({ apolloClient });

    return { ...pageProps, jwt };
  };

  return Component;
};

export default withAuth;
