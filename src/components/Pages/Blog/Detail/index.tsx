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
              <meta
                property="og:image"
                content={`${process.env.URL}/static/media/${data.post.mediaAsset.fileName}`}
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:image"
                content={`${process.env.URL}/static/media/${data.post.mediaAsset.fileName}`}
              />
              <link
                rel="canonical"
                href={`${process.env.URL}/blog/${data.post.slug}`}
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
