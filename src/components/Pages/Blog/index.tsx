import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Posts, { Post } from 'components/Posts';
import gql from 'graphql-tag';
import { NextPageContext } from 'next';
import Link from 'next/link';
import React from 'react';
import Network from 'services/network';

import styles from './styles.module.css';

const POSTS_PER_PAGE = 7;

interface Props {
  page: number;
  posts: Post[];
  postCount: number;
}

const Blog = (props: Props) => {
  const { posts, postCount, page } = props;
  const hasPrevPage = page > 0;
  const hasNextPage = page * POSTS_PER_PAGE < postCount;

  return (
    <Layout>
      <Meta
        title="Blog"
        description="This is my primary place on the internet where I collect things I made for myself, others or clients. I also write sometimes about things I like, things I experienced, guides, tutorials and more."
        extra={
          <>
            {hasPrevPage && (
              <link
                rel="prev"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/blog?page=${page}`}
              />
            )}
            {hasNextPage && (
              <link
                rel="next"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/blog?page=${
                  page + 2
                }`}
              />
            )}
            <link
              rel="canonical"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/blog${
                page > 0 ? `?page=${page + 1}` : ''
              }`}
            />
            {page !== 0 && <meta name="robots" content="noindex, follow" />}
          </>
        }
      />
      <Header />
      <Layout.Content editorial>
        <>
          {posts.length === 0 && (
            <>
              <h1>The end</h1>
              <p>
                Looks like you reached the end of my blog, no more posts here!
              </p>
            </>
          )}
          {posts.length > 0 && (
            <>
              <h1>Blog</h1>
              <Posts posts={posts} />
            </>
          )}

          {(hasNextPage || hasPrevPage) && (
            <div className={styles.links}>
              {hasPrevPage ? (
                <Link href={`/blog?page=${page}`}>
                  <a>&laquo; previous</a>
                </Link>
              ) : (
                <span />
              )}
              {hasNextPage && (
                <Link href={`/blog?page=${page + 2}`}>
                  <a>next &raquo;</a>
                </Link>
              )}
            </div>
          )}
        </>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

Blog.getInitialProps = async ({ query, res }: NextPageContext) => {
  let { page = 1 } = query;

  if (page === '1' && res) {
    return res.writeHead(302, { Location: '/blog' }).end();
  }

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

  const { posts, postCount } = (
    await Network.apollo.query({
      query: gql`
        query fetchData($limit: Int, $offset: Int) {
          postCount
          posts(limit: $limit, offset: $offset) {
            id
            title
            slug
            excerpt
            publishedAt
          }
        }
      `,
      variables: { limit: POSTS_PER_PAGE, offset: page * POSTS_PER_PAGE },
    })
  ).data;

  if (posts.length === 0 && res) {
    res.statusCode = 404;
  }

  return { page, posts, postCount };
};

export default Blog;
