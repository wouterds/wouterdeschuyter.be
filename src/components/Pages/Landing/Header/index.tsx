import React from 'react';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <img src="/static/wouterds.jpg" alt="wouterds.jpg" />
      <h1>Wouter De Schuyter</h1>
      <h2>An ambitious, passionate Full Stack Developer</h2>
    </Container>
  );
};

export default Header;
