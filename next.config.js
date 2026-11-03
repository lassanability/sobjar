/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: '/sobjar-star', destination: '/sobjar-fc', permanent: true },
      { source: '/blog/sobjar-star-wins-provincial-silver-2026', destination: '/blog/sobjar-fc-wins-provincial-silver-2026', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dttvkmjpd/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/djuta2tca/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
