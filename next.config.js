const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' 'unsafe-inline' https://blog-new.minung.dev;  frame-ancestors 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/widget/:path*',
        destination: '/api/widget/:path*',
      },
    ];
  },
  async headers() {
    return [
      // {
      //   // Apply these headers to all routes in your application.
      //   source: '/widget',
      //   headers: securityHeaders,
      // },
    ];
  },
};

module.exports = nextConfig;
