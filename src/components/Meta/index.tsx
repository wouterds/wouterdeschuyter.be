import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import { useAmp } from 'next/amp';

interface Props {
  title: string;
  description?: string;
  router: NextRouter;
  extra?: ReactElement;
}

const Meta = (props: Props) => {
  const isAmp = useAmp();
  const { title, description, extra, router } = props;

  const url = `${process.env.URL}${router.asPath !== '/' ? router.asPath : ''}`;

  const extraMetaHtml = extra ? renderToString(extra) : '';
  const extraOgType = extraMetaHtml.indexOf('og:type') > -1;
  const extraOgImage = extraMetaHtml.indexOf('og:image') > -1;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {!isAmp && (
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      )}
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
          content={`${process.env.URL}/static/wouterds.jpg`}
        />
      )}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content={`${process.env.URL}/static/wouterds.jpg`}
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
        href={`${process.env.URL}/feed.xml`}
      />
    </Head>
  );
};

export default withRouter(Meta);
