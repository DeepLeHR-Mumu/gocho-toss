import { useEffect } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { JOBS_EXPLIST_URL } from "shared-constant";
import { expiredJdListFunnelEvent, expiredJdListSortingEvent } from "shared-ga/jd";

import { useToast } from "@/globalStates";

import { PageHead } from "./pageHead";
import { ExpJobCardList } from "./component/expJobCardList";
import { setJobOrderButtonArr } from "./constant";
import {
  mainContainer,
  sectionContainer,
  searchContainer,
  searchBox,
  searchButton,
  buttonArrContainer,
  setJobOrderButton,
  title,
  noDataBox,
  noDataDesc,
} from "./style";
import { changeOrderDef, PostingValues, OrderDef } from "./type";

const JobsExpList: NextPage = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<PostingValues>({
    defaultValues: {
      name: null,
    },
  });

  const { setToastMessage } = useToast();

  const jdSearchHandler: SubmitHandler<PostingValues> = (searchVal) => {
    const specialCharacterRegEx = /[{}[\]/?.,;:|)*~`!^_+<>@#$%&\\=('"]/g;
    if (searchVal.name?.match(specialCharacterRegEx)) {
      setToastMessage("검색어에 특수문자는 포함될 수 없습니다.");
      return;
    }

    router.push({
      pathname: JOBS_EXPLIST_URL,
      query: { ...router.query, page: 1, q: searchVal.name },
    });
  };

  const changeOrderHandler: changeOrderDef = (orderStr) => {
    router.push(
      {
        pathname: JOBS_EXPLIST_URL,
        query: { ...router.query, page: 1, order: orderStr },
      },
      undefined,
      { scroll: false }
    );
  };

  const { data: companyData, isLoading } = useCompanyArr({
    q: router.query.q as string,
    order: router.query.order as OrderDef,
    size: 6,
    page: Number(router.query.page),
  });

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: JOBS_EXPLIST_URL, query: { page: 1, order: "view" } });
    }
  }, [router]);

  useEffect(() => {
    expiredJdListFunnelEvent();
  }, []);

  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="만료된 채용공고" />
      <Layout>
        <InvisibleH2 title="기업별 만료 공고" />
        <strong css={title}>만료 공고</strong>
        <section css={sectionContainer}>
          <form onSubmit={handleSubmit(jdSearchHandler)}>
            <div css={searchContainer}>
              <input {...register("name", {})} css={searchBox} placeholder="검색어를 입력해주세요" />
              <button type="submit" css={searchButton} aria-label="만료 공고 검색">
                <FiSearch />
              </button>
            </div>
          </form>
          <div css={buttonArrContainer}>
            {setJobOrderButtonArr.map((button) => {
              const isActive = button.order === router.query.order;
              return (
                <button
                  type="button"
                  key={`jobCardArr${button.text}`}
                  css={setJobOrderButton(isActive)}
                  onClick={() => {
                    expiredJdListSortingEvent(button.text);
                    changeOrderHandler(button.order);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
          {companyData?.pageResult.totalElements === 0 ? (
            <div css={noDataBox}>
              <p css={noDataDesc}>검색결과가 없습니다 👀</p>
            </div>
          ) : (
            <>
              <ExpJobCardList companyDataArr={companyData?.companyDataArr} isLoading={isLoading} />
              {companyData && (
                <BottomPagination
                  totalPage={companyData.pageResult.totalPages}
                  linkObj={{
                    pathname: JOBS_EXPLIST_URL,
                  }}
                />
              )}
            </>
          )}
        </section>
      </Layout>
    </main>
  );
};

export default JobsExpList;
