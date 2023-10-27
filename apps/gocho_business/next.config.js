const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.gocho-back.com`, `devcdn.gocho-back.com`],
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
    "shared-hook",
  ],
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test?.(".svg"));

    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/svgr/] },
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
