import React, { LabelHTMLAttributes } from 'react';

import { Container } from './styles';

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <Container {...props} />;
};

export default Label;
