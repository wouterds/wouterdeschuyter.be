import React from 'react';
import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import BaseCSS from 'styles/base';

class App extends NextApp {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <BaseCSS />

        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default App;
