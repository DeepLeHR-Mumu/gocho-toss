/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`d2nnzfahmszi6w.cloudfront.net`, `cdn.gocho-back.com`, `devcdn.gocho-back.com`],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [1440],
    imageSizes: [],
  },
  pageExtensions: ["page.tsx"],
  transpilePackages: [
    "shared-constant",
    "shared-util",
    "shared-type",
    "shared-style",
    "shared-image",
    "shared-ui",
    "shared-hooks",
  ],
};

module.exports = nextConfig;
