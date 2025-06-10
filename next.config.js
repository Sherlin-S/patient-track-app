// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.logopeople.in"], // ✅ or any domains you use
  },
};

module.exports = nextConfig;
