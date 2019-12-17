import React from 'react';
import { Container } from './styles';

interface Props {
  centered?: boolean;
}

export const Footer = (props: Props) => {
  const { centered = false } = props;

  return (
    <Container centered={centered}>
      <p>&copy; Copyright {new Date().getFullYear()} Wouter De Schuyter</p>
      <p>
        Made with React, GraphQL &amp; Node.js - running in Docker on a
        Raspberry Pi 4 ❤️
      </p>
    </Container>
  );
};

export default Footer;
