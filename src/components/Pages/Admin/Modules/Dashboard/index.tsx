import { useUser } from 'data/user';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleDashboard = () => {
  const [user] = useUser();

  return <div className={styles.adminModuleDashboard}>Hi, {user?.name}</div>;
};

export default AdminModuleDashboard;
