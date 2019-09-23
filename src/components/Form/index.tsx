import React, { FormHTMLAttributes } from 'react';
import { Container } from './styles';
import Field from './Field';
import Label from './Label';
import Input from './Input';
import Button from './Button';

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <Container {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
