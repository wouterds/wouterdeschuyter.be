import React from 'react';
import { AreaChart, Area, YAxis } from 'recharts';
import { Container } from './styles';
import gql from 'graphql-tag';
import find from 'lodash/find';
import { useQuery } from 'react-apollo';

const FETCH_SENSOR_VALUES = gql`
  query sensors {
    sensors {
      type
      value
    }
  }
`;

const Sensors = () => {
  const data = [
    { temperature: 21.47 },
    { temperature: 21.53 },
    { temperature: 21.68 },
    { temperature: 21.83 },
    { temperature: 22.06 },
    { temperature: 22.12 },
    { temperature: 22.36 },
    { temperature: 22.43 },
    { temperature: 22.49 },
    { temperature: 22.43 },
    { temperature: 22.38 },
  ];

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

      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#e74c3c" stopOpacity={0.5} />
            <stop offset="90%" stopColor="#e74c3c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="temperature"
          stroke="#e74c3c"
          strokeWidth={1.5}
          fill="url(#chartColor)"
        />

        <YAxis domain={['auto', 'auto']} hide={true} />
      </AreaChart>
    </Container>
  );
};

export default Sensors;
