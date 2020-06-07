import React, { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

const Field = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={styles.field} />;
};

export default Field;
