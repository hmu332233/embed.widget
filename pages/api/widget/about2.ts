// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const svg =
    '<svg fill="none" width="560" height="450" xmlns="http://www.w3.org/2000/svg"> <foreignObject width="100%" height="100%"> <div xmlns="http://www.w3.org/1999/xhtml"> <style>@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"); blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre{margin: 0;}.container{font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; width: 100%; display: flex; padding: 1.25rem; flex-direction: column; max-width: 768px;}.profile{display: flex; margin-bottom: 2rem;}.profile img{width: 4rem; height: 4rem; border-radius: 9999px;}.profile .info{margin-left: 1rem;}.profile .info .name{font-size: 1.25rem; line-height: 1.75rem; font-weight: 700;}.profile .info .description{color: #4B5563;}.prose{tab-size: 4; border: 0 solid #e5e7eb; box-sizing: border-box; color: #374151; font-size: 1rem; line-height: 1.75;}.prose .anchor{color: #111827; font-size: 1.5em; font-weight: 700; line-height: 1.3333333; margin-top: 0; margin-bottom: 1em;}.prose ul{list-style-type: disc; padding-left: 1.625em; margin-bottom: 0; margin-top: 0;}.prose li{padding-left: 0.375em; margin-bottom: 0.5em; margin-top: 0.5em;}.prose strong{color: #111827; font-weight: 600;}</style> <div class="container"> <div class="profile"> <img src="https://raw.githubusercontent.com/hmu332233/embed.widget/main/public/profile-image.jpeg"/> <div class="info"> <h2 class="name">minung.han</h2> <div class="description">내가 쓰기 위해 만드는 자급자족 사이드 프로젝트를 즐겨합니다.</div></div></div><article class="prose"> <h2 class="anchor">About Me</h2> <ul> <li>이것저것 <strong>만드는 것</strong>을 좋아합니다.</li><li>디자이너와의 <strong>협업</strong>에 익숙합니다.</li><li>기능 조직보다 <strong>목적 조직</strong>을 선호합니다.</li><li>단발성 프로젝트 팀보다는 <strong>제품 중심</strong>의 팀을 선호합니다.</li><li>동료, 조직과 <strong>신뢰를 기반</strong>으로 업무 할 수 있는 환경을 선호합니다.</li><li>동료 또는 주변 엔지니어들에게 <strong>지식을 전파하는 것</strong>을 좋아합니다.</li><li>서로에게 자극을 줄 수 있는 동료, 취미가 코딩인 동료?를 찾고 있습니다.</li></ul> </article> </div></div></foreignObject> </svg>';
  res.setHeader('Content-Type', 'image/svg+xml');
  // res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400');
  res.status(200).end(svg);
}
