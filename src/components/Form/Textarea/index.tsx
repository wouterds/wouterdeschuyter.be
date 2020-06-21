import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
} from 'react';

import styles from './styles.module.css';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  hasError?: boolean;
}

const Textarea = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
  const { hasError } = props;

  return (
    <textarea
      {...props}
      ref={ref}
      className={cx({
        [styles.textarea]: true,
        [styles.error]: hasError,
      })}
    />
  );
};

export default forwardRef<HTMLTextAreaElement, Props>(Textarea);
