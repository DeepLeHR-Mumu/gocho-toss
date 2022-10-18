import { FunctionComponent, useEffect, useState } from "react";
import { FiSearch, FiInfo } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";

import highTrue from "shared-image/global/common/go_color.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import { useJobArr } from "shared-api/job";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { JOBS_LIST_URL } from "shared-constant/internalURL";
import { jdListFunnelEvent, jdSearchEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { Pagination } from "@pages/jd/component/pagination";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { useToast } from "@recoil/hook/toast";

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
  const [total, setTotal] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<SearchQueryDef>();

  const router = useRouter();
  const { page, order } = router.query;

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

  const {
    data: jobDataArr,
    isLoading: isJobDataArrLoading,
    isError: isJobDataArrError,
  } = useJobArr({
    q: JSON.stringify(searchQuery),
    order: order as OrderDef,
    filter: "valid",
    limit,
    offset: (Number(page) - 1) * 10,
  });

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    if (searchVal.searchWord?.match(specialCharacterRegExp)) {
      setCurrentToast("검색어에 특수문자는 포함될 수 없습니다.");
      return;
    }

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
    if (Object.keys(router.query).length === 0) {
      router.replace({ pathname: JOBS_LIST_URL, query: { page: 1, order: "recent" } });
    }
  }, [router]);
  useEffect(() => {
    jdListFunnelEvent();
  }, []);

  const totalPage = Math.ceil(total / limit);

  return (
    <section css={partContainer}>
      <InvisibleH2 title="최신 채용 공고" />
      <Layout>
        <p css={title}>
          <span css={colorPoint}>Now</span> 채용공고 📮
        </p>

        <form onSubmit={handleSubmit(jdSearch)}>
          <Filter register={register} watch={watch} setValue={setValue} getValues={getValues} />

          <div css={flexBox}>
            <div css={searchWrapper}>
              <input
                {...register("searchWord", {})}
                css={searchBox}
                placeholder="검색이후 오른쪽 태그로 공고를 정렬할 수 있어요. 물론 검색전에도요!"
              />
              <button type="submit" css={searchButton} aria-label="공고 검색하기">
                <FiSearch />
              </button>
            </div>
            <div css={buttonArrContainer}>
              {setJobOrderButtonArr.map((button) => {
                const isActive = button.order === order;
                return (
                  <button
                    type="submit"
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
            <Pagination
              totalPage={totalPage}
              linkObj={{
                pathname: JOBS_LIST_URL,
              }}
            />
          </div>
        </form>

        <div css={infoContainer}>
          <FiInfo />
          <div css={infoImage}>
            <Image src={highTrue} alt="고졸 지원가능" layout="fill" objectFit="contain" />
          </div>
          <div css={infoImage}>
            <Image src={collegeTrue} alt="초대졸 지원가능" layout="fill" objectFit="contain" />
          </div>
          <p>고는 고졸지원가능 초는 초대졸 지원 가능합니다</p>
        </div>

        <JobCardList jobDataArr={jobDataArr?.jobDataArr} isLoading={isJobDataArrLoading} isError={isJobDataArrError} />
        <BottomPagination
          totalPage={totalPage}
          linkObj={{
            pathname: JOBS_LIST_URL,
          }}
        />
      </Layout>
    </section>
  );
};
