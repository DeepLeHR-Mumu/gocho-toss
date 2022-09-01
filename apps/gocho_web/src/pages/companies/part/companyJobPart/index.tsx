import { FunctionComponent } from "react";

import { useJobArr } from "@api/job";
import { dummyArrCreator } from "@util/dummyArrCreator";
import { JobCard } from "@component/card/jobCard";

import { CompanyJobPartProps } from "./type";
import { listContainer } from "./style";

export const CompanyJobPart: FunctionComponent<CompanyJobPartProps> = ({
  companyId,
}) => {
  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    companyId,
  });

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
      {jobDataArr.jobDataArr.map((jobData) => {
        return <JobCard jobData={jobData} key={`JobCard${jobData.id}`} />;
      })}
    </section>
  );
};
