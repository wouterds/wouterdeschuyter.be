import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Markdown from 'components/Markdown';
import Meta from 'components/Meta';
import Error from 'components/Pages/Error';
import Webmentions from 'components/Webmentions';
import { format } from 'date-fns';
import gql from 'graphql-tag';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import Network from 'services/network';

import LocalHeader from './Header';
import styles from './styles.module.css';

const MediumZoomHelper = dynamic(() => import('./Helpers/MediumZoom'));
const HighlightjsHelper = dynamic(() => import('./Helpers/Highlightjs'));

const FETCH_DATA = gql`
  query fetchData($slug: String!) {
    post(slug: $slug) {
      id
      title
      excerpt
      slug
      body
      publishedAt
      mediaAsset {
        fileName
      }
      user {
        firstName
        lastName
      }
    }
  }
`;

interface Props {
  post: any;
}

const Detail = (props: Props) => {
  const { post } = props;

  if (!post) {
    return <Error />;
  }

  const parts = post.mediaAsset.fileName.split('.');
  const image = parts
    ? `${process.env.NEXT_PUBLIC_APP_URL}/static/media/${parts[0]}.embed.${parts[1]}`
    : undefined;

  return (
    <Layout>
      <Meta
        title={post.title}
        description={post.excerpt}
        extra={
          <>
            {post.publishedAt && (
              <meta
                property="article:published_time"
                content={new Date(parseInt(post.publishedAt)).toISOString()}
              />
            )}
            <meta property="og:type" content="article" />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <link
              rel="canonical"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'NewsArticle',
                  mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
                  },
                  headline: post.title,
                  description: post.excerpt,
                  image: [image],
                  datePublished: post.publishedAt
                    ? new Date(parseInt(post.publishedAt)).toISOString()
                    : undefined,
                  dateModified: post.publishedAt
                    ? new Date(parseInt(post.publishedAt)).toISOString()
                    : undefined,
                  author: {
                    '@type': 'Person',
                    name: `${post.user.firstName} ${post.user.lastName}`,
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Wouter De Schuyter',
                    url: process.env.NEXT_PUBLIC_APP_URL,
                    logo: {
                      '@type': 'ImageObject',
                      url: `${process.env.NEXT_PUBLIC_APP_URL}/static/wouterds.jpg`,
                    },
                  },
                }),
              }}
            />
          </>
        }
      />
      <Header transparent={true} />
      <LocalHeader mediaAsset={post.mediaAsset} />
      <Layout.Content centered editorial>
        <div className={styles['blog-detail']}>
          <header>
            <time
              dateTime={(post.publishedAt
                ? new Date(parseInt(post.publishedAt))
                : new Date()
              ).toISOString()}
            >
              {format(
                post.publishedAt
                  ? new Date(parseInt(post.publishedAt))
                  : new Date(),
                'MMM d, yyyy',
              )}
            </time>
          </header>
          <h1>{post.title}</h1>
          <Markdown markdown={post.body} />
          <Webmentions
            url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`}
          />
        </div>
      </Layout.Content>
      <Footer centered />
      <MediumZoomHelper />
      <HighlightjsHelper />
    </Layout>
  );
};

Detail.getInitialProps = async ({ query, res }: NextPageContext) => {
  const { slug } = query;

  const { post } = (
    await Network.apollo.query({
      query: FETCH_DATA,
      variables: { slug },
    })
  ).data;

  if (!post && res) {
    const parts = (slug as string).split('-');
    const lastPart = parts.pop();

    if (!isNaN(lastPart as any)) {
      const newSlug = parts.join('-');

      const { post: fallbackPost } = (
        await Network.apollo.query({
          query: FETCH_DATA,
          variables: { slug: newSlug },
        })
      ).data;

      if (fallbackPost) {
        return res
          .writeHead(301, { Location: `/blog/${parts.join('-')}` })
          .end();
      }
    }

    res.statusCode = 404;
  }

  try {
    Network.apollo.mutate({
      mutation: gql`
        mutation increaseViewCount($id: String!) {
          increaseViewCount(id: $id)
        }
      `,
      variables: { id: post.id },
    });
  } catch (e) {}

  return { post };
};

export default Detail;
