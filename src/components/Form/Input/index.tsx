import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react';

import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hasError?: boolean;
}

const Input = (props: Props, ref: Ref<HTMLInputElement>) => {
  return <input {...props} ref={ref} className={styles.input} />;
};

export default forwardRef<HTMLInputElement, Props>(Input);
