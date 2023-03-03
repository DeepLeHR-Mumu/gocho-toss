import { FunctionComponent } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { dummyArrCreator } from "shared-util";

import { PaginationProps } from "./type";
import { wrapper, buttonCSS, isActiveButton } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ totalPage, currentPage, setCurrentPage }) => {
  return (
    <ul css={wrapper}>
      <li>
        <button
          css={buttonCSS}
          type="button"
          aria-label="처음 페이지로 이동"
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          <BsChevronLeft />
        </button>
      </li>
      {dummyArrCreator(totalPage).map((page) => {
        const isCurrentPage = Boolean(currentPage === page + 1);
        return (
          <li key={`페이지${page}`}>
            <button
              css={isActiveButton(isCurrentPage)}
              type="button"
              aria-label={`${page + 1}번 페이지로 이동`}
              onClick={() => {
                setCurrentPage(page + 1);
              }}
            >
              {page + 1}
            </button>
          </li>
        );
      })}
      <li>
        <button
          css={buttonCSS}
          type="button"
          aria-label="마지막 페이지로 이동"
          onClick={() => {
            setCurrentPage(totalPage);
          }}
        >
          <BsChevronRight />
        </button>
      </li>
    </ul>
  );
};
