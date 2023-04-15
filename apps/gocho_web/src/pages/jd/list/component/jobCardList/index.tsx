import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/card/jobCard";
import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { JobCardListProps } from "./type";
import { listContainer, noDataDesc } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({ jobDataArr, isLoading, isError }) => {
  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

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
