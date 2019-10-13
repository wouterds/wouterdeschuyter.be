import React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import withApollo from 'hocs/withApollo';
import GoogleAnalyticsSDK from 'components/GoogleAnalyticsSDK';
import GoogleAnalytics from 'services/google-analytics';
import BaseCSS from 'styles/base';

interface Props {
  apollo: ApolloClient<any>;
  err?: any;
}

class App extends NextApp<Props> {
  public render() {
    const { Component, pageProps, apollo } = this.props;

    // https://github.com/zeit/next.js/issues/8592
    const { err } = this.props;

    return (
      <>
        <BaseCSS />
        <GoogleAnalyticsSDK />
        <ApolloProvider client={apollo}>
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

export default withApollo(App);
