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
  let embed = false;
  let thumbnail = false;
  if (parts.length > 2) {
    if (parts[1] === 'embed') {
      embed = true;
    }

    if (parts[1] === 'thumbnail') {
      thumbnail = true;
    }

    if (!embed && !thumbnail) {
      res.status(400);
      return;
    }
  }

  const apiRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/media-assets/${fileName}?embed=${embed}&thumbnail=${thumbnail}`,
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
