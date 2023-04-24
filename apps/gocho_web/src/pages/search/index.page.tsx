import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { searchFunnelEvent } from "shared-ga/search";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";

import { Layout } from "@component/layout";

import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";
import { mainContainer, title } from "./style";
import { MenuListPart } from "./part/menuListPart";
import { PageHead } from "./pageHead";

const UnifiedSearch: NextPage = () => {
  const router = useRouter();
  const queryMenu = router.query.menu;

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.query.menu && !router.query.q) {
      router.replace({ pathname: "/search", query: { menu: "전체", q: "", page: 1 } });
    }
    if (!router.query.menu && router.query.q) {
      router.replace({ pathname: "/search", query: { q: router.query.q, menu: "전체", page: 1 } });
    }
  }, [router]);

  useEffect(() => {
    searchFunnelEvent();
  }, []);

  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />

      <Layout>
        <MenuListPart />
        {queryMenu === "전체" && (
          <div>
            <p css={title}>채용 공고 📮</p>
            <JobPreviewPart />
            <p css={title}>기업 정보 🏢</p>
            <CompanyPreviewPart />
          </div>
        )}

        {queryMenu === "공고" && <JobListPart />}
        {queryMenu === "기업" && <CompanyListPart />}
      </Layout>
    </main>
  );
};

export default UnifiedSearch;
