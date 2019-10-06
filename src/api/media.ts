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
  // const size = parts.length > 2 ? parts[1] : null;s

  const response = await fetch(
    `${process.env.API_ENDPOINT}/media-asset/${fileName}`,
  );

  if (response.status === 404) {
    res.status(404);
    return;
  }

  if (response.status !== 200) {
    res.status(400);
    return;
  }

  res.setHeader('Content-Type', response.headers.get('content-type') as string);
  res.send(response.body);
};
