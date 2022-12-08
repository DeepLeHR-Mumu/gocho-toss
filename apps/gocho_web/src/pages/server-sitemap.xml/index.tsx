import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: `${baseUrl}/dynamic-path-2`,
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];
  return getServerSideSitemap(ctx, fields);
};

export default () => {
  return null;
};
