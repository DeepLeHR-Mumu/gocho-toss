import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";
import Head from "next/head";

import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";
import { COLORS } from "shared-style/color";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_INDEX } from "shared-constant/meta";
import { scrollToTop } from "shared-ui/common/atom/scrollTop";
import { NormalButton } from "shared-ui/common/atom/button";
import { searchFunnelEvent } from "shared-ga/search";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";

import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";
import { mainContainer, title, buttonBox } from "./style";
import { searchMenuDef } from "./type";
import { MenuListPart } from "./part/menuListPart";

const UnifiedSearch: NextPage = () => {
  const router = useRouter();
  const searchWord = router.query.q as string;

  const jobLimit = 10;
  const companyLimit = 12;
  const [menu, setMenu] = useState<searchMenuDef>("전체");
  const [jobPage, setJobPage] = useState(Number(router.query.page) || 1);
  const [companyPage, setCompanyPage] = useState(Number(router.query.page) || 1);

  useEffect(() => {
    setJobPage(1);
    setCompanyPage(1);
  }, [searchWord]);

  useEffect(() => {
    setJobPage(Number(router.query.page));
    setCompanyPage(Number(router.query.page));
    scrollToTop();
  }, [router.query]);

  useEffect(() => {
    searchFunnelEvent();
  }, []);

  const { data: jobDataArr, isLoading: isJobLoading } = useJobArr({
    q: JSON.stringify({ searchWord }),
    order: "recent",
    filter: "valid",
    limit: jobLimit,
    offset: (jobPage - 1) * jobLimit,
  });

  const { data: companyDataArr, isLoading: isCompanyLoading } = useCompanyArr({
    q: searchWord,
    order: "recent",
    limit: companyLimit,
    offset: (companyPage - 1) * companyLimit,
  });

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
        <MenuListPart setMenu={setMenu} menu={menu} />

        {menu === "전체" && (
          <div>
            <p css={title}>채용 공고 📮</p>
            {/* <JobPreviewPart jobDataArr={jobDataArr?.jobDataArr} count={jobDataArr?.count} isLoading={isJobLoading} /> */}
            <JobPreviewPart />
            {jobDataArr?.count !== 0 && (
              <div css={buttonBox}>
                <NormalButton
                  text="채용공고 더보기"
                  variant="outlined"
                  iconObj={{
                    icon: BsChevronRight,
                    color: COLORS.BLUE_FIRST40,
                    size: 0.75,
                    position: "right",
                  }}
                  buttonClick={() => {
                    setMenu("공고");
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q, page: 1 },
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
              isLoading={isCompanyLoading}
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
                    setMenu("기업");
                    router.push({
                      pathname: "/search",
                      query: { q: router.query.q, page: 1 },
                    });
                  }}
                  wide={false}
                />
              </div>
            )}
          </div>
        )}

        {jobDataArr && menu === "공고" && (
          <JobListPart
            jobDataArr={jobDataArr.jobDataArr}
            isLoading={isJobLoading}
            total={jobDataArr.count}
            limit={jobLimit}
          />
        )}

        {companyDataArr && menu === "기업" && (
          <CompanyListPart
            companyDataArr={companyDataArr.companyDataArr}
            isLoading={isCompanyLoading}
            total={companyDataArr.count}
            limit={companyLimit}
          />
        )}
      </Layout>
    </main>
  );
};

export default UnifiedSearch;
