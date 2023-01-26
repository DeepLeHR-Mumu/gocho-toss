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
    domains: [`cdn.gocho-back.com`, `devcdn.gocho-back.com`],
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
