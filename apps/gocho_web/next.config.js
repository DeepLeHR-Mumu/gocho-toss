const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.gocho-back.com`, "devcdn.gocho-back.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [1256],
    imageSizes: [],
  },
  pageExtensions: ["page.tsx"],
  transpilePackages: [
    "shared-ui",
    "shared-api",
    "shared-constant",
    "shared-util",
    "shared-type",
    "shared-style",
    "shared-image",
    "shared-ga",
  ],
};

module.exports = withBundleAnalyzer(nextConfig);

const intercept = require("intercept-stdout");

function interceptStdout(text) {
  if (process.env.NODE_ENV === "development" && text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}
intercept(interceptStdout);
