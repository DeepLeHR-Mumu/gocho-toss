import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobCard } from "@component/card/jobCard";

import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { listContainer, noDataText } from "./style";
import { JobPreviewPartProps } from "./type";

export const JobPreviewPart: FunctionComponent<JobPreviewPartProps> = ({ jobDataArr, count, isLoading }) => {
  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr, refetch } = useUserJobBookmarkArr({ userId: userData?.id });

  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(4).map((dummy) => {
          return <JobCard isSkeleton key={`UnifiedSearchJobPreviewSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (count === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataArr.slice(0, 4).map((jobData) => {
        const isBookmarked = Boolean(
          userJobBookmarkArr?.some((job) => {
            return job.id === jobData.id;
          })
        );
        return (
          <JobCard
            jobData={jobData}
            isBookmarked={isBookmarked}
            userId={userData?.id}
            refetchUserBookmark={refetch}
            key={`UnifiedSearchJobPreview${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
