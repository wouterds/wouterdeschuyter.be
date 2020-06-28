import { NextApiRequest, NextApiResponse } from 'next';

export default async ({ query }: NextApiRequest, res: NextApiResponse) => {
  if (typeof query.input !== 'string') {
    res.status(400);
    return;
  }

  const parts = query.input.split('.');
  if (parts.length > 3) {
    res.status(400);
    return;
  }

  const fileName = `${parts[0]}.${parts[parts.length - 1]}`;
  const embed = parts.length > 2 ? parts[1] : null === 'embed';

  const apiRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/media-asset/${fileName}?embed=${embed}`,
  );

  if (apiRes.status === 404) {
    res.status(404);
    return;
  }

  if (apiRes.status !== 200) {
    res.status(500);
    return;
  }

  if (!apiRes.body) {
    res.status(500);
    return;
  }

  res.setHeader('Content-Type', apiRes.headers.get('content-type') as string);
  res.send(apiRes.body);
};
