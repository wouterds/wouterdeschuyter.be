import React, { LabelHTMLAttributes } from 'react';

import styles from './styles.module.scss';

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} className={styles.label} />;
};

export default Label;
