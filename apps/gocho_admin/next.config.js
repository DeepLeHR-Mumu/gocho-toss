const withTM = require("next-transpile-modules")([
  "shared-api",
  "shared-constant",
  "shared-util",
  "shared-type",
  "shared-style",
  "shared-image",
  "shared-ui",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`d2nnzfahmszi6w.cloudfront.net`, `cdn.gocho-back.com`, `devcdn.gocho-back.com`],
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["page.tsx"],
};

module.exports = withTM(nextConfig);
