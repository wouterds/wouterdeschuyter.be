import React from 'react';
import { NextPageContext } from 'next';
import Url from 'url-parse';
import ErrorComponent from 'components/Pages/Error';

const ConnectSpotify = () => {
  return <ErrorComponent />;
};

ConnectSpotify.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req?.url) {
    throw new Error("Couldn't parse url from request");
  }

  const url = new Url(req.url, true);
  const { code } = url.query;

  console.log({ code });

  return {};
};

export default ConnectSpotify;
