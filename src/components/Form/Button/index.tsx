import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

const Button = (props: ButtonHTMLAttributes<HTMLElement>) => {
  return <Container {...props} />;
};

export default Button;
