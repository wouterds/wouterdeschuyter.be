import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

export const config = { amp: 'hybrid' };

const FETCH_DATA = gql`
  query spotify {
    spotifyIsConnected
  }
`;

const Spotify = () => {
  const { data }: { data?: { spotifyIsConnected?: boolean } } = useQuery(
    FETCH_DATA,
  );

  const { spotifyIsConnected } = data || {};

  if (!spotifyIsConnected) {
    return (
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${
          process.env.SPOTIFY_CLIENT_ID
        }&response_type=code&redirect_uri=${encodeURI(
          `${process.env.URL}/experiments/connect-spotify`,
        )}&scope=user-read-currently-playing%20user-read-recently-played`}
      >
        Connect spotify
      </a>
    );
  }

  return null;
};

export default Spotify;
