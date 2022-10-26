import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_INDEX } from "shared-constant/meta";
import { searchFunnelEvent } from "shared-ga/search";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";

import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";
import { mainContainer, title } from "./style";
import { MenuListPart } from "./part/menuListPart";

const UnifiedSearch: NextPage = () => {
  const router = useRouter();

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
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}${router.asPath.split("?")[0]}`}
        />
      </Head>
      <MetaHead metaData={META_INDEX} />
      <Layout>
        <MenuListPart />
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

export default UnifiedSearch;
