import { useAmp } from 'next/amp';
import React from 'react';

import { Container } from './styles';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  const isAmp = useAmp();
  const parts = mediaAsset.fileName.split('.');
  const image = `/static/media/${parts[0]}.embed.${parts[1]}`;

  return (
    <Container image={image}>
      {!isAmp && <img loading="lazy" src={image} alt={mediaAsset.name} />}
    </Container>
  );
};

export default Header;
