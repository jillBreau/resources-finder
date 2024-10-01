/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resources',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
