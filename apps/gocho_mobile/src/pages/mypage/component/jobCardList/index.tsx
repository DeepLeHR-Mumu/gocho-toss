import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";
import { useUserInfo } from "shared-api/auth";

import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr, isLoading }) => {
  const { data: userData } = useUserInfo();

  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(10).map((dummy) => {
          return <BookmarkedJobCard isSkeleton key={`UnifiedSearchJobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataArr.map((jobData) => {
        return (
          <BookmarkedJobCard
            jobData={jobData}
            isBookmarked
            isMobile
            userId={userData?.id}
            key={`UnifiedSearchJobCard${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
