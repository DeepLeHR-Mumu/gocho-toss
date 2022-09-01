import { FunctionComponent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { Layout } from "@component/layout";
import { useJobArr } from "@api/job";
import { Pagination } from "@pages/jd/component/pagination";
import { BottomPagination } from "@pages/jd/component/bottomPagination";

import { JobCardList } from "../../component/jobCardList";
import { Filter } from "../../component/filter";
import { setJobOrderButtonArr } from "./constant";
import {
  OrderDef,
  SearchQueryDef,
  changeOrderDef,
  PostingValues,
} from "./type";
import {
  partContainer,
  title,
  colorPoint,
  flexBox,
  searchWrapper,
  searchBox,
  searchButton,
  buttonArrContainer,
  setJobOrderButton,
} from "./style";

export const ListPart: FunctionComponent = () => {
  // TODO: constant로 뺄까?
  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();

  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<PostingValues>({
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

  const postingSearch: SubmitHandler<PostingValues> = (postingVal) => {
    setSearchQuery({
      contractType: postingVal.contractType,
      industry: postingVal.industry,
      place: postingVal.place,
      possibleEdu: postingVal.possibleEdu,
      requiredExp: postingVal.requiredExp,
      rotation: postingVal.rotation,
      task: postingVal.task,
      searchWord: postingVal.searchWord,
    });
  };

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
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
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>Now</span> 채용공고
        </h2>
        <form onSubmit={handleSubmit(postingSearch)}>
          <Filter
            register={register}
            watch={watch}
            setValue={setValue}
            getValues={getValues}
          />
          <div css={flexBox}>
            <div css={searchWrapper}>
              <input
                {...register("searchWord", {})}
                css={searchBox}
                placeholder="검색어를 입력해주세요"
              />
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
                      return changeOrder(button.order);
                    }}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
            <Pagination
              total={total}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </form>
        <JobCardList
          jobDataArr={jobDataArr?.jobDataArr}
          isLoading={isLoading}
          isError={isError}
        />
        <BottomPagination
          total={total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Layout>
    </section>
  );
};
