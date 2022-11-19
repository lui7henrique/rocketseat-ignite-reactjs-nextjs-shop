/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["files.stripe.com"],
  },
  newNextLinkBehavior: true,
};

module.exports = nextConfig;
