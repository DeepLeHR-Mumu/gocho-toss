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
    domains: [`d2nnzfahmszi6w.cloudfront.net`, `cdn.gocho-back.com`],
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["page.tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jd/list",
        permanent: true,
      },
    ];
  },
};

module.exports = withTM(nextConfig);
