import React from 'react';
import { Container } from './styles';
import gql from 'graphql-tag';
import find from 'lodash/find';
import { useQuery } from 'react-apollo';
import Chart from './Chart';

const FETCH_SENSOR_VALUES = gql`
  query sensors {
    sensors {
      type
      value
    }
  }
`;

const Sensors = () => {
  const sensorValuesQuery = useQuery(FETCH_SENSOR_VALUES, {
    pollInterval: 1000,
  });
  const temperature = find(sensorValuesQuery?.data?.sensors, {
    type: 'temperature',
  });

  return (
    <Container>
      <h2>Sensors</h2>
      <p>
        I have a bunch of sensors at my apartment which are part of a freeform
        solder project I did last year ⚡️.
        <br />
        Need to do something with that data, right 😅?
      </p>

      <h3>
        Temperature{' '}
        {temperature && <span>{temperature.value.toFixed(2)} ºC</span>}
      </h3>
      <Chart color="#e74c3c" />
    </Container>
  );
};

export default Sensors;
