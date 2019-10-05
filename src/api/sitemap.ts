import { NextApiRequest, NextApiResponse } from 'next';
import Sitemap from 'services/sitemap';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send((await Sitemap.build()).getXml());
};
