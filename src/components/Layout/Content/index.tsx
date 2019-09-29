import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
  centered?: boolean;
}

const Content = (props: Props) => {
  const { children, centered } = props;

  return <Container centered={centered}>{children}</Container>;
};

export default Content;
