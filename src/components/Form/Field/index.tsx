import React, { ReactNode } from 'react';
import { Container } from './styles';

const Field = (props: { children: ReactNode }) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Field;
