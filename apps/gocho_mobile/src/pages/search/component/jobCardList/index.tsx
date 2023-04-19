import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";
import { JobCard } from "@component/common/molecule/jobCard";

import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr, isLoading }) => {
  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(10).map((dummy) => {
          return <JobCard isSkeleton key={`UnifiedSearchJobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataArr.map((jobData) => {
        return <JobCard jobData={jobData} key={`UnifiedSearchJobCard${jobData.id}`} />;
      })}
    </section>
  );
};
