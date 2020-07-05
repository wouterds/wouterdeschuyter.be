import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';
import Table from 'components/Table';
import { format as formatDate } from 'date-fns';
import gql from 'graphql-tag';
import humanFormat from 'human-format';
import React from 'react';

import styles from './styles.module.css';

type Post = {
  id: string;
  title: string;
  slug: string;
  status: string;
  views: number;
  mediaAsset?: {
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
  user: {
    name: string;
  };
  publishedAt: string;
};

const AdminModulePosts = () => {
  const { data } = useQuery<{ posts: Post[] }>(
    gql`
      query {
        posts(includeDrafts: true) {
          id
          title
          slug
          status
          publishedAt
          views
          user {
            name
          }
          mediaAsset {
            imagePreview
            fileName
          }
        }
      }
    `,
  );

  return (
    <div className={styles.adminModulePosts}>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Views</th>
              <th>Author</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {(data?.posts || []).map((post) => {
              const { mediaAsset } = post;

              let image = null;
              if (mediaAsset?.fileName) {
                const parts = mediaAsset?.fileName.split('.');
                image = `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.thumbnail.${parts[1]}`;
              }

              return (
                <tr key={`mediaAsset-${post.id}`}>
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
                        <div className={styles.name}>{post.title}</div>
                        <div>{post.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.slug}>
                    <div>{post.slug || '--'}</div>
                  </td>
                  <td>
                    <span
                      className={cx({
                        [styles.status]: true,
                        [styles.published]: post.status === 'published',
                        [styles.draft]: post.status === 'draft',
                        [styles.deleted]: post.status === 'deleted',
                      })}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td>{humanFormat(post.views).toUpperCase()}</td>
                  <td>{post.user.name}</td>
                  <td>
                    {post.publishedAt
                      ? formatDate(
                          new Date(parseInt(`${post.publishedAt}`)),
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

export default AdminModulePosts;
