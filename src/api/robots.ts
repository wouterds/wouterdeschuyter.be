import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  let body = '';
  body += 'User-Agent: *\n';
  body += 'Allow: /\n';
  body += 'Disallow: /admin\n';
  body += 'Disallow: /admin/*\n';
  body += '\n';
  body += `Sitemap: ${process.env.URL}/sitemap.xml\n`;

  res.setHeader('Content-Type', 'text/plain');
  res.send(body);
};
