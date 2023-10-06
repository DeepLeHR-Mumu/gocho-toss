import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { FiChevronLeft } from "react-icons/fi";

import { useJdArr } from "@/apis/jd";
import { useCompanyArr } from "@/apis/company";

import { Layout, SearchModal, Pagination, JdRow, CompanyRow } from "@/components";
import { SearchDropDown } from "@/components/modal/SearchModal/components/SearchDropDown";
import { useGetDeviceType } from "@/globalStates";
import { DEFAULT_PAGE_SIZE } from "@/pages/constants";
import { isQueryString } from "@/utils";

import { searchFunnelEvent } from "@/ga/search";
import { Tab } from "./type";
import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const Search: NextPage = () => {
  const [searchModal, setSearchModal] = useState(false);

  const [tab, setTab] = useState<Tab>("jd");

  const router = useRouter();
  const searchWord = isQueryString(router.query.q) ? router.query.q : undefined;
  const currentPageNumber = isQueryString(router.query.page) ? Number(router.query.page) : 1;

  const { isMobile } = useGetDeviceType();
  const { data: jdData } = useJdArr({
    order: "recent",
    filter: "valid",
    searchWord,
    size: DEFAULT_PAGE_SIZE,
    page: currentPageNumber,
  });

  const { data: companyData } = useCompanyArr({
    order: "recent",
    q: searchWord,
    size: DEFAULT_PAGE_SIZE,
    page: currentPageNumber,
  });

  const total = (() => {
    if (tab === "jd" && jdData) {
      const { totalElements, totalPages } = jdData.pageResult;
      return { elements: totalElements, pages: totalPages };
    }

    if (tab === "company" && companyData) {
      const { totalElements, totalPages } = companyData.pageResult;
      return { elements: totalElements, pages: totalPages };
    }

    return { elements: 0, pages: 0 };
  })();

  return (
    <main>
      <PageHead />
      <Layout>
        <div css={cssObj.wrapper}>
          <div css={cssObj.searchWrapper}>
            {isMobile && (
              <FiChevronLeft
                onClick={() => {
                  router.back();
                }}
              />
            )}
            <SearchDropDown
              defaultValue={searchWord}
              onClick={(e) => {
                searchFunnelEvent();
                setSearchModal(true);
                e.currentTarget.blur();
              }}
            />
          </div>
          <div css={cssObj.tabBar}>
            <button
              type="button"
              css={css`
                ${cssObj.tabButton(tab === "jd")}
              `}
              onClick={() => {
                setTab("jd");
                router.push({ query: { ...router.query } });
              }}
            >
              공고 {jdData?.pageResult.totalElements}
            </button>
            <button
              type="button"
              css={css`
                ${cssObj.tabButton(tab === "company")}
              `}
              onClick={() => {
                setTab("company");
                router.push({ query: { ...router.query } });
              }}
            >
              기업 {companyData?.pageResult.totalElements}
            </button>
          </div>
          <span css={cssObj.total}>총 {total.elements}건</span>
          <div css={cssObj.resultWrapper}>
            {tab === "jd" &&
              jdData?.jdDataArr.map((jd) => (
                <JdRow
                  key={jd.id}
                  jd={{
                    jdId: jd.id,
                    companyName: jd.company.name,
                    jdTitle: jd.title,
                    dueDate: jd.endTime,
                    bookmarked: jd.isBookmark,
                    cut: jd.cut,
                  }}
                />
              ))}
            {tab === "company" &&
              companyData?.companyDataArr.map((company) => (
                <CompanyRow
                  key={company.id}
                  company={{
                    ...company,
                    logo: company.logoUrl,
                    bookmark: { state: company.isBookmark },
                  }}
                />
              ))}
            {total.elements === 0 && (
              <div css={cssObj.noDataWrapper}>
                <strong>&#39;{searchWord}&#39;</strong>
                <span> 에 대한 검색 결과가 없습니다.</span>
              </div>
            )}
          </div>
        </div>
        {total.elements !== 0 && (
          <div css={cssObj.paginationWrapper}>
            <Pagination totalPage={total.pages} />
          </div>
        )}
      </Layout>
      {searchModal && (
        <SearchModal
          close={() => {
            setSearchModal(false);
          }}
        />
      )}
    </main>
  );
};

export default Search;
