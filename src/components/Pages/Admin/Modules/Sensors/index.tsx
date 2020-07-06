import Loader from 'components/Loader';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleAccessTokens = () => {
  return (
    <div className={styles.adminModuleAccessTokens}>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default AdminModuleAccessTokens;
