import { NextApiRequest, NextApiResponse } from 'next';
import {
  createSitemap,
  ISitemapItemOptionsLoose,
  EnumChangefreq,
} from 'sitemap';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  const urls: ISitemapItemOptionsLoose[] = [
    { url: '/', changefreq: EnumChangefreq.DAILY, priority: 1 },
    { url: '/about', changefreq: EnumChangefreq.WEEKLY, priority: 0.7 },
    { url: '/blog', changefreq: EnumChangefreq.DAILY, priority: 0.7 },
    { url: '/contact', changefreq: EnumChangefreq.WEEKLY, priority: 0.7 },
  ];

  const sitemap = createSitemap({
    hostname: process.env.URL,
    urls,
  });

  res.setHeader('Content-Type', 'application/xml');
  res.send(sitemap.toXML());
};
