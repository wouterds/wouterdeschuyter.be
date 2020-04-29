import React from 'react';

import { Container } from './styles';

interface Props {
  centered?: boolean;
}

export const Footer = (props: Props) => {
  const { centered = false } = props;

  return (
    <Container centered={centered}>
      <p>
        &copy; Copyright {new Date().getFullYear()} Wouter De Schuyter -
        BE0745.964.642
      </p>
      <p>
        Made in TypeScript using React, GraphQL, Node.js and a few other
        packages ✨
      </p>
    </Container>
  );
};

export default Footer;
