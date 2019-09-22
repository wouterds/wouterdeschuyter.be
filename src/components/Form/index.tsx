import React, { ReactNode } from 'react';
import { Container } from './styles';
import Field from './Field';
import Label from './Label';
import Input from './Input';

const Form = (props: { children: ReactNode }) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;

export default Form;
