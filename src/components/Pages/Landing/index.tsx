import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import { useAmp } from 'next/amp';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts from 'components/Posts';
import LandingHeader from './Header';
import Meta from 'components/Meta';
import { Links } from './styles';

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

export const config = { amp: 'hybrid' };

const Landing = () => {
  const { data } = useQuery(FETCH_DATA);
  const isAmp = useAmp();

  return (
    <Layout>
      <Meta
        title="Wouter De Schuyter"
        description="An ambitious, passionate Full Stack Developer."
      />
      <Header hideLogo />
      <Layout.Content centered>
        <LandingHeader />
        {data && <Posts posts={data.posts} />}

        <Links>
          <Link href={`/blog${isAmp ? '?amp=1' : ''}`}>
            <a>more &raquo;</a>
          </Link>
        </Links>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Landing;
