import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import GoogleAnalyticsSDK from 'components/GoogleAnalyticsSDK';
import { User, UserContextProvider } from 'data/user';
import gql from 'graphql-tag';
import withApollo from 'next-with-apollo';
import NextApp, { AppContext } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import Cookie, { Cookies } from 'services/cookie';
import GoogleAnalytics from 'services/google-analytics';
import Network from 'services/network';

const ME = gql`
  query {
    me {
      id
      name
      email
    }
  }
`;

interface Props {
  user: User | null;
}

class App extends NextApp<Props> {
  static getInitialProps = async (appContext: AppContext) => {
    const appProps = await NextApp.getInitialProps(appContext);
    const { ctx } = appContext;

    Cookie.init(ctx);

    let user = null;
    const jwt = Cookie.get(Cookies.JWT);

    if (!jwt) {
      return { ...appProps, user };
    }

    try {
      const { data } = await Network.apollo.query({ query: ME });
      user = data?.me || null;
    } catch {
      return { ...appProps, user };
    }

    return { ...appProps, user };
  };

  public render() {
    const { Component, pageProps, user } = this.props;

    return (
      <ApolloProvider client={Network.apollo}>
        <UserContextProvider user={user}>
          <GoogleAnalyticsSDK />
          <Component {...pageProps} />
        </UserContextProvider>
      </ApolloProvider>
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
