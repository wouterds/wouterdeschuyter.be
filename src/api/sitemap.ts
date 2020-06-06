import gql from 'graphql-tag';
import { NextApiRequest, NextApiResponse } from 'next';
import Network from 'services/network';
import { SitemapStream } from 'sitemap';
import { createGzip } from 'zlib';

const FETCH_POSTS = gql`
  query fetchData {
    posts {
      slug
      publishedAt
    }
  }
`;

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');

  const sitemap = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_URL });
  const pipeline = sitemap.pipe(createGzip());

  // static
  sitemap.write({ url: '/', priority: 1 });
  sitemap.write({ url: '/about', priority: 0.8 });
  sitemap.write({ url: '/blog', priority: 0.8 });
  sitemap.write({ url: '/contact', priority: 0.8 });

  // dynamic
  const { posts } = (await Network.apollo.query({ query: FETCH_POSTS })).data;
  for (const post of posts) {
    sitemap.write({
      url: `/blog/${post.slug}`,
      priority: 0.5,
      lastmodISO: new Date(parseInt(post.publishedAt)).toISOString(),
    });
  }

  sitemap.end();

  pipeline.pipe(res).on('error', (e) => {
    throw e;
  });
};
