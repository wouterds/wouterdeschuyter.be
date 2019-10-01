import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts from 'components/Posts';
import { Container } from './styles';

const FETCH_DATA = gql`
  query fetchData {
    posts {
      id
      title
      slug
      excerpt
      publishedAt
    }
  }
`;

const Blog = () => {
  const { data } = useQuery(FETCH_DATA);

  return (
    <Layout>
      <Header />
      <Layout.Content centered>
        <Container>{data && <Posts posts={data.posts} />}</Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Blog;
