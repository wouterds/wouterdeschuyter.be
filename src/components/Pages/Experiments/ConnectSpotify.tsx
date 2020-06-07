import ErrorComponent from 'components/Pages/Error';
import gql from 'graphql-tag';
import { NextPageContext } from 'next';
import React from 'react';
import Network from 'services/network';

const ConnectSpotify = () => {
  return <ErrorComponent />;
};

const AUTHORIZE_SPOTIFY = gql`
  mutation spotifyAuthorize(
    $authorizationCode: String!
    $redirectUri: String!
  ) {
    spotifyAuthorize(
      authorizationCode: $authorizationCode
      redirectUri: $redirectUri
    )
  }
`;

ConnectSpotify.getInitialProps = async ({ res, query }: NextPageContext) => {
  const { code } = query;

  await Network.apollo.mutate({
    mutation: AUTHORIZE_SPOTIFY,
    variables: {
      authorizationCode: code,
      redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/experiments/connect-spotify`,
    },
  });

  if (res) {
    return res.writeHead(302, { Location: '/experiments' }).end();
  }

  return {};
};

export default ConnectSpotify;
