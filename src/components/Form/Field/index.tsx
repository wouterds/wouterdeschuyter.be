import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

const Field = (props: HTMLAttributes<HTMLDivElement>) => {
  return <Container {...props} />;
};

export default Field;
