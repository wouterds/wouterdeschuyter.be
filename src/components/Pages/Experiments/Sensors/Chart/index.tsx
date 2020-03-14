import React from 'react';
import { AreaChart, Area, YAxis } from 'recharts';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  // data: Array<{ data: number }>;
  color: string;
}

const Chart = (props: Props) => {
  const { color } = props;

  const dummyData = [
    { data: 21.47 },
    { data: 21.53 },
    { data: 21.68 },
    { data: 21.83 },
    { data: 22.06 },
    { data: 22.12 },
    { data: 22.36 },
    { data: 22.43 },
    { data: 22.49 },
    { data: 22.43 },
    { data: 22.38 },
  ];

  const id = uuidv4();

  return (
    <AreaChart
      width={200}
      height={60}
      data={dummyData}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="10%" stopColor={color} stopOpacity={0.5} />
          <stop offset="90%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="data"
        stroke={color}
        strokeWidth={1.5}
        fill={`url(#${id})`}
      />

      <YAxis domain={['auto', 'auto']} hide={true} />
    </AreaChart>
  );
};

export default Chart;
