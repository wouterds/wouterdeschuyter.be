import cx from 'classnames';
import React, { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  hasError?: boolean;
}

const Label = (props: Props) => {
  const { hasError } = props;

  return (
    <label
      {...props}
      className={cx({
        [styles.label]: true,
        [styles.error]: hasError,
      })}
    />
  );
};

export default Label;
