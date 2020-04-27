import ErrorComponent from 'components/Pages/Error';
import gql from 'graphql-tag';
import { NextPageContext } from 'next';
import React from 'react';

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

ConnectSpotify.getInitialProps = async ({
  res,
  query,
  apolloClient,
}: NextPageContext) => {
  const { code } = query;

  await apolloClient.mutate({
    mutation: AUTHORIZE_SPOTIFY,
    variables: {
      authorizationCode: code,
      redirectUri: `${process.env.URL}/experiments/connect-spotify`,
    },
  });

  if (res) {
    return res.writeHead(302, { Location: '/experiments' }).end();
  }

  return {};
};

export default ConnectSpotify;
