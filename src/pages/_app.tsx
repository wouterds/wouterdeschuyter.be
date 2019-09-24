import React from 'react';
import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import { NextComponentType, NextContext } from 'next';
import NProgress from 'nprogress';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Cookie from 'services/cookie';
import withApollo from 'hocs/apollo';
import BaseCSS from 'styles/base';

interface Props {
  apollo: ApolloClient<any>;
}

class App extends NextApp<Props> {
  public static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType;
    ctx: NextContext;
  }) {
    if (ctx.req && ctx.req.headers) {
      Cookie.init(ctx.req.headers.cookie);
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <BaseCSS />

        <Container>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </>
    );
  }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default withApollo(App);
