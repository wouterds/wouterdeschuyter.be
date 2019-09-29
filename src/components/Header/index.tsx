import React from 'react';
import Link from 'next/link';
import { Container, Title, Nav } from './styles';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  router: NextRouter;
}

export const Header = (props: Props) => {
  const { router } = props;

  return (
    <Container>
      <Title>
        <Link href="/">
          <a>
            <h1>Wouter De Schuyter</h1>
          </a>
        </Link>
      </Title>
      <Nav>
        <Link href="/about">
          <a
            className={
              router.pathname.indexOf('/about') !== -1 ? 'active' : undefined
            }
          >
            About
          </a>
        </Link>
        <Link href="/blog">
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
