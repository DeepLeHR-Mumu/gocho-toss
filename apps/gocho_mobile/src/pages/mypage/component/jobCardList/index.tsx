import { FunctionComponent } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";

import { listContainer } from "./style";
import { JobListPartProps } from "./type";

export const JobCardList: FunctionComponent<JobListPartProps> = ({ jobDataArr }) => {
  return (
    <section css={listContainer}>
      {jobDataArr.map((jobData) => {
        return <BookmarkedJobCard isMobile jobData={jobData} isBookmarked key={`UnifiedSearchJobCard${jobData.id}`} />;
      })}
    </section>
  );
};
