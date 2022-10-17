import { FunctionComponent, useEffect, useState } from "react";
import { Layout } from "@component/layout";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useJobArr } from "shared-api/job";
import { JOBS_LIST_URL } from "shared-constant/internalURL";
import { jdListFunnelEvent, jdSearchEvent } from "shared-ga/jd";
// import { myFilterLoadEvent, myFilterSaveEvent } from "shared-ga/jd";

import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { BottomPopup } from "@component/bottomPopup";

import { JobCardList } from "../../component/jobCardList";
import { Filter } from "../../component/filter";
import { setJobOrderButtonArr } from "./constant";
import {
  partContainer,
  titleContainer,
  filterButton,
  searchWrapper,
  searchBox,
  searchButton,
  buttonArrContainer,
  setJobOrderButton,
  title,
  noArrDesc,
} from "./style";
import { OrderDef, SearchQueryDef, SearchValues } from "./type";

export const ListPart: FunctionComponent = () => {
  const router = useRouter();
  const limit = 6;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(Number(router.query.page || 1));
  const [activeOrder, setActiveOrder] = useState<OrderDef>((router.query.order as OrderDef) || "recent");
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const { register, handleSubmit, watch, setValue, getValues } = useForm<SearchValues>({
    defaultValues: {
      contractType: [],
      industry: [],
      place: [],
      possibleEdu: [],
      requiredExp: [],
      rotation: [],
      task: [],
    },
  });

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    router.push({
      pathname: JOBS_LIST_URL,
      query: { page: 1, order: activeOrder },
    });
    jdSearchEvent(searchVal.searchWord);
    setSearchQuery({
      contractType: searchVal.contractType,
      industry: searchVal.industry,
      place: searchVal.place,
      possibleEdu: searchVal.possibleEdu,
      requiredExp: searchVal.requiredExp,
      rotation: searchVal.rotation,
      task: searchVal.task,
      searchWord: searchVal.searchWord,
    });
    setShowFilter(false);
  };

  const { data: jobDataArr, isLoading } = useJobArr({
    q: JSON.stringify(searchQuery),
    order: activeOrder,
    filter: "valid",
    limit,
    offset: (page - 1) * limit || 0,
  });

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query.page]);

  useEffect(() => {
    setActiveOrder(router.query.order as OrderDef);
  }, [router.query.order]);

  useEffect(() => {
    if (jobDataArr) {
      setTotal(jobDataArr.count);
    }
  }, [jobDataArr]);

  useEffect(() => {
    jdListFunnelEvent();
  }, []);

  const totalPage = Math.ceil(total / limit);

  return (
    <section css={partContainer}>
      <InvisibleH2 title="최신 채용 공고" />

      <form onSubmit={handleSubmit(jdSearch)}>
        {showFilter && (
          <BottomPopup>
            <Filter
              register={register}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
              setShowFilter={setShowFilter}
            />
          </BottomPopup>
        )}
        <Layout>
          <div css={titleContainer}>
            <strong css={title}>채용 공고</strong>
            <button
              css={filterButton}
              type="button"
              onClick={() => {
                setShowFilter((prev) => {
                  return !prev;
                });
              }}
            >
              필터 <FiChevronDown />
            </button>
          </div>
          <div css={searchWrapper}>
            <input {...register("searchWord", {})} css={searchBox} placeholder="검색어를 입력해주세요" />
            <button type="submit" css={searchButton} aria-label="공고 검색하기">
              <FiSearch />
            </button>
          </div>
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
                      pathname: JOBS_LIST_URL,
                      query: { page: 1, order: button.order },
                    });
                    return setActiveOrder(button.order);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
          {jobDataArr?.jobDataArr.length === 0 ? (
            <p css={noArrDesc}>검색된 공고가 존재하지 않습니다.</p>
          ) : (
            <>
              <JobCardList jobDataArr={jobDataArr?.jobDataArr} isLoading={isLoading} />
              <BottomPagination
                totalPage={totalPage}
                linkObj={{
                  pathname: JOBS_LIST_URL,
                }}
              />
            </>
          )}
        </Layout>
      </form>
    </section>
  );
};
