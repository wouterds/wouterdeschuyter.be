import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  title: string;
  description?: string;
  router: NextRouter;
  extra?: ReactElement;
}

const Meta = (props: Props) => {
  const { title, description, extra, router } = props;

  const url = `${process.env.URL}${
    router.pathname !== '/' ? router.pathname : ''
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
      <meta property="og:site_name" content="wouterdeschuyter.be" />
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
    </Head>
  );
};

export default withRouter(Meta);
