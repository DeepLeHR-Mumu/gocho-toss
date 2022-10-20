import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, JOBS_EXPLIST_URL } from "shared-constant/internalURL";
import { META_JD_EXPLIST } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useCompanyArr } from "shared-api/company";
import { expiredJdListSortingEvent, expiredJdListFunnelEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { Pagination } from "@pages/jd/component/pagination";
import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { ExpJobCardList } from "./component/expJobCardList";
import { setJobOrderButtonArr } from "./constant";
import {
  mainContainer,
  title,
  colorPoint,
  searchContainer,
  searchWrapper,
  searchBox,
  searchButton,
  listContainer,
  buttonArrContainer,
  setJobOrderButton,
  noDataBox,
  noDataDesc,
} from "./style";
import { changeOrderDef, OrderDef, PostingValues, SearchQueryDef } from "./type";

const JdExpListPage: NextPage = () => {
  const router = useRouter();
  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>({
    name: router.query.q,
  } as SearchQueryDef);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { register, handleSubmit } = useForm<PostingValues>({
    defaultValues: {
      name: searchQuery.name,
    },
  });

  const postingSearch: SubmitHandler<PostingValues> = (postingVal) => {
    router.push({
      pathname: JOBS_EXPLIST_URL,
      query: { page: 1, order: router.query.order, q: postingVal.name },
    });
    setSearchQuery({
      name: postingVal.name,
    });
  };

  const changeOrderHandler: changeOrderDef = (orderStr) => {
    expiredJdListSortingEvent(orderStr);
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
    offset: (Number(router.query.page) - 1) * 10,
  });

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: JOBS_EXPLIST_URL, query: { page: 1, order: "recent" } });
    }
  }, [router]);
  useEffect(() => {
    if (companyDataArr) {
      setTotal(companyDataArr.count);
    }
  }, [companyDataArr]);
  useEffect(() => {
    const location = (scrollRef.current?.getBoundingClientRect().top as number) + window.pageYOffset - 200;
    window.scrollTo(0, location);
  }, [router.query.page]);

  useEffect(() => {
    expiredJdListFunnelEvent();
  }, []);

  const totalPage = Math.ceil(total / limit);

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
      <MetaHead metaData={META_JD_EXPLIST} />
      <Layout>
        <div ref={scrollRef} />
        <InvisibleH2 title="기업별 만료 공고" />
        <p css={title}>
          <span css={colorPoint}>Expired</span> 기업별 만료공고
        </p>
        <section css={listContainer}>
          <form css={searchContainer} onSubmit={handleSubmit(postingSearch)}>
            <div css={searchWrapper}>
              <input
                {...register("name", {})}
                css={searchBox}
                placeholder={router.query.q ? (router.query.q as string) : "검색어를 입력해주세요"}
              />
              <button type="submit" css={searchButton} aria-label="만료 공고 검색">
                <FiSearch />
              </button>
            </div>
            <div css={buttonArrContainer}>
              {setJobOrderButtonArr.map((button) => {
                const isActive = button.order === router.query.order;
                return (
                  <button
                    type="button"
                    key={`jobCardArr${button.text}`}
                    css={setJobOrderButton(isActive)}
                    onClick={() => {
                      router.push({
                        pathname: JOBS_EXPLIST_URL,
                        query: { ...router.query, page: 1, order: button.order },
                      });
                      return changeOrderHandler(button.order);
                    }}
                  >
                    {button.icon}&nbsp;
                    {button.text}
                  </button>
                );
              })}
            </div>
            <Pagination
              totalPage={totalPage}
              linkObj={{
                pathname: JOBS_EXPLIST_URL,
              }}
            />
          </form>

          {companyDataArr?.companyDataArr.length === 0 ? (
            <div css={noDataBox}>
              <p css={noDataDesc}>검색결과가 없습니다 👀</p>
            </div>
          ) : (
            <>
              <ExpJobCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isLoading} />
              <BottomPagination
                linkObj={{
                  pathname: JOBS_EXPLIST_URL,
                }}
                totalPage={totalPage}
              />
            </>
          )}
        </section>
      </Layout>
    </main>
  );
};

export default JdExpListPage;
