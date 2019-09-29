import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
  centered?: boolean;
  editorial?: boolean;
}

const Content = (props: Props) => {
  const { children, centered, editorial } = props;

  return (
    <Container centered={centered} editorial={editorial}>
      {children}
    </Container>
  );
};

export default Content;
