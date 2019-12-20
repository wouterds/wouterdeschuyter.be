import React from 'react';
import {
  Container,
  Metric,
  MetricIcon,
  MetricValue,
  MetricUnit,
} from './styles';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import find from 'lodash/find';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThermometerThreeQuarters,
  faTint,
  faWind,
  faSun,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { formatDistanceStrict } from 'date-fns';

const FETCH_SENSORS = gql`
  query sensors {
    sensors {
      type
      value
    }
  }
`;

const SPOTIFY_IS_CONNECTED = gql`
  query spotify {
    spotifyIsConnected
  }
`;

const SPOTIFY_LISTENING_TO = gql`
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

export const DataFooter = () => {
  const sensorsQuery = useQuery(FETCH_SENSORS, { pollInterval: 1000 });
  const spotifyIsConnectedQuery = useQuery(SPOTIFY_IS_CONNECTED);
  const spotifyListeningToQuery = useQuery(SPOTIFY_LISTENING_TO, {
    pollInterval: 5000,
  });

  const temperature = find(sensorsQuery?.data?.sensors, {
    type: 'temperature',
  });
  const humidity = find(sensorsQuery?.data?.sensors, {
    type: 'humidity',
  });
  const pressure = find(sensorsQuery?.data?.sensors, {
    type: 'pressure',
  });
  const light = find(sensorsQuery?.data?.sensors, {
    type: 'illuminance:full',
  });
  const spotifyIsConnected =
    spotifyIsConnectedQuery?.data?.spotifyIsConnected || false;
  const spotifyListeningTo = spotifyListeningToQuery?.data?.spotifyListeningTo;

  return (
    <Container>
      {temperature && (
        <Metric>
          <MetricIcon>
            <FontAwesomeIcon icon={faThermometerThreeQuarters} />
          </MetricIcon>
          <MetricValue>{temperature.value.toFixed(2)}</MetricValue>
          <MetricUnit>ºC</MetricUnit>
        </Metric>
      )}
      {humidity && (
        <Metric>
          <MetricIcon>
            <FontAwesomeIcon icon={faTint} />
          </MetricIcon>
          <MetricValue>{humidity.value.toFixed(2)}</MetricValue>
          <MetricUnit>%</MetricUnit>
        </Metric>
      )}
      {pressure && (
        <Metric>
          <MetricIcon>
            <FontAwesomeIcon icon={faWind} />
          </MetricIcon>
          <MetricValue>{pressure.value.toFixed(2)}</MetricValue>
          <MetricUnit>hPa</MetricUnit>
        </Metric>
      )}
      {light && (
        <Metric>
          <MetricIcon>
            <FontAwesomeIcon icon={faSun} />
          </MetricIcon>
          <MetricValue>{light.value}</MetricValue>
          <MetricUnit>lx</MetricUnit>
        </Metric>
      )}

      {(spotifyListeningTo || spotifyIsConnected === false) && (
        <Metric>
          <MetricIcon>
            <FontAwesomeIcon icon={faMusic} />
          </MetricIcon>
          <MetricValue>
            {spotifyIsConnected === false && (
              <a
                href={`https://accounts.spotify.com/authorize?client_id=${
                  process.env.SPOTIFY_CLIENT_ID
                }&response_type=code&redirect_uri=${encodeURI(
                  `${process.env.URL}/experiments/connect-spotify`,
                )}&scope=user-read-currently-playing%20user-read-recently-played`}
              >
                Connect Spotify
              </a>
            )}
            {spotifyListeningTo && (
              <>
                {spotifyListeningTo.isPlaying && (
                  <>
                    <span>Playing</span>{' '}
                  </>
                )}
                {!spotifyListeningTo.isPlaying && (
                  <>
                    <span>Played</span>{' '}
                  </>
                )}
                <a
                  href={spotifyListeningTo.spotifyUri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {spotifyListeningTo.title} - {spotifyListeningTo.artist}
                </a>
                {!spotifyListeningTo.isPlaying && (
                  <>
                    {' '}
                    <span>
                      {formatDistanceStrict(
                        new Date(),
                        new Date(parseInt(spotifyListeningTo.time)),
                      )}{' '}
                      ago
                    </span>
                  </>
                )}
              </>
            )}
          </MetricValue>
        </Metric>
      )}
    </Container>
  );
};

export default DataFooter;
