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
  <svg fill="none" width="560" height="1000" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
        blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
          margin: 0;
        }
        .container {
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          width: 100%; 
          display: flex; 
          padding: 1.25rem; 
          flex-direction: column; 
          max-width: 768px; 
        }
        .profile {
          display: flex; 
          margin-bottom: 2rem;
        }
        .profile img {
          width: 4rem; 
          height: 4rem; 
          border-radius: 9999px; 
        }
        .profile .info {
          margin-left: 1rem; 
        }
        .profile .info .name {
          font-size: 1.25rem;
          line-height: 1.75rem; 
          font-weight: 700; 
        }
        .profile .info .description {
          color: #4B5563; 
        }
        .prose {
          -webkit-text-size-adjust: 100%;
          tab-size: 4;
          font-family: -apple-system,BlinkMacSystemFont,Apple SD Gothic Neo,Pretendard,Roboto,Noto Sans KR,Segoe UI,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
          border: 0 solid #e5e7eb;
          box-sizing: border-box;
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgba(59,130,246,.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
          color: var(--tw-prose-body);
          max-width: 65ch;
          --tw-prose-body: #374151;
          --tw-prose-headings: #111827;
          --tw-prose-lead: #4b5563;
          --tw-prose-links: #111827;
          --tw-prose-bold: #111827;
          --tw-prose-counters: #6b7280;
          --tw-prose-bullets: #d1d5db;
          --tw-prose-hr: #e5e7eb;
          --tw-prose-quotes: #111827;
          --tw-prose-quote-borders: #e5e7eb;
          --tw-prose-captions: #6b7280;
          --tw-prose-code: #111827;
          --tw-prose-pre-code: #e5e7eb;
          --tw-prose-pre-bg: #1f2937;
          --tw-prose-th-borders: #d1d5db;
          --tw-prose-td-borders: #e5e7eb;
          --tw-prose-invert-body: #d1d5db;
          --tw-prose-invert-headings: #fff;
          --tw-prose-invert-lead: #9ca3af;
          --tw-prose-invert-links: #fff;
          --tw-prose-invert-bold: #fff;
          --tw-prose-invert-counters: #9ca3af;
          --tw-prose-invert-bullets: #4b5563;
          --tw-prose-invert-hr: #374151;
          --tw-prose-invert-quotes: #f3f4f6;
          --tw-prose-invert-quote-borders: #374151;
          --tw-prose-invert-captions: #9ca3af;
          --tw-prose-invert-code: #fff;
          --tw-prose-invert-pre-code: #d1d5db;
          --tw-prose-invert-pre-bg: rgba(0,0,0,.5);
          --tw-prose-invert-th-borders: #4b5563;
          --tw-prose-invert-td-borders: #374151;
          font-size: 1rem;
          line-height: 1.75;
        }
        .prose .anchor {
          color: var(--tw-prose-headings);
          font-size: 1.5em;
          font-weight: 700;
          line-height: 1.3333333;
          margin-top: 0;
          margin-bottom: 1em;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 1.625em;
          margin-bottom: 0;
          margin-top: 0;
        }
        .prose li {
          padding-left: 0.375em;
          margin-bottom: 0.5em;
          margin-top: 0.5em; 
        }
        .prose strong {
          color: #111827;
          font-weight: 600;
        }
      </style>
      <div class="container">
        <div class="profile">
          <img src="https://avatars2.githubusercontent.com/u/10302969?v=4?v=3&amp;s=88" />
          <div class="info">
            <h2 class="name">minung.han</h2>
            <div class="description">내가 쓰기 위해 만드는 자급자족 사이드 프로젝트를 즐겨합니다.</div>
          </div>
        </div>
        <article class="prose">
          <h2 class="anchor">About Me</h2>
          <ul>
            <li>이것저것 <strong>만드는 것</strong>을 좋아합니다.</li>
            <li>디자이너와의 <strong>협업</strong>에 익숙합니다.</li>
            <li>기능 조직보다 <strong>목적 조직</strong>을 선호합니다.</li>
            <li>단발성 프로젝트 팀보다는 <strong>제품 중심</strong>의 팀을 선호합니다.</li>
            <li>동료, 조직과 <strong>신뢰를 기반</strong>으로 업무 할 수 있는 환경을 선호합니다.</li>
            <li>동료 또는 주변 엔지니어들에게 <strong>지식을 전파하는 것</strong>을 좋아합니다.</li>
            <li>서로에게 자극을 줄 수 있는 동료, 취미가 코딩인 동료?를 찾고 있습니다.</li>
          </ul>
        </article>
      </div>
    </div>
  </foreignObject>
  </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, max-age=300');
  res.status(200).end(svg);
}
