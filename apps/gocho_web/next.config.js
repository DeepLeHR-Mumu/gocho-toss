// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")([
  "shared-ui",
  "shared-api",
  "shared-constant",
  "shared-util",
  "shared-type",
  "shared-style",
  "shared-image",
  "shared-ga",
]);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 70,
    domains: [`cdn.gocho-back.com`, "devcdn.gocho-back.com"],
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["page.tsx"],
};

module.exports = withBundleAnalyzer(withTM(nextConfig));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const intercept = require("intercept-stdout");

function interceptStdout(text) {
  if (process.env.NODE_ENV === "development" && text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}
intercept(interceptStdout);
