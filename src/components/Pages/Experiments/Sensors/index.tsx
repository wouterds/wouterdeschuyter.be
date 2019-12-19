import React, { useState, useEffect } from 'react';
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
  temperature: number | null;
  humidity: number | null;
  pressure: number | null;
  illuminance: {
    ir: number | null;
    visible: number | null;
    full: number | null;
  };
};

const Sensors = () => {
  const [sensors, setSensors] = useState<Sensors | null>(null);

  const { data }: { data?: { sensors?: Sensor[] } } = useQuery(FETCH_DATA, {
    pollInterval: 1000,
  });

  useEffect(() => {
    if (data?.sensors && Array.isArray(data?.sensors)) {
      if (data?.sensors.length === 0) {
        return;
      }

      const temperature = find(data.sensors, {
        type: 'temperature',
      });
      const humidity = find(data.sensors, {
        type: 'humidity',
      });
      const pressure = find(data.sensors, {
        type: 'pressure',
      });
      const illuminance = {
        ir: find(data.sensors, {
          type: 'illuminance:ir',
        }),
        visible: find(data.sensors, {
          type: 'illuminance:visible',
        }),
        full: find(data.sensors, {
          type: 'illuminance:full',
        }),
      };

      setSensors({
        temperature: temperature ? temperature.value : null,
        humidity: humidity ? humidity.value : null,
        pressure: pressure ? pressure.value : null,
        illuminance: {
          ir: illuminance.ir ? illuminance.ir.value : null,
          visible: illuminance.visible ? illuminance.visible.value : null,
          full: illuminance.full ? illuminance.full.value : null,
        },
      });
    }
  }, [data]);

  if (!sensors) {
    return null;
  }

  return (
    <p>
      At my apartment the temperature is currently{' '}
      <strong>
        {sensors.temperature ? sensors.temperature.toFixed(2) : '--'}ºC
      </strong>
      , the humidity is at{' '}
      <strong>{sensors.humidity ? sensors.humidity.toFixed(2) : '--'}%</strong>{' '}
      and the air pressure is{' '}
      <strong>
        {sensors.pressure ? sensors.pressure.toFixed(2) : '--'} hPa
      </strong>
      . The light measures{' '}
      <strong>{sensors.illuminance.full || '--'} lx</strong> of which{' '}
      <strong>{sensors.illuminance.ir || '--'} lx</strong> is infrared light and{' '}
      <strong>{sensors.illuminance.visible || '--'} lx</strong> is visible
      light.
    </p>
  );
};

export default Sensors;
