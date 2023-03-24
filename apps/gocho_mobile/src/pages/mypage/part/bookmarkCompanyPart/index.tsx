import { FunctionComponent, useState, useEffect } from "react";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Pagination } from "@pages/mypage/component/pagination";
import { CompanyCardList } from "../../component/companyCardList";

import { emptyBox, warningCSS } from "./style";

export const BookmarkCompanyPart: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const activeCardCount = 3;

  const { data: userInfoData } = useUserInfo();
  const { data: userBookmarkCompanyDataArr, isLoading } = useUserCompanyBookmarkArr({
    userId: userInfoData?.id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [setCurrentPage, currentPage]);

  if (isLoading || !userBookmarkCompanyDataArr) {
    return (
      <section>
        <InvisibleH2 title="기업 북마크" />
        <div css={emptyBox}>
          <p css={warningCSS}>
            기업 북마크를 이용하시면
            <br />
            추천기업이 더 정교해져요 😳
          </p>
        </div>
      </section>
    );
  }

  const totalPage = Math.ceil(userBookmarkCompanyDataArr.length / activeCardCount);

  const firstArrIndex = (currentPage - 1) * activeCardCount;
  const lastArrIndex = currentPage * activeCardCount;
  const filterMyBookmarkArr = userBookmarkCompanyDataArr.slice(firstArrIndex, lastArrIndex);

  return (
    <section>
      <InvisibleH2 title="기업 북마크" />
      {totalPage === 0 && (
        <div css={emptyBox}>
          <p css={warningCSS}>
            기업 북마크를 이용하시면
            <br />
            추천기업이 더 정교해져요 😳
          </p>
        </div>
      )}

      {totalPage !== 0 && (
        <>
          <CompanyCardList companyDataArr={filterMyBookmarkArr} />
          <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </section>
  );
};
