import React from 'react';
import { useAmp } from 'next/amp';
import { Container } from './styles';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  const isAmp = useAmp();
  const image = `/static/media/${mediaAsset.fileName}`;

  return (
    <Container image={image}>
      {!isAmp && <img src={image} alt={mediaAsset.name} />}
    </Container>
  );
};

export default Header;
