import React, {
  DetailedHTMLProps,
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
} from 'react';

import { Container } from './styles';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  hasError?: boolean;
}

const Textarea = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
  return <Container {...props} ref={ref} />;
};

export default forwardRef<HTMLTextAreaElement, Props>(Textarea);
