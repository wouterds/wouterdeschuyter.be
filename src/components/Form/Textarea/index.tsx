import React, {
  DetailedHTMLProps,
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
} from 'react';

import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  hasError?: boolean;
}

const Textarea = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
  return <textarea {...props} ref={ref} className={styles.textarea} />;
};

export default forwardRef<HTMLTextAreaElement, Props>(Textarea);
