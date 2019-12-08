import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  const response = `pong ${new Date().toISOString()}`;

  console.info(response);
  res.send(response);
};
