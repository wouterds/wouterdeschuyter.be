import React from 'react';
import { NextPageContext } from 'next';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Markdown from 'components/Markdown';
import LocalHeader from './Header';
import { Container, Body } from './styles';

const FETCH_DATA = gql`
  query fetchData($slug: String!) {
    post(slug: $slug) {
      id
      title
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

const Detail = (props: Props) => {
  const { slug } = props;
  const { data } = useQuery(FETCH_DATA, { variables: { slug } });

  return (
    <Layout>
      {data && data.post && <Meta title={data.post.title} />}
      <Header transparent={true} />
      {data && data.post && <LocalHeader mediaAsset={data.post.mediaAsset} />}
      <Layout.Content centered editorial>
        <Container>
          {data && data.post && (
            <Body>
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
