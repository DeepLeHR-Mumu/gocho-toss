const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.gocho-back.com`, "devcdn.gocho-back.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [1200],
    imageSizes: [],
  },
  compiler: {
    emotion: true,
  },
  pageExtensions: ["page.tsx"],
  transpilePackages: [
    "shared-ui",
    "shared-constant",
    "shared-util",
    "shared-type",
    "shared-style",
    "shared-image",
    "shared-hook",
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

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "deeplehr",
    project: "react",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
