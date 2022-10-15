import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { JobCardList } from "../../component/jobCardList";
import { title } from "./style";
import { JobListPartProps } from "./type";

export const JobListPart: FunctionComponent<JobListPartProps> = ({ jobDataArr, isLoading, total, limit }) => {
  const router = useRouter();
  const totalPage = Math.ceil(total / limit);

  return (
    <section>
      <p css={title}>채용 공고 📮</p>
      <JobCardList jobDataArr={jobDataArr} isLoading={isLoading} />
      <BottomPagination totalPage={totalPage} linkObj={{ pathname: "/search", q: router.query.q as string }} />
    </section>
  );
};
