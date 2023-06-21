import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useRouter } from "next/router";

import { dummyArrCreator } from "shared-util";
import { PaginationProps } from "./type";
import { cssObj } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ q, url, totalPage }) => {
  const router = useRouter();
  const currentPageNumber = Number(router.query.page);
  const count = Math.floor(currentPageNumber / 10);

  // if (totalPage <= 1) {
  //   return <div css={cssObj.paginationContainer} />;
  // }

  return (
    <div css={cssObj.paginationContainer}>
      {currentPageNumber !== 1 && (
        <>
          <button
            css={cssObj.movePageButton}
            type="button"
            aria-label="첫 페이지로 이동"
            onClick={() => {
              router.push({
                pathname: url,
                query: {
                  q,
                  page: 1,
                },
              });
            }}
          >
            <FiChevronsLeft />
          </button>

          <button
            css={cssObj.movePageButton}
            type="button"
            disabled={currentPageNumber === 1}
            aria-label="이전 페이지로 이동"
            onClick={() => {
              router.push({
                pathname: url,
                query: {
                  q,
                  page: currentPageNumber - 1,
                },
              });
            }}
          >
            <FiChevronLeft /> 이전
          </button>
        </>
      )}

      <ul css={cssObj.paginationBox}>
        {dummyArrCreator(10).map((idx) => {
          const pageIndex = count * 10 + idx;
          const isActivePage = pageIndex === currentPageNumber;
          if (pageIndex !== 0 && totalPage >= pageIndex)
            return (
              <li key={`pagination${idx}`}>
                <button
                  css={cssObj.paginationButton(isActivePage)}
                  type="button"
                  aria-label={`${pageIndex}번 페이지로 이동`}
                  onClick={() => {
                    router.push({
                      pathname: url,
                      query: {
                        q,
                        page: pageIndex,
                      },
                    });
                  }}
                >
                  {pageIndex}
                </button>
              </li>
            );
          return <li key={`Pagination${pageIndex}`} />;
        })}
      </ul>

      {currentPageNumber !== totalPage && (
        <>
          <button
            css={cssObj.movePageButton}
            type="button"
            disabled={currentPageNumber === totalPage}
            aria-label="다음 페이지로 이동"
            onClick={() => {
              router.push({
                pathname: url,
                query: {
                  q,
                  page: currentPageNumber + 1,
                },
              });
            }}
          >
            다음 <FiChevronRight />
          </button>
          <button
            css={cssObj.movePageButton}
            type="button"
            aria-label="마지막 페이지로 이동"
            onClick={() => {
              router.push({
                pathname: url,
                query: {
                  q,
                  page: totalPage,
                },
              });
            }}
          >
            <FiChevronsRight />
          </button>
        </>
      )}
    </div>
  );
};
