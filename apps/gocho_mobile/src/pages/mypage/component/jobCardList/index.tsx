import { FunctionComponent } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";
import { useUserInfo } from "shared-api/auth";

import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr }) => {
  const { data: userData } = useUserInfo();

  return (
    <section css={listContainer}>
      {jobDataArr.map((jobData) => {
        return (
          <BookmarkedJobCard
            isMobile
            jobData={jobData}
            isBookmarked
            userId={userData?.id}
            key={`UnifiedSearchJobCard${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
