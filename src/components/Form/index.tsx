import React, { FormHTMLAttributes } from 'react';

import Button from './Button';
import Field from './Field';
import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Button = Button;

export default Form;
