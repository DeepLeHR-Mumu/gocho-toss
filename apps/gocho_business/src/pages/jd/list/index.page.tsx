import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Spinner } from "shared-ui/common/atom/spinner";

import { useJdArr } from "@/apis";
import { PageLayout } from "@/components";
import { INTERNAL_URL } from "@/constants";
import { jdListPageFunnelEvent } from "@/ga";

import { setJobOrderButtonArr } from "./constant";
import { JdCard } from "./component/jdCard";
import { OrderDef } from "./type";
import { cssObj } from "./style";

const JdListPage: NextPage = () => {
  const router = useRouter();
  const [isOrderContainerOpen, setIsOrderContainerOpen] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<string>("최신");

  const { data: jdDataObj } = useJdArr(true, {
    order: router.query.order as OrderDef,
    size: 10,
    page: Number(router.query.page),
  });

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
        <div css={cssObj.flexBox}>
          <div css={cssObj.searchWrapper}>
            <button type="submit" css={cssObj.searchButton} aria-label="공고 검색하기">
              <FiSearch />
            </button>
            <input css={cssObj.searchBox} placeholder="공고 제목, 공고 번호, 담당자 검색" />
          </div>
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
              {setJobOrderButtonArr.map((orderObj) => (
                <button
                  type="button"
                  key={`jobCardArr${orderObj.text}`}
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
      </div>
    </PageLayout>
  );
};

export default JdListPage;
