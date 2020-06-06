import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import GoogleAnalyticsSDK from 'components/GoogleAnalyticsSDK';
import withApollo from 'next-with-apollo';
import NextApp from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import GoogleAnalytics from 'services/google-analytics';
import Network from 'services/network';
import BaseCSS from 'styles/base';

interface Props {
  err?: any;
}

class App extends NextApp<Props> {
  public render() {
    const { Component, pageProps } = this.props;

    // https://github.com/zeit/next.js/issues/8592
    const { err } = this.props;

    return (
      <>
        <BaseCSS />
        <GoogleAnalyticsSDK />
        <ApolloProvider client={Network.apollo}>
          <Component {...pageProps} err={err} />
        </ApolloProvider>
      </>
    );
  }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', (path: string) => {
  NProgress.done();
  GoogleAnalytics.pageView(path);
});
Router.events.on('routeChangeError', () => NProgress.done());

export default withApollo(({ initialState }) => Network.init(initialState), {
  getDataFromTree,
})(App);
