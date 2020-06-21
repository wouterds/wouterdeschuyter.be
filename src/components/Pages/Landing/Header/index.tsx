import React from 'react';

import styles from './styles.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.image}>
      <img src="/static/wouterds.jpg" alt="wouterds.jpg" />
    </div>

    <h1>Wouter De Schuyter</h1>
    <h2>An ambitious, passionate Full Stack Developer</h2>
  </header>
);

export default Header;
