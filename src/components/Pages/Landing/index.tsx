/* eslint-disable simple-import-sort/sort */
import { useQuery } from '@apollo/react-hooks';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Posts from 'components/Posts';
import gql from 'graphql-tag';
import Link from 'next/link';
import React from 'react';
import Header from 'components/Header';
import LandingHeader from './Header';
import styles from './styles.module.css';

const Landing = () => {
  const { data } = useQuery(gql`
    query fetchData {
      posts(limit: 3) {
        id
        title
        slug
        excerpt
        publishedAt
      }
    }
  `);

  return (
    <Layout>
      <Meta
        title="Wouter De Schuyter"
        description="An ambitious, passionate Full Stack Developer. Loves making kickass digital products."
        extra={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Wouter De Schuyter',
                url: process.env.NEXT_PUBLIC_APP_URL,
                logo: `${process.env.NEXT_PUBLIC_APP_URL}/static/wouterds.jpg`,
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
      <Layout.Content>
        <LandingHeader />
        {data && <Posts posts={data.posts} />}

        <div className={styles.links}>
          <Link href="/blog">
            <a>more &raquo;</a>
          </Link>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Landing;
