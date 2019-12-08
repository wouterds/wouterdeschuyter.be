import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  let body = '';
  body += 'User-Agent: *\n';
  if (process.env.ENV === 'production') {
    body += 'Allow: /\n';
    body += 'Disallow: /api/*\n';
    body += 'Disallow: /admin\n';
    body += 'Disallow: /admin/*\n';
    body += '\n';
    body += `Sitemap: ${process.env.URL}/sitemap.xml\n`;
  } else {
    body += 'Disallow: /\n';
  }

  res.setHeader('Content-Type', 'text/plain');
  res.send(body);
};
