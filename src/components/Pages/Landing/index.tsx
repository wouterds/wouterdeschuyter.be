import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
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
    posts(limit: 3) {
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
        description="Hi, I'm Wouter! I'm an ambitious, passionate Full Stack Developer. I create apps, websites and digital experiences you've been dreaming of."
        extra={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Wouter De Schuyter',
                url: process.env.URL,
                logo: `${process.env.URL}/static/wouterds.jpg`,
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+32479228210',
                    email: 'wouter.de.schuyter@gmail.com',
                    contactType: 'sales',
                  },
                ],
                sameAs: [
                  'https://twitter.com/wouterds',
                  'https://instagram.com/wouterds',
                  'https://facebook.com/wouter.de.schuyter',
                  'https://linkedin.com/in/wouterds',
                  'https://github.com/wouterds',
                ],
              }),
            }}
          />
        }
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
