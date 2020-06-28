import React from 'react';

import styles from './styles.module.css';

interface Props {
  mediaAsset: {
    fileName: string;
    name: string;
    imagePreview: string;
  };
}

export const Header = ({ mediaAsset }: Props) => {
  const { fileName, imagePreview } = mediaAsset;
  const parts = fileName.split('.');
  const image = `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.embed.${parts[1]}`;

  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `url('${image}'), url('${imagePreview}')`,
      }}
    >
      <img loading="lazy" src={image} alt={mediaAsset.name} />
    </div>
  );
};

export default Header;
