/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/widget',
        destination: '/api/widget',
      },
    ];
  },
}

module.exports = nextConfig
