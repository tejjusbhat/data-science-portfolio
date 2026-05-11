/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ['react'] },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'cdn-images-1.medium.com' },
    ],
  },
};
module.exports = nextConfig;
