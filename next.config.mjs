/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['nextwaveapp.ch'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextwaveapp.ch',
      },
    ],
    path: '/',
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://nextwaveapp.ch' : '',
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
}

export default nextConfig 