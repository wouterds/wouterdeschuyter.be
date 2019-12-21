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
  const humidity = find(sensorValuesQuery?.data?.sensors, {
    type: 'humidity',
  });
  const light = find(sensorValuesQuery?.data?.sensors, {
    type: 'illuminance:full',
  });
  const pressure = find(sensorValuesQuery?.data?.sensors, {
    type: 'pressure',
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

      <h3>Humidity {humidity && <span>{humidity.value.toFixed(2)} %</span>}</h3>
      <Chart color="#3498db" />

      <h3>Light {light && <span>{light.value.toFixed(2)} lx</span>}</h3>
      <Chart color="#f1c40f" />

      <h3>
        Pressure {pressure && <span>{pressure.value.toFixed(2)} hPa</span>}
      </h3>
      <Chart color="#9b59b6" />
    </Container>
  );
};

export default Sensors;
