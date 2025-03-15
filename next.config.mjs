/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    path: '/',
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
}

export default nextConfig 