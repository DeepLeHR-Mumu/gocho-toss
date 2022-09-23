import { FunctionComponent } from "react";

import { BottomPagination } from "@component/molecule/bottomPagination";

import { JobCardList } from "../../component/jobCardList";
import { title } from "./style";
import { JobListPartProps } from "./type";

export const JobListPart: FunctionComponent<JobListPartProps> = ({
  jobDataArr,
  isLoading,
  total,
  limit,
  page,
  setPage,
}) => {
  return (
    <section>
      <p css={title}>채용 공고 📮</p>
      <JobCardList jobDataArr={jobDataArr} isLoading={isLoading} />
      <BottomPagination total={total || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
