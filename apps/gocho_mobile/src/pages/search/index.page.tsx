import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { searchMenuButtonArr } from "@pages/search/constant";
import { COLORS } from "shared-style/color";
import { NormalButton } from "shared-ui/common/atom/button";
import { scrollToTop } from "shared-ui/common/atom/scrollTop";
import { JobPreviewPart } from "./part/jobPreviewPart";
import { CompanyPreviewPart } from "./part/companyPreviewPart";
import { JobListPart } from "./part/jobListPart";
import { CompanyListPart } from "./part/companyListPart";

import { mainContainer, menuList, menuElement, menuButton, title, buttonBox } from "./style";
import { searchMenuDef } from "./type";

const UnifiedSearch: NextPage = () => {
  const router = useRouter();
  const searchWord = router.query.q as string;

  const jobLimit = 6;
  const companyLimit = 6;
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

  const totalCount = (jobDataArr?.count || 0) + (companyDataArr?.count || 0);

  return (
    <main css={mainContainer}>
      <nav>
        <ul css={menuList}>
          {searchMenuButtonArr.map((menuText) => {
            const isActive = menuText === menu;
            return (
              <li css={menuElement} key={menuText}>
                <button
                  css={menuButton(isActive)}
                  type="button"
                  onClick={() => {
                    if (menuText !== "전체") {
                      router.push({
                        pathname: "/search",
                        query: { q: router.query.q, page: 1 },
                      });
                    } else {
                      router.push({
                        pathname: "/search",
                        query: { q: router.query.q },
                      });
                    }
                    setMenu(menuText);
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
        {menu === "전체" && (
          <div>
            <p css={title}>채용 공고 📮</p>
            <JobPreviewPart jobDataArr={jobDataArr?.jobDataArr} count={jobDataArr?.count} isLoading={isJobLoading} />
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
            jobDataArr={jobDataArr?.jobDataArr}
            isLoading={isJobLoading}
            total={jobDataArr.count}
            limit={jobLimit}
            page={jobPage}
            setPage={setJobPage}
          />
        )}
        {companyDataArr && menu === "기업" && (
          <CompanyListPart
            companyDataArr={companyDataArr?.companyDataArr}
            isLoading={isCompanyLoading}
            total={companyDataArr.count}
            limit={companyLimit}
            page={companyPage}
            setPage={setCompanyPage}
          />
        )}
      </Layout>
    </main>
  );
};

export default UnifiedSearch;
