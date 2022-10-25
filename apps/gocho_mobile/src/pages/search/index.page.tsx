import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";
import Head from "next/head";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_INDEX } from "shared-constant/meta";
import { useUnifiedJobSearchArr } from "shared-api/job";
import { useUnifiedCompanySearchArr } from "shared-api/company";
import { COLORS } from "shared-style/color";
import { NormalButton } from "shared-ui/common/atom/button";
import { searchFunnelEvent } from "shared-ga/search";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";
import { searchMenuButtonArr } from "@pages/search/constant";

import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";

import { mainContainer, menuList, menuElement, menuButton, title, buttonBox } from "./style";

const UnifiedSearch: NextPage = () => {
  const router = useRouter();

  const { data: jobDataArr, isLoading: isJobArrLoading } = useUnifiedJobSearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: 0,
  });

  const { data: companyDataArr, isLoading: isCompanyArrLoading } = useUnifiedCompanySearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: 0,
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.query.menu && !router.query.q) {
      router.replace({ pathname: "/search", query: { menu: "전체", q: "", page: 0 } });
    }
    if (!router.query.menu && router.query.q) {
      router.replace({ pathname: "/search", query: { q: router.query.q, menu: "전체", page: 0 } });
    }
  }, [router]);

  useEffect(() => {
    searchFunnelEvent();
  }, []);

  const totalCount = (jobDataArr?.count || 0) + (companyDataArr?.count || 0);

  return (
    <main css={mainContainer}>
      <MetaHead metaData={META_INDEX} />
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <nav>
        <ul css={menuList}>
          {searchMenuButtonArr.map((menuText) => {
            const isActive = menuText === router.query.menu;
            return (
              <li css={menuElement} key={menuText}>
                <button
                  css={menuButton(isActive)}
                  type="button"
                  onClick={() => {
                    router.push({
                      pathname: "/search",
                      query: { ...router.query, page: 1, menu: menuText },
                    });
                  }}
                >
                  {menuText} {menuText === "전체" && totalCount.toLocaleString("Ko-KR")}
                  {menuText === "공고" && jobDataArr?.count.toLocaleString("Ko-KR")}
                  {menuText === "기업" && companyDataArr?.count.toLocaleString("Ko-KR")}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Layout>
        {router.query.menu === "전체" && (
          <div>
            <p css={title}>채용 공고 📮</p>
            <JobPreviewPart jobDataArr={jobDataArr?.jobDataArr} count={jobDataArr?.count} isLoading={isJobArrLoading} />
            {jobDataArr?.count !== 0 && (
              <div css={buttonBox}>
                <NormalButton
                  text="채용공고 더보기"
                  iconObj={{
                    icon: BsChevronRight,
                    color: COLORS.BLUE_FIRST40,
                    size: 0.75,
                    position: "right",
                  }}
                  variant="outlined"
                  buttonClick={() => {
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q, page: 1, menu: "공고" },
                    });
                  }}
                  wide={false}
                />
              </div>
            )}

            <p css={title}>기업 정보 🏢</p>
            <CompanyPreviewPart
              companyDataArr={companyDataArr?.companyDataArr}
              count={companyDataArr?.count}
              isLoading={isCompanyArrLoading}
            />
            {companyDataArr?.count !== 0 && (
              <div css={buttonBox}>
                <NormalButton
                  text="기업정보 더보기"
                  iconObj={{
                    icon: BsChevronRight,
                    color: COLORS.BLUE_FIRST40,
                    size: 0.75,
                    position: "right",
                  }}
                  variant="outlined"
                  buttonClick={() => {
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q, page: 1, menu: "기업" },
                    });
                  }}
                  wide={false}
                />
              </div>
            )}
          </div>
        )}
        {jobDataArr && router.query.menu === "공고" && <JobListPart />}
        {companyDataArr && router.query.menu === "기업" && <CompanyListPart />}
      </Layout>
    </main>
  );
};

export default UnifiedSearch;
