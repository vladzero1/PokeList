const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pwa: {
    dest: "public",
  },
});

module.exports = nextConfig;
