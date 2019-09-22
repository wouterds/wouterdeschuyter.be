import React, { LabelHTMLAttributes } from 'react';
import { Container } from './styles';

const Label = (props: LabelHTMLAttributes<HTMLElement>) => {
  return <Container {...props} />;
};

export default Label;
