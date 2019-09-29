import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Title, Nav } from './styles';

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <h1>Wouter De Schuyter</h1>
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

export default Header;
