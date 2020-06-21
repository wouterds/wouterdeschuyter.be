import React, { HTMLAttributes } from 'react';

import styles from './styles.module.css';

const Field = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={styles.field} />;
};

export default Field;
