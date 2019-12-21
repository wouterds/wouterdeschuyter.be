import React, { useEffect, useState } from 'react';
import {
  Container,
  Section,
  Spacer,
  MetricIcon,
  MetricValue,
  MetricUnit,
} from './styles';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import gql from 'graphql-tag';
import find from 'lodash/find';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThermometerThreeQuarters,
  faTint,
  faWind,
  faSun,
  faMusic,
  faBirthdayCake,
} from '@fortawesome/free-solid-svg-icons';
import { formatDistanceStrict, differenceInMilliseconds } from 'date-fns';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { useCookie, Cookies } from 'hooks/useCookie';

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

const getAge = () =>
  (
    differenceInMilliseconds(new Date(), new Date('13 December 1992')) /
    (365 * 24 * 60 * 60) /
    1000
  ).toFixed(9);

export const DataBar = () => {
  const isAmp = useAmp();
  const router = useRouter();
  const sensorsQuery = useQuery(FETCH_SENSORS);
  const spotifyIsConnectedQuery = useQuery(SPOTIFY_IS_CONNECTED);
  const spotifyListeningToQuery = useQuery(SPOTIFY_LISTENING_TO);
  const [age, setAge] = useState(getAge);

  const isExperiments = router.pathname.indexOf('/experiments') > -1;
  const [isVisible, setIsVisible] = useCookie(Cookies.DATA_BAR);

  useEffect(() => {
    if (isVisible === 'true' || isExperiments) {
      sensorsQuery.startPolling(1000);
      spotifyListeningToQuery.startPolling(5000);
    } else {
      sensorsQuery.stopPolling();
      spotifyListeningToQuery.stopPolling();
    }
  }, [isExperiments, isVisible, sensorsQuery, spotifyListeningToQuery]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isAmp) {
    return null;
  }

  if (isVisible !== 'true' && !isExperiments) {
    return null;
  }

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
        <Section title="Temperature at my apartment">
          <MetricIcon>
            <FontAwesomeIcon icon={faThermometerThreeQuarters} />
          </MetricIcon>
          <MetricValue>{temperature.value.toFixed(2)}</MetricValue>
          <MetricUnit>ºC</MetricUnit>
        </Section>
      )}
      {humidity && (
        <Section title="Humidity at my apartment">
          <MetricIcon>
            <FontAwesomeIcon icon={faTint} />
          </MetricIcon>
          <MetricValue>{humidity.value.toFixed(2)}</MetricValue>
          <MetricUnit>%</MetricUnit>
        </Section>
      )}
      {pressure && (
        <Section title="Pressure at my apartment">
          <MetricIcon>
            <FontAwesomeIcon icon={faWind} />
          </MetricIcon>
          <MetricValue>{pressure.value.toFixed(2)}</MetricValue>
          <MetricUnit>hPa</MetricUnit>
        </Section>
      )}
      {light && (
        <Section title="Light at my apartment">
          <MetricIcon>
            <FontAwesomeIcon icon={faSun} />
          </MetricIcon>
          <MetricValue>{light.value}</MetricValue>
          <MetricUnit>lx</MetricUnit>
        </Section>
      )}

      {(spotifyListeningTo || spotifyIsConnected === false) && (
        <Section title="Music I'm listening to">
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
        </Section>
      )}
      {age && (
        <Section title="How old I am">
          <MetricIcon>
            <FontAwesomeIcon icon={faBirthdayCake} />
          </MetricIcon>
          <MetricValue>{age}</MetricValue>
          <MetricUnit>years old</MetricUnit>
        </Section>
      )}
      {!isExperiments && (
        <>
          <Spacer />
          <Section>
            <MetricValue>
              <Link href="/experiments">
                <a>Experiments</a>
              </Link>
            </MetricValue>
          </Section>
          <Section>
            <MetricValue>
              <a onClick={() => setIsVisible('false')}>Close</a>
            </MetricValue>
          </Section>
        </>
      )}
    </Container>
  );
};

export default DataBar;
