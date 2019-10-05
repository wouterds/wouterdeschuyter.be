import React from 'react';
import { Container } from './styles';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  return (
    <Container>
      <img src={`/static/media/${mediaAsset.fileName}`} alt={mediaAsset.name} />
    </Container>
  );
};

export default Header;
