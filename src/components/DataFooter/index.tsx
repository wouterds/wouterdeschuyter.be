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
} from '@fortawesome/free-solid-svg-icons';

const FETCH_SENSORS = gql`
  query sensors {
    sensors {
      type
      value
    }
  }
`;

export const DataFooter = () => {
  const sensorsQuery = useQuery(FETCH_SENSORS, { pollInterval: 1000 });

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
    </Container>
  );
};

export default DataFooter;
