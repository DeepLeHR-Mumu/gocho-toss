import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/card/jobCard";
import { JobCardListProps } from "./type";
import { listContainer, noDataDesc } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({ jobDataArr, isLoading, isError }) => {
  if (!jobDataArr || isError || isLoading) {
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
      {jobDataArr.length === 0 && <p css={noDataDesc}>검색결과가 없습니다 👀</p>}

      {jobDataArr.map((jobData) => {
        return <JobCard jobData={jobData} key={`JobCard${jobData.id}`} />;
      })}
    </section>
  );
};
