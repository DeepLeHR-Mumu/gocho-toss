/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.gocho-back.com`, "devcdn.gocho-back.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [1256],
    imageSizes: [],
  },
  compiler: {
    emotion: true,
  },
  pageExtensions: ["page.tsx"],
  transpilePackages: [
    "shared-api",
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
