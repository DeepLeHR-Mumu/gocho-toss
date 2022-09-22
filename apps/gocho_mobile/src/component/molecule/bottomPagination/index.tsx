import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { BottomPaginationProps } from "./type";
import { paginationContainer, movePageButton, selectPageButton } from "./style";

export const BottomPagination: FunctionComponent<BottomPaginationProps> = ({ total, limit, page, setPage }) => {
  const totalPage = Math.ceil(total / limit);
  const count = Math.floor(page / 10);

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
          return setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <FiChevronLeft />
      </button>
      {dummyArrCreator(5).map((idx) => {
        if (count * 5 + idx !== 0 && totalPage >= count * 5 + idx)
          return (
            <button
              css={selectPageButton(count * 5 + idx === page)}
              type="button"
              onClick={() => {
                return setPage(count * 5 + idx);
              }}
              key={`bottomPagination${count * 5 + idx}`}
            >
              {count * 5 + idx}
            </button>
          );
        return <div key={`bottomPagination${count * 5 + idx}`} />;
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
