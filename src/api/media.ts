import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';

// https://github.com/lovell/sharp/blob/master/docs/install.md#alpine-linux
sharp.cache(false);

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
  const size = parts.length > 2 ? parts[1] : null;

  const apiRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/media-asset/${fileName}`,
  );

  if (apiRes.status === 404) {
    res.status(404);
    return;
  }

  if (apiRes.status !== 200) {
    res.status(400);
    return;
  }

  if (!apiRes.body) {
    res.status(400);
    return;
  }

  if (size === 'embed') {
    res.setHeader('Content-Type', 'image/jpeg');
    (apiRes.body as any) // investigate what's wrong here with the typing
      .pipe(sharp().resize(1200, 630, { fit: sharp.fit.cover }).jpeg())
      .pipe(res);
    return;
  }

  res.setHeader('Content-Type', apiRes.headers.get('content-type') as string);
  res.send(apiRes.body);
};
