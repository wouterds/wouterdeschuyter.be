import React, { ReactNode } from 'react';
import { Container } from './styles';
import Field from './Field';
import Label from './Label';
import Input from './Input';
import Button from './Button';

const Form = (props: { children: ReactNode }) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
