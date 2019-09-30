import React from 'react';
import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <p>&copy; Copyright {new Date().getFullYear()} Wouter De Schuyter</p>
      <p>
        Made with React, GraphQL &amp; Node.js. Running in Docker on a Raspberry
        Pi 4 ❤️.
      </p>
    </Container>
  );
};

export default Footer;
