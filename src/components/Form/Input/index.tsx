import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react';

import { Container } from './styles';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hasError?: boolean;
}

const Input = (props: Props, ref: Ref<HTMLInputElement>) => {
  return <Container {...props} ref={ref} />;
};

export default forwardRef<HTMLInputElement, Props>(Input);
