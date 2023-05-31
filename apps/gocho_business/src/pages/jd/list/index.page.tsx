import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useJdArr } from "@/apis";
import { PageLayout, Pagination } from "@/components";
import { INTERNAL_URL } from "@/constants";
import { jdListPageFunnelEvent } from "@/ga";

import { JD_ORDER_BUTTON_ARR, JD_FILTER_BUTTON_ARR } from "./constant";
import { JdCard } from "./component/jdCard";
import { OrderDef, FilterDef, SearchValues } from "./type";
import { cssObj } from "./style";

const JdListPage: NextPage = () => {
  const router = useRouter();
  const [isOrderContainerOpen, setIsOrderContainerOpen] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<string>("최신");
  const [selectedFilter, setSelectedFilter] = useState<string>("진행중");
  const [searchWord, setSearchWord] = useState<string | null>(null);

  const { data: jdDataObj } = useJdArr(true, {
    order: router.query.order as OrderDef,
    size: 10,
    page: Number(router.query.page),
    searchWord,
  });

  const { register, handleSubmit } = useForm<SearchValues>({});

  const jdSearch: SubmitHandler<SearchValues> = (searchVal) => {
    setSearchWord(searchVal.searchWord);
  };

  const changeFilterHandler = (filterObj: { filter: FilterDef; text: string }) => {
    setSelectedFilter(filterObj.text);
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
    jdListPageFunnelEvent();
  }, []);

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: INTERNAL_URL.JD_LIST, query: { page: 1, order: "recent" } });
    }
  }, [router]);

  if (!jdDataObj) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  if (jdDataObj.pageResult.totalElements === 0) {
    return (
      <section css={cssObj.noDataSectionContainer}>
        <p css={cssObj.noDataDesc}>등록된 공고가 없습니다.</p>
      </section>
    );
  }

  return (
    <PageLayout>
      <div css={cssObj.contentContainer}>
        <h2 css={cssObj.title}>공고관리</h2>
        <div css={cssObj.filterBox}>
          {JD_FILTER_BUTTON_ARR.map((filterObj) => (
            <button
              css={cssObj.filterOption(selectedFilter === filterObj.text)}
              type="button"
              key={`jdCardArr${filterObj.text}`}
              onMouseDown={() => changeFilterHandler(filterObj)}
            >
              {filterObj.text}
              <p css={cssObj.filterCount}>123</p>
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
        {jdDataObj.jdDataArr.map((jd) => (
          <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
        ))}
        <Pagination totalPage={jdDataObj.pageResult.totalPages} url={INTERNAL_URL.JD_LIST} />
      </div>
    </PageLayout>
  );
};

export default JdListPage;
