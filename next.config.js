/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif' , 'image/webp'],
    domains: ['192.168.1.251']
  }
}

module.exports = nextConfig