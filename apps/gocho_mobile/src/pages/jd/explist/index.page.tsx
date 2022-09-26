import { useEffect, useState } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { BottomPagination } from "@component/common/molecule/bottomPagination";

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
} from "./style";
import { changeOrderDef, PostingValues, SearchQueryDef, OrderDef } from "./type";

const JobsExpList: NextPage = () => {
  const limit = 6;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();

  const { register, handleSubmit } = useForm<PostingValues>({});

  const postingSearch: SubmitHandler<PostingValues> = (postingVal) => {
    setSearchQuery({
      name: postingVal.name,
    });
  };

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  const { data: companyDataArr, isLoading } = useCompanyArr({
    q: JSON.stringify(searchQuery),
    order: activeOrder,
    limit,
    offset: (page - 1) * 10,
  });

  useEffect(() => {
    if (companyDataArr && companyDataArr.count !== total) {
      setTotal(companyDataArr.count);
      setPage(1);
    }
  }, [companyDataArr, total]);

  return (
    <main css={mainContainer}>
      <Layout>
        <h2>기업별 만료공고</h2>
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
                    return changeOrder(button.order);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
          <ExpJobCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isLoading} />
          <BottomPagination total={total} limit={limit} page={page} setPage={setPage} />
        </section>
      </Layout>
    </main>
  );
};

export default JobsExpList;
