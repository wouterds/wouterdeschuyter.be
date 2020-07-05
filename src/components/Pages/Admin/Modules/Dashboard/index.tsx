import Loader from 'components/Loader';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleDashboard = () => {
  return (
    <div className={styles.adminModuleDashboard}>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default AdminModuleDashboard;
