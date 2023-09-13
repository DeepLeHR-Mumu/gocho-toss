import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components";
import { isQueryString } from "@/utils";

import { JdPart } from "./part/JdPart";
import { CompanyInfoPart } from "./part/CompanyInfoPart";
import { ReviewPart } from "./part/ReviewPart";
import { TitlePart } from "./part/TitlePart";
import { cssObj } from "./style";

const CompanyDetailPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.companyId && !isQueryString(router.query.type)) {
      router.replace(
        { pathname: router.pathname, query: { companyId: router.query.companyId, type: "company" } },
        `/company/detail/[companyId]?type=company`
      );
    }
  }, [router]);

  return (
    <main css={cssObj.background}>
      <TitlePart />
      <Layout>
        {router.query.type === "company" && <CompanyInfoPart />}
        {router.query.type === "jd" && <JdPart />}
        {router.query.type === "review" && <ReviewPart />}
      </Layout>
    </main>
  );
};

export default CompanyDetailPage;