import { NextApiRequest, NextApiResponse } from 'next';
import Feed from 'services/feed';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/rss+xml');
  res.send((await Feed.build()).getXml());
};
