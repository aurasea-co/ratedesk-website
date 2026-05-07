/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/th',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
