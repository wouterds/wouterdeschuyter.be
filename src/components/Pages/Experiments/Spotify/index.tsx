import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { formatDistanceToNow } from 'date-fns';

export const config = { amp: 'hybrid' };

const CHECK_IF_CONNECTED = gql`
  query spotify {
    spotifyIsConnected
  }
`;

const FETCH_DATA = gql`
  query spotify {
    spotifyListeningTo {
      artist
      title
      isPlaying
      time
      spotifyUri
    }
  }
`;

interface Song {
  artist: string;
  title: string;
  spotifyUri: string;
  isPlaying: boolean;
  time: string;
}

const Spotify = () => {
  const {
    data: checkIfConnected,
  }: {
    data?: { spotifyIsConnected?: boolean };
  } = useQuery(CHECK_IF_CONNECTED);

  const { spotifyIsConnected } = checkIfConnected || {};

  const {
    data,
  }: {
    data?: { spotifyListeningTo?: Song };
  } = useQuery(FETCH_DATA, { pollInterval: 5000 });

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

  const { spotifyListeningTo } = data || {};

  if (!spotifyListeningTo) {
    return null;
  }

  if (spotifyListeningTo.isPlaying) {
    return (
      <p>
        I am currently listening to{' '}
        <a
          href={spotifyListeningTo.spotifyUri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {spotifyListeningTo.title} - {spotifyListeningTo.artist}
        </a>
        .
      </p>
    );
  }

  return (
    <p>
      I was listening to{' '}
      <a
        href={spotifyListeningTo.spotifyUri}
        target="_blank"
        rel="noopener noreferrer"
      >
        {spotifyListeningTo.title} - {spotifyListeningTo.artist}
      </a>{' '}
      {formatDistanceToNow(new Date(parseInt(spotifyListeningTo.time)))} ago.
    </p>
  );
};

export default Spotify;
