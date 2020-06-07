import { useAmp } from 'next/amp';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  const isAmp = useAmp();
  const parts = mediaAsset.fileName.split('.');
  const image = `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.embed.${parts[1]}`;

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {!isAmp && <img loading="lazy" src={image} alt={mediaAsset.name} />}
    </div>
  );
};

export default Header;
