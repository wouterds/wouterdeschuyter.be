import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

const Table = (props: Props) => (
  <div className={styles.table}>{props.children}</div>
);

export default Table;
