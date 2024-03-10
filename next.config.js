/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port:'',
        pathname:"/25181517/**"
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port:'',
        pathname:"/**"
      },
    ],
  },
}


module.exports = nextConfig
