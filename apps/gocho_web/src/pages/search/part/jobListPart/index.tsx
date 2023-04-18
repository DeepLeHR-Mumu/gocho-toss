import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useJobArr } from "shared-api/job";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { JOB_RESULT_LIMIT } from "@pages/search/constant";
import { JobCardList } from "../../component/jobCardList";
import { title } from "./style";

export const JobListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobDataObj } = useJobArr({
    order: "recent",
    q: JSON.stringify({ searchWord: router.query.q }),
    filter: "valid",
    size: JOB_RESULT_LIMIT,
  });

  return (
    <section>
      <p css={title}>채용 공고 📮</p>
      {jobDataObj && (
        <>
          <JobCardList jobDataArr={jobDataObj.jobDataArr} />
          <BottomPagination
            totalPage={jobDataObj?.pageResult.totalPages}
            linkObj={{ pathname: "/search", q: router.query.q as string }}
          />
        </>
      )}
    </section>
  );
};
