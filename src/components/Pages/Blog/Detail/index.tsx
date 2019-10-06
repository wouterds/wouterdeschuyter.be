import React, { useEffect } from 'react';
import { NextPageContext } from 'next';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import mediumZoom from 'medium-zoom';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Markdown from 'components/Markdown';
import LocalHeader from './Header';
import { Container, Body } from './styles';
import { format } from 'date-fns';

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
  slug: string;
}

export const config = { amp: 'hybrid' };

const Detail = (props: Props) => {
  const { slug } = props;
  const { data } = useQuery(FETCH_DATA, { variables: { slug } });

  useEffect(() => {
    mediumZoom('.media--image img', { margin: 25 });

    document
      .querySelectorAll('pre code')
      .forEach(block => hljs.highlightBlock(block));
  }, []);

  const parts =
    (data && data.post && data.post.mediaAsset.fileName.split('.')) || null;
  const image = parts
    ? `${process.env.URL}/static/media/${parts[0]}.embed.${parts[1]}`
    : undefined;

  return (
    <Layout>
      {data && data.post && (
        <Meta
          title={data.post.title}
          description={data.post.excerpt}
          extra={
            <>
              <meta
                property="article:published_time"
                content={new Date(
                  parseInt(data.post.publishedAt),
                ).toISOString()}
              />
              <meta property="og:type" content="article" />
              <meta property="og:image" content={image} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:image" content={image} />
              <link
                rel="canonical"
                href={`${process.env.URL}/blog/${data.post.slug}`}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'NewsArticle',
                    mainEntityOfPage: {
                      '@type': 'WebPage',
                      '@id': `${process.env.article}/blog/${data.post.slug}`,
                    },
                    headline: data.post.title,
                    description: data.post.excerpt,
                    image: [image],
                    datePublished: new Date(
                      parseInt(data.post.publishedAt),
                    ).toISOString(),
                    author: {
                      '@type': 'Person',
                      name: `${data.post.user.firstName} ${data.post.user.lastName}`,
                    },
                  }),
                }}
              />
            </>
          }
        />
      )}
      <Header transparent={true} />
      {data && data.post && <LocalHeader mediaAsset={data.post.mediaAsset} />}
      <Layout.Content centered editorial>
        <Container>
          {data && data.post && (
            <Body>
              <header>
                <time
                  dateTime={new Date(
                    parseInt(data.post.publishedAt),
                  ).toISOString()}
                >
                  {format(
                    new Date(parseInt(data.post.publishedAt)),
                    'MMM d, yyyy',
                  )}
                </time>
              </header>
              <h1>{data.post.title}</h1>
              <Markdown markdown={data.post.body} />
            </Body>
          )}
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

Detail.getInitialProps = ({ query }: NextPageContext) => {
  const { slug } = query;

  return { slug };
};

export default Detail;
