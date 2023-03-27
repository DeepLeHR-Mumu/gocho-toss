import { FunctionComponent, useEffect, useState } from "react";
import { Layout } from "@component/layout";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useJobArr } from "shared-api/job";
import { JOBS_LIST_URL } from "shared-constant";
import { jdListFunnelEvent, jdSearchEvent } from "shared-ga/jd";
// import { myFilterLoadEvent, myFilterSaveEvent } from "shared-ga/jd";

import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { BottomPopup } from "@component/bottomPopup";
import { useToast } from "@recoil/hook/toast";

import { JobCardList } from "../../component/jobCardList";
import { Filter } from "../../component/filter";
import { limit, setJobOrderButtonArr, specialCharacterRegExp } from "./constant";
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
  const [total, setTotal] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const router = useRouter();

  const { setCurrentToast } = useToast();

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

  const { data: jobDataArr, isLoading } = useJobArr({
    q: JSON.stringify(searchQuery),
    order: router.query.order as OrderDef,
    filter: "valid",
    limit,
    offset: (Number(router.query.page) - 1) * limit,
  });

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    if (searchVal.searchWord?.match(specialCharacterRegExp)) {
      setCurrentToast("검색어에 특수문자는 포함될 수 없습니다.");
      return;
    }
    router.push({ query: { ...router.query, page: 1 } });
    jdSearchEvent(searchVal.searchWord);

    const filterRotationArr = searchVal.rotation.map((rotation) => {
      if (rotation.includes("조")) return `${rotation[0]};${rotation[3]}`;
      return rotation;
    });

    setSearchQuery({
      contractType: searchVal.contractType,
      industry: searchVal.industry,
      place: searchVal.place,
      possibleEdu: searchVal.possibleEdu,
      requiredExp: searchVal.requiredExp,
      rotation: filterRotationArr,
      task: searchVal.task,
      searchWord: searchVal.searchWord,
    });
    setShowFilter(false);
  };

  const changeOrderHandler = (orderStr: OrderDef) => {
    router.push(
      {
        pathname: JOBS_LIST_URL,
        query: { ...router.query, page: 1, order: orderStr },
      },
      undefined,
      { scroll: false }
    );
  };

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
              const isActive = button.order === (router.query.order as OrderDef);
              return (
                <button
                  type="button"
                  key={`jobCardArr${button.text}`}
                  css={setJobOrderButton(isActive)}
                  onClick={() => {
                    changeOrderHandler(button.order);
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
