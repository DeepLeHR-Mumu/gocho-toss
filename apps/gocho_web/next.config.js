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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.gocho-back.com`],
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["page.tsx"],
};

module.exports = withTM(nextConfig);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const intercept = require("intercept-stdout");

function interceptStdout(text) {
  if (process.env.NODE_ENV === "development" && text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}
intercept(interceptStdout);
