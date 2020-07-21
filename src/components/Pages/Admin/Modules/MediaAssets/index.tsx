import { useQuery } from '@apollo/client';
import Loader from 'components/Loader';
import Table from 'components/Table';
import { format as formatDate } from 'date-fns';
import gql from 'graphql-tag';
import humanFormat from 'human-format';
import React from 'react';

import styles from './styles.module.css';

type MediaAsset = {
  id: string;
  name: string;
  imagePreview: string;
  fileName: string;
  mediaType: string;
  size?: number;
  width?: number;
  height?: number;
  url: string;
  createdAt: string;
};

const AdminModuleMediaAssets = () => {
  const { data, loading } = useQuery<{ mediaAssets: MediaAsset[] }>(
    gql`
      query {
        mediaAssets {
          id
          name
          imagePreview
          fileName
          mediaType
          size
          width
          height
          url
          createdAt
        }
      }
    `,
  );

  const mediaAssets = data?.mediaAssets || [];
  if (mediaAssets.length === 0 && loading) {
    return (
      <div className={styles.adminModuleMediaAssets}>
        <div className={styles.loader}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminModuleMediaAssets}>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Media type</th>
              <th>Dimensions</th>
              <th>Size</th>
              <th>Url</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {mediaAssets.map((mediaAsset) => {
              const { fileName } = mediaAsset;

              let image = null;
              if (fileName) {
                const parts = fileName.split('.');
                image = `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.thumbnail.${parts[1]}`;
              }

              return (
                <tr key={`mediaAsset-${mediaAsset.id}`}>
                  <td className={styles.asset}>
                    <div>
                      <div
                        className={styles.avatar}
                        style={
                          mediaAsset.imagePreview
                            ? {
                                backgroundImage: `url('${mediaAsset.imagePreview}')`,
                              }
                            : undefined
                        }
                      >
                        {image && <img src={image} loading="lazy" />}
                      </div>
                      <div className={styles.details}>
                        <div className={styles.name}>{mediaAsset.name}</div>
                        <div>{mediaAsset.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{mediaAsset.mediaType || '--'}</td>
                  <td>
                    {mediaAsset.width && mediaAsset.width
                      ? `${mediaAsset.width}x${mediaAsset.height}`
                      : '--'}
                  </td>
                  <td>
                    {mediaAsset.size
                      ? humanFormat(mediaAsset.size, { unit: 'B' })
                      : '--'}
                  </td>
                  <td>{mediaAsset.url || '--'}</td>
                  <td>
                    {formatDate(
                      new Date(parseInt(`${mediaAsset.createdAt}`)),
                      'd MMMM, yyyy HH:mm',
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Table>
    </div>
  );
};

export default AdminModuleMediaAssets;
