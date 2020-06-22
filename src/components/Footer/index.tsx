import React from 'react';

import styles from './styles.module.css';

export const Footer = () => (
  <div className={styles.footer}>
    <p>
      &copy; Copyright {new Date().getFullYear()} Wouter De Schuyter -
      BE0745.964.642
    </p>
    <p>Made in TypeScript using Next.js, GraphQL and a few other packages ✨</p>
  </div>
);

export default Footer;
