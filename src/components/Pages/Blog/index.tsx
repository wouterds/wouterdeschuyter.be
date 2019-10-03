import React from 'react';
import { NextPageContext } from 'next';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts from 'components/Posts';
import { Container } from './styles';

const POSTS_PER_PAGE = 10;

const FETCH_DATA = gql`
  query fetchData($limit: Int, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
      id
      title
      slug
      excerpt
      publishedAt
    }
  }
`;

interface Props {
  page: number;
}

const Blog = (props: Props) => {
  const { page } = props;
  const { data } = useQuery(FETCH_DATA, {
    variables: { limit: POSTS_PER_PAGE, offset: page * POSTS_PER_PAGE },
  });

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

Blog.getInitialProps = async ({ query }: NextPageContext) => {
  let { page = 1 } = query;

  page = Number(page);
  if (Number.isNaN(page)) {
    page = 1;
  }

  page = page - 1;
  if (page < 0) {
    page = 0;
  }

  return { page };
};

export default Blog;
