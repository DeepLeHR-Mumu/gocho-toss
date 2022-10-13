import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useRouter } from "next/router";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { BottomPaginationProps } from "./type";
import { paginationContainer, noBackMovePageButton, movePageButton, paginationBox, paginationButton } from "./style";

export const BottomPagination: FunctionComponent<BottomPaginationProps> = ({ linkObj, totalPage }) => {
  const router = useRouter();
  const currentPageNumber = Number(router.query.page);
  const count = Math.floor(currentPageNumber / 5);

  if (totalPage <= 1) {
    return <div css={paginationContainer} />;
  }

  return (
    <div css={paginationContainer}>
      <button
        css={noBackMovePageButton}
        type="button"
        aria-label="첫 페이지로 이동"
        onClick={() => {
          router.push({
            pathname: linkObj.pathname,
            query: {
              ...router.query,
              page: 1,
            },
          });
        }}
      >
        <FiChevronsLeft />
      </button>

      <button
        css={movePageButton}
        type="button"
        disabled={currentPageNumber === 1}
        aria-label="이전 페이지로 이동"
        onClick={() => {
          router.push({
            pathname: linkObj.pathname,
            query: {
              ...router.query,
              page: currentPageNumber - 1,
            },
          });
        }}
      >
        <FiChevronLeft />
      </button>

      <ul css={paginationBox}>
        {dummyArrCreator(5).map((idx) => {
          const pageIndex = count * 5 + idx;
          const isActivePage = pageIndex === currentPageNumber;
          if (pageIndex !== 0 && totalPage >= pageIndex)
            return (
              <li key={`pagination${idx}`}>
                <button
                  css={paginationButton(isActivePage)}
                  type="button"
                  aria-label={`${pageIndex}번 페이지로 이동`}
                  onClick={() => {
                    router.push({
                      pathname: linkObj.pathname,
                      query: {
                        ...router.query,
                        page: pageIndex,
                      },
                    });
                  }}
                >
                  {pageIndex}
                </button>
              </li>
            );
          return <li key={`bottomPagination${idx}`} />;
        })}
      </ul>

      <button
        css={movePageButton}
        type="button"
        disabled={currentPageNumber === totalPage}
        aria-label="다음 페이지로 이동"
        onClick={() => {
          router.push({
            pathname: linkObj.pathname,
            query: {
              ...router.query,
              page: currentPageNumber + 1,
            },
          });
        }}
      >
        <FiChevronRight />
      </button>

      <button
        css={noBackMovePageButton}
        type="button"
        aria-label="마지막 페이지로 이동"
        onClick={() => {
          router.push({
            pathname: linkObj.pathname,
            query: {
              ...router.query,
              page: totalPage,
            },
          });
        }}
      >
        <FiChevronsRight />
      </button>
    </div>
  );
};
