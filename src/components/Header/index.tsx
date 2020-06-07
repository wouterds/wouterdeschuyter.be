import cx from 'classnames';
import { useAmp } from 'next/amp';
import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  router: NextRouter;
  hideLogo?: boolean;
  transparent?: boolean;
}

export const Header = (props: Props) => {
  const { router, hideLogo, transparent } = props;
  const isAmp = useAmp();

  return (
    <div
      className={cx({
        [styles.header]: true,
        [styles.transparent]: transparent,
      })}
    >
      {hideLogo !== true && (
        <div className={styles.title}>
          <Link href={`/${isAmp ? '?amp=1' : ''}`}>
            <a>
              <div className={styles.logo} />
              <h1>Wouter De Schuyter</h1>
            </a>
          </Link>
        </div>
      )}
      <nav className={styles.nav}>
        <Link href={`/about${isAmp ? '?amp=1' : ''}`}>
          <a
            className={cx({
              [styles.active]: router.pathname.indexOf('/about') !== -1,
            })}
          >
            About
          </a>
        </Link>
        <Link href={`/blog${isAmp ? '?amp=1' : ''}`}>
          <a
            className={cx({
              [styles.active]: router.pathname.indexOf('/blog') !== -1,
            })}
          >
            Blog
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={cx({
              [styles.active]: router.pathname.indexOf('/contact') !== -1,
            })}
          >
            Contact
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default withRouter(Header);
