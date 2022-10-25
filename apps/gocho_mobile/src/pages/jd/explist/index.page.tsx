import { useEffect, useState } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";

import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_EXPLIST } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL, JOBS_EXPLIST_URL } from "shared-constant/internalURL";
import { expiredJdListFunnelEvent, expiredJdListSortingEvent } from "shared-ga/jd";

import { useToast } from "@recoil/hook/toast";

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
  const limit = 6;
  const [total, setTotal] = useState<number>(0);

  const { register, handleSubmit } = useForm<PostingValues>({
    defaultValues: {
      name: null,
    },
  });

  const { setCurrentToast } = useToast();

  const jdSearchHandler: SubmitHandler<PostingValues> = (searchVal) => {
    const specialCharacterRegEx = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
    if (searchVal.name?.match(specialCharacterRegEx)) {
      setCurrentToast("검색어에 특수문자는 포함될 수 없습니다.");
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

  const { data: companyDataArr, isLoading } = useCompanyArr({
    q: router.query.q as string,
    order: router.query.order as OrderDef,
    limit,
    offset: (Number(router.query.page) - 1) * 5,
  });

  useEffect(() => {
    if (companyDataArr) {
      setTotal(companyDataArr.count);
    }
  }, [companyDataArr]);

  useEffect(() => {
    expiredJdListFunnelEvent();
  }, []);

  const totalPage = Math.ceil(total / limit);

  return (
    <main css={mainContainer}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_JD_EXPLIST} />
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
          {companyDataArr?.companyDataArr.length === 0 ? (
            <div css={noDataBox}>
              <p css={noDataDesc}>검색결과가 없습니다 👀</p>
            </div>
          ) : (
            <>
              <ExpJobCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isLoading} />
              <BottomPagination
                totalPage={totalPage}
                linkObj={{
                  pathname: JOBS_EXPLIST_URL,
                }}
              />
            </>
          )}
        </section>
      </Layout>
    </main>
  );
};

export default JobsExpList;
