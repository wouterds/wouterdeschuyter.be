import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { format } from 'date-fns';
import withAuth, { AuthProps } from 'hocs/auth';
import Layout from 'components/Layout';
import Header from 'components/Admin/Header';
import { backgroundColor, Content } from './styles';

const FETCH_DATA = gql`
  query fetchData {
    posts {
      id
      title
      user {
        firstName
        lastName
      }
      status
      publishedAt
      createdAt
    }
  }
`;

const Posts = (props: AuthProps) => {
  const { loading, data } = useQuery(FETCH_DATA);

  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="posts" />
      <Layout.Content>
        <Content>
          <h1>List of posts</h1>
          {loading && <h2>Loading...</h2>}
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th>Identifier</th>
                  <th>Title</th>
                  <th>Autor</th>
                  <th>Status</th>
                  <th>Published at</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
                {data.posts.map((post: any, index: number) => (
                  <tr key={index}>
                    <td>
                      <div>{post.id}</div>
                    </td>
                    <td>
                      <div>{post.title}</div>
                    </td>
                    <td>
                      {post.user.firstName} {post.user.lastName}
                    </td>
                    <td
                      style={{
                        color:
                          post.status === 'PUBLISHED' ? '#2ecc71' : '#e74c3c',
                      }}
                    >
                      {post.status === 'PUBLISHED' && 'Published'}
                      {post.status === 'DELETED' && 'Deleted'}
                      {post.status === 'DRAFT' && 'Draft'}
                    </td>
                    <td>
                      {post.publishedAt
                        ? format(
                            new Date(parseInt(post.publishedAt)),
                            'MMMM do yyyy, HH:mm',
                          )
                        : '--'}
                    </td>
                    <td>
                      {format(
                        new Date(parseInt(post.createdAt)),
                        'MMMM do yyyy, HH:mm',
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Posts);
