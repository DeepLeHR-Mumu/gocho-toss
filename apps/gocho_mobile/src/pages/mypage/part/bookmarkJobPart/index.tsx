import { FunctionComponent, useState } from "react";
import { JobCardList } from "@pages/search/component/jobCardList";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";

export const BookmarkJobPart: FunctionComponent = () => {
  const limit = 4;
  const [page, setPage] = useState(1);

  const { data: userInfoData } = useUserInfo();
  const { data: userBookmarkJobDataArr, isLoading } = useUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  return (
    <section>
      <JobCardList jobDataArr={userBookmarkJobDataArr} isLoading={isLoading} />
      <BottomPagination total={userBookmarkJobDataArr?.length || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
