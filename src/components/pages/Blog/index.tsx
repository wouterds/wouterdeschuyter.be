import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Layout from 'components/Layout';
import Header from 'components/Header';

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

const Blog = () => {
  const { data } = useQuery(FETCH_DATA);

  console.log({ data });

  return (
    <Layout>
      <Header />
      <Layout.Content centered>
        {data &&
          data.posts.map((post: any, index: number) => (
            <article key={index}>
              <header>
                <h2>{post.title}</h2>
              </header>
            </article>
          ))}
      </Layout.Content>
    </Layout>
  );
};

export default Blog;
