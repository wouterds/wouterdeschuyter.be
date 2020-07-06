import Loader from 'components/Loader';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleSensors = () => {
  return (
    <div className={styles.adminModuleSensors}>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default AdminModuleSensors;
