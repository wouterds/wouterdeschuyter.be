import Loader from 'components/Loader';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleAuthenticationRequests = () => {
  return (
    <div className={styles.adminModuleAuthenticationRequests}>
      <Loader />
    </div>
  );
};

export default AdminModuleAuthenticationRequests;
