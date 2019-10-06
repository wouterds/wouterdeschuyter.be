import React from 'react';
import Link from 'next/link';
import { useAmp } from 'next/amp';
import { Container, Title, Nav, Logo } from './styles';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  router: NextRouter;
  hideLogo?: boolean;
  transparent?: boolean;
}

export const Header = (props: Props) => {
  const { router, hideLogo, transparent = false } = props;
  const isAmp = useAmp();

  return (
    <Container>
      {hideLogo !== true && (
        <Title transparent={transparent}>
          <Link href={`/${isAmp ? '?amp=1' : ''}`}>
            <a>
              <Logo />
              <h1>Wouter De Schuyter</h1>
            </a>
          </Link>
        </Title>
      )}
      <Nav transparent={transparent}>
        <Link href={`/about${isAmp ? '?amp=1' : ''}`}>
          <a
            className={
              router.pathname.indexOf('/about') !== -1 ? 'active' : undefined
            }
          >
            About
          </a>
        </Link>
        <Link href={`/blog${isAmp ? '?amp=1' : ''}`}>
          <a
            className={
              router.pathname.indexOf('/blog') !== -1 ? 'active' : undefined
            }
          >
            Blog
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              router.pathname.indexOf('/contact') !== -1 ? 'active' : undefined
            }
          >
            Contact
          </a>
        </Link>
      </Nav>
    </Container>
  );
};

export default withRouter(Header);
