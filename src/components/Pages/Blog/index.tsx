import React from 'react';
import { NextPageContext } from 'next';
import gql from 'graphql-tag';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts, { Post } from 'components/Posts';
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
  posts: Post[];
}

const Blog = (props: Props) => {
  const { posts } = props;

  return (
    <Layout>
      <Header />
      <Layout.Content centered editorial={posts.length === 0}>
        <Container>
          {posts.length === 0 && (
            <>
              <h1>The end</h1>
              <p>
                Looks like you reached the end of my blog, no more posts here!
              </p>
            </>
          )}
          {posts.length > 0 && <Posts posts={posts} />}
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

Blog.getInitialProps = async ({
  query,
  apolloClient,
  res,
}: NextPageContext) => {
  let { page = 1 } = query;

  page = Number(page);
  if (Number.isNaN(page)) {
    page = 1;

    if (res) {
      res.statusCode = 404;
    }
  }

  page = page - 1;
  if (page < 0) {
    page = 0;

    if (res) {
      res.statusCode = 404;
    }
  }

  const { posts } = (await apolloClient.query({
    query: FETCH_DATA,
    variables: { limit: POSTS_PER_PAGE, offset: page * POSTS_PER_PAGE },
  })).data;

  if (posts.length === 0 && res) {
    res.statusCode = 404;
  }

  return { page, posts };
};

export default Blog;
