import { FunctionComponent } from "react";

import { useJobArr } from "@api/job";
import { JobSmallCard } from "@pages/indexComponent/part/jobPart/component/jobSmall";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { cardListContainer } from "./style";
import { JobCardArrProps } from "./type";

export const JobCardList: FunctionComponent<JobCardArrProps> = ({
  listOrder,
}) => {
  const {
    data: jobArrData,
    isLoading,
    isError,
  } = useJobArr({
    order: listOrder,
    filter: "valid",
    limit: 9,
  });

  if (!jobArrData || isError || isLoading) {
    return (
      <div css={cardListContainer}>
        {dummyArrCreator(9).map((value) => {
          return (
            <JobSmallCard key={`JobSmallCardSkeleton${value}`} isSkeleton />
          );
        })}
      </div>
    );
  }
  return (
    <div css={cardListContainer}>
      {jobArrData.map((job) => {
        return <JobSmallCard key={job.id} jobData={job} />;
      })}
    </div>
  );
};
