import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useUnifiedJobSearchArr } from "shared-api/job";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { JobCardList } from "../../component/jobCardList";
import { title } from "./style";

export const JobListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobDataArr, isLoading: isJobLoading } = useUnifiedJobSearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: 10,
  });

  const totalPage = Math.ceil((jobDataArr?.count || 0) / 10);

  return (
    <section>
      <p css={title}>채용 공고 📮</p>
      <JobCardList jobDataArr={jobDataArr?.jobDataArr} isLoading={isJobLoading} />
      <BottomPagination totalPage={totalPage} linkObj={{ pathname: "/search", q: router.query.q as string }} />
    </section>
  );
};
