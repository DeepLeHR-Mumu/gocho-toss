const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ["/404", "/500", "/server-sitemap.xml"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/500"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
};
