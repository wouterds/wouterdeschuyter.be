import cx from 'classnames';
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
  const { hasError } = props;

  return (
    <input
      {...props}
      ref={ref}
      className={cx({
        [styles.input]: true,
        [styles.error]: hasError,
      })}
    />
  );
};

export default forwardRef<HTMLInputElement, Props>(Input);
