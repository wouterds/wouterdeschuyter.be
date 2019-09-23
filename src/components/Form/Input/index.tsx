import React, {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  Ref,
} from 'react';
import { Container } from './styles';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: Props, ref: Ref<HTMLInputElement>) => {
  return <Container {...props} ref={ref} />;
};

export default forwardRef<HTMLInputElement, Props>(Input);
