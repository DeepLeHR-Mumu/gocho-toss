import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components";
import { isQueryString } from "@/utils";
import { useAddCompanyViewCount } from "@/apis/viewCount";

import { JdPart } from "./part/JdPart";
import { CompanyInfoPart } from "./part/CompanyInfoPart";
import { ReviewPart } from "./part/ReviewPart";
import { TitlePart } from "./part/TitlePart";
import { cssObj } from "./style";

const CompanyDetail: NextPage = () => {
  const isFirstRender = useRef(false);
  const router = useRouter();
  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    if (router.isReady && !isQueryString(router.query.type)) {
      router.replace({ pathname: router.pathname, query: { companyId: router.query.companyId, type: "company" } });
    }
  }, [router]);

  useEffect(() => {
    if (router.query.companyId && !isFirstRender.current) {
      isFirstRender.current = true;
      addViewCount({ companyId: Number(router.query.companyId) });
    }
  }, [router.query.companyId, addViewCount]);

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

export default CompanyDetail;
