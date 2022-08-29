import { FunctionComponent } from "react";

import { useJobArr } from "@api/job";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { JobCard } from "../jobCard";
import { JobCardListProps } from "./type";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent<JobCardListProps> = ({
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
      <div>
        {dummyArrCreator(9).map((dummy) => {
          return <JobCard isSkeleton key={`JobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobArrData.map((job) => {
        return <JobCard jobData={job} key={job.id} />;
      })}
    </section>
  );
};
