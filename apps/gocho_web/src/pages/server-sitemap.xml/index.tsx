import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { QueryClient } from "@tanstack/react-query";

import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { getJobArr } from "shared-api/job/useJobArr";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const lastmod = new Date().toISOString();

  const jdArrData = await queryClient.fetchQuery(
    jobArrKeyObj.jobArr({ limit: 0, order: "recent", filter: "valid" }),
    getJobArr
  );

  const jdField = jdArrData.data.map((jd) => {
    return {
      loc: `${GOCHO_DESKTOP_URL}/jd/detail/${jd.id}`,
      //   changefreq: "daily",
      //   priority: "0.9",
      lastmod,
    };
  });

  //   const jdField = [
  //     {
  //       loc: `${GOCHO_DESKTOP_URL}/jd/detail`,
  //       lastmod,
  //     },
  //   ];
  //   const companyDetailField = [
  //     {
  //       loc: `${GOCHO_DESKTOP_URL}/company/??/detail`,
  //       lastmod,
  //     },
  //   ];
  //   const companyJdField = [
  //     {
  //       loc: `${GOCHO_DESKTOP_URL}/company/??/jd`,
  //       lastmod,
  //     },
  //   ];

  const field = [...jdField];

  return getServerSideSitemap(ctx, field);
};

export default () => {
  return null;
};
