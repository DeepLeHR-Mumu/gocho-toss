import { FunctionComponent } from "react";

import { dummyArrCreator } from "@util/dummyArrCreator";
import { JobCard } from "@component/card/jobCard";

import { useUserInfo } from "@api/auth";
import { useUserJobBookmarkArr } from "@api/bookmark";
import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr, isLoading }) => {
  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr, refetch } = useUserJobBookmarkArr({ userId: userData?.id });

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
            refetchUserBookmark={refetch}
            key={`UnifiedSearchJobCard${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
