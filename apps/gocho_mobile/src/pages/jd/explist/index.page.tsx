import { useEffect, useState } from "react";
import { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCompanyArr } from "shared-api/company";
import { Layout } from "@component/layout";
import { BottomPagination } from "@component/common/molecule/bottomPagination";

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
} from "./style";
import { changeOrderDef, PostingValues, OrderDef } from "./type";

const JobsExpList: NextPage = () => {
  const limit = 6;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { register, handleSubmit } = useForm<PostingValues>({});

  const postingSearch: SubmitHandler<PostingValues> = (searchVal) => {
    setSearchQuery(searchVal.q);
  };

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  const { data: companyDataArr, isLoading } = useCompanyArr({
    q: searchQuery,
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
  const totalPage = Math.ceil(total / limit);

  return (
    <main css={mainContainer}>
      <MetaHead metaData={META_JD_EXPLIST} />
      <Layout>
        <h2>만료 공고</h2>
        <section css={sectionContainer}>
          <form onSubmit={handleSubmit(postingSearch)}>
            <div css={searchContainer}>
              <input {...register("q", {})} css={searchBox} placeholder="검색어를 입력해주세요" />
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
          <BottomPagination
            totalPage={totalPage}
            linkObj={{
              pathname: JOBS_EXPLIST_URL,
            }}
          />
        </section>
      </Layout>
    </main>
  );
};

export default JobsExpList;
