import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  let body = '';

  body += 'User-Agent: *\n';
  body += 'Allow: /\n';
  body += 'Disallow: /ping\n';
  body += 'Disallow: /experiments/connect-spotify\n';
  body += 'Disallow: /admin\n';
  body += 'Disallow: /admin/*\n';
  body += 'Disallow: /api/*\n\n';
  body += `Sitemap: ${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml.gz\n`;

  res.setHeader('Content-Type', 'text/plain');
  res.send(body);
};
