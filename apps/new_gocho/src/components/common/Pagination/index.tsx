import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";

import { isQueryString } from "@/utils";

import { PaginationProps } from "./type";
import { cssObj } from "./style";

export const Pagination = ({ totalPage }: PaginationProps) => {
  const PAGE_RANGE_SIZE = 5;
  const router = useRouter();
  const currentPageNumber = isQueryString(router.query.page) ? Number(router.query.page) : 1;

  const getRange = (value: number) => {
    const start = Math.floor((value - 1) / PAGE_RANGE_SIZE) * PAGE_RANGE_SIZE;
    const end = start + PAGE_RANGE_SIZE;
    return [start, end];
  };

  const [currentStart, currentEnd] = getRange(currentPageNumber);

  const isLastRange = totalPage >= currentStart && totalPage <= currentEnd;

  const pageNumberArr = Array.from({ length: totalPage }, (_, index) => index + 1);

  const changePageNumber = (pageNumber: number) => {
    router.push({ query: { ...router.query, page: pageNumber } });
  };

  const toLastPage = () => {
    changePageNumber(pageNumberArr[pageNumberArr.length - 1]);
  };

  const toFisrtPage = () => {
    changePageNumber(1);
  };

  const toNextPages = (currentPage: number) => {
    const nextPageStart = (Math.floor(currentPage / PAGE_RANGE_SIZE) + 1) * PAGE_RANGE_SIZE + 1;
    changePageNumber(nextPageStart);
  };

  const toPrevPages = (currentPage: number) => {
    const prevPageStart = (Math.floor(currentPage / PAGE_RANGE_SIZE) - 1) * PAGE_RANGE_SIZE + 1;
    changePageNumber(prevPageStart);
  };

  return (
    <div css={cssObj.wrapper}>
      {currentStart !== 0 && (
        <div css={cssObj.nextWrapper}>
          <button
            type="button"
            disabled={currentStart === 0}
            onClick={() => {
              toFisrtPage();
            }}
          >
            <FiChevronsLeft css={cssObj.nextNextIcon} />
          </button>
          <button
            type="button"
            css={cssObj.nextText}
            disabled={currentStart === 0}
            onClick={() => {
              toPrevPages(currentPageNumber);
            }}
          >
            <FiChevronLeft /> 이전
          </button>
        </div>
      )}
      {pageNumberArr.slice(currentStart, currentEnd).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            css={css`
              ${cssObj.pageNumber}${currentPageNumber === pageNumber ? cssObj.selected : ""}
            `}
            onClick={() => {
              changePageNumber(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      {!isLastRange && (
        <div css={cssObj.nextWrapper}>
          <button
            type="button"
            css={cssObj.nextText}
            onClick={() => {
              toNextPages(currentPageNumber);
            }}
          >
            다음 <FiChevronRight />
          </button>
          <button
            type="button"
            onClick={() => {
              toLastPage();
            }}
          >
            <FiChevronsRight css={cssObj.nextNextIcon} />
          </button>
        </div>
      )}
    </div>
  );
};
