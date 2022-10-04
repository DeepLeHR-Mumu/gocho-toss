import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { JobSmallCard } from "shared-ui/indexUi/jobPart/jobSmall";
import { useUserInfo } from "shared-api/auth";

import { cardListContainer } from "./style";
import { JobCardArrProps } from "./type";

export const JobCardList: FunctionComponent<JobCardArrProps> = ({ listOrder }) => {
  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: listOrder,
    filter: "valid",
    limit: 9,
  });

  if (!jobDataArr || isError || isLoading) {
    return (
      <div css={cardListContainer}>
        {dummyArrCreator(9).map((value) => {
          return <JobSmallCard key={`JobSmallCardSkeleton${value}`} isSkeleton />;
        })}
      </div>
    );
  }
  return (
    <div css={cardListContainer}>
      {jobDataArr.jobDataArr.map((jobData) => {
        const isBookmarked = Boolean(
          userJobBookmarkArr?.some((job) => {
            return job.id === jobData.id;
          })
        );
        return (
          <JobSmallCard
            userId={userData?.id}
            isBookmarked={isBookmarked}
            key={`jobSmallCard_${jobData.id}`}
            jobData={jobData}
          />
        );
      })}
    </div>
  );
};
