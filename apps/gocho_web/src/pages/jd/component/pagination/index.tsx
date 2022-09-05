import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { PaginationProps } from "./type";
import { paginationContainer, movePageButton } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ total, limit, page, setPage }) => {
  const totalPage = Math.ceil(total / limit);

  return (
    <div css={paginationContainer}>
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
      {page}/{totalPage}
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
    </div>
  );
};
