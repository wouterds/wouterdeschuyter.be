import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import { Container } from './styles';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import find from 'lodash/find';

export const config = { amp: 'hybrid' };

const FETCH_DATA = gql`
  query sensors {
    sensors {
      type
      value
    }
  }
`;

type Sensor = {
  type: string;
  value: number;
};

type Sensors = {
  temperature: number;
  humidity: number;
  pressure: number;
  illuminance: {
    ir: number;
    visible: number;
    full: number;
  };
};

const Experiments = () => {
  const [sensors, setSensors] = useState<Sensors | null>(null);

  const { data }: { data?: { sensors?: Sensor[] } } = useQuery(FETCH_DATA, {
    pollInterval: 1000,
  });

  useEffect(() => {
    if (data?.sensors && Array.isArray(data?.sensors)) {
      setSensors({
        temperature: (find(data.sensors, {
          type: 'temperature',
        }) as Sensor).value,
        humidity: (find(data.sensors, {
          type: 'humidity',
        }) as Sensor).value,
        pressure: (find(data.sensors, {
          type: 'pressure',
        }) as Sensor).value,
        illuminance: {
          ir: (find(data.sensors, {
            type: 'illuminance:ir',
          }) as Sensor).value,
          visible: (find(data.sensors, {
            type: 'illuminance:visible',
          }) as Sensor).value,
          full: (find(data.sensors, {
            type: 'illuminance:full',
          }) as Sensor).value,
        },
      });
    }
  }, [data]);

  return (
    <Layout>
      <Meta
        title="Experiments ⚗️🧪 - Wouter De Schuyter"
        description="Yo, not sure what this is. Just some random stuff 🤪!"
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Experiments ⚗️🧪</h1>
          <p>Yo, not sure what this is. Just some random stuff 🤪!</p>
          <p>
            {sensors && (
              <>
                At my apartment the temperature is currently{' '}
                <strong>{sensors.temperature.toFixed(2)}ºC</strong>, the
                humidity is at <strong>{sensors.humidity.toFixed(2)}%</strong>{' '}
                and the air pressure is{' '}
                <strong>{sensors.pressure.toFixed(2)} hPa</strong>. The light
                measures <strong>{sensors.illuminance.full} lx</strong> of which{' '}
                <strong>{sensors.illuminance.ir} lx</strong> is infrared light{' '}
                and <strong>{sensors.illuminance.visible} lx</strong> is visible
                light.
              </>
            )}
          </p>
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Experiments;
