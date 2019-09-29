import React, { FormHTMLAttributes } from 'react';
import { Container } from './styles';
import Field from './Field';
import Label from './Label';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <Container {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Button = Button;

export default Form;
