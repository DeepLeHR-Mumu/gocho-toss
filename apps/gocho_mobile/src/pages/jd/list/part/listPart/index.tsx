import { FunctionComponent, useEffect, useState } from "react";
import { Layout } from "@component/layout";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { useJobArr } from "shared-api/job";

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
} from "./style";
import { OrderDef, SearchQueryDef, SearchValues } from "./type";

export const ListPart: FunctionComponent = () => {
  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");
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
    offset: (page - 1) * 10,
  });

  useEffect(() => {
    if (jobDataArr && jobDataArr.count !== total) {
      setTotal(jobDataArr.count);
      setPage(1);
    }
  }, [jobDataArr, total]);

  return (
    <section css={partContainer}>
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
            <h2>채용 공고</h2>
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
            <button type="submit" css={searchButton}>
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
                    return setActiveOrder(button.order);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
          <JobCardList jobDataArr={jobDataArr?.jobDataArr} isLoading={isLoading} />
          <BottomPagination total={total} limit={limit} page={page} setPage={setPage} />
        </Layout>
      </form>
    </section>
  );
};
