import { FunctionComponent } from "react";
import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/common/molecule/jobCard";
import { JobCardListProps } from "./type";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({ jobDataArr, isLoading }) => {
  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(10).map((dummy) => {
          return <JobCard isSkeleton key={`JobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataArr.map((jobData) => {
        return <JobCard jobData={jobData} key={`JobCard${jobData.id}`} />;
      })}
    </section>
  );
};
