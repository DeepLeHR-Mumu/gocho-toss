import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCompanyArr } from "shared-api/company";
import { JOBS_EXPLIST_URL } from "shared-constant";
import { expiredJdListSortingEvent } from "shared-ga/jd";

import { useToast } from "@recoil/hook/toast";
import { Pagination } from "@pages/jd/component/pagination";

import { setJobOrderButtonArr } from "./constant";
import { buttonArrContainer, container, searchBox, searchButton, setJobOrderButton, wrapper } from "./style";
import { changeOrderDef, OrderDef, PostingValues } from "../../type";

export const SearchPart: FunctionComponent = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<PostingValues>({
    defaultValues: {
      name: null,
    },
  });

  const { data: companyDataArr } = useCompanyArr({
    q: router.query.q as string,
    order: router.query.order as OrderDef,
    limit: 10,
    offset: (Number(router.query.page) - 1) * 10,
  });

  const { setCurrentToast } = useToast();

  const jdSearchHandler: SubmitHandler<PostingValues> = (postingVal) => {
    const specialCharacterRegEx = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
    if (postingVal.name?.match(specialCharacterRegEx)) {
      setCurrentToast("검색어에 특수문자는 포함될 수 없습니다.");
      return;
    }
    router.push({
      pathname: JOBS_EXPLIST_URL,
      query: { ...router.query, page: 1, q: postingVal.name },
    });
  };

  const changeOrderHandler: changeOrderDef = (orderStr) => {
    expiredJdListSortingEvent(orderStr);
    router.push(
      {
        pathname: JOBS_EXPLIST_URL,
        query: { ...router.query, page: 1, order: orderStr },
      },
      undefined,
      { scroll: false }
    );
  };

  const totalPage = companyDataArr?.count ? Math.ceil(companyDataArr.count / 10) : 0;

  return (
    <div css={container}>
      <form css={wrapper} onSubmit={handleSubmit(jdSearchHandler)}>
        <input
          {...register("name")}
          css={searchBox}
          placeholder={router.query.q ? (router.query.q as string) : "검색어를 입력해주세요"}
        />
        <button type="submit" css={searchButton} aria-label="만료 공고 검색">
          <FiSearch />
        </button>
      </form>
      <div css={buttonArrContainer}>
        {setJobOrderButtonArr.map((button) => {
          const isActive = button.order === router.query.order;
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
                return changeOrderHandler(button.order);
              }}
            >
              {button.icon}&nbsp;
              {button.text}
            </button>
          );
        })}
      </div>
      <Pagination
        totalPage={totalPage}
        linkObj={{
          pathname: JOBS_EXPLIST_URL,
        }}
      />
    </div>
  );
};
