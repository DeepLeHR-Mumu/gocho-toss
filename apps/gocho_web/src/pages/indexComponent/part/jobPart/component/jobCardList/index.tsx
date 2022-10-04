import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { MainJobCard } from "shared-ui/card/MainJobCard";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";

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
          return <MainJobCard key={`MainJobCardSkeleton${value}`} isSkeleton />;
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
          <MainJobCard
            key={`MainJobCard${jobData.id}`}
            jobData={jobData}
            isMobile={false}
            isBookmarked={isBookmarked}
            userId={userData?.id}
          />
        );
      })}
    </div>
  );
};
