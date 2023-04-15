import { FunctionComponent } from "react";
import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/common/molecule/jobCard";
import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { JobCardListProps } from "./type";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({ jobDataArr, isLoading }) => {
  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

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
        const isBookmarked = Boolean(
          userJobBookmarkArr?.some((job) => {
            return job.id === jobData.id;
          })
        );
        return (
          <JobCard jobData={jobData} isBookmarked={isBookmarked} userId={userData?.id} key={`JobCard${jobData.id}`} />
        );
      })}
    </section>
  );
};
