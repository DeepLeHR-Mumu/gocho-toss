import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { CheckBox } from "shared-ui/common/checkbox/checkbox";
import { useModal } from "@/globalStates";
import { useJdArr, useManagerProfile } from "@/apis";
import { PageLayout, Pagination } from "@/components";
import { INTERNAL_URL } from "@/constants";
import { jdListPageFunnelEvent } from "@/ga";

import { JD_ORDER_BUTTON_ARR, JD_FILTER_BUTTON_ARR } from "./constant";
import { JdCard, FilterCount } from "./component";
import { OrderDef, FilterDef, SearchValues } from "./type";
import { cssObj } from "./style";

const JdListPage: NextPage = () => {
  const { setModal } = useModal();

  const router = useRouter();
  const [isOrderContainerOpen, setIsOrderContainerOpen] = useState<boolean>(false);
  const [isMine, setIsMine] = useState<boolean | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>("최근 등록 순");
  const [selectedFilter, setSelectedFilter] = useState<FilterDef>("progress");
  const [searchWord, setSearchWord] = useState<string | null>(null);

  const { data: userInfoData } = useManagerProfile();
  const { data: jdDataObj } = useJdArr(Boolean(userInfoData), {
    order: router.query.order as OrderDef,
    filter: selectedFilter,
    size: 10,
    page: Number(router.query.page),
    search: searchWord,
    mine: isMine,
  });

  const { register, handleSubmit } = useForm<SearchValues>({});

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    setSearchWord(searchVal.searchWord);
  };

  const changeFilterHandler = (filterObj: { filter?: FilterDef; text: string }) => {
    setSelectedFilter(filterObj.filter);
  };

  const changeOrderHandler = (orderObj: { order: OrderDef; text: string }) => {
    setSelectedOrder(orderObj.text);
    router.push(
      {
        pathname: INTERNAL_URL.JD_LIST,
        query: { ...router.query, page: 1, order: orderObj.order },
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    if (userInfoData && userInfoData.status.name !== "인증완료") setModal("companyAuthModal");
  }, [setModal, userInfoData]);

  useEffect(() => {
    jdListPageFunnelEvent();
  }, []);

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: INTERNAL_URL.JD_LIST, query: { page: 1, order: "recent" } });
    }
  }, [router]);

  return (
    <PageLayout>
      <div css={cssObj.contentContainer}>
        <h2 css={cssObj.title}>공고관리</h2>
        <div css={cssObj.filterBox}>
          {JD_FILTER_BUTTON_ARR.map((filterObj) => (
            <button
              css={cssObj.filterOption(selectedFilter === filterObj.filter)}
              type="button"
              key={`jdCardArr${filterObj.text}`}
              onMouseDown={() => changeFilterHandler(filterObj)}
            >
              {filterObj.text}
              <FilterCount filter={filterObj.filter} />
            </button>
          ))}
        </div>
        <div css={cssObj.flexBox}>
          <form css={cssObj.searchWrapper} onSubmit={handleSubmit(jdSearch)}>
            <button type="submit" css={cssObj.searchButton} aria-label="공고 검색하기">
              <FiSearch />
            </button>
            <input {...register("searchWord")} css={cssObj.searchBox} placeholder="공고 제목, 공고 번호, 담당자 검색" />
          </form>
          <div css={cssObj.orderButtonContainer}>
            <label htmlFor="isMine" css={cssObj.label}>
              <input
                type="checkbox"
                id="isMine"
                onClick={() =>
                  setIsMine((prev) => {
                    if (prev === true) return null;
                    return true;
                  })
                }
              />
              <CheckBox isChecked={isMine || false} />
              내가 올린 공고만 보기
            </label>
            <button
              type="button"
              css={cssObj.orderToggleButton}
              onClick={() => setIsOrderContainerOpen((prev) => !prev)}
              onBlur={() => setIsOrderContainerOpen(false)}
            >
              {selectedOrder}
              {isOrderContainerOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div css={cssObj.orderList(isOrderContainerOpen)}>
              {JD_ORDER_BUTTON_ARR.map((orderObj) => (
                <button
                  css={cssObj.orderOption}
                  type="button"
                  key={`jdCardArr${orderObj.text}`}
                  onMouseDown={() => changeOrderHandler(orderObj)}
                >
                  {orderObj.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div css={cssObj.cardListContainer}>
          {jdDataObj?.pageResult.totalElements !== 0 ? (
            jdDataObj?.jdDataArr.map((jd) => <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />)
          ) : (
            <p css={cssObj.noAuthJdCard}>등록된 공고가 없습니다.</p>
          )}
        </div>
        <Pagination totalPage={jdDataObj ? jdDataObj.pageResult.totalPages : 0} url={INTERNAL_URL.JD_LIST} />
      </div>
    </PageLayout>
  );
};

export default JdListPage;
