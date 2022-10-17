import { useEffect, useState } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_EXPLIST } from "shared-constant/meta";
import { JOBS_EXPLIST_URL } from "shared-constant/internalURL";
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
import { changeOrderDef, PostingValues, OrderDef, SearchQueryDef } from "./type";

const JobsExpList: NextPage = () => {
  const router = useRouter();
  const limit = 6;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(Number(router.query.page));
  const [activeOrder, setActiveOrder] = useState<OrderDef>(router.query.order as OrderDef);
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>({
    name: router.query.q || undefined,
  } as SearchQueryDef);

  const { register, handleSubmit } = useForm<PostingValues>({
    defaultValues: {
      name: searchQuery.name,
    },
  });

  const postingSearch: SubmitHandler<PostingValues> = (searchVal) => {
    router.push({
      pathname: JOBS_EXPLIST_URL,
      query: { page: 1, order: activeOrder, q: searchVal.name },
    });
    setSearchQuery({
      name: searchVal.name,
    });
  };

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  const { data: companyDataArr, isLoading } = useCompanyArr({
    q: router.query.q as string,
    order: activeOrder,
    limit,
    offset: (page - 1) * 5,
  });

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query.page]);

  useEffect(() => {
    setActiveOrder(router.query.order as OrderDef);
  }, [router.query.order]);

  useEffect(() => {
    if (companyDataArr) {
      setTotal(companyDataArr.count);
    }
  }, [companyDataArr]);

  const totalPage = Math.ceil(total / limit);

  return (
    <main css={mainContainer}>
      <MetaHead metaData={META_JD_EXPLIST} />
      <Layout>
        <InvisibleH2 title="기업별 만료 공고" />
        <strong css={title}>만료 공고</strong>
        <section css={sectionContainer}>
          <form onSubmit={handleSubmit(postingSearch)}>
            <div css={searchContainer}>
              <input {...register("name", {})} css={searchBox} placeholder="검색어를 입력해주세요" />
              <button type="submit" css={searchButton} aria-label="만료 공고 검색">
                <FiSearch />
              </button>
            </div>
          </form>
          <div css={buttonArrContainer}>
            {setJobOrderButtonArr.map((button) => {
              const isActive = button.order === activeOrder;
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
                    return changeOrder(button.order);
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
