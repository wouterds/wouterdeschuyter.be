import React from 'react';

import styles from './styles.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.container}>
      <span className={styles.spinner}>
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
          />
          <path fill="currentColor" d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z" />
        </svg>
      </span>
      <span className={styles.content}>Loading</span>
    </div>
  </div>
);

export default Loader;
