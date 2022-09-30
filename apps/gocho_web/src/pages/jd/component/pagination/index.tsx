import { FunctionComponent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

import { JOBS_EXPLIST_URL } from "shared-constant/internalURL";
import { PaginationProps } from "./type";
import { paginationContainer, movePageButton } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ totalPage }) => {
  const { query } = useRouter();
  const currentPageNumber = Number(query.page);

  return (
    <div css={paginationContainer}>
      <Link
        href={
          currentPageNumber > 1 ? `${JOBS_EXPLIST_URL}?page=${currentPageNumber - 1}` : `${JOBS_EXPLIST_URL}?page=1`
        }
        passHref
      >
        <a css={movePageButton}>
          <FiChevronLeft />
        </a>
      </Link>
      {currentPageNumber}/{totalPage}
      <Link
        href={
          currentPageNumber !== totalPage
            ? `${JOBS_EXPLIST_URL}?page=${currentPageNumber + 1}`
            : `${JOBS_EXPLIST_URL}?page=${totalPage}`
        }
        passHref
      >
        <a css={movePageButton}>
          <FiChevronRight />
        </a>
      </Link>
    </div>
  );
};
