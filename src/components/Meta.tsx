import Head from 'next/head';
import { NextRouter, withRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

interface Props {
  title: string;
  description?: string;
  router: NextRouter;
  extra?: ReactElement;
}

const Meta = (props: Props) => {
  const { title, description, extra, router } = props;

  const url = `${process.env.NEXT_PUBLIC_APP_URL}${
    router.asPath !== '/' ? router.asPath : ''
  }`;

  const extraMetaHtml = extra ? renderToString(extra) : '';
  const extraOgType = extraMetaHtml.indexOf('og:type') > -1;
  const extraOgImage = extraMetaHtml.indexOf('og:image') > -1;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="robots" content="index, follow" />
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {!extraOgType && <meta property="og:type" content="website" />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Wouter De Schuyter" />
      {!extraOgImage && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/static/wouterds.jpg`}
        />
      )}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_APP_URL}/static/wouterds.jpg`}
      />
      <meta name="twitter:creator" content="@wouterds" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {extra}
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#111520" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/feed.xml`}
      />
      <link href="https://github.com/wouterds" rel="me" />
      <link href="https://twitter.com/wouterds" rel="me" />
      <link href="https://instagram.com/wouterds" rel="me" />
      <link
        rel="webmention"
        href="https://webmention.io/wouterdeschuyter.be/webmention"
      />
      <link
        rel="pingback"
        href="https://webmention.io/wouterdeschuyter.be/xmlrpc"
      />
    </Head>
  );
};

export default withRouter(Meta);
