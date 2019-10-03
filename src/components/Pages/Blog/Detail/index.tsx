import React from 'react';
import { NextPageContext } from 'next';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './styles';

const FETCH_DATA = gql`
  query fetchData($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      body
      publishedAt
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
      <Header />
      <Layout.Content centered editorial>
        <Container>{data && data.post && <h1>{data.post.title}</h1>}</Container>
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
