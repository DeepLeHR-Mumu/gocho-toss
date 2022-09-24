import { FunctionComponent, useState } from "react";
import { JobCardList } from "@pages/search/component/jobCardList";
import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { useJobArr } from "shared-api/job";

export const BookmarkJobPart: FunctionComponent = () => {
  const limit = 4;
  const [page, setPage] = useState(1);
  const { data: jobDataArr, isLoading } = useJobArr({
    order: "recent",
    filter: "valid",
    limit,
    offset: (page - 1) * limit,
  });
  return (
    <section>
      <JobCardList jobDataArr={jobDataArr?.jobDataArr} isLoading={isLoading} />
      <BottomPagination total={jobDataArr?.count || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
