import React from 'react';
import NextApp, { Container } from 'next/app';
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

export default App;
