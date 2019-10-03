import React from 'react';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  title: string;
  router: NextRouter;
}

const Meta = (props: Props) => {
  const { title, router } = props;

  const url = `${process.env.URL}${
    router.pathname !== '/' ? router.pathname : ''
  }`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="wouterdeschuyter.be" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@wouterds" />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </Head>
  );
};

export default withRouter(Meta);
