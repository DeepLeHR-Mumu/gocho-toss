import { FunctionComponent } from "react";

import { dummyArrCreator } from "@util/dummyArrCreator";

import { JobCard } from "@component/card/jobCard";
import { JobCardListProps } from "./type";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({
  jobDataArr,
  isLoading,
  isError,
  userJobBookmarkArr,
  userId,
  refetchUserBookmark,
}) => {
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
      {jobDataArr.map((jobData) => {
        const isBookmarked = !!userJobBookmarkArr?.some((job) => {
          return job.id === jobData.id;
        });
        return (
          <JobCard
            jobData={jobData}
            isBookmarked={isBookmarked}
            userId={userId}
            refetchUserBookmark={refetchUserBookmark}
            key={`JobCard${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
