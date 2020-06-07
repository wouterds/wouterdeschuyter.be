import { useAmp } from 'next/amp';
import React from 'react';

import styles from './styles.module.scss';

export const Header = () => {
  const isAmp = useAmp();

  return (
    <header className={styles.header}>
      <div className={styles.image}>
        {isAmp ? (
          <amp-img
            src="/static/wouterds.jpg"
            alt="wouterds.jpg"
            layout="fixed"
            height="7em"
            width="7em"
          />
        ) : (
          <img src="/static/wouterds.jpg" alt="wouterds.jpg" />
        )}
      </div>

      <h1>Wouter De Schuyter</h1>
      <h2>An ambitious, passionate Full Stack Developer</h2>
    </header>
  );
};

export default Header;
