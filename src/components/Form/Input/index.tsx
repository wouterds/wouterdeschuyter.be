import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

const Input = (props: InputHTMLAttributes<HTMLElement>) => {
  return <Container {...props} />;
};

export default Input;
