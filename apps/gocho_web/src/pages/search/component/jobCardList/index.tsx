import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";
import { JobCard } from "@component/card/jobCard";

import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr, isLoading }) => {
  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

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
        const isBookmarked = Boolean(
          userJobBookmarkArr?.some((job) => {
            return job.id === jobData.id;
          })
        );
        return (
          <JobCard
            jobData={jobData}
            isBookmarked={isBookmarked}
            userId={userData?.id}
            key={`UnifiedSearchJobCard${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
