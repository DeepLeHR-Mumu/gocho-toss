import { FunctionComponent, useState, useEffect } from "react";

import { useUserJobBookmarkArr } from "shared-api/job";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Pagination } from "@pages/mypage/component/pagination";
import { useUserProfile } from "shared-api/auth";
import { JobCardList } from "../../component/jobCardList";
import { emptyBox, warningCSS } from "./style";

export const BookmarkJobPart: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const activeCardCount = 6;

  const { data: userInfoData } = useUserProfile();
  const { data: userBookmarkJobDataArr, isLoading } = useUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [setCurrentPage, currentPage]);

  if (isLoading || !userBookmarkJobDataArr) {
    return (
      <section>
        <InvisibleH2 title="채용공고 북마크" />
        <div css={emptyBox}>
          <p css={warningCSS}>
            공고 북마크를 이용하시면
            <br />
            추천공고가 더 정교해져요 😳
          </p>
        </div>
      </section>
    );
  }

  const totalPage = Math.ceil(userBookmarkJobDataArr.length / activeCardCount);

  const firstArrIndex = (currentPage - 1) * activeCardCount;
  const lastArrIndex = currentPage * activeCardCount;
  const filterMyBookmarkArr = userBookmarkJobDataArr.slice(firstArrIndex, lastArrIndex);

  return (
    <section>
      <InvisibleH2 title="채용공고 북마크" />
      {totalPage === 0 && (
        <div css={emptyBox}>
          <p css={warningCSS}>
            공고 북마크를 이용하시면
            <br />
            추천공고가 더 정교해져요 😳
          </p>
        </div>
      )}

      {totalPage !== 0 && (
        <>
          <JobCardList jobDataArr={filterMyBookmarkArr} />
          <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </section>
  );
};
