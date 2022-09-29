import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { JobSmallCard } from "shared-ui/card/jobSmall";

import { cardListContainer } from "./style";
import { JobCardArrProps } from "./type";

export const JobCardList: FunctionComponent<JobCardArrProps> = ({ listOrder }) => {
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
      {jobDataArr.jobDataArr.map((job) => {
        return <JobSmallCard key={`jobSmallCard_${job.id}`} jobData={job} isMobile={false} />;
      })}
    </div>
  );
};
