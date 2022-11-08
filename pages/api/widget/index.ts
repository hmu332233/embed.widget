// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const svg = `
  <svg fill="none" width="800" height="1200" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <iframe width="800" height="1200" src="https://blog-new.minung.dev/about-short" title="about me" frameborder="0" allow="clipboard-write;"></iframe>
    </div>
  </foreignObject>
  </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, max-age=300');
  res.status(200).end(svg);
}
