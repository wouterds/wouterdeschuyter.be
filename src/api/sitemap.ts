import { NextApiRequest, NextApiResponse } from 'next';
import {
  createSitemap,
  ISitemapItemOptionsLoose,
  EnumChangefreq,
} from 'sitemap';
import Apollo from 'services/apollo';
import gql from 'graphql-tag';

const FETCH_POSTS = gql`
  query fetchData {
    posts {
      slug
      publishedAt
    }
  }
`;

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const urls: ISitemapItemOptionsLoose[] = [
    { url: '/', changefreq: EnumChangefreq.DAILY, priority: 1 },
    { url: '/about', changefreq: EnumChangefreq.WEEKLY, priority: 0.7 },
    { url: '/blog', changefreq: EnumChangefreq.DAILY, priority: 0.7 },
    { url: '/contact', changefreq: EnumChangefreq.WEEKLY, priority: 0.7 },
  ];

  const apolloClient = Apollo.getClient();

  const { posts } = (await apolloClient.query({ query: FETCH_POSTS })).data;

  for (const post of posts) {
    urls.push({
      url: `/blog/${post.slug}`,
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.5,
      lastmodISO: new Date(parseInt(post.publishedAt)).toISOString(),
    });
  }

  const sitemap = createSitemap({
    hostname: process.env.URL,
    urls,
  });

  res.setHeader('Content-Type', 'application/xml');
  res.send(sitemap.toXML());
};
