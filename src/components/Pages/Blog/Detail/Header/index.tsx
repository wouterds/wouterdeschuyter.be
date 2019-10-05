import React from 'react';
import { Container } from './styles';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  const image = `/static/media/${mediaAsset.fileName}`;

  return (
    <Container image={image}>
      <img src={image} alt={mediaAsset.name} />
    </Container>
  );
};

export default Header;
