import { useQuery } from '@apollo/client';
import cx from 'classnames';
import Loader from 'components/Loader';
import Table from 'components/Table';
import { format as formatDate } from 'date-fns';
import gql from 'graphql-tag';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import styles from './styles.module.css';

type PostAlias = {
  id: string;
  slug: string;
  createdAt: string;
  post: {
    id: string;
    title: string;
    slug: string;
    mediaAsset?: {
      imagePreview: string;
      fileName: string;
    };
  };
};

const AdminModulePostAliases = () => {
  const { data, loading } = useQuery<{ postAliases: PostAlias[] }>(
    gql`
      query {
        postAliases {
          id
          slug
          createdAt
          post {
            id
            slug
            title
            mediaAsset {
              imagePreview
              fileName
            }
          }
        }
      }
    `,
  );

  const postAliases = data?.postAliases || [];
  if (postAliases.length === 0 && loading) {
    return (
      <div className={styles.adminModulePostAliases}>
        <div className={styles.loader}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminModulePostAliases}>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Alias slug</th>
              <th />
              <th>Post slug</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {postAliases.map((postAlias) => {
              const { post } = postAlias;
              const { mediaAsset } = post;

              let image = null;
              if (mediaAsset?.fileName) {
                const parts = mediaAsset?.fileName.split('.');
                image = `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.thumbnail.${parts[1]}`;
              }

              return (
                <tr key={`post-alias-${postAlias.id}`}>
                  <td className={styles.post}>
                    <div>
                      <div
                        className={styles.avatar}
                        style={
                          mediaAsset?.imagePreview
                            ? {
                                backgroundImage: `url('${mediaAsset?.imagePreview}')`,
                              }
                            : undefined
                        }
                      >
                        {image && <img src={image} loading="lazy" />}
                      </div>
                      <div className={styles.details}>
                        <div className={styles.name}>
                          {postAlias.post.title}
                        </div>
                        <div>{postAlias.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className={cx(styles.slug, styles.old)}>
                    <div>{postAlias.slug || '--'}</div>
                  </td>
                  <td className={styles.arrow}>
                    <FaArrowCircleRight />
                  </td>
                  <td className={cx(styles.slug, styles.new)}>
                    <div>{postAlias.post.slug || '--'}</div>
                  </td>
                  <td>
                    {postAlias.createdAt
                      ? formatDate(
                          new Date(parseInt(`${postAlias.createdAt}`)),
                          'd MMMM, yyyy HH:mm',
                        )
                      : '--'}
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

export default AdminModulePostAliases;
