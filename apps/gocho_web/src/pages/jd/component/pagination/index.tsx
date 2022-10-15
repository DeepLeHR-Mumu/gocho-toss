import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

import { PaginationProps } from "./type";
import { paginationContainer, movePageButton } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ linkObj, totalPage }) => {
  const { query } = useRouter();
  const currentPageNumber = Number(query.page);

  return (
    <div css={paginationContainer}>
      <Link
        href={{
          pathname: linkObj.pathname,
          query: { ...query, page: currentPageNumber > 1 ? currentPageNumber - 1 : 1 },
        }}
        passHref
      >
        <a css={movePageButton}>
          <FiChevronLeft />
        </a>
      </Link>
      {currentPageNumber}/{totalPage}
      <Link
        href={{
          pathname: linkObj.pathname,
          query: {
            ...query,
            page: currentPageNumber !== totalPage ? currentPageNumber + 1 : totalPage,
          },
        }}
        passHref
      >
        <a css={movePageButton}>
          <FiChevronRight />
        </a>
      </Link>
    </div>
  );
};
