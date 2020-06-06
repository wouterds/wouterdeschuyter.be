import gql from 'graphql-tag';
import { NextApiRequest, NextApiResponse } from 'next';
import Rss from 'rss';
import NetworkService from 'services/network';

const FETCH_POSTS = gql`
  query fetchData {
    posts {
      title
      excerpt
      slug
      publishedAt
      user {
        firstName
        lastName
      }
      mediaAsset {
        fileName
        size
        mediaType
      }
    }
  }
`;

const createFeed = () =>
  new Rss({
    title: 'Wouter De Schuyter',
    description:
      'This is my primary place on the internet where I collect things I made for myself, others or clients. I also write sometimes about things I like, things I experienced, guides, tutorials and more.',
    feed_url: `${process.env.NEXT_PUBLIC_APP_URL}/feed.xml`,
    site_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    image_url: `${process.env.NEXT_PUBLIC_APP_URL}/static/wouterds.jpg`,
    ttl: 6 * 60,
    categories: [
      'blog',
      'tech',
      'personal',
      'varia',
      'webdev',
      'mobile',
      'development',
    ],
  });

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/rss+xml');

  const feed = createFeed();

  const { posts } = (
    await NetworkService.apollo.query({ query: FETCH_POSTS })
  ).data;

  for (const post of posts) {
    const parts = post.mediaAsset.fileName.split('.');
    const image = `/static/media/${parts[0]}.embed.${parts[1]}`;

    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
      author: `${post.user.firstName} ${post.user.lastName}`,
      date: new Date(parseInt(post.publishedAt)).toISOString(),
      enclosure: {
        url: `${process.env.NEXT_PUBLIC_APP_URL}${image}`,
        size: post.mediaAsset.size,
        type: post.mediaAsset.mediaType,
      },
    });
  }

  res.send(feed.xml());
};
