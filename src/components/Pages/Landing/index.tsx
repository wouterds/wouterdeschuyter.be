import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts from 'components/Posts';
import LandingHeader from './Header';
import { MoreLink, Links } from './styles';

const FETCH_DATA = gql`
  query fetchData {
    posts(limit: 5) {
      id
      title
      slug
      excerpt
      publishedAt
    }
  }
`;

const Landing = () => {
  const { data } = useQuery(FETCH_DATA);

  return (
    <Layout>
      <Header hideLogo />
      <Layout.Content centered>
        <LandingHeader />
        {data && <Posts posts={data.posts} />}

        <Links>
          <Link href="/blog" passHref>
            <MoreLink>More posts</MoreLink>
          </Link>
        </Links>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Landing;
