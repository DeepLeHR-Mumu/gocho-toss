import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { searchFunnelEvent } from "shared-ga/search";

import { Layout } from "@component/layout";

import { MenuListPart } from "./part/menuListPart";
import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";
import { PageHead } from "./pageHead";

import { mainContainer, title } from "./style";

const UnifiedSearchPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.query.menu && !router.query.q) {
      router.replace({ pathname: "/search", query: { menu: "전체", q: "", page: 1 } });
    }
    if (!router.query.menu && router.query.q) {
      router.replace({ pathname: "/search", query: { menu: "전체", q: router.query.q, page: 1 } });
    }
  }, [router]);

  useEffect(() => {
    searchFunnelEvent();
  }, []);

  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />

      <MenuListPart />
      <Layout>
        {router.query.menu === "전체" && (
          <div>
            <p css={title}>채용 공고 📮</p>
            <JobPreviewPart />
            <p css={title}>기업 정보 🏢</p>
            <CompanyPreviewPart />
          </div>
        )}

        {router.query.menu === "공고" && <JobListPart />}
        {router.query.menu === "기업" && <CompanyListPart />}
      </Layout>
    </main>
  );
};

export default UnifiedSearchPage;
