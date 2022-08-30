// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withTM = require("next-transpile-modules")(["component"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`d2nnzfahmszi6w.cloudfront.net`],
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
// module.exports = withTM(nextConfig);
