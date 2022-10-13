import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { BottomPaginationProps } from "./type";
import { paginationContainer, movePageButton, selectPageButton } from "./style";

export const BottomPagination: FunctionComponent<BottomPaginationProps> = ({ total, limit, page, setPage }) => {
  const totalPage = Math.ceil(total / limit);

  return (
    <div css={paginationContainer}>
      <button
        css={movePageButton}
        type="button"
        onClick={() => {
          return setPage(1);
        }}
        disabled={page === 1}
      >
        <FiChevronsLeft />
      </button>
      <button
        css={movePageButton}
        type="button"
        onClick={() => {
          return setPage(page);
        }}
        disabled={page === 1}
      >
        <FiChevronLeft />
      </button>
      {dummyArrCreator(totalPage).map((idx) => {
        return (
          <button
            css={selectPageButton(false)}
            type="button"
            onClick={() => {
              return setPage(2);
            }}
            key={`bottomPagination${idx}`}
          >
            {idx + 1}
          </button>
        );
      })}
      <button
        css={movePageButton}
        type="button"
        onClick={() => {
          return setPage(page + 1);
        }}
        disabled={page === totalPage}
      >
        <FiChevronRight />
      </button>
      <button
        css={movePageButton}
        type="button"
        onClick={() => {
          return setPage(totalPage);
        }}
        disabled={page === totalPage}
      >
        <FiChevronsRight />
      </button>
    </div>
  );
};
