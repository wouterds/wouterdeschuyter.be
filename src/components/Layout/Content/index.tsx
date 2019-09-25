import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

const Content = (props: Props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Content;
