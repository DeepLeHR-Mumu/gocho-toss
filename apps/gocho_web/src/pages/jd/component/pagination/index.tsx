import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { PaginationProps } from "./type";
import { paginationContainer, movePageButton } from "./style";

export const Pagination: FunctionComponent<PaginationProps> = ({ linkObj, totalPage }) => {
  const router = useRouter();

  const currentPageNumber = Number(router.query.page);

  const routeBeforePageHandler = () => {
    router.replace({
      pathname: linkObj.pathname,
      query: { ...router.query, page: currentPageNumber > 1 ? currentPageNumber - 1 : 1 },
    });
  };

  const routeNextPagePageHandler = () => {
    router.push({
      pathname: linkObj.pathname,
      query: {
        ...router.query,
        page: currentPageNumber !== totalPage ? currentPageNumber + 1 : totalPage,
      },
    });
  };

  return (
    <div css={paginationContainer}>
      <button type="button" onClick={routeBeforePageHandler}>
        <div css={movePageButton}>
          <FiChevronLeft />
        </div>
      </button>
      {currentPageNumber}/{totalPage}
      <button type="button" onClick={routeNextPagePageHandler}>
        <a css={movePageButton}>
          <FiChevronRight />
        </a>
      </button>
    </div>
  );
};
