import { FunctionComponent, useEffect, useState } from "react";
import { FiSearch, FiInfo } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import highTrue from "@public/images/global/common/go_color.svg";
import collegeTrue from "@public/images/global/common/cho_color.svg";

import { Layout } from "@component/layout";
import { useJobArr } from "shared-api/job";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { Pagination } from "@pages/jd/component/pagination";
import { BottomPagination } from "@pages/jd/component/bottomPagination";

import { JobCardList } from "../../component/jobCardList";
import { Filter } from "../../component/filter";
import { setJobOrderButtonArr } from "./constant";
import { OrderDef, SearchQueryDef, changeOrderDef, SearchValues } from "./type";
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
  infoContainer,
  infoImage,
} from "./style";

export const ListPart: FunctionComponent = () => {
  // TODO: constant로 뺄까?
  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();

  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr, refetch } = useUserJobBookmarkArr({ userId: userData?.id });

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
        <form onSubmit={handleSubmit(jdSearch)}>
          <Filter register={register} watch={watch} setValue={setValue} getValues={getValues} />
          <div css={flexBox}>
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
                      return changeOrder(button.order);
                    }}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
            <Pagination total={total} limit={limit} page={page} setPage={setPage} />
          </div>
        </form>
        <div css={infoContainer}>
          <FiInfo />
          <div css={infoImage}>
            <Image src={highTrue} alt="" />
          </div>
          <div css={infoImage}>
            <Image src={collegeTrue} alt="" />
          </div>
          고는 고졸지원가능 초는 초대졸 지원 가능합니다
        </div>
        <JobCardList
          jobDataArr={jobDataArr?.jobDataArr}
          isLoading={isLoading}
          isError={isError}
          userJobBookmarkArr={userJobBookmarkArr}
          userId={userData?.id}
          refetchUserBookmark={refetch}
        />
        <BottomPagination total={total} limit={limit} page={page} setPage={setPage} />
      </Layout>
    </section>
  );
};
