import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { QueryClient } from "@tanstack/react-query";

import { GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import { getJobArr } from "shared-api/job/useJobArr";
import { getCompanyArr } from "shared-api/company/useCompanyArr";

import { ChangefreqDef } from "./type";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const lastmod = new Date().toISOString();

  const jdArrData = await queryClient.fetchQuery(
    jobArrKeyObj.jobArr({ limit: 0, order: "recent", filter: "valid" }),
    getJobArr
  );
  const CompanyArrData = await queryClient.fetchQuery(
    companyArrKeyObj.companyArr({ order: "view", limit: 0 }),
    getCompanyArr
  );

  const jdField = jdArrData.data.map((jd) => {
    return {
      loc: `${GOCHO_MOBILE_URL}/jd/detail/${jd.id}`,
      changefreq: "daily" as ChangefreqDef,
      priority: 0.8,
      lastmod,
    };
  });

  const companyDetailField = CompanyArrData.data.map((company) => {
    return {
      loc: `${GOCHO_MOBILE_URL}/company/${company.id}/detail`,
      changefreq: "daily" as ChangefreqDef,
      priority: 0.7,
      lastmod,
    };
  });

  const companyJdField = CompanyArrData.data.map((company) => {
    return {
      loc: `${GOCHO_MOBILE_URL}/company/${company.id}/jd`,
      changefreq: "daily" as ChangefreqDef,
      priority: 0.7,
      lastmod,
    };
  });

  const field: ISitemapField[] = [...jdField, ...companyDetailField, ...companyJdField];
  return getServerSideSitemap(context, field);
};

const Sitemap = () => {
  return null;
};

export default Sitemap;
