import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FiSearch, FiInfo } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";

import highTrue from "shared-image/global/common/go_color.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import { useJobArr } from "shared-api/job";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { JOBS_LIST_URL } from "shared-constant";
import { jdListFunnelEvent, jdSearchEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { Pagination } from "@pages/jd/component/pagination";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { useToast } from "@/globalStates";

import { JobCardList } from "../../component/jobCardList";
import { Filter } from "../../component/filter";
import { limit, setJobOrderButtonArr, specialCharacterRegExp } from "./constant";
import { OrderDef, SearchQueryDef, SearchValues } from "./type";
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
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();
  const firstRenderingRef = useRef<boolean>(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const { setToastMessage } = useToast();

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

  const {
    data: jobData,
    isLoading: isJobDataArrLoading,
    isError: isJobDataArrError,
  } = useJobArr({
    order: router.query.order as OrderDef,
    filter: "valid",
    contractType: searchQuery?.contractType.join(", ") || "",
    industry: searchQuery?.industry.join(", ") || "",
    place: searchQuery?.place.join(", ") || "",
    possibleEdu: searchQuery?.possibleEdu.join(", ") || "",
    requiredExp: searchQuery?.requiredExp.join(", ") || "",
    rotation: searchQuery?.rotation.join(", ") || "",
    task: searchQuery?.task.join(", ") || "",
    searchWord: searchQuery?.searchWord || null,
    page: Number(router.query.page),
    size: limit,
  });

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    if (searchVal.searchWord?.match(specialCharacterRegExp)) {
      setToastMessage("검색어에 특수문자는 포함될 수 없습니다.");
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
    if (router.query.page && firstRenderingRef.current) {
      firstRenderingRef.current = false;
      return;
    }
    if (!firstRenderingRef.current) {
      const location = (scrollRef.current?.getBoundingClientRect().top as number) + window.pageYOffset - 400;
      window.scrollTo(0, location);
    }
  }, [router.query.page]);

  useEffect(() => {
    jdListFunnelEvent();
  }, []);

  return (
    <section css={partContainer}>
      <div ref={scrollRef} />
      <InvisibleH2 title="최신 채용 공고" />
      <Layout>
        <p css={title}>
          <span css={colorPoint}>Now</span> 채용공고 📮
        </p>
        <form onSubmit={handleSubmit(jdSearch)}>
          <Filter register={register} watch={watch} setValue={setValue} getValues={getValues} />

          <div css={flexBox}>
            <div css={searchWrapper}>
              <input {...register("searchWord", {})} css={searchBox} placeholder="원하는 공고를 검색해보세요" />
              <button type="submit" css={searchButton} aria-label="공고 검색하기">
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
                      return changeOrderHandler(button.order);
                    }}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
            {jobData && (
              <Pagination
                totalPage={jobData.pageResult.totalPages}
                linkObj={{
                  pathname: JOBS_LIST_URL,
                }}
              />
            )}
          </div>
        </form>

        <div css={infoContainer}>
          <FiInfo />
          <div css={infoImage}>
            <Image src={highTrue} alt="고졸 지원가능" fill />
          </div>
          <div css={infoImage}>
            <Image src={collegeTrue} alt="초대졸 지원가능" fill />
          </div>
          <p>고는 고졸지원가능 초는 초대졸 지원 가능합니다</p>
        </div>

        <JobCardList jobDataArr={jobData?.jobDataArr} isLoading={isJobDataArrLoading} isError={isJobDataArrError} />
        {jobData && (
          <BottomPagination
            totalPage={jobData.pageResult.totalPages}
            linkObj={{
              pathname: JOBS_LIST_URL,
            }}
          />
        )}
      </Layout>
    </section>
  );
};
